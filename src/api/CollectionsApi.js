/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.3
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
    define(['ApiClient', 'model/ApiError', 'model/CreateCollectionRequest', 'model/GuidCollection', 'model/Id4n', 'model/ListOfId4ns', 'model/PaginatedGuidCollection', 'model/PaginatedGuidResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/CreateCollectionRequest'), require('../model/GuidCollection'), require('../model/Id4n'), require('../model/ListOfId4ns'), require('../model/PaginatedGuidCollection'), require('../model/PaginatedGuidResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.CollectionsApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.CreateCollectionRequest, root.Id4iApi.GuidCollection, root.Id4iApi.Id4n, root.Id4iApi.ListOfId4ns, root.Id4iApi.PaginatedGuidCollection, root.Id4iApi.PaginatedGuidResponse);
  }
}(this, function(ApiClient, ApiError, CreateCollectionRequest, GuidCollection, Id4n, ListOfId4ns, PaginatedGuidCollection, PaginatedGuidResponse) {
  'use strict';

  /**
   * Collections service.
   * @module api/CollectionsApi
   * @version 0.8.3
   */

  /**
   * Constructs a new CollectionsApi. 
   * @alias module:api/CollectionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addElementsToCollection operation.
     * @callback module:api/CollectionsApi~addElementsToCollectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add elements to collection
     * @param {String} id4n id4n
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {module:api/CollectionsApi~addElementsToCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addElementsToCollection = function(id4n, listOfGuids, callback) {
      var postBody = listOfGuids;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling addElementsToCollection");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling addElementsToCollection");
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
        '/api/v1/collections/{id4n}/elements', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCollection operation.
     * @callback module:api/CollectionsApi~createCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Id4n} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create collection
     * @param {module:model/CreateCollectionRequest} createInfo createInfo
     * @param {module:api/CollectionsApi~createCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Id4n}
     */
    this.createCollection = function(createInfo, callback) {
      var postBody = createInfo;

      // verify the required parameter 'createInfo' is set
      if (createInfo === undefined || createInfo === null) {
        throw new Error("Missing the required parameter 'createInfo' when calling createCollection");
      }


      var pathParams = {
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
      var returnType = Id4n;

      return this.apiClient.callApi(
        '/api/v1/collections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollection operation.
     * @callback module:api/CollectionsApi~deleteCollectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete collection
     * @param {String} id4n id4n
     * @param {module:api/CollectionsApi~deleteCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCollection = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling deleteCollection");
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
        '/api/v1/collections/{id4n}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findCollection operation.
     * @callback module:api/CollectionsApi~findCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GuidCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find collection
     * @param {String} id4n id4n
     * @param {module:api/CollectionsApi~findCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuidCollection}
     */
    this.findCollection = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling findCollection");
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
      var returnType = GuidCollection;

      return this.apiClient.callApi(
        '/api/v1/collections/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCollectionsOfOrganization operation.
     * @callback module:api/CollectionsApi~getAllCollectionsOfOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedGuidCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collections of organization
     * Retrieving all collections of an organization in a paginated manner.
     * @param {String} organizationId The namespace of the organization
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:model/String} opts.type Filter by this type
     * @param {String} opts.label Filter by this label
     * @param {String} opts.labelPrefix Filter by this label prefix
     * @param {module:api/CollectionsApi~getAllCollectionsOfOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedGuidCollection}
     */
    this.getAllCollectionsOfOrganization = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAllCollectionsOfOrganization");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'type': opts['type'],
        'label': opts['label'],
        'labelPrefix': opts['labelPrefix'],
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
      var returnType = PaginatedGuidCollection;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/collections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listElementsOfCollection operation.
     * @callback module:api/CollectionsApi~listElementsOfCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedGuidResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List contents of the collection
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/CollectionsApi~listElementsOfCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedGuidResponse}
     */
    this.listElementsOfCollection = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listElementsOfCollection");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = PaginatedGuidResponse;

      return this.apiClient.callApi(
        '/api/v1/collections/{id4n}/elements', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeElementsFromCollection operation.
     * @callback module:api/CollectionsApi~removeElementsFromCollectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove elements from collection
     * @param {String} id4n id4n
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {module:api/CollectionsApi~removeElementsFromCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeElementsFromCollection = function(id4n, listOfGuids, callback) {
      var postBody = listOfGuids;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling removeElementsFromCollection");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling removeElementsFromCollection");
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
        '/api/v1/collections/{id4n}/elements', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCollection operation.
     * @callback module:api/CollectionsApi~updateCollectionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update collection
     * Update collection changing only the given values
     * @param {String} id4n id4n
     * @param {module:model/GuidCollection} request request
     * @param {module:api/CollectionsApi~updateCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateCollection = function(id4n, request, callback) {
      var postBody = request;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateCollection");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateCollection");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/collections/{id4n}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
