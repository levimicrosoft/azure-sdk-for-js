// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import type { TokenCredential, KeyCredential } from "@azure/core-auth";
import type { AiForScienceWorkspaceClient } from "./clientDefinitions.js";
import type { Versions } from "./models.js";

/** The optional parameters for the client */
export interface AiForScienceWorkspaceClientOptions extends ClientOptions {
  /** API Version */
  apiVersion?: Versions;
}

/**
 * Initialize a new instance of `AiForScienceWorkspaceClient`
 * @param endpointParam - Supported AI for Science Workspace Services endpoints (protocol and hostname, for example: https://{workspaceName}.aiforscience.azure.com).
 * @param workspaceName - Workspace name
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  workspaceName: string,
  credentials: TokenCredential | KeyCredential,
  {
    apiVersion = "2024-12-01-preview",
    ...options
  }: AiForScienceWorkspaceClientOptions = {},
): AiForScienceWorkspaceClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `${endpointParam}/workspaces/${workspaceName}`;
  const userAgentInfo = `azsdk-js-microsoft-aiforscienceworkspace-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://workspace.aiforscience.azure.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };
  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as AiForScienceWorkspaceClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
