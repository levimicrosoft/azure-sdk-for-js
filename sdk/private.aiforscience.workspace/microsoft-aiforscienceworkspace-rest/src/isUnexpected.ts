// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  KnowledgeBaseVersionsStartIndexingLogicalResponse,
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
  InvestigationsValidateLogicalResponse,
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
  ScientificToolsExecuteLogicalResponse,
  ScientificToolsExecuteDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /knowledgeBases": ["200"],
  "DELETE /knowledgeBases/{knowledgeBaseName}": ["204"],
  "PUT /knowledgeBases/{knowledgeBaseName}/versions/{versionName}": [
    "200",
    "201",
  ],
  "PATCH /knowledgeBases/{knowledgeBaseName}/versions/{versionName}": [
    "200",
    "201",
  ],
  "GET /knowledgeBases/{knowledgeBaseName}/versions/{versionName}": ["200"],
  "DELETE /knowledgeBases/{knowledgeBaseName}/versions/{versionName}": ["204"],
  "GET /knowledgeBases/{knowledgeBaseName}/versions": ["200"],
  "GET /knowledgeBases/{knowledgeBaseName}/versions/{versionName}/operations/{operationId}":
    ["200"],
  "GET /knowledgeBases/{knowledgeBaseName}/versions/{versionName}:startIndexing":
    ["200", "202"],
  "POST /knowledgeBases/{knowledgeBaseName}/versions/{versionName}:startIndexing":
    ["202"],
  "GET /projects/{projectName}/investigations/{investigationName}": ["200"],
  "PUT /projects/{projectName}/investigations/{investigationName}": [
    "200",
    "201",
  ],
  "PATCH /projects/{projectName}/investigations/{investigationName}": [
    "200",
    "201",
  ],
  "DELETE /projects/{projectName}/investigations/{investigationName}": ["204"],
  "GET /projects/{projectName}/investigations/{investigationName}/operations/{operationId}":
    ["200"],
  "GET /projects/{projectName}/investigations": ["200"],
  "GET /projects/{projectName}/investigations/{investigationName}:validate": [
    "200",
    "202",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}:validate": [
    "202",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}:createRun": [
    "200",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}:clone": [
    "200",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}:addInput": [
    "200",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}:removeInput":
    ["200"],
  "GET /projects/{projectName}/investigations/{investigationName}/runs/{runName}":
    ["200"],
  "GET /projects/{projectName}/investigations/{investigationName}/runs": [
    "200",
  ],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}:start":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}:resume":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}:cancel":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}:restoreInvestigation":
    ["200"],
  "GET /projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}":
    ["200"],
  "GET /projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:cancel":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:start":
    ["200"],
  "POST /projects/{projectName}/investigations/{investigationName}/runs/{runName}/steps/{stepName}:resume":
    ["200"],
  "GET /messages": ["200"],
  "GET /conversations/{conversationName}/messages/{messageName}": ["200"],
  "POST /conversations/{conversationName}/messages": ["200"],
  "GET /conversations/{conversationName}/messages": ["200"],
  "GET /conversations/{conversationName}": ["200"],
  "PATCH /conversations/{conversationName}": ["200", "201"],
  "POST /conversations": ["200"],
  "GET /conversations": ["200"],
  "GET /scientificTools/{toolName}/operations/{operationId}": ["200"],
  "GET /scientificTools/{toolName}:execute": ["200", "202"],
  "POST /scientificTools/{toolName}:execute": ["202"],
};

export function isUnexpected(
  response:
    | KnowledgeBasesListKnowledgeBases200Response
    | KnowledgeBasesListKnowledgeBasesDefaultResponse,
): response is KnowledgeBasesListKnowledgeBasesDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBasesDeleteKnowledgeBase204Response
    | KnowledgeBasesDeleteKnowledgeBaseDefaultResponse,
): response is KnowledgeBasesDeleteKnowledgeBaseDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse,
): response is KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse,
): response is KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsGetKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse,
): response is KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersion204Response
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse,
): response is KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsListKnowledgeBaseVersions200Response
    | KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse,
): response is KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsGetIndexingOperationStatus200Response
    | KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse,
): response is KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseVersionsStartIndexing202Response
    | KnowledgeBaseVersionsStartIndexingLogicalResponse
    | KnowledgeBaseVersionsStartIndexingDefaultResponse,
): response is KnowledgeBaseVersionsStartIndexingDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsGetInvestigation200Response
    | InvestigationsGetInvestigationDefaultResponse,
): response is InvestigationsGetInvestigationDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsCreateOrReplaceInvestigation200Response
    | InvestigationsCreateOrReplaceInvestigation201Response
    | InvestigationsCreateOrReplaceInvestigationDefaultResponse,
): response is InvestigationsCreateOrReplaceInvestigationDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsCreateOrUpdateInvestigation200Response
    | InvestigationsCreateOrUpdateInvestigation201Response
    | InvestigationsCreateOrUpdateInvestigationDefaultResponse,
): response is InvestigationsCreateOrUpdateInvestigationDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsDeleteInvestigation204Response
    | InvestigationsDeleteInvestigationDefaultResponse,
): response is InvestigationsDeleteInvestigationDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsGetInvestigationOperationStatus200Response
    | InvestigationsGetInvestigationOperationStatusDefaultResponse,
): response is InvestigationsGetInvestigationOperationStatusDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsListInvestigations200Response
    | InvestigationsListInvestigationsDefaultResponse,
): response is InvestigationsListInvestigationsDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsValidate202Response
    | InvestigationsValidateLogicalResponse
    | InvestigationsValidateDefaultResponse,
): response is InvestigationsValidateDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsCreateRun200Response
    | InvestigationsCreateRunDefaultResponse,
): response is InvestigationsCreateRunDefaultResponse;
export function isUnexpected(
  response: InvestigationsClone200Response | InvestigationsCloneDefaultResponse,
): response is InvestigationsCloneDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsAddInput200Response
    | InvestigationsAddInputDefaultResponse,
): response is InvestigationsAddInputDefaultResponse;
export function isUnexpected(
  response:
    | InvestigationsRemoveInput200Response
    | InvestigationsRemoveInputDefaultResponse,
): response is InvestigationsRemoveInputDefaultResponse;
export function isUnexpected(
  response: RunsGetRun200Response | RunsGetRunDefaultResponse,
): response is RunsGetRunDefaultResponse;
export function isUnexpected(
  response: RunsListRuns200Response | RunsListRunsDefaultResponse,
): response is RunsListRunsDefaultResponse;
export function isUnexpected(
  response: RunsStart200Response | RunsStartDefaultResponse,
): response is RunsStartDefaultResponse;
export function isUnexpected(
  response: RunsResume200Response | RunsResumeDefaultResponse,
): response is RunsResumeDefaultResponse;
export function isUnexpected(
  response: RunsCancel200Response | RunsCancelDefaultResponse,
): response is RunsCancelDefaultResponse;
export function isUnexpected(
  response:
    | RunsRestoreInvestigation200Response
    | RunsRestoreInvestigationDefaultResponse,
): response is RunsRestoreInvestigationDefaultResponse;
export function isUnexpected(
  response: RunStepsGetStep200Response | RunStepsGetStepDefaultResponse,
): response is RunStepsGetStepDefaultResponse;
export function isUnexpected(
  response: RunStepsListSteps200Response | RunStepsListStepsDefaultResponse,
): response is RunStepsListStepsDefaultResponse;
export function isUnexpected(
  response: RunStepsCancel200Response | RunStepsCancelDefaultResponse,
): response is RunStepsCancelDefaultResponse;
export function isUnexpected(
  response: RunStepsStart200Response | RunStepsStartDefaultResponse,
): response is RunStepsStartDefaultResponse;
export function isUnexpected(
  response: RunStepsResume200Response | RunStepsResumeDefaultResponse,
): response is RunStepsResumeDefaultResponse;
export function isUnexpected(
  response:
    | MessagesListMessages200Response
    | MessagesListMessagesDefaultResponse,
): response is MessagesListMessagesDefaultResponse;
export function isUnexpected(
  response:
    | ConversationMessagesGetMessage200Response
    | ConversationMessagesGetMessageDefaultResponse,
): response is ConversationMessagesGetMessageDefaultResponse;
export function isUnexpected(
  response:
    | ConversationMessagesCreateMessage200Response
    | ConversationMessagesCreateMessageDefaultResponse,
): response is ConversationMessagesCreateMessageDefaultResponse;
export function isUnexpected(
  response:
    | ConversationMessagesListMessages200Response
    | ConversationMessagesListMessagesDefaultResponse,
): response is ConversationMessagesListMessagesDefaultResponse;
export function isUnexpected(
  response:
    | ConversationsGetConversation200Response
    | ConversationsGetConversationDefaultResponse,
): response is ConversationsGetConversationDefaultResponse;
export function isUnexpected(
  response:
    | ConversationsCreateOrUpdateConversation200Response
    | ConversationsCreateOrUpdateConversation201Response
    | ConversationsCreateOrUpdateConversationDefaultResponse,
): response is ConversationsCreateOrUpdateConversationDefaultResponse;
export function isUnexpected(
  response:
    | ConversationsCreateConversation200Response
    | ConversationsCreateConversationDefaultResponse,
): response is ConversationsCreateConversationDefaultResponse;
export function isUnexpected(
  response:
    | ConversationsListConversations200Response
    | ConversationsListConversationsDefaultResponse,
): response is ConversationsListConversationsDefaultResponse;
export function isUnexpected(
  response:
    | ScientificToolsGetExecutionStatus200Response
    | ScientificToolsGetExecutionStatusDefaultResponse,
): response is ScientificToolsGetExecutionStatusDefaultResponse;
export function isUnexpected(
  response:
    | ScientificToolsExecute202Response
    | ScientificToolsExecuteLogicalResponse
    | ScientificToolsExecuteDefaultResponse,
): response is ScientificToolsExecuteDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBasesListKnowledgeBases200Response
    | KnowledgeBasesListKnowledgeBasesDefaultResponse
    | KnowledgeBasesDeleteKnowledgeBase204Response
    | KnowledgeBasesDeleteKnowledgeBaseDefaultResponse
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersion201Response
    | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse
    | KnowledgeBaseVersionsGetKnowledgeBaseVersion200Response
    | KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersion204Response
    | KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse
    | KnowledgeBaseVersionsListKnowledgeBaseVersions200Response
    | KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse
    | KnowledgeBaseVersionsGetIndexingOperationStatus200Response
    | KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse
    | KnowledgeBaseVersionsStartIndexing202Response
    | KnowledgeBaseVersionsStartIndexingLogicalResponse
    | KnowledgeBaseVersionsStartIndexingDefaultResponse
    | InvestigationsGetInvestigation200Response
    | InvestigationsGetInvestigationDefaultResponse
    | InvestigationsCreateOrReplaceInvestigation200Response
    | InvestigationsCreateOrReplaceInvestigation201Response
    | InvestigationsCreateOrReplaceInvestigationDefaultResponse
    | InvestigationsCreateOrUpdateInvestigation200Response
    | InvestigationsCreateOrUpdateInvestigation201Response
    | InvestigationsCreateOrUpdateInvestigationDefaultResponse
    | InvestigationsDeleteInvestigation204Response
    | InvestigationsDeleteInvestigationDefaultResponse
    | InvestigationsGetInvestigationOperationStatus200Response
    | InvestigationsGetInvestigationOperationStatusDefaultResponse
    | InvestigationsListInvestigations200Response
    | InvestigationsListInvestigationsDefaultResponse
    | InvestigationsValidate202Response
    | InvestigationsValidateLogicalResponse
    | InvestigationsValidateDefaultResponse
    | InvestigationsCreateRun200Response
    | InvestigationsCreateRunDefaultResponse
    | InvestigationsClone200Response
    | InvestigationsCloneDefaultResponse
    | InvestigationsAddInput200Response
    | InvestigationsAddInputDefaultResponse
    | InvestigationsRemoveInput200Response
    | InvestigationsRemoveInputDefaultResponse
    | RunsGetRun200Response
    | RunsGetRunDefaultResponse
    | RunsListRuns200Response
    | RunsListRunsDefaultResponse
    | RunsStart200Response
    | RunsStartDefaultResponse
    | RunsResume200Response
    | RunsResumeDefaultResponse
    | RunsCancel200Response
    | RunsCancelDefaultResponse
    | RunsRestoreInvestigation200Response
    | RunsRestoreInvestigationDefaultResponse
    | RunStepsGetStep200Response
    | RunStepsGetStepDefaultResponse
    | RunStepsListSteps200Response
    | RunStepsListStepsDefaultResponse
    | RunStepsCancel200Response
    | RunStepsCancelDefaultResponse
    | RunStepsStart200Response
    | RunStepsStartDefaultResponse
    | RunStepsResume200Response
    | RunStepsResumeDefaultResponse
    | MessagesListMessages200Response
    | MessagesListMessagesDefaultResponse
    | ConversationMessagesGetMessage200Response
    | ConversationMessagesGetMessageDefaultResponse
    | ConversationMessagesCreateMessage200Response
    | ConversationMessagesCreateMessageDefaultResponse
    | ConversationMessagesListMessages200Response
    | ConversationMessagesListMessagesDefaultResponse
    | ConversationsGetConversation200Response
    | ConversationsGetConversationDefaultResponse
    | ConversationsCreateOrUpdateConversation200Response
    | ConversationsCreateOrUpdateConversation201Response
    | ConversationsCreateOrUpdateConversationDefaultResponse
    | ConversationsCreateConversation200Response
    | ConversationsCreateConversationDefaultResponse
    | ConversationsListConversations200Response
    | ConversationsListConversationsDefaultResponse
    | ScientificToolsGetExecutionStatus200Response
    | ScientificToolsGetExecutionStatusDefaultResponse
    | ScientificToolsExecute202Response
    | ScientificToolsExecuteLogicalResponse
    | ScientificToolsExecuteDefaultResponse,
): response is
  | KnowledgeBasesListKnowledgeBasesDefaultResponse
  | KnowledgeBasesDeleteKnowledgeBaseDefaultResponse
  | KnowledgeBaseVersionsCreateOrReplaceKnowledgeBaseVersionDefaultResponse
  | KnowledgeBaseVersionsCreateOrUpdateKnowledgeBaseVersionDefaultResponse
  | KnowledgeBaseVersionsGetKnowledgeBaseVersionDefaultResponse
  | KnowledgeBaseVersionsDeleteKnowledgeBaseVersionDefaultResponse
  | KnowledgeBaseVersionsListKnowledgeBaseVersionsDefaultResponse
  | KnowledgeBaseVersionsGetIndexingOperationStatusDefaultResponse
  | KnowledgeBaseVersionsStartIndexingDefaultResponse
  | InvestigationsGetInvestigationDefaultResponse
  | InvestigationsCreateOrReplaceInvestigationDefaultResponse
  | InvestigationsCreateOrUpdateInvestigationDefaultResponse
  | InvestigationsDeleteInvestigationDefaultResponse
  | InvestigationsGetInvestigationOperationStatusDefaultResponse
  | InvestigationsListInvestigationsDefaultResponse
  | InvestigationsValidateDefaultResponse
  | InvestigationsCreateRunDefaultResponse
  | InvestigationsCloneDefaultResponse
  | InvestigationsAddInputDefaultResponse
  | InvestigationsRemoveInputDefaultResponse
  | RunsGetRunDefaultResponse
  | RunsListRunsDefaultResponse
  | RunsStartDefaultResponse
  | RunsResumeDefaultResponse
  | RunsCancelDefaultResponse
  | RunsRestoreInvestigationDefaultResponse
  | RunStepsGetStepDefaultResponse
  | RunStepsListStepsDefaultResponse
  | RunStepsCancelDefaultResponse
  | RunStepsStartDefaultResponse
  | RunStepsResumeDefaultResponse
  | MessagesListMessagesDefaultResponse
  | ConversationMessagesGetMessageDefaultResponse
  | ConversationMessagesCreateMessageDefaultResponse
  | ConversationMessagesListMessagesDefaultResponse
  | ConversationsGetConversationDefaultResponse
  | ConversationsCreateOrUpdateConversationDefaultResponse
  | ConversationsCreateConversationDefaultResponse
  | ConversationsListConversationsDefaultResponse
  | ScientificToolsGetExecutionStatusDefaultResponse
  | ScientificToolsExecuteDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
