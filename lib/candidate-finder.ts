import * as _ from "lodash";
import {ILogger} from "./interfaces";
import {join, dirname, sep, normalize} from "path";
import {Observable, Scheduler, CompositeDisposable} from "rx";
import {readFileSync} from "fs";
const glob: (file: string[], options?: any) => Rx.IPromise<string[]> = require("globby");

export interface Options {
    solutionFilesToSearch?: string[];
    projectFilesToSearch?: string[];
    sourceFilesToSearch?: string[];
    solutionIndependentSourceFilesToSearch?: string[];
}

export function ifEmpty<T>(observable: Observable<T>, other: Observable<T>) {
    return Observable.create<T>(observer => {
        let hasValue = false;
        const cd = new CompositeDisposable();
        cd.add(observable.subscribe(
            value => {
                hasValue = true;
                observer.onNext(value);
            },
            e => observer.onError(e),
            () => {
                if (!hasValue) {
                    cd.add(other.subscribe(
                        value => observer.onNext(value),
                        e => observer.onError(e),
                        () => observer.onCompleted()
                    ));
                } else {
                    observer.onCompleted();
                }
            }
        ));
        return cd;
    });
}

export class Candidate {
    public path: string;
    public originalFile: string;
    public isProject: boolean;

    constructor(originalFile: string, predicate: (path: string) => boolean) {
        this.originalFile = originalFile = normalize(originalFile);
        this.path = _.endsWith(originalFile, ".sln") ? originalFile : dirname(originalFile);
        this.isProject = predicate(originalFile);

        Object.freeze(this);
    }

    public toString() {
        return this.path;
    }
}

export const findCandidates = (function() {
    function realFindCandidates(location: string, logger: ILogger, options: Options = {}) {
        location = _.trimRight(location, sep);

        const solutionFilesToSearch = options.solutionFilesToSearch || (options.solutionFilesToSearch = ["global.json", "*.sln"]);
        const projectFilesToSearch = options.projectFilesToSearch || (options.projectFilesToSearch = ["project.json", "*.csproj"]);
        const sourceFilesToSearch = options.sourceFilesToSearch || (options.sourceFilesToSearch = ["*.cs"]);
        const solutionIndependentSourceFilesToSearch = options.solutionIndependentSourceFilesToSearch || (options.solutionIndependentSourceFilesToSearch = ["*.csx"]);

        const solutionsOrProjects = searchForCandidates(location, solutionFilesToSearch, projectFilesToSearch, logger)
            .toArray()
            .flatMap(result => result.length ? Observable.from(result) : searchForCandidates(location, projectFilesToSearch, [], logger))
            .toArray()
            .map(squashCandidates);

        const independentSourceFiles = searchForCandidates(location, solutionIndependentSourceFilesToSearch, [], logger)
            .toArray();

        const baseFiles = Observable.concat(solutionsOrProjects, independentSourceFiles)
            .flatMap(x => Observable.from(x));

        const sourceFiles = searchForCandidates(location, sourceFilesToSearch, [], logger);

        const predicate = (path: string) => _.any(solutionFilesToSearch.concat(projectFilesToSearch), pattern => _.endsWith(path, _.trimLeft(pattern, "*")));

        return ifEmpty(baseFiles, sourceFiles)
            .map(file => new Candidate(file, predicate))
            .distinct(x => x.path)
            .toArray()
            .tapOnNext(candidates => logger.log(`Omni Project Candidates: Found ${candidates}`));
    }

    function findCandidates(location: string, logger: ILogger, options: Options = {}) {
        return realFindCandidates(location, logger, options)
            .map(z => z.map(x => x.toString()));
    }

    (<any>findCandidates).withCandidates = realFindCandidates;

    return <{ (location: string, logger: ILogger, options: Options = {}): Rx.Observable<string[]>; withCandidates: typeof realFindCandidates }>findCandidates;
})();

function squashCandidates(candidates: string[]) {
    const rootCandidateCount = getMinCandidate(candidates);
    return _.unique(_.filter(_.map(candidates, normalize), z => z.split(sep).length === rootCandidateCount));
}

function getMinCandidate(candidates: string[]) {
    if (!candidates.length) return -1;

    return _.min(_.map(candidates, normalize), z => z.split(sep).length).split(sep).length;
}

function searchForCandidates(location: string, filesToSearch: string[], projectFilesToSearch: string[], logger: ILogger) {
    let locations = location.split(sep);
    locations = locations.map((loc, index) => {
        return _.take(locations, locations.length - index).join(sep);
    });

    locations = locations.slice(0, Math.min(5, locations.length));

    const rootObservable = Observable.from(locations)
        .subscribeOn(Scheduler.async)
        .map(loc => ({
            loc,
            files: filesToSearch.map(fileName => join(loc, fileName))
        }))
        .flatMap(function({loc, files}) {
            logger.log(`Omni Project Candidates: Searching ${loc} for ${filesToSearch}`);

            return Observable.from(files)
                .flatMap(file => glob([file], { cache: {} }))
                .map(x => {
                    if (x.length > 1) {
                        // Handle the unity project case
                        // Also handle optional solutions that may also exist with the unity ones.
                        const unitySolutionIndex = _.findIndex(x, z => _.endsWith(z, "-csharp.sln"));
                        if (unitySolutionIndex > -1) {
                            const unitySolution = x[unitySolutionIndex];
                            const baseSolution = unitySolution.substr(0, unitySolution.indexOf("-csharp.sln")) + ".sln";

                            const baseSolutionIndex = _.findIndex(x, z => z.toLowerCase() === baseSolution.toLowerCase());
                            if (baseSolutionIndex > -1) {
                                // Remove the index
                                x.splice(baseSolutionIndex, 1);
                            }
                        }
                    }

                    if (_.any(x, file => _.endsWith(file, ".sln"))) {
                        return x.filter(file => {
                            const content = readFileSync(file).toString();
                            return _.any(projectFilesToSearch, path => content.indexOf(_.trimLeft(path, "*")) > -1);
                        });
                    }
                    return x;
                });
        })
        .filter(z => z.length > 0)
        .defaultIfEmpty([])
        .first()
        .flatMap(z => Observable.from(z));

    return rootObservable;
}
