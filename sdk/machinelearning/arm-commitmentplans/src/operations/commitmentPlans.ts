/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { CommitmentPlans } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMLCommitmentPlansManagementClient } from "../azureMLCommitmentPlansManagementClient.js";
import {
  CommitmentPlan,
  CommitmentPlansListNextOptionalParams,
  CommitmentPlansListOptionalParams,
  CommitmentPlansListResponse,
  CommitmentPlansListInResourceGroupNextOptionalParams,
  CommitmentPlansListInResourceGroupOptionalParams,
  CommitmentPlansListInResourceGroupResponse,
  CommitmentPlansGetOptionalParams,
  CommitmentPlansGetResponse,
  CommitmentPlansCreateOrUpdateOptionalParams,
  CommitmentPlansCreateOrUpdateResponse,
  CommitmentPlansRemoveOptionalParams,
  CommitmentPlanPatchPayload,
  CommitmentPlansPatchOptionalParams,
  CommitmentPlansPatchResponse,
  CommitmentPlansListNextResponse,
  CommitmentPlansListInResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing CommitmentPlans operations. */
export class CommitmentPlansImpl implements CommitmentPlans {
  private readonly client: AzureMLCommitmentPlansManagementClient;

  /**
   * Initialize a new instance of the class CommitmentPlans class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMLCommitmentPlansManagementClient) {
    this.client = client;
  }

  /**
   * Retrieve all Azure ML commitment plans in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: CommitmentPlansListOptionalParams
  ): PagedAsyncIterableIterator<CommitmentPlan> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: CommitmentPlansListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CommitmentPlan[]> {
    let result: CommitmentPlansListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: CommitmentPlansListOptionalParams
  ): AsyncIterableIterator<CommitmentPlan> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieve all Azure ML commitment plans in a resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listInResourceGroup(
    resourceGroupName: string,
    options?: CommitmentPlansListInResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<CommitmentPlan> {
    const iter = this.listInResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listInResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listInResourceGroupPagingPage(
    resourceGroupName: string,
    options?: CommitmentPlansListInResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CommitmentPlan[]> {
    let result: CommitmentPlansListInResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listInResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listInResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listInResourceGroupPagingAll(
    resourceGroupName: string,
    options?: CommitmentPlansListInResourceGroupOptionalParams
  ): AsyncIterableIterator<CommitmentPlan> {
    for await (const page of this.listInResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve an Azure ML commitment plan by its subscription, resource group and name.
   * @param resourceGroupName The resource group name.
   * @param commitmentPlanName The Azure ML commitment plan name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    commitmentPlanName: string,
    options?: CommitmentPlansGetOptionalParams
  ): Promise<CommitmentPlansGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, commitmentPlanName, options },
      getOperationSpec
    );
  }

  /**
   * Create a new Azure ML commitment plan resource or updates an existing one.
   * @param resourceGroupName The resource group name.
   * @param commitmentPlanName The Azure ML commitment plan name.
   * @param createOrUpdatePayload The payload to create or update the Azure ML commitment plan.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    commitmentPlanName: string,
    createOrUpdatePayload: CommitmentPlan,
    options?: CommitmentPlansCreateOrUpdateOptionalParams
  ): Promise<CommitmentPlansCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, commitmentPlanName, createOrUpdatePayload, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Remove an existing Azure ML commitment plan.
   * @param resourceGroupName The resource group name.
   * @param commitmentPlanName The Azure ML commitment plan name.
   * @param options The options parameters.
   */
  remove(
    resourceGroupName: string,
    commitmentPlanName: string,
    options?: CommitmentPlansRemoveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, commitmentPlanName, options },
      removeOperationSpec
    );
  }

  /**
   * Patch an existing Azure ML commitment plan resource.
   * @param resourceGroupName The resource group name.
   * @param commitmentPlanName The Azure ML commitment plan name.
   * @param patchPayload The payload to use to patch the Azure ML commitment plan. Only tags and SKU may
   *                     be modified on an existing commitment plan.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    commitmentPlanName: string,
    patchPayload: CommitmentPlanPatchPayload,
    options?: CommitmentPlansPatchOptionalParams
  ): Promise<CommitmentPlansPatchResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, commitmentPlanName, patchPayload, options },
      patchOperationSpec
    );
  }

  /**
   * Retrieve all Azure ML commitment plans in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: CommitmentPlansListOptionalParams
  ): Promise<CommitmentPlansListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Retrieve all Azure ML commitment plans in a resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listInResourceGroup(
    resourceGroupName: string,
    options?: CommitmentPlansListInResourceGroupOptionalParams
  ): Promise<CommitmentPlansListInResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listInResourceGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: CommitmentPlansListNextOptionalParams
  ): Promise<CommitmentPlansListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListInResourceGroupNext
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListInResourceGroup method.
   * @param options The options parameters.
   */
  private _listInResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: CommitmentPlansListInResourceGroupNextOptionalParams
  ): Promise<CommitmentPlansListInResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listInResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlan
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.commitmentPlanName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlan
    },
    201: {
      bodyMapper: Mappers.CommitmentPlan
    }
  },
  requestBody: Parameters.createOrUpdatePayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.commitmentPlanName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.commitmentPlanName
  ],
  serializer
};
const patchOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlan
    }
  },
  requestBody: Parameters.patchPayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.commitmentPlanName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/commitmentPlans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlanListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listInResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlanListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlanListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommitmentPlanListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
