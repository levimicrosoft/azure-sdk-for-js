// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  KnowledgeBaseVersion,
  WithNodePool,
  InvestigationWithYaml,
  RunParams,
  WithRunName,
  InputBase,
  WithInputName,
  FileUpload,
  CopilotOperation,
  Conversation,
  ExecutionRequest,
} from "./models.js";

export interface KnowledgeBasesListKnowledgeBasesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBasesListKnowledgeBasesQueryParam {
  queryParameters: KnowledgeBasesListKnowledgeBasesQueryParamProperties;
}

export type KnowledgeBasesListKnowledgeBasesParameters =
  KnowledgeBasesListKnowledgeBasesQueryParam & RequestParameters;

export interface KnowledgeBasesDeleteKnowledgeBaseQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBasesDeleteKnowledgeBaseQueryParam {
  queryParameters: KnowledgeBasesDeleteKnowledgeBaseQueryParamProperties;
}

export type KnowledgeBasesDeleteKnowledgeBaseParameters =
  KnowledgeBasesDeleteKnowledgeBaseQueryParam & RequestParameters;

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionBodyParam {
  /** The resource instance. */
  body: KnowledgeBaseVersion;
}

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionQueryParam {
  queryParameters: KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionQueryParamProperties;
}

export type KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionParameters =
  KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionQueryParam &
    KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionBodyParam &
    RequestParameters;
/** The resource instance. */
export type KnowledgeBaseVersionResourceMergeAndPatch =
  Partial<KnowledgeBaseVersion>;

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionBodyParam {
  /** The resource instance. */
  body: KnowledgeBaseVersionResourceMergeAndPatch;
}

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionQueryParam {
  queryParameters: KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionQueryParamProperties;
}

export interface KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionParameters =
  KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionQueryParam &
    KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionMediaTypesParam &
    KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionBodyParam &
    RequestParameters;

export interface KnowledgeBaseVersionsGetKnowledgeBaseVersionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsGetKnowledgeBaseVersionQueryParam {
  queryParameters: KnowledgeBaseVersionsGetKnowledgeBaseVersionQueryParamProperties;
}

export type KnowledgeBaseVersionsGetKnowledgeBaseVersionParameters =
  KnowledgeBaseVersionsGetKnowledgeBaseVersionQueryParam & RequestParameters;

export interface KnowledgeBaseVersionsListKnowledgeBaseVersionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface KnowledgeBaseVersionsListKnowledgeBaseVersionsQueryParam {
  queryParameters: KnowledgeBaseVersionsListKnowledgeBaseVersionsQueryParamProperties;
}

export type KnowledgeBaseVersionsListKnowledgeBaseVersionsParameters =
  KnowledgeBaseVersionsListKnowledgeBaseVersionsQueryParam & RequestParameters;

export interface KnowledgeBaseVersionsGetIndexingOperationStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsGetIndexingOperationStatusQueryParam {
  queryParameters: KnowledgeBaseVersionsGetIndexingOperationStatusQueryParamProperties;
}

export type KnowledgeBaseVersionsGetIndexingOperationStatusParameters =
  KnowledgeBaseVersionsGetIndexingOperationStatusQueryParam & RequestParameters;

export interface KnowledgeBaseVersionsStartIndexingHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface KnowledgeBaseVersionsStartIndexingBodyParam {
  body: WithNodePool;
}

export interface KnowledgeBaseVersionsStartIndexingQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsStartIndexingQueryParam {
  queryParameters: KnowledgeBaseVersionsStartIndexingQueryParamProperties;
}

export interface KnowledgeBaseVersionsStartIndexingHeaderParam {
  headers?: RawHttpHeadersInput & KnowledgeBaseVersionsStartIndexingHeaders;
}

export type KnowledgeBaseVersionsStartIndexingParameters =
  KnowledgeBaseVersionsStartIndexingQueryParam &
    KnowledgeBaseVersionsStartIndexingHeaderParam &
    KnowledgeBaseVersionsStartIndexingBodyParam &
    RequestParameters;

export interface KnowledgeBaseVersionsDeleteKnowledgeBaseVersionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseVersionsDeleteKnowledgeBaseVersionQueryParam {
  queryParameters: KnowledgeBaseVersionsDeleteKnowledgeBaseVersionQueryParamProperties;
}

export type KnowledgeBaseVersionsDeleteKnowledgeBaseVersionParameters =
  KnowledgeBaseVersionsDeleteKnowledgeBaseVersionQueryParam & RequestParameters;

export interface InvestigationsGetInvestigationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsGetInvestigationQueryParam {
  queryParameters: InvestigationsGetInvestigationQueryParamProperties;
}

export type InvestigationsGetInvestigationParameters =
  InvestigationsGetInvestigationQueryParam & RequestParameters;

export interface InvestigationsGetInvestigationOperationStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsGetInvestigationOperationStatusQueryParam {
  queryParameters: InvestigationsGetInvestigationOperationStatusQueryParamProperties;
}

export type InvestigationsGetInvestigationOperationStatusParameters =
  InvestigationsGetInvestigationOperationStatusQueryParam & RequestParameters;

export interface InvestigationsCreateOrReplaceInvestigationBodyParam {
  /** The resource instance. */
  body: InvestigationWithYaml;
}

export interface InvestigationsCreateOrReplaceInvestigationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsCreateOrReplaceInvestigationQueryParam {
  queryParameters: InvestigationsCreateOrReplaceInvestigationQueryParamProperties;
}

export type InvestigationsCreateOrReplaceInvestigationParameters =
  InvestigationsCreateOrReplaceInvestigationQueryParam &
    InvestigationsCreateOrReplaceInvestigationBodyParam &
    RequestParameters;
/** The resource instance. */
export type InvestigationWithYamlResourceMergeAndPatch =
  Partial<InvestigationWithYaml>;

export interface InvestigationsCreateOrUpdateInvestigationBodyParam {
  /** The resource instance. */
  body: InvestigationWithYamlResourceMergeAndPatch;
}

export interface InvestigationsCreateOrUpdateInvestigationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsCreateOrUpdateInvestigationQueryParam {
  queryParameters: InvestigationsCreateOrUpdateInvestigationQueryParamProperties;
}

export interface InvestigationsCreateOrUpdateInvestigationMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type InvestigationsCreateOrUpdateInvestigationParameters =
  InvestigationsCreateOrUpdateInvestigationQueryParam &
    InvestigationsCreateOrUpdateInvestigationMediaTypesParam &
    InvestigationsCreateOrUpdateInvestigationBodyParam &
    RequestParameters;

export interface InvestigationsDeleteInvestigationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsDeleteInvestigationQueryParam {
  queryParameters: InvestigationsDeleteInvestigationQueryParamProperties;
}

export type InvestigationsDeleteInvestigationParameters =
  InvestigationsDeleteInvestigationQueryParam & RequestParameters;

export interface InvestigationsListInvestigationsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface InvestigationsListInvestigationsQueryParam {
  queryParameters: InvestigationsListInvestigationsQueryParamProperties;
}

export type InvestigationsListInvestigationsParameters =
  InvestigationsListInvestigationsQueryParam & RequestParameters;

export interface InvestigationsValidateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface InvestigationsValidateQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsValidateQueryParam {
  queryParameters: InvestigationsValidateQueryParamProperties;
}

export interface InvestigationsValidateHeaderParam {
  headers?: RawHttpHeadersInput & InvestigationsValidateHeaders;
}

export type InvestigationsValidateParameters =
  InvestigationsValidateQueryParam &
    InvestigationsValidateHeaderParam &
    RequestParameters;

export interface InvestigationsCreateRunHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface InvestigationsCreateRunBodyParam {
  body: RunParams;
}

export interface InvestigationsCreateRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsCreateRunQueryParam {
  queryParameters: InvestigationsCreateRunQueryParamProperties;
}

export interface InvestigationsCreateRunHeaderParam {
  headers?: RawHttpHeadersInput & InvestigationsCreateRunHeaders;
}

export type InvestigationsCreateRunParameters =
  InvestigationsCreateRunQueryParam &
    InvestigationsCreateRunHeaderParam &
    InvestigationsCreateRunBodyParam &
    RequestParameters;

export interface InvestigationsCloneHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface InvestigationsCloneBodyParam {
  body: WithRunName;
}

export interface InvestigationsCloneQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsCloneQueryParam {
  queryParameters: InvestigationsCloneQueryParamProperties;
}

export interface InvestigationsCloneHeaderParam {
  headers?: RawHttpHeadersInput & InvestigationsCloneHeaders;
}

export type InvestigationsCloneParameters = InvestigationsCloneQueryParam &
  InvestigationsCloneHeaderParam &
  InvestigationsCloneBodyParam &
  RequestParameters;

export interface InvestigationsAddInputHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface InvestigationsAddInputBodyParam {
  body: InputBase;
}

export interface InvestigationsAddInputQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsAddInputQueryParam {
  queryParameters: InvestigationsAddInputQueryParamProperties;
}

export interface InvestigationsAddInputHeaderParam {
  headers?: RawHttpHeadersInput & InvestigationsAddInputHeaders;
}

export type InvestigationsAddInputParameters =
  InvestigationsAddInputQueryParam &
    InvestigationsAddInputHeaderParam &
    InvestigationsAddInputBodyParam &
    RequestParameters;

export interface InvestigationsRemoveInputHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface InvestigationsRemoveInputBodyParam {
  body: WithInputName;
}

export interface InvestigationsRemoveInputQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface InvestigationsRemoveInputQueryParam {
  queryParameters: InvestigationsRemoveInputQueryParamProperties;
}

export interface InvestigationsRemoveInputHeaderParam {
  headers?: RawHttpHeadersInput & InvestigationsRemoveInputHeaders;
}

export type InvestigationsRemoveInputParameters =
  InvestigationsRemoveInputQueryParam &
    InvestigationsRemoveInputHeaderParam &
    InvestigationsRemoveInputBodyParam &
    RequestParameters;

export interface RunsGetRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunsGetRunQueryParam {
  queryParameters: RunsGetRunQueryParamProperties;
}

export type RunsGetRunParameters = RunsGetRunQueryParam & RequestParameters;

export interface RunsListRunsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface RunsListRunsQueryParam {
  queryParameters: RunsListRunsQueryParamProperties;
}

export type RunsListRunsParameters = RunsListRunsQueryParam & RequestParameters;

export interface RunsStartHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunsStartQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunsStartQueryParam {
  queryParameters: RunsStartQueryParamProperties;
}

export interface RunsStartHeaderParam {
  headers?: RawHttpHeadersInput & RunsStartHeaders;
}

export type RunsStartParameters = RunsStartQueryParam &
  RunsStartHeaderParam &
  RequestParameters;

export interface RunsResumeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunsResumeQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunsResumeQueryParam {
  queryParameters: RunsResumeQueryParamProperties;
}

export interface RunsResumeHeaderParam {
  headers?: RawHttpHeadersInput & RunsResumeHeaders;
}

export type RunsResumeParameters = RunsResumeQueryParam &
  RunsResumeHeaderParam &
  RequestParameters;

export interface RunsCancelHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunsCancelQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunsCancelQueryParam {
  queryParameters: RunsCancelQueryParamProperties;
}

export interface RunsCancelHeaderParam {
  headers?: RawHttpHeadersInput & RunsCancelHeaders;
}

export type RunsCancelParameters = RunsCancelQueryParam &
  RunsCancelHeaderParam &
  RequestParameters;

export interface RunsRestoreInvestigationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunsRestoreInvestigationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunsRestoreInvestigationQueryParam {
  queryParameters: RunsRestoreInvestigationQueryParamProperties;
}

export interface RunsRestoreInvestigationHeaderParam {
  headers?: RawHttpHeadersInput & RunsRestoreInvestigationHeaders;
}

export type RunsRestoreInvestigationParameters =
  RunsRestoreInvestigationQueryParam &
    RunsRestoreInvestigationHeaderParam &
    RequestParameters;

export interface RunStepsGetStepQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunStepsGetStepQueryParam {
  queryParameters: RunStepsGetStepQueryParamProperties;
}

export type RunStepsGetStepParameters = RunStepsGetStepQueryParam &
  RequestParameters;

export interface RunStepsListStepsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface RunStepsListStepsQueryParam {
  queryParameters: RunStepsListStepsQueryParamProperties;
}

export type RunStepsListStepsParameters = RunStepsListStepsQueryParam &
  RequestParameters;

export interface RunStepsCancelHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunStepsCancelQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunStepsCancelQueryParam {
  queryParameters: RunStepsCancelQueryParamProperties;
}

export interface RunStepsCancelHeaderParam {
  headers?: RawHttpHeadersInput & RunStepsCancelHeaders;
}

export type RunStepsCancelParameters = RunStepsCancelQueryParam &
  RunStepsCancelHeaderParam &
  RequestParameters;

export interface RunStepsStartHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunStepsStartQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunStepsStartQueryParam {
  queryParameters: RunStepsStartQueryParamProperties;
}

export interface RunStepsStartHeaderParam {
  headers?: RawHttpHeadersInput & RunStepsStartHeaders;
}

export type RunStepsStartParameters = RunStepsStartQueryParam &
  RunStepsStartHeaderParam &
  RequestParameters;

export interface RunStepsResumeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RunStepsResumeQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RunStepsResumeQueryParam {
  queryParameters: RunStepsResumeQueryParamProperties;
}

export interface RunStepsResumeHeaderParam {
  headers?: RawHttpHeadersInput & RunStepsResumeHeaders;
}

export type RunStepsResumeParameters = RunStepsResumeQueryParam &
  RunStepsResumeHeaderParam &
  RequestParameters;

export interface MessagesListMessagesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The ID of the associated Conversation */
  conversationId?: string;
  /** The ID of the associated Project */
  projectId?: string;
  /** The ID of the associated Investigation */
  investigationId?: string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface MessagesListMessagesQueryParam {
  queryParameters: MessagesListMessagesQueryParamProperties;
}

export type MessagesListMessagesParameters = MessagesListMessagesQueryParam &
  RequestParameters;

export interface ConversationMessagesGetMessageQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConversationMessagesGetMessageQueryParam {
  queryParameters: ConversationMessagesGetMessageQueryParamProperties;
}

export type ConversationMessagesGetMessageParameters =
  ConversationMessagesGetMessageQueryParam & RequestParameters;

export interface ConversationMessagesCreateMessageBodyParam {
  body: {
    projectId?: string;
    investigationId?: string;
    conversationId: string;
    text: string;
    planBlueprintYaml?: string;
    fileUploads: Array<FileUpload>;
    copilotOperations: Array<CopilotOperation>;
  };
}

export interface ConversationMessagesCreateMessageQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConversationMessagesCreateMessageQueryParam {
  queryParameters: ConversationMessagesCreateMessageQueryParamProperties;
}

export type ConversationMessagesCreateMessageParameters =
  ConversationMessagesCreateMessageQueryParam &
    ConversationMessagesCreateMessageBodyParam &
    RequestParameters;

export interface ConversationMessagesListMessagesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The ID of the associated Project */
  projectId?: string;
  /** The ID of the associated Investigation */
  investigationId?: string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface ConversationMessagesListMessagesQueryParam {
  queryParameters: ConversationMessagesListMessagesQueryParamProperties;
}

export type ConversationMessagesListMessagesParameters =
  ConversationMessagesListMessagesQueryParam & RequestParameters;

export interface ConversationsGetConversationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConversationsGetConversationQueryParam {
  queryParameters: ConversationsGetConversationQueryParamProperties;
}

export type ConversationsGetConversationParameters =
  ConversationsGetConversationQueryParam & RequestParameters;

export interface ConversationsCreateConversationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConversationsCreateConversationQueryParam {
  queryParameters: ConversationsCreateConversationQueryParamProperties;
}

export type ConversationsCreateConversationParameters =
  ConversationsCreateConversationQueryParam & RequestParameters;
/** The resource instance. */
export type ConversationResourceMergeAndPatch = Partial<Conversation>;

export interface ConversationsCreateOrUpdateConversationBodyParam {
  /** The resource instance. */
  body: ConversationResourceMergeAndPatch;
}

export interface ConversationsCreateOrUpdateConversationQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConversationsCreateOrUpdateConversationQueryParam {
  queryParameters: ConversationsCreateOrUpdateConversationQueryParamProperties;
}

export interface ConversationsCreateOrUpdateConversationMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ConversationsCreateOrUpdateConversationParameters =
  ConversationsCreateOrUpdateConversationQueryParam &
    ConversationsCreateOrUpdateConversationMediaTypesParam &
    ConversationsCreateOrUpdateConversationBodyParam &
    RequestParameters;

export interface ConversationsListConversationsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The oldest creation timestamp to keep */
  createdSince?: Date | string;
}

export interface ConversationsListConversationsQueryParam {
  queryParameters: ConversationsListConversationsQueryParamProperties;
}

export type ConversationsListConversationsParameters =
  ConversationsListConversationsQueryParam & RequestParameters;

export interface ScientificToolsGetExecutionStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ScientificToolsGetExecutionStatusQueryParam {
  queryParameters: ScientificToolsGetExecutionStatusQueryParamProperties;
}

export type ScientificToolsGetExecutionStatusParameters =
  ScientificToolsGetExecutionStatusQueryParam & RequestParameters;

export interface ScientificToolsExecuteHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ScientificToolsExecuteBodyParam {
  body: ExecutionRequest;
}

export interface ScientificToolsExecuteQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ScientificToolsExecuteQueryParam {
  queryParameters: ScientificToolsExecuteQueryParamProperties;
}

export interface ScientificToolsExecuteHeaderParam {
  headers?: RawHttpHeadersInput & ScientificToolsExecuteHeaders;
}

export type ScientificToolsExecuteParameters =
  ScientificToolsExecuteQueryParam &
    ScientificToolsExecuteHeaderParam &
    ScientificToolsExecuteBodyParam &
    RequestParameters;
