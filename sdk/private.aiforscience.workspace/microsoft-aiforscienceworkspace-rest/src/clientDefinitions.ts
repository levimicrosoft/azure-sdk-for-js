// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  KnowledgeBasesListKnowledgeBasesParameters,
  KnowledgeBasesDeleteKnowledgeBaseParameters,
  KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionParameters,
  KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionParameters,
  KnowledgeBaseVersionsGetKnowledgeBaseVersionParameters,
  KnowledgeBaseVersionsDeleteKnowledgeBaseVersionParameters,
  KnowledgeBaseVersionsListKnowledgeBaseVersionsParameters,
  KnowledgeBaseVersionsGetIndexingOperationStatusParameters,
  KnowledgeBaseVersionsStartIndexingParameters,
  InvestigationsGetInvestigationParameters,
  InvestigationsCreateOrReplaceInvestigationParameters,
  InvestigationsCreateOrUpdateInvestigationParameters,
  InvestigationsDeleteInvestigationParameters,
  InvestigationsGetInvestigationOperationStatusParameters,
  InvestigationsListInvestigationsParameters,
  InvestigationsValidateParameters,
  InvestigationsCreateRunParameters,
  InvestigationsCloneParameters,
  InvestigationsAddInputParameters,
  InvestigationsRemoveInputParameters,
  RunsGetRunParameters,
  RunsListRunsParameters,
  RunsStartParameters,
  RunsResumeParameters,
  RunsCancelParameters,
  RunsRestoreInvestigationParameters,
  RunStepsGetStepParameters,
  RunStepsListStepsParameters,
  RunStepsCancelParameters,
  RunStepsStartParameters,
  RunStepsResumeParameters,
  MessagesListMessagesParameters,
  ConversationMessagesGetMessageParameters,
  ConversationMessagesCreateMessageParameters,
  ConversationMessagesListMessagesParameters,
  ConversationsGetConversationParameters,
  ConversationsCreateOrUpdateConversationParameters,
  ConversationsCreateConversationParameters,
  ConversationsListConversationsParameters,
  ScientificToolsGetExecutionStatusParameters,
  ScientificToolsExecuteParameters,
} from "./parameters.js";
import type {
  KnowledgeBasesListKnowledgeBases200Response,
  KnowledgeBasesListKnowledgeBasesDefaultResponse,
  KnowledgeBasesDeleteKnowledgeBase204Response,
  KnowledgeBasesDeleteKnowledgeBaseDefaultResponse,
  KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion200Response,
  KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion201Response,
  KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse,
  KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion200Response,
  KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion201Response,
  KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse,
  KnowledgeBaseVersionsGetKnowledgeBaseVersion200Response,
  KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse,
  KnowledgeBaseVersionsDeleteKnowledgeBaseVersion204Response,
  KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse,
  KnowledgeBaseVersionsListKnowledgeBaseVersions200Response,
  KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse,
  KnowledgeBaseVersionsGetIndexingOperationStatus200Response,
  KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse,
  KnowledgeBaseVersionsStartIndexing202Response,
  KnowledgeBaseVersionsStartIndexingDefaultResponse,
  InvestigationsGetInvestigation200Response,
  InvestigationsGetInvestigationDefaultResponse,
  InvestigationsCreateOrReplaceInvestigation200Response,
  InvestigationsCreateOrReplaceInvestigation201Response,
  InvestigationsCreateOrReplaceInvestigationDefaultResponse,
  InvestigationsCreateOrUpdateInvestigation200Response,
  InvestigationsCreateOrUpdateInvestigation201Response,
  InvestigationsCreateOrUpdateInvestigationDefaultResponse,
  InvestigationsDeleteInvestigation204Response,
  InvestigationsDeleteInvestigationDefaultResponse,
  InvestigationsGetInvestigationOperationStatus200Response,
  InvestigationsGetInvestigationOperationStatusDefaultResponse,
  InvestigationsListInvestigations200Response,
  InvestigationsListInvestigationsDefaultResponse,
  InvestigationsValidate202Response,
  InvestigationsValidateDefaultResponse,
  InvestigationsCreateRun200Response,
  InvestigationsCreateRunDefaultResponse,
  InvestigationsClone200Response,
  InvestigationsCloneDefaultResponse,
  InvestigationsAddInput200Response,
  InvestigationsAddInputDefaultResponse,
  InvestigationsRemoveInput200Response,
  InvestigationsRemoveInputDefaultResponse,
  RunsGetRun200Response,
  RunsGetRunDefaultResponse,
  RunsListRuns200Response,
  RunsListRunsDefaultResponse,
  RunsStart200Response,
  RunsStartDefaultResponse,
  RunsResume200Response,
  RunsResumeDefaultResponse,
  RunsCancel200Response,
  RunsCancelDefaultResponse,
  RunsRestoreInvestigation200Response,
  RunsRestoreInvestigationDefaultResponse,
  RunStepsGetStep200Response,
  RunStepsGetStepDefaultResponse,
  RunStepsListSteps200Response,
  RunStepsListStepsDefaultResponse,
  RunStepsCancel200Response,
  RunStepsCancelDefaultResponse,
  RunStepsStart200Response,
  RunStepsStartDefaultResponse,
  RunStepsResume200Response,
  RunStepsResumeDefaultResponse,
  MessagesListMessages200Response,
  MessagesListMessagesDefaultResponse,
  ConversationMessagesGetMessage200Response,
  ConversationMessagesGetMessageDefaultResponse,
  ConversationMessagesCreateMessage200Response,
  ConversationMessagesCreateMessageDefaultResponse,
  ConversationMessagesListMessages200Response,
  ConversationMessagesListMessagesDefaultResponse,
  ConversationsGetConversation200Response,
  ConversationsGetConversationDefaultResponse,
  ConversationsCreateOrUpdateConversation200Response,
  ConversationsCreateOrUpdateConversation201Response,
  ConversationsCreateOrUpdateConversationDefaultResponse,
  ConversationsCreateConversation200Response,
  ConversationsCreateConversationDefaultResponse,
  ConversationsListConversations200Response,
  ConversationsListConversationsDefaultResponse,
  ScientificToolsGetExecutionStatus200Response,
  ScientificToolsGetExecutionStatusDefaultResponse,
  ScientificToolsExecute202Response,
  ScientificToolsExecuteDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface KnowledgeBasesListKnowledgeBases {
  /** List KnowledgeBase resources */
  get(
    options?: KnowledgeBasesListKnowledgeBasesParameters,
  ): StreamableMethod<
    | KnowledgeBasesListKnowledgeBases200Response
    | KnowledgeBasesListKnowledgeBasesDefaultResponse
  >;
}

export interface KnowledgeBasesDeleteKnowledgeBase {
  /** Delete a KnowledgeBase. */
  delete(
    options?: KnowledgeBasesDeleteKnowledgeBaseParameters,
  ): StreamableMethod<
    | KnowledgeBasesDeleteKnowledgeBase204Response
    | KnowledgeBasesDeleteKnowledgeBaseDefaultResponse
  >;
}

export interface KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion {
  /** Creates or replaces a KnowledgeBaseVersion. */
  put(
    options: KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse
  >;
  /** Creates or updates a KnowledgeBaseVersion. */
  patch(
    options: KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse
  >;
  /** Fetch a KnowledgeBaseVersion by name. */
  get(
    options?: KnowledgeBaseVersionsGetKnowledgeBaseVersionParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsGetKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse
  >;
  /** Delete a KnowledgeBaseVersion. */
  delete(
    options?: KnowledgeBaseVersionsDeleteKnowledgeBaseVersionParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersion204Response
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse
  >;
}

export interface KnowledgeBaseVersionsListKnowledgeBaseVersions {
  /** List KnowledgeBaseVersion resources */
  get(
    options?: KnowledgeBaseVersionsListKnowledgeBaseVersionsParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsListKnowledgeBaseVersions200Response
    | KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse
  >;
}

export interface KnowledgeBaseVersionsGetIndexingOperationStatus {
  /** Resource operation status operation template. */
  get(
    options?: KnowledgeBaseVersionsGetIndexingOperationStatusParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsGetIndexingOperationStatus200Response
    | KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse
  >;
}

export interface KnowledgeBaseVersionsStartIndexing {
  /** Start indexing. */
  post(
    options: KnowledgeBaseVersionsStartIndexingParameters,
  ): StreamableMethod<
    | KnowledgeBaseVersionsStartIndexing202Response
    | KnowledgeBaseVersionsStartIndexingDefaultResponse
  >;
}

export interface InvestigationsGetInvestigation {
  /** Fetch a Investigation by name. */
  get(
    options?: InvestigationsGetInvestigationParameters,
  ): StreamableMethod<
    | InvestigationsGetInvestigation200Response
    | InvestigationsGetInvestigationDefaultResponse
  >;
  /** Creates or replaces Investigation. */
  put(
    options: InvestigationsCreateOrReplaceInvestigationParameters,
  ): StreamableMethod<
    | InvestigationsCreateOrReplaceInvestigation200Response
    | InvestigationsCreateOrReplaceInvestigation201Response
    | InvestigationsCreateOrReplaceInvestigationDefaultResponse
  >;
  /** Creates or updates Investigation. */
  patch(
    options: InvestigationsCreateOrUpdateInvestigationParameters,
  ): StreamableMethod<
    | InvestigationsCreateOrUpdateInvestigation200Response
    | InvestigationsCreateOrUpdateInvestigation201Response
    | InvestigationsCreateOrUpdateInvestigationDefaultResponse
  >;
  /** Delete a Investigation. */
  delete(
    options?: InvestigationsDeleteInvestigationParameters,
  ): StreamableMethod<
    | InvestigationsDeleteInvestigation204Response
    | InvestigationsDeleteInvestigationDefaultResponse
  >;
}

export interface InvestigationsGetInvestigationOperationStatus {
  /** Gets status of a Investigation operation. */
  get(
    options?: InvestigationsGetInvestigationOperationStatusParameters,
  ): StreamableMethod<
    | InvestigationsGetInvestigationOperationStatus200Response
    | InvestigationsGetInvestigationOperationStatusDefaultResponse
  >;
}

export interface InvestigationsListInvestigations {
  /** List Investigation resources */
  get(
    options?: InvestigationsListInvestigationsParameters,
  ): StreamableMethod<
    | InvestigationsListInvestigations200Response
    | InvestigationsListInvestigationsDefaultResponse
  >;
}

export interface InvestigationsValidate {
  /** Validate an investigation. */
  post(
    options?: InvestigationsValidateParameters,
  ): StreamableMethod<
    InvestigationsValidate202Response | InvestigationsValidateDefaultResponse
  >;
}

export interface InvestigationsCreateRun {
  /** Run an investigation. */
  post(
    options: InvestigationsCreateRunParameters,
  ): StreamableMethod<
    InvestigationsCreateRun200Response | InvestigationsCreateRunDefaultResponse
  >;
}

export interface InvestigationsClone {
  /** Clone investigation (to a new one). */
  post(
    options: InvestigationsCloneParameters,
  ): StreamableMethod<
    InvestigationsClone200Response | InvestigationsCloneDefaultResponse
  >;
}

export interface InvestigationsAddInput {
  /** Add an input. */
  post(
    options: InvestigationsAddInputParameters,
  ): StreamableMethod<
    InvestigationsAddInput200Response | InvestigationsAddInputDefaultResponse
  >;
}

export interface InvestigationsRemoveInput {
  /** Remove an input. */
  post(
    options: InvestigationsRemoveInputParameters,
  ): StreamableMethod<
    | InvestigationsRemoveInput200Response
    | InvestigationsRemoveInputDefaultResponse
  >;
}

export interface RunsGetRun {
  /** Fetch a Run by name. */
  get(
    options?: RunsGetRunParameters,
  ): StreamableMethod<RunsGetRun200Response | RunsGetRunDefaultResponse>;
}

export interface RunsListRuns {
  /** List Runs */
  get(
    options?: RunsListRunsParameters,
  ): StreamableMethod<RunsListRuns200Response | RunsListRunsDefaultResponse>;
}

export interface RunsStart {
  /** Pause a run. */
  post(
    options?: RunsStartParameters,
  ): StreamableMethod<RunsStart200Response | RunsStartDefaultResponse>;
}

export interface RunsResume {
  /** Resume a paused run. */
  post(
    options?: RunsResumeParameters,
  ): StreamableMethod<RunsResume200Response | RunsResumeDefaultResponse>;
}

export interface RunsCancel {
  /** Cancel a run. */
  post(
    options?: RunsCancelParameters,
  ): StreamableMethod<RunsCancel200Response | RunsCancelDefaultResponse>;
}

export interface RunsRestoreInvestigation {
  /** Restore the Investigation Inputs and Plan to the state of this run. */
  post(
    options?: RunsRestoreInvestigationParameters,
  ): StreamableMethod<
    | RunsRestoreInvestigation200Response
    | RunsRestoreInvestigationDefaultResponse
  >;
}

export interface RunStepsGetStep {
  /** Fetch a RunStep by name. */
  get(
    options?: RunStepsGetStepParameters,
  ): StreamableMethod<
    RunStepsGetStep200Response | RunStepsGetStepDefaultResponse
  >;
}

export interface RunStepsListSteps {
  /** List Runs */
  get(
    options?: RunStepsListStepsParameters,
  ): StreamableMethod<
    RunStepsListSteps200Response | RunStepsListStepsDefaultResponse
  >;
}

export interface RunStepsCancel {
  /** Resume a paused run. */
  post(
    options?: RunStepsCancelParameters,
  ): StreamableMethod<
    RunStepsCancel200Response | RunStepsCancelDefaultResponse
  >;
}

export interface RunStepsStart {
  /** Pause a run. */
  post(
    options?: RunStepsStartParameters,
  ): StreamableMethod<RunStepsStart200Response | RunStepsStartDefaultResponse>;
}

export interface RunStepsResume {
  /** Resume a paused run. */
  post(
    options?: RunStepsResumeParameters,
  ): StreamableMethod<
    RunStepsResume200Response | RunStepsResumeDefaultResponse
  >;
}

export interface MessagesListMessages {
  /** List Messages across conversations */
  get(
    options?: MessagesListMessagesParameters,
  ): StreamableMethod<
    MessagesListMessages200Response | MessagesListMessagesDefaultResponse
  >;
}

export interface ConversationMessagesGetMessage {
  /** Fetch a Message by name. */
  get(
    options?: ConversationMessagesGetMessageParameters,
  ): StreamableMethod<
    | ConversationMessagesGetMessage200Response
    | ConversationMessagesGetMessageDefaultResponse
  >;
}

export interface ConversationMessagesCreateMessage {
  /** Creates a Message. */
  post(
    options: ConversationMessagesCreateMessageParameters,
  ): StreamableMethod<
    | ConversationMessagesCreateMessage200Response
    | ConversationMessagesCreateMessageDefaultResponse
  >;
  /** List Messages in specified conversation */
  get(
    options?: ConversationMessagesListMessagesParameters,
  ): StreamableMethod<
    | ConversationMessagesListMessages200Response
    | ConversationMessagesListMessagesDefaultResponse
  >;
}

export interface ConversationsGetConversation {
  /** Fetch a Conversation by name. */
  get(
    options?: ConversationsGetConversationParameters,
  ): StreamableMethod<
    | ConversationsGetConversation200Response
    | ConversationsGetConversationDefaultResponse
  >;
  /** Creates or updates a Conversation. */
  patch(
    options: ConversationsCreateOrUpdateConversationParameters,
  ): StreamableMethod<
    | ConversationsCreateOrUpdateConversation200Response
    | ConversationsCreateOrUpdateConversation201Response
    | ConversationsCreateOrUpdateConversationDefaultResponse
  >;
}

export interface ConversationsCreateConversation {
  /** Creates a Conversation. */
  post(
    options?: ConversationsCreateConversationParameters,
  ): StreamableMethod<
    | ConversationsCreateConversation200Response
    | ConversationsCreateConversationDefaultResponse
  >;
  /** List Conversation resources */
  get(
    options?: ConversationsListConversationsParameters,
  ): StreamableMethod<
    | ConversationsListConversations200Response
    | ConversationsListConversationsDefaultResponse
  >;
}

export interface ScientificToolsGetExecutionStatus {
  /** Resource operation status operation template. */
  get(
    options?: ScientificToolsGetExecutionStatusParameters,
  ): StreamableMethod<
    | ScientificToolsGetExecutionStatus200Response
    | ScientificToolsGetExecutionStatusDefaultResponse
  >;
}

export interface ScientificToolsExecute {
  /** Start indexing. */
  post(
    options: ScientificToolsExecuteParameters,
  ): StreamableMethod<
    ScientificToolsExecute202Response | ScientificToolsExecuteDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/knowledgeBases' has methods for the following verbs: get */
  (path: "/knowledgeBases"): KnowledgeBasesListKnowledgeBases;
  /** Resource for '/knowledgeBases/\{knowledgeBaseName\}' has methods for the following verbs: delete */
  (
    path: "/knowledgeBases/{knowledgeBaseName}",
    knowledgeBaseName: string,
  ): KnowledgeBasesDeleteKnowledgeBase;
  /** Resource for '/knowledgeBases/\{knowledgeBaseName\}/versions/\{versionName\}' has methods for the following verbs: put, patch, get, delete */
  (
    path: "/knowledgeBases/{knowledgeBaseName}/versions/{versionName}",
    knowledgeBaseName: string,
    versionName: string,
  ): KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion;
  /** Resource for '/knowledgeBases/\{knowledgeBaseName\}/versions' has methods for the following verbs: get */
  (
    path: "/knowledgeBases/{knowledgeBaseName}/versions",
    knowledgeBaseName: string,
  ): KnowledgeBaseVersionsListKnowledgeBaseVersions;
  /** Resource for '/knowledgeBases/\{knowledgeBaseName\}/versions/\{versionName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/knowledgeBases/{knowledgeBaseName}/versions/{versionName}/operations/{operationId}",
    knowledgeBaseName: string,
    versionName: string,
    operationId: string,
  ): KnowledgeBaseVersionsGetIndexingOperationStatus;
  /** Resource for '/knowledgeBases/\{knowledgeBaseName\}/versions/\{versionName\}:startIndexing' has methods for the following verbs: post */
  (
    path: "/knowledgeBases/{knowledgeBaseName}/versions/{versionName}:startIndexing",
    knowledgeBaseName: string,
    versionName: string,
  ): KnowledgeBaseVersionsStartIndexing;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/projects/{projectName}/investigations/{investigationName}",
    projectName: string,
    investigationName: string,
  ): InvestigationsGetInvestigation;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/operations/{operationId}",
    projectName: string,
    investigationName: string,
    operationId: string,
  ): InvestigationsGetInvestigationOperationStatus;
  /** Resource for '/projects/\{projectName\}/investigations' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations",
    projectName: string,
  ): InvestigationsListInvestigations;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}:validate' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}:validate",
    projectName: string,
    investigationName: string,
  ): InvestigationsValidate;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}:createRun' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}:createRun",
    projectName: string,
    investigationName: string,
  ): InvestigationsCreateRun;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}:clone' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}:clone",
    projectName: string,
    investigationName: string,
  ): InvestigationsClone;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}:addInput' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}:addInput",
    projectName: string,
    investigationName: string,
  ): InvestigationsAddInput;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}:removeInput' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}:removeInput",
    projectName: string,
    investigationName: string,
  ): InvestigationsRemoveInput;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunsGetRun;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs",
    projectName: string,
    investigationName: string,
  ): RunsListRuns;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}:start' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}:start",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunsStart;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}:resume' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}:resume",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunsResume;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}:cancel' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}:cancel",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunsCancel;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}:restoreInvestigation' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}:restoreInvestigation",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunsRestoreInvestigation;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}/steps/\{stepName\}' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}",
    projectName: string,
    investigationName: string,
    runName: string,
    stepName: string,
  ): RunStepsGetStep;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}/steps' has methods for the following verbs: get */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps",
    projectName: string,
    investigationName: string,
    runName: string,
  ): RunStepsListSteps;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}/steps/\{stepName\}:cancel' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:cancel",
    projectName: string,
    investigationName: string,
    runName: string,
    stepName: string,
  ): RunStepsCancel;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}/steps/\{stepName\}:start' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:start",
    projectName: string,
    investigationName: string,
    runName: string,
    stepName: string,
  ): RunStepsStart;
  /** Resource for '/projects/\{projectName\}/investigations/\{investigationName\}/runs/\{runName\}/steps/\{stepName\}:resume' has methods for the following verbs: post */
  (
    path: "/projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:resume",
    projectName: string,
    investigationName: string,
    runName: string,
    stepName: string,
  ): RunStepsResume;
  /** Resource for '/messages' has methods for the following verbs: get */
  (path: "/messages"): MessagesListMessages;
  /** Resource for '/conversations/\{conversationName\}/messages/\{messageName\}' has methods for the following verbs: get */
  (
    path: "/conversations/{conversationName}/messages/{messageName}",
    conversationName: string,
    messageName: string,
  ): ConversationMessagesGetMessage;
  /** Resource for '/conversations/\{conversationName\}/messages' has methods for the following verbs: post, get */
  (
    path: "/conversations/{conversationName}/messages",
    conversationName: string,
  ): ConversationMessagesCreateMessage;
  /** Resource for '/conversations/\{conversationName\}' has methods for the following verbs: get, patch */
  (
    path: "/conversations/{conversationName}",
    conversationName: string,
  ): ConversationsGetConversation;
  /** Resource for '/conversations' has methods for the following verbs: post, get */
  (path: "/conversations"): ConversationsCreateConversation;
  /** Resource for '/scientificTools/\{toolName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/scientificTools/{toolName}/operations/{operationId}",
    toolName: string,
    operationId: string,
  ): ScientificToolsGetExecutionStatus;
  /** Resource for '/scientificTools/\{toolName\}:execute' has methods for the following verbs: post */
  (
    path: "/scientificTools/{toolName}:execute",
    toolName: string,
  ): ScientificToolsExecute;
}

export type AiForScienceWorkspaceClient = Client & {
  path: Routes;
};
