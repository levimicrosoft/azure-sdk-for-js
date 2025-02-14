// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  PagedKnowledgeBaseOutput,
  KnowledgeBaseVersionOutput,
  PagedKnowledgeBaseVersionOutput,
  ResourceOperationStatusKnowledgeBaseVersionWithRunIdErrorOutput,
  RepeatabilityResultOutput,
  InvestigationWithYamlOutput,
  ResourceOperationStatusInvestigationInvestigationErrorOutput,
  PagedInvestigationOutput,
  ResourceOperationStatusInvestigationRequestIdResponseHeaderErrorOutput,
  WithRunIdOutput,
  InvestigationOutput,
  InputOutput,
  RunOutput,
  PagedRunOutput,
  RunStepOutput,
  PagedRunStepOutput,
  PagedMessageOutput,
  ConversationMessageOutput,
  PagedConversationMessageOutput,
  ConversationOutput,
  PagedConversationOutput,
  ResourceOperationStatusScientificToolExecutionStatusErrorOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface KnowledgeBasesListKnowledgeBases200Response
  extends HttpResponse {
  status: "200";
  body: PagedKnowledgeBaseOutput;
}

export interface KnowledgeBasesListKnowledgeBasesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBasesListKnowledgeBasesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & KnowledgeBasesListKnowledgeBasesDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface KnowledgeBasesDeleteKnowledgeBase204Response
  extends HttpResponse {
  status: "204";
}

export interface KnowledgeBasesDeleteKnowledgeBaseDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBasesDeleteKnowledgeBaseDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & KnowledgeBasesDeleteKnowledgeBaseDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion200Response
  extends HttpResponse {
  status: "200";
  body: KnowledgeBaseVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion201Response
  extends HttpResponse {
  status: "201";
  body: KnowledgeBaseVersionOutput;
}

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion200Response
  extends HttpResponse {
  status: "200";
  body: KnowledgeBaseVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion201Response
  extends HttpResponse {
  status: "201";
  body: KnowledgeBaseVersionOutput;
}

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseVersionsGetKnowledgeBaseVersion200Response
  extends HttpResponse {
  status: "200";
  body: KnowledgeBaseVersionOutput;
}

export interface KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseVersionsListKnowledgeBaseVersions200Response
  extends HttpResponse {
  status: "200";
  body: PagedKnowledgeBaseVersionOutput;
}

export interface KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseVersionsGetIndexingOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusKnowledgeBaseVersionWithRunIdErrorOutput;
}

export interface KnowledgeBaseVersionsGetIndexingOperationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsGetIndexingOperationStatusDefaultHeaders;
}

export interface KnowledgeBaseVersionsStartIndexing202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface KnowledgeBaseVersionsStartIndexing202Response
  extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusKnowledgeBaseVersionWithRunIdErrorOutput;
  headers: RawHttpHeaders & KnowledgeBaseVersionsStartIndexing202Headers;
}

export interface KnowledgeBaseVersionsStartIndexingDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsStartIndexingDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & KnowledgeBaseVersionsStartIndexingDefaultHeaders;
}

/** The final response for long-running startIndexing operation */
export interface KnowledgeBaseVersionsStartIndexingLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusKnowledgeBaseVersionWithRunIdErrorOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface KnowledgeBaseVersionsDeleteKnowledgeBaseVersion204Response
  extends HttpResponse {
  status: "204";
}

export interface KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface InvestigationsGetInvestigation200Response
  extends HttpResponse {
  status: "200";
  body: InvestigationWithYamlOutput;
}

export interface InvestigationsGetInvestigationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsGetInvestigationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsGetInvestigationDefaultHeaders;
}

/** The request has succeeded. */
export interface InvestigationsGetInvestigationOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusInvestigationInvestigationErrorOutput;
}

export interface InvestigationsGetInvestigationOperationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsGetInvestigationOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    InvestigationsGetInvestigationOperationStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface InvestigationsCreateOrReplaceInvestigation200Response
  extends HttpResponse {
  status: "200";
  body: InvestigationWithYamlOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface InvestigationsCreateOrReplaceInvestigation201Response
  extends HttpResponse {
  status: "201";
  body: InvestigationWithYamlOutput;
}

export interface InvestigationsCreateOrReplaceInvestigationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsCreateOrReplaceInvestigationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    InvestigationsCreateOrReplaceInvestigationDefaultHeaders;
}

/** The request has succeeded. */
export interface InvestigationsCreateOrUpdateInvestigation200Response
  extends HttpResponse {
  status: "200";
  body: InvestigationWithYamlOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface InvestigationsCreateOrUpdateInvestigation201Response
  extends HttpResponse {
  status: "201";
  body: InvestigationWithYamlOutput;
}

export interface InvestigationsCreateOrUpdateInvestigationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsCreateOrUpdateInvestigationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    InvestigationsCreateOrUpdateInvestigationDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface InvestigationsDeleteInvestigation204Response
  extends HttpResponse {
  status: "204";
}

export interface InvestigationsDeleteInvestigationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsDeleteInvestigationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsDeleteInvestigationDefaultHeaders;
}

/** The request has succeeded. */
export interface InvestigationsListInvestigations200Response
  extends HttpResponse {
  status: "200";
  body: PagedInvestigationOutput;
}

export interface InvestigationsListInvestigationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsListInvestigationsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsListInvestigationsDefaultHeaders;
}

export interface InvestigationsValidate202Headers {
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface InvestigationsValidate202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusInvestigationRequestIdResponseHeaderErrorOutput;
  headers: RawHttpHeaders & InvestigationsValidate202Headers;
}

export interface InvestigationsValidateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsValidateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsValidateDefaultHeaders;
}

/** The final response for long-running validate operation */
export interface InvestigationsValidateLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusInvestigationRequestIdResponseHeaderErrorOutput;
}

export interface InvestigationsCreateRun200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface InvestigationsCreateRun200Response extends HttpResponse {
  status: "200";
  body: WithRunIdOutput;
  headers: RawHttpHeaders & InvestigationsCreateRun200Headers;
}

export interface InvestigationsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsCreateRunDefaultHeaders;
}

export interface InvestigationsClone200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface InvestigationsClone200Response extends HttpResponse {
  status: "200";
  body: InvestigationOutput;
  headers: RawHttpHeaders & InvestigationsClone200Headers;
}

export interface InvestigationsCloneDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsCloneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsCloneDefaultHeaders;
}

export interface InvestigationsAddInput200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface InvestigationsAddInput200Response extends HttpResponse {
  status: "200";
  body: InputOutput;
  headers: RawHttpHeaders & InvestigationsAddInput200Headers;
}

export interface InvestigationsAddInputDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsAddInputDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsAddInputDefaultHeaders;
}

export interface InvestigationsRemoveInput200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface InvestigationsRemoveInput200Response extends HttpResponse {
  status: "200";
  body: InputOutput;
  headers: RawHttpHeaders & InvestigationsRemoveInput200Headers;
}

export interface InvestigationsRemoveInputDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InvestigationsRemoveInputDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InvestigationsRemoveInputDefaultHeaders;
}

/** The request has succeeded. */
export interface RunsGetRun200Response extends HttpResponse {
  status: "200";
  body: RunOutput;
}

export interface RunsGetRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsGetRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsGetRunDefaultHeaders;
}

/** The request has succeeded. */
export interface RunsListRuns200Response extends HttpResponse {
  status: "200";
  body: PagedRunOutput;
}

export interface RunsListRunsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsListRunsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsListRunsDefaultHeaders;
}

export interface RunsStart200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsStart200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunsStart200Headers;
}

export interface RunsStartDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsStartDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsStartDefaultHeaders;
}

export interface RunsResume200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsResume200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunsResume200Headers;
}

export interface RunsResumeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsResumeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsResumeDefaultHeaders;
}

export interface RunsCancel200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsCancel200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunsCancel200Headers;
}

export interface RunsCancelDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsCancelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsCancelDefaultHeaders;
}

export interface RunsRestoreInvestigation200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunsRestoreInvestigation200Response extends HttpResponse {
  status: "200";
  body: InvestigationOutput;
  headers: RawHttpHeaders & RunsRestoreInvestigation200Headers;
}

export interface RunsRestoreInvestigationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunsRestoreInvestigationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunsRestoreInvestigationDefaultHeaders;
}

/** The request has succeeded. */
export interface RunStepsGetStep200Response extends HttpResponse {
  status: "200";
  body: RunStepOutput;
}

export interface RunStepsGetStepDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunStepsGetStepDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunStepsGetStepDefaultHeaders;
}

/** The request has succeeded. */
export interface RunStepsListSteps200Response extends HttpResponse {
  status: "200";
  body: PagedRunStepOutput;
}

export interface RunStepsListStepsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunStepsListStepsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunStepsListStepsDefaultHeaders;
}

export interface RunStepsCancel200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunStepsCancel200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunStepsCancel200Headers;
}

export interface RunStepsCancelDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunStepsCancelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunStepsCancelDefaultHeaders;
}

export interface RunStepsStart200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunStepsStart200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunStepsStart200Headers;
}

export interface RunStepsStartDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunStepsStartDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunStepsStartDefaultHeaders;
}

export interface RunStepsResume200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RunStepsResume200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & RunStepsResume200Headers;
}

export interface RunStepsResumeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RunStepsResumeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RunStepsResumeDefaultHeaders;
}

/** The request has succeeded. */
export interface MessagesListMessages200Response extends HttpResponse {
  status: "200";
  body: PagedMessageOutput;
}

export interface MessagesListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MessagesListMessagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MessagesListMessagesDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationMessagesGetMessage200Response
  extends HttpResponse {
  status: "200";
  body: ConversationMessageOutput;
}

export interface ConversationMessagesGetMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesGetMessageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesGetMessageDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationMessagesCreateMessage200Response
  extends HttpResponse {
  status: "200";
  body: ConversationMessageOutput;
}

export interface ConversationMessagesCreateMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesCreateMessageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesCreateMessageDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationMessagesListMessages200Response
  extends HttpResponse {
  status: "200";
  body: PagedConversationMessageOutput;
}

export interface ConversationMessagesListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesListMessagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesListMessagesDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationsGetConversation200Response extends HttpResponse {
  status: "200";
  body: ConversationOutput;
}

export interface ConversationsGetConversationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationsGetConversationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationsGetConversationDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationsCreateConversation200Response
  extends HttpResponse {
  status: "200";
  body: ConversationOutput;
}

export interface ConversationsCreateConversationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationsCreateConversationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationsCreateConversationDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationsCreateOrUpdateConversation200Response
  extends HttpResponse {
  status: "200";
  body: ConversationOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ConversationsCreateOrUpdateConversation201Response
  extends HttpResponse {
  status: "201";
  body: ConversationOutput;
}

export interface ConversationsCreateOrUpdateConversationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationsCreateOrUpdateConversationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ConversationsCreateOrUpdateConversationDefaultHeaders;
}

/** The request has succeeded. */
export interface ConversationsListConversations200Response
  extends HttpResponse {
  status: "200";
  body: PagedConversationOutput;
}

export interface ConversationsListConversationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationsListConversationsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationsListConversationsDefaultHeaders;
}

/** The request has succeeded. */
export interface ScientificToolsGetExecutionStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusScientificToolExecutionStatusErrorOutput;
}

export interface ScientificToolsGetExecutionStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ScientificToolsGetExecutionStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ScientificToolsGetExecutionStatusDefaultHeaders;
}

export interface ScientificToolsExecute202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ScientificToolsExecute202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusScientificToolExecutionStatusErrorOutput;
  headers: RawHttpHeaders & ScientificToolsExecute202Headers;
}

export interface ScientificToolsExecuteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ScientificToolsExecuteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ScientificToolsExecuteDefaultHeaders;
}

/** The final response for long-running execute operation */
export interface ScientificToolsExecuteLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusScientificToolExecutionStatusErrorOutput;
}
