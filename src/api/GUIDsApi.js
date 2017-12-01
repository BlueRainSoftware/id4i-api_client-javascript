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
    define(['ApiClient', 'model/ApiError', 'model/CreateGuidRequest', 'model/ListOfId4ns'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/CreateGuidRequest'), require('../model/ListOfId4ns'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.GUIDsApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.CreateGuidRequest, root.Id4iApi.ListOfId4ns);
  }
}(this, function(ApiClient, ApiError, CreateGuidRequest, ListOfId4ns) {
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
     * Callback function to receive the result of the createUsingPOST operation.
     * @callback module:api/GUIDsApi~createUsingPOSTCallback
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
     * @param {module:api/GUIDsApi~createUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfId4ns}
     */
    this.createUsingPOST = function(createGUIDInfo, opts, callback) {
      opts = opts || {};
      var postBody = createGUIDInfo;

      // verify the required parameter 'createGUIDInfo' is set
      if (createGUIDInfo === undefined || createGUIDInfo === null) {
        throw new Error("Missing the required parameter 'createGUIDInfo' when calling createUsingPOST");
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
  };

  return exports;
}));
