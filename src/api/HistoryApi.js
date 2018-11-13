/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.5-SNAPSHOT
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiError', 'model/HistoryItem', 'model/HistoryItemUpdate', 'model/PaginatedHistoryItemResponse', 'model/Visibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/HistoryItem'), require('../model/HistoryItemUpdate'), require('../model/PaginatedHistoryItemResponse'), require('../model/Visibility'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.HistoryApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.HistoryItem, root.Id4iApi.HistoryItemUpdate, root.Id4iApi.PaginatedHistoryItemResponse, root.Id4iApi.Visibility);
  }
}(this, function(ApiClient, ApiError, HistoryItem, HistoryItemUpdate, PaginatedHistoryItemResponse, Visibility) {
  'use strict';

  /**
   * History service.
   * @module api/HistoryApi
   * @version 0.9.5-SNAPSHOT
   */

  /**
   * Constructs a new HistoryApi. 
   * @alias module:api/HistoryApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItem operation.
     * @callback module:api/HistoryApi~addItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add history item
     * Add a new history item
     * @param {module:model/HistoryItem} historyItem The history item to publish
     * @param {String} id4n GUID to retrieve the history for
     * @param {module:api/HistoryApi~addItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addItem = function(historyItem, id4n, callback) {
      var postBody = historyItem;

      // verify the required parameter 'historyItem' is set
      if (historyItem === undefined || historyItem === null) {
        throw new Error("Missing the required parameter 'historyItem' when calling addItem");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling addItem");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filteredList operation.
     * @callback module:api/HistoryApi~filteredListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedHistoryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List history
     * Lists the history of a GUID
     * @param {String} id4n GUID to retrieve the history for
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date time as UTC Date-Time format
     * @param {Boolean} opts.includePrivate Also return private history entries (default to true)
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {Number} opts.offset Start with the n-th element
     * @param {String} opts.organization Show only entries created by one of the given organizations. This parameter can be used multiple times.
     * @param {Array.<String>} opts.qualifier Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.
     * @param {Date} opts.toDate To date time as UTC Date-Time format
     * @param {Array.<module:model/String>} opts.type Show only entries matching one of the given history item types. This parameter can be used multiple times.
     * @param {module:api/HistoryApi~filteredListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedHistoryItemResponse}
     */
    this.filteredList = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling filteredList");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
        'fromDate': opts['fromDate'],
        'includePrivate': opts['includePrivate'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'organization': opts['organization'],
        'toDate': opts['toDate'],
      };
      var collectionQueryParams = {
        'qualifier': {
          value: opts['qualifier'],
          collectionFormat: 'multi'
        },
        'type': {
          value: opts['type'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedHistoryItemResponse;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/HistoryApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedHistoryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * DEPRECATED - List history
     * DEPRECATED - please use filteredList with organization parameter to achieve the same functionality
     * @param {String} id4n GUID to retrieve the history for
     * @param {String} organizationId organizationId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePrivate Also return private history entries (default to true)
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {Number} opts.offset Start with the n-th element
     * @param {module:api/HistoryApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedHistoryItemResponse}
     */
    this.list = function(id4n, organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling list");
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling list");
      }


      var pathParams = {
        'id4n': id4n,
        'organizationId': organizationId
      };
      var queryParams = {
        'includePrivate': opts['includePrivate'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedHistoryItemResponse;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}/{organizationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveItem operation.
     * @callback module:api/HistoryApi~retrieveItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedHistoryItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get history item
     * @param {String} id4n GUID to retrieve the history for
     * @param {String} organizationId organizationId
     * @param {Number} sequenceId sequenceId
     * @param {module:api/HistoryApi~retrieveItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedHistoryItemResponse}
     */
    this.retrieveItem = function(id4n, organizationId, sequenceId, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling retrieveItem");
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling retrieveItem");
      }

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling retrieveItem");
      }


      var pathParams = {
        'id4n': id4n,
        'organizationId': organizationId,
        'sequenceId': sequenceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedHistoryItemResponse;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}/{organizationId}/{sequenceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItem operation.
     * @callback module:api/HistoryApi~updateItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoryItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update history item
     * @param {String} id4n GUID to retrieve the history for
     * @param {String} organizationId organizationId
     * @param {Number} sequenceId sequenceId
     * @param {module:model/HistoryItemUpdate} update update
     * @param {module:api/HistoryApi~updateItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoryItem}
     */
    this.updateItem = function(id4n, organizationId, sequenceId, update, callback) {
      var postBody = update;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateItem");
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateItem");
      }

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling updateItem");
      }

      // verify the required parameter 'update' is set
      if (update === undefined || update === null) {
        throw new Error("Missing the required parameter 'update' when calling updateItem");
      }


      var pathParams = {
        'id4n': id4n,
        'organizationId': organizationId,
        'sequenceId': sequenceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = HistoryItem;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}/{organizationId}/{sequenceId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemVisibility operation.
     * @callback module:api/HistoryApi~updateItemVisibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoryItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set history item visibility
     * @param {String} id4n GUID to retrieve the history for
     * @param {String} organizationId organizationId
     * @param {Number} sequenceId sequenceId
     * @param {module:model/Visibility} visibility History item visibility restrictions
     * @param {module:api/HistoryApi~updateItemVisibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoryItem}
     */
    this.updateItemVisibility = function(id4n, organizationId, sequenceId, visibility, callback) {
      var postBody = visibility;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateItemVisibility");
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateItemVisibility");
      }

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling updateItemVisibility");
      }

      // verify the required parameter 'visibility' is set
      if (visibility === undefined || visibility === null) {
        throw new Error("Missing the required parameter 'visibility' when calling updateItemVisibility");
      }


      var pathParams = {
        'id4n': id4n,
        'organizationId': organizationId,
        'sequenceId': sequenceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = HistoryItem;

      return this.apiClient.callApi(
        '/api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
