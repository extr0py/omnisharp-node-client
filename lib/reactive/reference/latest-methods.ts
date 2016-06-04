import * as OmniSharp from "../../omnisharp-server";
import {Observable} from "rxjs";
import {ReactiveClient, ReactiveClientEvents} from "../reactive-client-base";
import {ReactiveObservationClient} from "../reactive-observation-client";
import {ReactiveCombinationClient} from "../reactive-combination-client";
import {request, response, makeObservable} from "../../helpers/decorators";

request(ReactiveClient.prototype, "getteststartinfo");
request(ReactiveClient.prototype, "runtest");
request(ReactiveClient.prototype, "autocomplete");
request(ReactiveClient.prototype, "changebuffer");
request(ReactiveClient.prototype, "codecheck");
request(ReactiveClient.prototype, "codeformat");
request(ReactiveClient.prototype, "close");
request(ReactiveClient.prototype, "open");
request(ReactiveClient.prototype, "filesChanged");
request(ReactiveClient.prototype, "findimplementations");
request(ReactiveClient.prototype, "findsymbols");
request(ReactiveClient.prototype, "findusages");
request(ReactiveClient.prototype, "fixusings");
request(ReactiveClient.prototype, "formatAfterKeystroke");
request(ReactiveClient.prototype, "formatRange");
request(ReactiveClient.prototype, "getcodeactions");
request(ReactiveClient.prototype, "gotodefinition");
request(ReactiveClient.prototype, "gotofile");
request(ReactiveClient.prototype, "gotoregion");
request(ReactiveClient.prototype, "highlight");
request(ReactiveClient.prototype, "currentfilemembersasflat");
request(ReactiveClient.prototype, "currentfilemembersastree");
request(ReactiveClient.prototype, "metadata");
request(ReactiveClient.prototype, "navigatedown");
request(ReactiveClient.prototype, "navigateup");
request(ReactiveClient.prototype, "packagesearch");
request(ReactiveClient.prototype, "packagesource");
request(ReactiveClient.prototype, "packageversion");
request(ReactiveClient.prototype, "rename");
request(ReactiveClient.prototype, "runcodeaction");
request(ReactiveClient.prototype, "signatureHelp");
request(ReactiveClient.prototype, "gettestcontext");
request(ReactiveClient.prototype, "typelookup");
request(ReactiveClient.prototype, "updatebuffer");
request(ReactiveClient.prototype, "project");
request(ReactiveClient.prototype, "projects");
request(ReactiveClient.prototype, "checkalivestatus");
request(ReactiveClient.prototype, "checkreadystatus");
request(ReactiveClient.prototype, "stopserver");
response(ReactiveClientEvents.prototype, "getteststartinfo", "/v2/getteststartinfo");
response(ReactiveClientEvents.prototype, "runtest", "/v2/runtest");
response(ReactiveClientEvents.prototype, "autocomplete", "/autocomplete");
response(ReactiveClientEvents.prototype, "changebuffer", "/changebuffer");
response(ReactiveClientEvents.prototype, "codecheck", "/v2/codecheck");
response(ReactiveClientEvents.prototype, "codeformat", "/codeformat");
response(ReactiveClientEvents.prototype, "close", "/close");
response(ReactiveClientEvents.prototype, "open", "/open");
response(ReactiveClientEvents.prototype, "filesChanged", "/filesChanged");
response(ReactiveClientEvents.prototype, "findimplementations", "/findimplementations");
response(ReactiveClientEvents.prototype, "findsymbols", "/findsymbols");
response(ReactiveClientEvents.prototype, "findusages", "/findusages");
response(ReactiveClientEvents.prototype, "fixusings", "/fixusings");
response(ReactiveClientEvents.prototype, "formatAfterKeystroke", "/formatAfterKeystroke");
response(ReactiveClientEvents.prototype, "formatRange", "/formatRange");
response(ReactiveClientEvents.prototype, "getcodeactions", "/v2/getcodeactions");
response(ReactiveClientEvents.prototype, "gotodefinition", "/gotodefinition");
response(ReactiveClientEvents.prototype, "gotofile", "/gotofile");
response(ReactiveClientEvents.prototype, "gotoregion", "/gotoregion");
response(ReactiveClientEvents.prototype, "highlight", "/highlight");
response(ReactiveClientEvents.prototype, "currentfilemembersasflat", "/currentfilemembersasflat");
response(ReactiveClientEvents.prototype, "currentfilemembersastree", "/currentfilemembersastree");
response(ReactiveClientEvents.prototype, "metadata", "/metadata");
response(ReactiveClientEvents.prototype, "navigatedown", "/navigatedown");
response(ReactiveClientEvents.prototype, "navigateup", "/navigateup");
response(ReactiveClientEvents.prototype, "packagesearch", "/packagesearch");
response(ReactiveClientEvents.prototype, "packagesource", "/packagesource");
response(ReactiveClientEvents.prototype, "packageversion", "/packageversion");
response(ReactiveClientEvents.prototype, "rename", "/rename");
response(ReactiveClientEvents.prototype, "runcodeaction", "/v2/runcodeaction");
response(ReactiveClientEvents.prototype, "signatureHelp", "/signatureHelp");
response(ReactiveClientEvents.prototype, "gettestcontext", "/gettestcontext");
response(ReactiveClientEvents.prototype, "typelookup", "/typelookup");
response(ReactiveClientEvents.prototype, "updatebuffer", "/updatebuffer");
response(ReactiveClientEvents.prototype, "project", "/project");
response(ReactiveClientEvents.prototype, "projects", "/projects");
response(ReactiveClientEvents.prototype, "checkalivestatus", "/checkalivestatus");
response(ReactiveClientEvents.prototype, "checkreadystatus", "/checkreadystatus");
response(ReactiveClientEvents.prototype, "stopserver", "/stopserver");
event(ReactiveClientEvents.prototype, "projectAdded");
event(ReactiveClientEvents.prototype, "projectChanged");
event(ReactiveClientEvents.prototype, "projectRemoved");
event(ReactiveClientEvents.prototype, "error");
event(ReactiveClientEvents.prototype, "diagnostic");
event(ReactiveClientEvents.prototype, "msBuildProjectDiagnostics");
event(ReactiveClientEvents.prototype, "packageRestoreStarted");
event(ReactiveClientEvents.prototype, "packageRestoreFinished");
event(ReactiveClientEvents.prototype, "unresolvedDependencies");
makeObservable(ReactiveObservationClient.prototype, "getteststartinfo", "/v2/getteststartinfo");
makeObservable(ReactiveObservationClient.prototype, "runtest", "/v2/runtest");
makeObservable(ReactiveObservationClient.prototype, "autocomplete", "/autocomplete");
makeObservable(ReactiveObservationClient.prototype, "changebuffer", "/changebuffer");
makeObservable(ReactiveObservationClient.prototype, "codecheck", "/v2/codecheck");
makeObservable(ReactiveObservationClient.prototype, "codeformat", "/codeformat");
makeObservable(ReactiveObservationClient.prototype, "close", "/close");
makeObservable(ReactiveObservationClient.prototype, "open", "/open");
makeObservable(ReactiveObservationClient.prototype, "filesChanged", "/filesChanged");
makeObservable(ReactiveObservationClient.prototype, "findimplementations", "/findimplementations");
makeObservable(ReactiveObservationClient.prototype, "findsymbols", "/findsymbols");
makeObservable(ReactiveObservationClient.prototype, "findusages", "/findusages");
makeObservable(ReactiveObservationClient.prototype, "fixusings", "/fixusings");
makeObservable(ReactiveObservationClient.prototype, "formatAfterKeystroke", "/formatAfterKeystroke");
makeObservable(ReactiveObservationClient.prototype, "formatRange", "/formatRange");
makeObservable(ReactiveObservationClient.prototype, "getcodeactions", "/v2/getcodeactions");
makeObservable(ReactiveObservationClient.prototype, "gotodefinition", "/gotodefinition");
makeObservable(ReactiveObservationClient.prototype, "gotofile", "/gotofile");
makeObservable(ReactiveObservationClient.prototype, "gotoregion", "/gotoregion");
makeObservable(ReactiveObservationClient.prototype, "highlight", "/highlight");
makeObservable(ReactiveObservationClient.prototype, "currentfilemembersasflat", "/currentfilemembersasflat");
makeObservable(ReactiveObservationClient.prototype, "currentfilemembersastree", "/currentfilemembersastree");
makeObservable(ReactiveObservationClient.prototype, "metadata", "/metadata");
makeObservable(ReactiveObservationClient.prototype, "navigatedown", "/navigatedown");
makeObservable(ReactiveObservationClient.prototype, "navigateup", "/navigateup");
makeObservable(ReactiveObservationClient.prototype, "packagesearch", "/packagesearch");
makeObservable(ReactiveObservationClient.prototype, "packagesource", "/packagesource");
makeObservable(ReactiveObservationClient.prototype, "packageversion", "/packageversion");
makeObservable(ReactiveObservationClient.prototype, "rename", "/rename");
makeObservable(ReactiveObservationClient.prototype, "runcodeaction", "/v2/runcodeaction");
makeObservable(ReactiveObservationClient.prototype, "signatureHelp", "/signatureHelp");
makeObservable(ReactiveObservationClient.prototype, "gettestcontext", "/gettestcontext");
makeObservable(ReactiveObservationClient.prototype, "typelookup", "/typelookup");
makeObservable(ReactiveObservationClient.prototype, "updatebuffer", "/updatebuffer");
makeObservable(ReactiveObservationClient.prototype, "project", "/project");
makeObservable(ReactiveObservationClient.prototype, "projects", "/projects");
makeObservable(ReactiveObservationClient.prototype, "checkalivestatus", "/checkalivestatus");
makeObservable(ReactiveObservationClient.prototype, "checkreadystatus", "/checkreadystatus");
makeObservable(ReactiveObservationClient.prototype, "stopserver", "/stopserver");
makeObservable(ReactiveObservationClient.prototype, "projectAdded", "projectAdded");
makeObservable(ReactiveObservationClient.prototype, "projectChanged", "projectChanged");
makeObservable(ReactiveObservationClient.prototype, "projectRemoved", "projectRemoved");
makeObservable(ReactiveObservationClient.prototype, "error", "error");
makeObservable(ReactiveObservationClient.prototype, "diagnostic", "diagnostic");
makeObservable(ReactiveObservationClient.prototype, "msBuildProjectDiagnostics", "msBuildProjectDiagnostics");
makeObservable(ReactiveObservationClient.prototype, "packageRestoreStarted", "packageRestoreStarted");
makeObservable(ReactiveObservationClient.prototype, "packageRestoreFinished", "packageRestoreFinished");
makeObservable(ReactiveObservationClient.prototype, "unresolvedDependencies", "unresolvedDependencies");
makeObservable(ReactiveCombinationClient.prototype, "getteststartinfo", "/v2/getteststartinfo");
makeObservable(ReactiveCombinationClient.prototype, "runtest", "/v2/runtest");
makeObservable(ReactiveCombinationClient.prototype, "autocomplete", "/autocomplete");
makeObservable(ReactiveCombinationClient.prototype, "changebuffer", "/changebuffer");
makeObservable(ReactiveCombinationClient.prototype, "codecheck", "/v2/codecheck");
makeObservable(ReactiveCombinationClient.prototype, "codeformat", "/codeformat");
makeObservable(ReactiveCombinationClient.prototype, "close", "/close");
makeObservable(ReactiveCombinationClient.prototype, "open", "/open");
makeObservable(ReactiveCombinationClient.prototype, "filesChanged", "/filesChanged");
makeObservable(ReactiveCombinationClient.prototype, "findimplementations", "/findimplementations");
makeObservable(ReactiveCombinationClient.prototype, "findsymbols", "/findsymbols");
makeObservable(ReactiveCombinationClient.prototype, "findusages", "/findusages");
makeObservable(ReactiveCombinationClient.prototype, "fixusings", "/fixusings");
makeObservable(ReactiveCombinationClient.prototype, "formatAfterKeystroke", "/formatAfterKeystroke");
makeObservable(ReactiveCombinationClient.prototype, "formatRange", "/formatRange");
makeObservable(ReactiveCombinationClient.prototype, "getcodeactions", "/v2/getcodeactions");
makeObservable(ReactiveCombinationClient.prototype, "gotodefinition", "/gotodefinition");
makeObservable(ReactiveCombinationClient.prototype, "gotofile", "/gotofile");
makeObservable(ReactiveCombinationClient.prototype, "gotoregion", "/gotoregion");
makeObservable(ReactiveCombinationClient.prototype, "highlight", "/highlight");
makeObservable(ReactiveCombinationClient.prototype, "currentfilemembersasflat", "/currentfilemembersasflat");
makeObservable(ReactiveCombinationClient.prototype, "currentfilemembersastree", "/currentfilemembersastree");
makeObservable(ReactiveCombinationClient.prototype, "metadata", "/metadata");
makeObservable(ReactiveCombinationClient.prototype, "navigatedown", "/navigatedown");
makeObservable(ReactiveCombinationClient.prototype, "navigateup", "/navigateup");
makeObservable(ReactiveCombinationClient.prototype, "packagesearch", "/packagesearch");
makeObservable(ReactiveCombinationClient.prototype, "packagesource", "/packagesource");
makeObservable(ReactiveCombinationClient.prototype, "packageversion", "/packageversion");
makeObservable(ReactiveCombinationClient.prototype, "rename", "/rename");
makeObservable(ReactiveCombinationClient.prototype, "runcodeaction", "/v2/runcodeaction");
makeObservable(ReactiveCombinationClient.prototype, "signatureHelp", "/signatureHelp");
makeObservable(ReactiveCombinationClient.prototype, "gettestcontext", "/gettestcontext");
makeObservable(ReactiveCombinationClient.prototype, "typelookup", "/typelookup");
makeObservable(ReactiveCombinationClient.prototype, "updatebuffer", "/updatebuffer");
makeObservable(ReactiveCombinationClient.prototype, "project", "/project");
makeObservable(ReactiveCombinationClient.prototype, "projects", "/projects");
makeObservable(ReactiveCombinationClient.prototype, "checkalivestatus", "/checkalivestatus");
makeObservable(ReactiveCombinationClient.prototype, "checkreadystatus", "/checkreadystatus");
makeObservable(ReactiveCombinationClient.prototype, "stopserver", "/stopserver");
makeObservable(ReactiveCombinationClient.prototype, "projectAdded", "projectAdded");
makeObservable(ReactiveCombinationClient.prototype, "projectChanged", "projectChanged");
makeObservable(ReactiveCombinationClient.prototype, "projectRemoved", "projectRemoved");
makeObservable(ReactiveCombinationClient.prototype, "error", "error");
makeObservable(ReactiveCombinationClient.prototype, "diagnostic", "diagnostic");
makeObservable(ReactiveCombinationClient.prototype, "msBuildProjectDiagnostics", "msBuildProjectDiagnostics");
makeObservable(ReactiveCombinationClient.prototype, "packageRestoreStarted", "packageRestoreStarted");
makeObservable(ReactiveCombinationClient.prototype, "packageRestoreFinished", "packageRestoreFinished");
makeObservable(ReactiveCombinationClient.prototype, "unresolvedDependencies", "unresolvedDependencies");

declare module "../reactive-client-base" {
    interface ReactiveClient {
        getteststartinfo(request: any, options?: OmniSharp.RequestOptions): Observable<any>;
        runtest(request: any, options?: OmniSharp.RequestOptions): Observable<any>;
        autocomplete(request: OmniSharp.Models.AutoCompleteRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.AutoCompleteResponse[]>;
        changebuffer(request: OmniSharp.Models.ChangeBufferRequest, options?: OmniSharp.RequestOptions): Observable<any>;
        codecheck(request: OmniSharp.Models.V2.CodeCheckRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.V2.CodeCheckResponse>;
        codeformat(request: OmniSharp.Models.CodeFormatRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.CodeFormatResponse>;
        close(request: OmniSharp.Models.FileCloseRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FileCloseResponse>;
        open(request: OmniSharp.Models.FileOpenRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FileOpenResponse>;
        filesChanged(request: OmniSharp.Models.Request[], options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FilesChangedResponse>;
        findimplementations(request: OmniSharp.Models.FindImplementationsRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFixResponse>;
        findsymbols(request: OmniSharp.Models.FindSymbolsRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFixResponse>;
        findusages(request: OmniSharp.Models.FindUsagesRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFixResponse>;
        fixusings(request: OmniSharp.Models.FixUsingsRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FixUsingsResponse>;
        formatAfterKeystroke(request: OmniSharp.Models.FormatAfterKeystrokeRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FormatRangeResponse>;
        formatRange(request: OmniSharp.Models.FormatRangeRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FormatRangeResponse>;
        getcodeactions(request: OmniSharp.Models.V2.GetCodeActionsRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.V2.GetCodeActionsResponse>;
        gotodefinition(request: OmniSharp.Models.GotoDefinitionRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.GotoDefinitionResponse>;
        gotofile(request: OmniSharp.Models.GotoFileRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFixResponse>;
        gotoregion(request: OmniSharp.Models.GotoRegionRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFixResponse>;
        highlight(request: OmniSharp.Models.HighlightRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.HighlightResponse>;
        currentfilemembersasflat(request: OmniSharp.Models.MembersFlatRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.QuickFix[]>;
        currentfilemembersastree(request: OmniSharp.Models.MembersTreeRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.FileMemberTree>;
        metadata(request: OmniSharp.Models.MetadataRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.MetadataResponse>;
        navigatedown(request: OmniSharp.Models.NavigateDownRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.NavigateResponse>;
        navigateup(request: OmniSharp.Models.NavigateUpRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.NavigateResponse>;
        packagesearch(request: OmniSharp.Models.PackageSearchRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.PackageSearchResponse>;
        packagesource(request: OmniSharp.Models.PackageSourceRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.PackageSourceResponse>;
        packageversion(request: OmniSharp.Models.PackageVersionRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.PackageVersionResponse>;
        rename(request: OmniSharp.Models.RenameRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.RenameResponse>;
        runcodeaction(request: OmniSharp.Models.V2.RunCodeActionRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.V2.RunCodeActionResponse>;
        signatureHelp(request: OmniSharp.Models.SignatureHelpRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.SignatureHelp>;
        gettestcontext(request: OmniSharp.Models.TestCommandRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.GetTestCommandResponse>;
        typelookup(request: OmniSharp.Models.TypeLookupRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.TypeLookupResponse>;
        updatebuffer(request: OmniSharp.Models.UpdateBufferRequest, options?: OmniSharp.RequestOptions): Observable<any>;
        project(request: OmniSharp.Models.v1.ProjectInformationRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.ProjectInformationResponse>;
        projects(request: OmniSharp.Models.v1.WorkspaceInformationRequest, options?: OmniSharp.RequestOptions): Observable<OmniSharp.Models.WorkspaceInformationResponse>;
        checkalivestatus(options?: OmniSharp.RequestOptions): Observable<boolean>;
        checkreadystatus(options?: OmniSharp.RequestOptions): Observable<boolean>;
        stopserver(options?: OmniSharp.RequestOptions): Observable<boolean>;
    }
}

declare module "../reactive-client-base" {
    interface ReactiveClientEvents {
        /*readonly*/ getteststartinfo: Observable<OmniSharp.Context<any, any>>;
        /*readonly*/ runtest: Observable<OmniSharp.Context<any, any>>;
        /*readonly*/ autocomplete: Observable<OmniSharp.Context<OmniSharp.Models.AutoCompleteRequest, OmniSharp.Models.AutoCompleteResponse[]>>;
        /*readonly*/ changebuffer: Observable<OmniSharp.Context<OmniSharp.Models.ChangeBufferRequest, any>>;
        /*readonly*/ codecheck: Observable<OmniSharp.Context<OmniSharp.Models.V2.CodeCheckRequest, OmniSharp.Models.V2.CodeCheckResponse>>;
        /*readonly*/ codeformat: Observable<OmniSharp.Context<OmniSharp.Models.CodeFormatRequest, OmniSharp.Models.CodeFormatResponse>>;
        /*readonly*/ close: Observable<OmniSharp.Context<OmniSharp.Models.FileCloseRequest, OmniSharp.Models.FileCloseResponse>>;
        /*readonly*/ open: Observable<OmniSharp.Context<OmniSharp.Models.FileOpenRequest, OmniSharp.Models.FileOpenResponse>>;
        /*readonly*/ filesChanged: Observable<OmniSharp.Context<OmniSharp.Models.Request[], OmniSharp.Models.FilesChangedResponse>>;
        /*readonly*/ findimplementations: Observable<OmniSharp.Context<OmniSharp.Models.FindImplementationsRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ findsymbols: Observable<OmniSharp.Context<OmniSharp.Models.FindSymbolsRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ findusages: Observable<OmniSharp.Context<OmniSharp.Models.FindUsagesRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ fixusings: Observable<OmniSharp.Context<OmniSharp.Models.FixUsingsRequest, OmniSharp.Models.FixUsingsResponse>>;
        /*readonly*/ formatAfterKeystroke: Observable<OmniSharp.Context<OmniSharp.Models.FormatAfterKeystrokeRequest, OmniSharp.Models.FormatRangeResponse>>;
        /*readonly*/ formatRange: Observable<OmniSharp.Context<OmniSharp.Models.FormatRangeRequest, OmniSharp.Models.FormatRangeResponse>>;
        /*readonly*/ getcodeactions: Observable<OmniSharp.Context<OmniSharp.Models.V2.GetCodeActionsRequest, OmniSharp.Models.V2.GetCodeActionsResponse>>;
        /*readonly*/ gotodefinition: Observable<OmniSharp.Context<OmniSharp.Models.GotoDefinitionRequest, OmniSharp.Models.GotoDefinitionResponse>>;
        /*readonly*/ gotofile: Observable<OmniSharp.Context<OmniSharp.Models.GotoFileRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ gotoregion: Observable<OmniSharp.Context<OmniSharp.Models.GotoRegionRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ highlight: Observable<OmniSharp.Context<OmniSharp.Models.HighlightRequest, OmniSharp.Models.HighlightResponse>>;
        /*readonly*/ currentfilemembersasflat: Observable<OmniSharp.Context<OmniSharp.Models.MembersFlatRequest, OmniSharp.Models.QuickFix[]>>;
        /*readonly*/ currentfilemembersastree: Observable<OmniSharp.Context<OmniSharp.Models.MembersTreeRequest, OmniSharp.Models.FileMemberTree>>;
        /*readonly*/ metadata: Observable<OmniSharp.Context<OmniSharp.Models.MetadataRequest, OmniSharp.Models.MetadataResponse>>;
        /*readonly*/ navigatedown: Observable<OmniSharp.Context<OmniSharp.Models.NavigateDownRequest, OmniSharp.Models.NavigateResponse>>;
        /*readonly*/ navigateup: Observable<OmniSharp.Context<OmniSharp.Models.NavigateUpRequest, OmniSharp.Models.NavigateResponse>>;
        /*readonly*/ packagesearch: Observable<OmniSharp.Context<OmniSharp.Models.PackageSearchRequest, OmniSharp.Models.PackageSearchResponse>>;
        /*readonly*/ packagesource: Observable<OmniSharp.Context<OmniSharp.Models.PackageSourceRequest, OmniSharp.Models.PackageSourceResponse>>;
        /*readonly*/ packageversion: Observable<OmniSharp.Context<OmniSharp.Models.PackageVersionRequest, OmniSharp.Models.PackageVersionResponse>>;
        /*readonly*/ rename: Observable<OmniSharp.Context<OmniSharp.Models.RenameRequest, OmniSharp.Models.RenameResponse>>;
        /*readonly*/ runcodeaction: Observable<OmniSharp.Context<OmniSharp.Models.V2.RunCodeActionRequest, OmniSharp.Models.V2.RunCodeActionResponse>>;
        /*readonly*/ signatureHelp: Observable<OmniSharp.Context<OmniSharp.Models.SignatureHelpRequest, OmniSharp.Models.SignatureHelp>>;
        /*readonly*/ gettestcontext: Observable<OmniSharp.Context<OmniSharp.Models.TestCommandRequest, OmniSharp.Models.GetTestCommandResponse>>;
        /*readonly*/ typelookup: Observable<OmniSharp.Context<OmniSharp.Models.TypeLookupRequest, OmniSharp.Models.TypeLookupResponse>>;
        /*readonly*/ updatebuffer: Observable<OmniSharp.Context<OmniSharp.Models.UpdateBufferRequest, any>>;
        /*readonly*/ project: Observable<OmniSharp.Context<OmniSharp.Models.v1.ProjectInformationRequest, OmniSharp.Models.ProjectInformationResponse>>;
        /*readonly*/ projects: Observable<OmniSharp.Context<OmniSharp.Models.v1.WorkspaceInformationRequest, OmniSharp.Models.WorkspaceInformationResponse>>;
        /*readonly*/ checkalivestatus: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ checkreadystatus: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ stopserver: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ projectAdded: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ projectChanged: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ projectRemoved: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ error: Observable<OmniSharp.Models.ErrorMessage>;
        /*readonly*/ diagnostic: Observable<OmniSharp.Models.DiagnosticMessage>;
        /*readonly*/ msBuildProjectDiagnostics: Observable<OmniSharp.Models.MSBuildProjectDiagnostics>;
        /*readonly*/ packageRestoreStarted: Observable<OmniSharp.Models.PackageRestoreMessage>;
        /*readonly*/ packageRestoreFinished: Observable<OmniSharp.Models.PackageRestoreMessage>;
        /*readonly*/ unresolvedDependencies: Observable<OmniSharp.Models.UnresolvedDependenciesMessage>;
    }
}

declare module "../reactive-observation-client" {
    interface ReactiveObservationClient {
        /*readonly*/ getteststartinfo: Observable<OmniSharp.Context<any, any>>;
        /*readonly*/ runtest: Observable<OmniSharp.Context<any, any>>;
        /*readonly*/ autocomplete: Observable<OmniSharp.Context<OmniSharp.Models.AutoCompleteRequest, OmniSharp.Models.AutoCompleteResponse[]>>;
        /*readonly*/ changebuffer: Observable<OmniSharp.Context<OmniSharp.Models.ChangeBufferRequest, any>>;
        /*readonly*/ codecheck: Observable<OmniSharp.Context<OmniSharp.Models.V2.CodeCheckRequest, OmniSharp.Models.V2.CodeCheckResponse>>;
        /*readonly*/ codeformat: Observable<OmniSharp.Context<OmniSharp.Models.CodeFormatRequest, OmniSharp.Models.CodeFormatResponse>>;
        /*readonly*/ close: Observable<OmniSharp.Context<OmniSharp.Models.FileCloseRequest, OmniSharp.Models.FileCloseResponse>>;
        /*readonly*/ open: Observable<OmniSharp.Context<OmniSharp.Models.FileOpenRequest, OmniSharp.Models.FileOpenResponse>>;
        /*readonly*/ filesChanged: Observable<OmniSharp.Context<OmniSharp.Models.Request[], OmniSharp.Models.FilesChangedResponse>>;
        /*readonly*/ findimplementations: Observable<OmniSharp.Context<OmniSharp.Models.FindImplementationsRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ findsymbols: Observable<OmniSharp.Context<OmniSharp.Models.FindSymbolsRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ findusages: Observable<OmniSharp.Context<OmniSharp.Models.FindUsagesRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ fixusings: Observable<OmniSharp.Context<OmniSharp.Models.FixUsingsRequest, OmniSharp.Models.FixUsingsResponse>>;
        /*readonly*/ formatAfterKeystroke: Observable<OmniSharp.Context<OmniSharp.Models.FormatAfterKeystrokeRequest, OmniSharp.Models.FormatRangeResponse>>;
        /*readonly*/ formatRange: Observable<OmniSharp.Context<OmniSharp.Models.FormatRangeRequest, OmniSharp.Models.FormatRangeResponse>>;
        /*readonly*/ getcodeactions: Observable<OmniSharp.Context<OmniSharp.Models.V2.GetCodeActionsRequest, OmniSharp.Models.V2.GetCodeActionsResponse>>;
        /*readonly*/ gotodefinition: Observable<OmniSharp.Context<OmniSharp.Models.GotoDefinitionRequest, OmniSharp.Models.GotoDefinitionResponse>>;
        /*readonly*/ gotofile: Observable<OmniSharp.Context<OmniSharp.Models.GotoFileRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ gotoregion: Observable<OmniSharp.Context<OmniSharp.Models.GotoRegionRequest, OmniSharp.Models.QuickFixResponse>>;
        /*readonly*/ highlight: Observable<OmniSharp.Context<OmniSharp.Models.HighlightRequest, OmniSharp.Models.HighlightResponse>>;
        /*readonly*/ currentfilemembersasflat: Observable<OmniSharp.Context<OmniSharp.Models.MembersFlatRequest, OmniSharp.Models.QuickFix[]>>;
        /*readonly*/ currentfilemembersastree: Observable<OmniSharp.Context<OmniSharp.Models.MembersTreeRequest, OmniSharp.Models.FileMemberTree>>;
        /*readonly*/ metadata: Observable<OmniSharp.Context<OmniSharp.Models.MetadataRequest, OmniSharp.Models.MetadataResponse>>;
        /*readonly*/ navigatedown: Observable<OmniSharp.Context<OmniSharp.Models.NavigateDownRequest, OmniSharp.Models.NavigateResponse>>;
        /*readonly*/ navigateup: Observable<OmniSharp.Context<OmniSharp.Models.NavigateUpRequest, OmniSharp.Models.NavigateResponse>>;
        /*readonly*/ packagesearch: Observable<OmniSharp.Context<OmniSharp.Models.PackageSearchRequest, OmniSharp.Models.PackageSearchResponse>>;
        /*readonly*/ packagesource: Observable<OmniSharp.Context<OmniSharp.Models.PackageSourceRequest, OmniSharp.Models.PackageSourceResponse>>;
        /*readonly*/ packageversion: Observable<OmniSharp.Context<OmniSharp.Models.PackageVersionRequest, OmniSharp.Models.PackageVersionResponse>>;
        /*readonly*/ rename: Observable<OmniSharp.Context<OmniSharp.Models.RenameRequest, OmniSharp.Models.RenameResponse>>;
        /*readonly*/ runcodeaction: Observable<OmniSharp.Context<OmniSharp.Models.V2.RunCodeActionRequest, OmniSharp.Models.V2.RunCodeActionResponse>>;
        /*readonly*/ signatureHelp: Observable<OmniSharp.Context<OmniSharp.Models.SignatureHelpRequest, OmniSharp.Models.SignatureHelp>>;
        /*readonly*/ gettestcontext: Observable<OmniSharp.Context<OmniSharp.Models.TestCommandRequest, OmniSharp.Models.GetTestCommandResponse>>;
        /*readonly*/ typelookup: Observable<OmniSharp.Context<OmniSharp.Models.TypeLookupRequest, OmniSharp.Models.TypeLookupResponse>>;
        /*readonly*/ updatebuffer: Observable<OmniSharp.Context<OmniSharp.Models.UpdateBufferRequest, any>>;
        /*readonly*/ project: Observable<OmniSharp.Context<OmniSharp.Models.v1.ProjectInformationRequest, OmniSharp.Models.ProjectInformationResponse>>;
        /*readonly*/ projects: Observable<OmniSharp.Context<OmniSharp.Models.v1.WorkspaceInformationRequest, OmniSharp.Models.WorkspaceInformationResponse>>;
        /*readonly*/ checkalivestatus: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ checkreadystatus: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ stopserver: Observable<OmniSharp.Context<any, boolean>>;
        /*readonly*/ projectAdded: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ projectChanged: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ projectRemoved: Observable<OmniSharp.Models.ProjectInformationResponse>;
        /*readonly*/ error: Observable<OmniSharp.Models.ErrorMessage>;
        /*readonly*/ diagnostic: Observable<OmniSharp.Models.DiagnosticMessage>;
        /*readonly*/ msBuildProjectDiagnostics: Observable<OmniSharp.Models.MSBuildProjectDiagnostics>;
        /*readonly*/ packageRestoreStarted: Observable<OmniSharp.Models.PackageRestoreMessage>;
        /*readonly*/ packageRestoreFinished: Observable<OmniSharp.Models.PackageRestoreMessage>;
        /*readonly*/ unresolvedDependencies: Observable<OmniSharp.Models.UnresolvedDependenciesMessage>;
    }
}

declare module "../reactive-combination-client" {
    interface ReactiveCombinationClient {
        /*readonly*/ getteststartinfo: Observable<OmniSharp.CombinationKey<OmniSharp.Context<any, any>>[]>;
        /*readonly*/ runtest: Observable<OmniSharp.CombinationKey<OmniSharp.Context<any, any>>[]>;
        /*readonly*/ autocomplete: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.AutoCompleteRequest, OmniSharp.Models.AutoCompleteResponse[]>>[]>;
        /*readonly*/ changebuffer: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.ChangeBufferRequest, any>>[]>;
        /*readonly*/ codecheck: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.V2.CodeCheckRequest, OmniSharp.Models.V2.CodeCheckResponse>>[]>;
        /*readonly*/ codeformat: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.CodeFormatRequest, OmniSharp.Models.CodeFormatResponse>>[]>;
        /*readonly*/ close: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FileCloseRequest, OmniSharp.Models.FileCloseResponse>>[]>;
        /*readonly*/ open: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FileOpenRequest, OmniSharp.Models.FileOpenResponse>>[]>;
        /*readonly*/ filesChanged: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.Request[], OmniSharp.Models.FilesChangedResponse>>[]>;
        /*readonly*/ findimplementations: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FindImplementationsRequest, OmniSharp.Models.QuickFixResponse>>[]>;
        /*readonly*/ findsymbols: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FindSymbolsRequest, OmniSharp.Models.QuickFixResponse>>[]>;
        /*readonly*/ findusages: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FindUsagesRequest, OmniSharp.Models.QuickFixResponse>>[]>;
        /*readonly*/ fixusings: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FixUsingsRequest, OmniSharp.Models.FixUsingsResponse>>[]>;
        /*readonly*/ formatAfterKeystroke: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FormatAfterKeystrokeRequest, OmniSharp.Models.FormatRangeResponse>>[]>;
        /*readonly*/ formatRange: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.FormatRangeRequest, OmniSharp.Models.FormatRangeResponse>>[]>;
        /*readonly*/ getcodeactions: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.V2.GetCodeActionsRequest, OmniSharp.Models.V2.GetCodeActionsResponse>>[]>;
        /*readonly*/ gotodefinition: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.GotoDefinitionRequest, OmniSharp.Models.GotoDefinitionResponse>>[]>;
        /*readonly*/ gotofile: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.GotoFileRequest, OmniSharp.Models.QuickFixResponse>>[]>;
        /*readonly*/ gotoregion: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.GotoRegionRequest, OmniSharp.Models.QuickFixResponse>>[]>;
        /*readonly*/ highlight: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.HighlightRequest, OmniSharp.Models.HighlightResponse>>[]>;
        /*readonly*/ currentfilemembersasflat: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.MembersFlatRequest, OmniSharp.Models.QuickFix[]>>[]>;
        /*readonly*/ currentfilemembersastree: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.MembersTreeRequest, OmniSharp.Models.FileMemberTree>>[]>;
        /*readonly*/ metadata: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.MetadataRequest, OmniSharp.Models.MetadataResponse>>[]>;
        /*readonly*/ navigatedown: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.NavigateDownRequest, OmniSharp.Models.NavigateResponse>>[]>;
        /*readonly*/ navigateup: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.NavigateUpRequest, OmniSharp.Models.NavigateResponse>>[]>;
        /*readonly*/ packagesearch: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.PackageSearchRequest, OmniSharp.Models.PackageSearchResponse>>[]>;
        /*readonly*/ packagesource: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.PackageSourceRequest, OmniSharp.Models.PackageSourceResponse>>[]>;
        /*readonly*/ packageversion: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.PackageVersionRequest, OmniSharp.Models.PackageVersionResponse>>[]>;
        /*readonly*/ rename: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.RenameRequest, OmniSharp.Models.RenameResponse>>[]>;
        /*readonly*/ runcodeaction: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.V2.RunCodeActionRequest, OmniSharp.Models.V2.RunCodeActionResponse>>[]>;
        /*readonly*/ signatureHelp: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.SignatureHelpRequest, OmniSharp.Models.SignatureHelp>>[]>;
        /*readonly*/ gettestcontext: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.TestCommandRequest, OmniSharp.Models.GetTestCommandResponse>>[]>;
        /*readonly*/ typelookup: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.TypeLookupRequest, OmniSharp.Models.TypeLookupResponse>>[]>;
        /*readonly*/ updatebuffer: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.UpdateBufferRequest, any>>[]>;
        /*readonly*/ project: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.v1.ProjectInformationRequest, OmniSharp.Models.ProjectInformationResponse>>[]>;
        /*readonly*/ projects: Observable<OmniSharp.CombinationKey<OmniSharp.Context<OmniSharp.Models.v1.WorkspaceInformationRequest, OmniSharp.Models.WorkspaceInformationResponse>>[]>;
        /*readonly*/ checkalivestatus: Observable<OmniSharp.CombinationKey<OmniSharp.Context<any, boolean>>>;
        /*readonly*/ checkreadystatus: Observable<OmniSharp.CombinationKey<OmniSharp.Context<any, boolean>>>;
        /*readonly*/ stopserver: Observable<OmniSharp.CombinationKey<OmniSharp.Context<any, boolean>>>;
        /*readonly*/ projectAdded: Observable<OmniSharp.CombinationKey<OmniSharp.Models.ProjectInformationResponse>[]>;
        /*readonly*/ projectChanged: Observable<OmniSharp.CombinationKey<OmniSharp.Models.ProjectInformationResponse>[]>;
        /*readonly*/ projectRemoved: Observable<OmniSharp.CombinationKey<OmniSharp.Models.ProjectInformationResponse>[]>;
        /*readonly*/ error: Observable<OmniSharp.CombinationKey<OmniSharp.Models.ErrorMessage>[]>;
        /*readonly*/ diagnostic: Observable<OmniSharp.CombinationKey<OmniSharp.Models.DiagnosticMessage>[]>;
        /*readonly*/ msBuildProjectDiagnostics: Observable<OmniSharp.CombinationKey<OmniSharp.Models.MSBuildProjectDiagnostics>[]>;
        /*readonly*/ packageRestoreStarted: Observable<OmniSharp.CombinationKey<OmniSharp.Models.PackageRestoreMessage>[]>;
        /*readonly*/ packageRestoreFinished: Observable<OmniSharp.CombinationKey<OmniSharp.Models.PackageRestoreMessage>[]>;
        /*readonly*/ unresolvedDependencies: Observable<OmniSharp.CombinationKey<OmniSharp.Models.UnresolvedDependenciesMessage>[]>;
    }
}
