// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  RootListAgentDefinitions200Response,
  RootListAgentDefinitionsDefaultResponse,
  RootListModelDefinitions200Response,
  RootListModelDefinitionsDefaultResponse,
  RootListToolDefinitions200Response,
  RootListToolDefinitionsDefaultResponse,
  RootListDataAssetDefinitions200Response,
  RootListDataAssetDefinitionsDefaultResponse,
  RootListKnowledgeBaseDefinitions200Response,
  RootListKnowledgeBaseDefinitionsDefaultResponse,
  AgentDefinitionsGetAgentDefinition200Response,
  AgentDefinitionsGetAgentDefinitionDefaultResponse,
  AgentDefinitionsCreateOrReplaceAgentDefinition200Response,
  AgentDefinitionsCreateOrReplaceAgentDefinition201Response,
  AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse,
  AgentDefinitionsCreateOrUpdateAgentDefinition200Response,
  AgentDefinitionsCreateOrUpdateAgentDefinition201Response,
  AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse,
  AgentDefinitionsDeleteAgentDefinition204Response,
  AgentDefinitionsDeleteAgentDefinitionDefaultResponse,
  AgentDefinitionsListAgentDefinitions200Response,
  AgentDefinitionsListAgentDefinitionsDefaultResponse,
  ToolDefinitionsGetToolDefinition200Response,
  ToolDefinitionsGetToolDefinitionDefaultResponse,
  ToolDefinitionsCreateOrReplaceToolDefinition200Response,
  ToolDefinitionsCreateOrReplaceToolDefinition201Response,
  ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse,
  ToolDefinitionsCreateOrUpdateToolDefinition200Response,
  ToolDefinitionsCreateOrUpdateToolDefinition201Response,
  ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse,
  ToolDefinitionsDeleteToolDefinition204Response,
  ToolDefinitionsDeleteToolDefinitionDefaultResponse,
  ToolDefinitionsListToolDefinitions200Response,
  ToolDefinitionsListToolDefinitionsDefaultResponse,
  DataAssetDefinitionsGetDataAssetDefinition200Response,
  DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsDeleteDataAssetDefinition204Response,
  DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsListDataAssetDefinitions200Response,
  DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse,
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response,
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response,
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse,
  ModelDefinitionsGetModelDefinition200Response,
  ModelDefinitionsGetModelDefinitionDefaultResponse,
  ModelDefinitionsCreateOrReplaceModelDefinition200Response,
  ModelDefinitionsCreateOrReplaceModelDefinition201Response,
  ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse,
  ModelDefinitionsCreateOrUpdateModelDefinition200Response,
  ModelDefinitionsCreateOrUpdateModelDefinition201Response,
  ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse,
  ModelDefinitionsDeleteModelDefinition204Response,
  ModelDefinitionsDeleteModelDefinitionDefaultResponse,
  ModelDefinitionsListModelDefinitions200Response,
  ModelDefinitionsListModelDefinitionsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /agentDefinitions": ["200"],
  "GET /modelDefinitions": ["200"],
  "GET /toolDefinitions": ["200"],
  "GET /dataAssetDefinitions": ["200"],
  "GET /knowledgeBaseDefinitions": ["200"],
  "GET /catalogs/{catalogName}/agentDefinitions/{agentName}": ["200"],
  "PUT /catalogs/{catalogName}/agentDefinitions/{agentName}": ["200", "201"],
  "PATCH /catalogs/{catalogName}/agentDefinitions/{agentName}": ["200", "201"],
  "DELETE /catalogs/{catalogName}/agentDefinitions/{agentName}": ["204"],
  "GET /catalogs/{catalogName}/agentDefinitions": ["200"],
  "GET /catalogs/{catalogName}/toolDefinitions/{toolName}": ["200"],
  "PUT /catalogs/{catalogName}/toolDefinitions/{toolName}": ["200", "201"],
  "PATCH /catalogs/{catalogName}/toolDefinitions/{toolName}": ["200", "201"],
  "DELETE /catalogs/{catalogName}/toolDefinitions/{toolName}": ["204"],
  "GET /catalogs/{catalogName}/toolDefinitions": ["200"],
  "GET /catalogs/{catalogName}/dataAssetDefinitions/{dataAssetName}": ["200"],
  "PUT /catalogs/{catalogName}/dataAssetDefinitions/{dataAssetName}": [
    "200",
    "201",
  ],
  "PATCH /catalogs/{catalogName}/dataAssetDefinitions/{dataAssetName}": [
    "200",
    "201",
  ],
  "DELETE /catalogs/{catalogName}/dataAssetDefinitions/{dataAssetName}": [
    "204",
  ],
  "GET /catalogs/{catalogName}/dataAssetDefinitions": ["200"],
  "GET /catalogs/{catalogName}/knowledgeBaseDefinitions/{knowledgeBaseName}": [
    "200",
  ],
  "PUT /catalogs/{catalogName}/knowledgeBaseDefinitions/{knowledgeBaseName}": [
    "200",
    "201",
  ],
  "PATCH /catalogs/{catalogName}/knowledgeBaseDefinitions/{knowledgeBaseName}":
    ["200", "201"],
  "DELETE /catalogs/{catalogName}/knowledgeBaseDefinitions/{knowledgeBaseName}":
    ["204"],
  "GET /catalogs/{catalogName}/knowledgeBaseDefinitions": ["200"],
  "GET /catalogs/{catalogName}/modelDefinitions/{modelName}": ["200"],
  "PUT /catalogs/{catalogName}/modelDefinitions/{modelName}": ["200", "201"],
  "PATCH /catalogs/{catalogName}/modelDefinitions/{modelName}": ["200", "201"],
  "DELETE /catalogs/{catalogName}/modelDefinitions/{modelName}": ["204"],
  "GET /catalogs/{catalogName}/modelDefinitions": ["200"],
};

export function isUnexpected(
  response:
    | RootListAgentDefinitions200Response
    | RootListAgentDefinitionsDefaultResponse,
): response is RootListAgentDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | RootListModelDefinitions200Response
    | RootListModelDefinitionsDefaultResponse,
): response is RootListModelDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | RootListToolDefinitions200Response
    | RootListToolDefinitionsDefaultResponse,
): response is RootListToolDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | RootListDataAssetDefinitions200Response
    | RootListDataAssetDefinitionsDefaultResponse,
): response is RootListDataAssetDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | RootListKnowledgeBaseDefinitions200Response
    | RootListKnowledgeBaseDefinitionsDefaultResponse,
): response is RootListKnowledgeBaseDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | AgentDefinitionsGetAgentDefinition200Response
    | AgentDefinitionsGetAgentDefinitionDefaultResponse,
): response is AgentDefinitionsGetAgentDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | AgentDefinitionsCreateOrReplaceAgentDefinition200Response
    | AgentDefinitionsCreateOrReplaceAgentDefinition201Response
    | AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse,
): response is AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | AgentDefinitionsCreateOrUpdateAgentDefinition200Response
    | AgentDefinitionsCreateOrUpdateAgentDefinition201Response
    | AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse,
): response is AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | AgentDefinitionsDeleteAgentDefinition204Response
    | AgentDefinitionsDeleteAgentDefinitionDefaultResponse,
): response is AgentDefinitionsDeleteAgentDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | AgentDefinitionsListAgentDefinitions200Response
    | AgentDefinitionsListAgentDefinitionsDefaultResponse,
): response is AgentDefinitionsListAgentDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | ToolDefinitionsGetToolDefinition200Response
    | ToolDefinitionsGetToolDefinitionDefaultResponse,
): response is ToolDefinitionsGetToolDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ToolDefinitionsCreateOrReplaceToolDefinition200Response
    | ToolDefinitionsCreateOrReplaceToolDefinition201Response
    | ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse,
): response is ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ToolDefinitionsCreateOrUpdateToolDefinition200Response
    | ToolDefinitionsCreateOrUpdateToolDefinition201Response
    | ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse,
): response is ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ToolDefinitionsDeleteToolDefinition204Response
    | ToolDefinitionsDeleteToolDefinitionDefaultResponse,
): response is ToolDefinitionsDeleteToolDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ToolDefinitionsListToolDefinitions200Response
    | ToolDefinitionsListToolDefinitionsDefaultResponse,
): response is ToolDefinitionsListToolDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | DataAssetDefinitionsGetDataAssetDefinition200Response
    | DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse,
): response is DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse,
): response is DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse,
): response is DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | DataAssetDefinitionsDeleteDataAssetDefinition204Response
    | DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse,
): response is DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | DataAssetDefinitionsListDataAssetDefinitions200Response
    | DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse,
): response is DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse,
): response is KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse,
): response is KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse,
): response is KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse,
): response is KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse,
): response is KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | ModelDefinitionsGetModelDefinition200Response
    | ModelDefinitionsGetModelDefinitionDefaultResponse,
): response is ModelDefinitionsGetModelDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ModelDefinitionsCreateOrReplaceModelDefinition200Response
    | ModelDefinitionsCreateOrReplaceModelDefinition201Response
    | ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse,
): response is ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ModelDefinitionsCreateOrUpdateModelDefinition200Response
    | ModelDefinitionsCreateOrUpdateModelDefinition201Response
    | ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse,
): response is ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ModelDefinitionsDeleteModelDefinition204Response
    | ModelDefinitionsDeleteModelDefinitionDefaultResponse,
): response is ModelDefinitionsDeleteModelDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ModelDefinitionsListModelDefinitions200Response
    | ModelDefinitionsListModelDefinitionsDefaultResponse,
): response is ModelDefinitionsListModelDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | RootListAgentDefinitions200Response
    | RootListAgentDefinitionsDefaultResponse
    | RootListModelDefinitions200Response
    | RootListModelDefinitionsDefaultResponse
    | RootListToolDefinitions200Response
    | RootListToolDefinitionsDefaultResponse
    | RootListDataAssetDefinitions200Response
    | RootListDataAssetDefinitionsDefaultResponse
    | RootListKnowledgeBaseDefinitions200Response
    | RootListKnowledgeBaseDefinitionsDefaultResponse
    | AgentDefinitionsGetAgentDefinition200Response
    | AgentDefinitionsGetAgentDefinitionDefaultResponse
    | AgentDefinitionsCreateOrReplaceAgentDefinition200Response
    | AgentDefinitionsCreateOrReplaceAgentDefinition201Response
    | AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse
    | AgentDefinitionsCreateOrUpdateAgentDefinition200Response
    | AgentDefinitionsCreateOrUpdateAgentDefinition201Response
    | AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse
    | AgentDefinitionsDeleteAgentDefinition204Response
    | AgentDefinitionsDeleteAgentDefinitionDefaultResponse
    | AgentDefinitionsListAgentDefinitions200Response
    | AgentDefinitionsListAgentDefinitionsDefaultResponse
    | ToolDefinitionsGetToolDefinition200Response
    | ToolDefinitionsGetToolDefinitionDefaultResponse
    | ToolDefinitionsCreateOrReplaceToolDefinition200Response
    | ToolDefinitionsCreateOrReplaceToolDefinition201Response
    | ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse
    | ToolDefinitionsCreateOrUpdateToolDefinition200Response
    | ToolDefinitionsCreateOrUpdateToolDefinition201Response
    | ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse
    | ToolDefinitionsDeleteToolDefinition204Response
    | ToolDefinitionsDeleteToolDefinitionDefaultResponse
    | ToolDefinitionsListToolDefinitions200Response
    | ToolDefinitionsListToolDefinitionsDefaultResponse
    | DataAssetDefinitionsGetDataAssetDefinition200Response
    | DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse
    | DataAssetDefinitionsDeleteDataAssetDefinition204Response
    | DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse
    | DataAssetDefinitionsListDataAssetDefinitions200Response
    | DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse
    | ModelDefinitionsGetModelDefinition200Response
    | ModelDefinitionsGetModelDefinitionDefaultResponse
    | ModelDefinitionsCreateOrReplaceModelDefinition200Response
    | ModelDefinitionsCreateOrReplaceModelDefinition201Response
    | ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse
    | ModelDefinitionsCreateOrUpdateModelDefinition200Response
    | ModelDefinitionsCreateOrUpdateModelDefinition201Response
    | ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse
    | ModelDefinitionsDeleteModelDefinition204Response
    | ModelDefinitionsDeleteModelDefinitionDefaultResponse
    | ModelDefinitionsListModelDefinitions200Response
    | ModelDefinitionsListModelDefinitionsDefaultResponse,
): response is
  | RootListAgentDefinitionsDefaultResponse
  | RootListModelDefinitionsDefaultResponse
  | RootListToolDefinitionsDefaultResponse
  | RootListDataAssetDefinitionsDefaultResponse
  | RootListKnowledgeBaseDefinitionsDefaultResponse
  | AgentDefinitionsGetAgentDefinitionDefaultResponse
  | AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse
  | AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse
  | AgentDefinitionsDeleteAgentDefinitionDefaultResponse
  | AgentDefinitionsListAgentDefinitionsDefaultResponse
  | ToolDefinitionsGetToolDefinitionDefaultResponse
  | ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse
  | ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse
  | ToolDefinitionsDeleteToolDefinitionDefaultResponse
  | ToolDefinitionsListToolDefinitionsDefaultResponse
  | DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse
  | DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse
  | DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse
  | DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse
  | DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse
  | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse
  | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse
  | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse
  | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse
  | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse
  | ModelDefinitionsGetModelDefinitionDefaultResponse
  | ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse
  | ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse
  | ModelDefinitionsDeleteModelDefinitionDefaultResponse
  | ModelDefinitionsListModelDefinitionsDefaultResponse {
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
