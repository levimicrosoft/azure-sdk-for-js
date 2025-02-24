/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Workspaces } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureAPICenter } from "../azureAPICenter.js";
import {
  Workspace,
  WorkspacesListNextOptionalParams,
  WorkspacesListOptionalParams,
  WorkspacesListResponse,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesHeadOptionalParams,
  WorkspacesHeadResponse,
  WorkspacesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Workspaces operations. */
export class WorkspacesImpl implements Workspaces {
  private readonly client: AzureAPICenter;

  /**
   * Initialize a new instance of the class Workspaces class.
   * @param client Reference to the service client
   */
  constructor(client: AzureAPICenter) {
    this.client = client;
  }

  /**
   * Returns a collection of workspaces.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesListOptionalParams,
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listPagingAll(resourceGroupName, serviceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Workspace[]> {
    let result: WorkspacesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serviceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesListOptionalParams,
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of workspaces.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesListOptionalParams,
  ): Promise<WorkspacesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listOperationSpec,
    );
  }

  /**
   * Returns details of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams,
  ): Promise<WorkspacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates new or updates existing workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    resource: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<WorkspacesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceName, resource, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Checks if specified workspace exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    options?: WorkspacesHeadOptionalParams,
  ): Promise<WorkspacesHeadResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceName, options },
      headOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: WorkspacesListNextOptionalParams,
  ): Promise<WorkspacesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace,
      headersMapper: Mappers.WorkspacesGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace,
      headersMapper: Mappers.WorkspacesCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.Workspace,
      headersMapper: Mappers.WorkspacesCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const headOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}",
  httpMethod: "HEAD",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
