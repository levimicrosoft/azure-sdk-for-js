/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Controllers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DevSpacesManagementClient } from "../devSpacesManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  Controller,
  ControllersListByResourceGroupNextOptionalParams,
  ControllersListByResourceGroupOptionalParams,
  ControllersListByResourceGroupResponse,
  ControllersListNextOptionalParams,
  ControllersListOptionalParams,
  ControllersListResponse,
  ControllersGetOptionalParams,
  ControllersGetResponse,
  ControllersCreateOptionalParams,
  ControllersCreateResponse,
  ControllersDeleteOptionalParams,
  ControllerUpdateParameters,
  ControllersUpdateOptionalParams,
  ControllersUpdateResponse,
  ListConnectionDetailsParameters,
  ControllersListConnectionDetailsOptionalParams,
  ControllersListConnectionDetailsResponse,
  ControllersListByResourceGroupNextResponse,
  ControllersListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Controllers operations. */
export class ControllersImpl implements Controllers {
  private readonly client: DevSpacesManagementClient;

  /**
   * Initialize a new instance of the class Controllers class.
   * @param client Reference to the service client
   */
  constructor(client: DevSpacesManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and
   * subscription.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ControllersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Controller> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ControllersListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Controller[]> {
    let result: ControllersListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ControllersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Controller> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the Azure Dev Spaces Controllers with their properties in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ControllersListOptionalParams
  ): PagedAsyncIterableIterator<Controller> {
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
    options?: ControllersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Controller[]> {
    let result: ControllersListResponse;
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
    options?: ControllersListOptionalParams
  ): AsyncIterableIterator<Controller> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the properties for an Azure Dev Spaces Controller.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: ControllersGetOptionalParams
  ): Promise<ControllersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec
    );
  }

  /**
   * Creates an Azure Dev Spaces Controller with the specified create parameters.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param controller Controller create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    name: string,
    controller: Controller,
    options?: ControllersCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ControllersCreateResponse>,
      ControllersCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ControllersCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, controller, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates an Azure Dev Spaces Controller with the specified create parameters.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param controller Controller create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    name: string,
    controller: Controller,
    options?: ControllersCreateOptionalParams
  ): Promise<ControllersCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      name,
      controller,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Dev Spaces Controller.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    name: string,
    options?: ControllersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing Azure Dev Spaces Controller.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: ControllersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Updates the properties of an existing Azure Dev Spaces Controller with the specified update
   * parameters.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param controllerUpdateParameters Parameters for updating the Azure Dev Spaces Controller.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    controllerUpdateParameters: ControllerUpdateParameters,
    options?: ControllersUpdateOptionalParams
  ): Promise<ControllersUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, controllerUpdateParameters, options },
      updateOperationSpec
    );
  }

  /**
   * Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and
   * subscription.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ControllersListByResourceGroupOptionalParams
  ): Promise<ControllersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the Azure Dev Spaces Controllers with their properties in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ControllersListOptionalParams
  ): Promise<ControllersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param name Name of the resource.
   * @param listConnectionDetailsParameters Parameters for listing connection details of Azure Dev Spaces
   *                                        Controller.
   * @param options The options parameters.
   */
  listConnectionDetails(
    resourceGroupName: string,
    name: string,
    listConnectionDetailsParameters: ListConnectionDetailsParameters,
    options?: ControllersListConnectionDetailsOptionalParams
  ): Promise<ControllersListConnectionDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, listConnectionDetailsParameters, options },
      listConnectionDetailsOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ControllersListByResourceGroupNextOptionalParams
  ): Promise<ControllersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ControllersListNextOptionalParams
  ): Promise<ControllersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Controller
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Controller
    },
    201: {
      bodyMapper: Mappers.Controller
    },
    202: {
      bodyMapper: Mappers.Controller
    },
    204: {
      bodyMapper: Mappers.Controller
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  requestBody: Parameters.controller,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Controller
    },
    201: {
      bodyMapper: Mappers.Controller
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  requestBody: Parameters.controllerUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ControllerList
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevSpaces/controllers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ControllerList
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionDetailsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}/listConnectionDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ControllerConnectionDetailsList
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  requestBody: Parameters.listConnectionDetailsParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ControllerList
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ControllerList
    },
    default: {
      bodyMapper: Mappers.DevSpacesErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
