/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.0.1-alpha
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiError', 'model/CreateGuidRequest', 'model/Guid', 'model/ListOfId4ns', 'model/PaginatedResponseGuid', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/CreateGuidRequest'), require('../model/Guid'), require('../model/ListOfId4ns'), require('../model/PaginatedResponseGuid'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.GUIDsApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.CreateGuidRequest, root.Id4iApi.Guid, root.Id4iApi.ListOfId4ns, root.Id4iApi.PaginatedResponseGuid, root.Id4iApi.ResponseEntity);
  }
}(this, function(ApiClient, ApiError, CreateGuidRequest, Guid, ListOfId4ns, PaginatedResponseGuid, ResponseEntity) {
  'use strict';

  /**
   * GUIDs service.
   * @module api/GUIDsApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new GUIDsApi. 
   * @alias module:api/GUIDsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createGuid operation.
     * @callback module:api/GUIDsApi~createGuidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfId4ns} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create GUID(s)
     * Creating one or more GUIDs with a specified length.
     * @param {module:model/CreateGuidRequest} createGUIDInfo createGUIDInfo
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/GUIDsApi~createGuidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfId4ns}
     */
    this.createGuid = function(createGUIDInfo, opts, callback) {
      opts = opts || {};
      var postBody = createGUIDInfo;

      // verify the required parameter 'createGUIDInfo' is set
      if (createGUIDInfo === undefined || createGUIDInfo === null) {
        throw new Error("Missing the required parameter 'createGUIDInfo' when calling createGuid");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = ListOfId4ns;

      return this.apiClient.callApi(
        '/api/v1/guids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuid operation.
     * @callback module:api/GUIDsApi~getGuidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Guid} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve GUID information
     * @param {String} id4n The GUID number
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/GUIDsApi~getGuidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Guid}
     */
    this.getGuid = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getGuid");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = Guid;

      return this.apiClient.callApi(
        '/api/v1/guids/{id4n}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuidsWithoutCollection operation.
     * @callback module:api/GUIDsApi~getGuidsWithoutCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResponseGuid} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve GUIDs not in any collection
     * @param {Number} organizationId Organization to search GUIDs for (required).
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {Number} opts.offset Start with the n-th element. 
     * @param {Number} opts.limit The maximum count of returned elements.
     * @param {module:api/GUIDsApi~getGuidsWithoutCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResponseGuid}
     */
    this.getGuidsWithoutCollection = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getGuidsWithoutCollection");
      }


      var pathParams = {
      };
      var queryParams = {
        'organizationId': organizationId,
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = PaginatedResponseGuid;

      return this.apiClient.callApi(
        '/api/v1/guids/withoutCollection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGuid operation.
     * @callback module:api/GUIDsApi~updateGuidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change GUID information.
     * Allows ownership transfer.
     * @param {String} id4n The GUID number
     * @param {module:model/Guid} request request
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/GUIDsApi~updateGuidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.updateGuid = function(id4n, request, opts, callback) {
      opts = opts || {};
      var postBody = request;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateGuid");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateGuid");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/guids/{id4n}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
