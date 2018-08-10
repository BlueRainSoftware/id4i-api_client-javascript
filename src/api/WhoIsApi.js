/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.1-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError', 'model/WhoIsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/WhoIsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.WhoIsApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.WhoIsResponse);
  }
}(this, function(ApiClient, ApiError, WhoIsResponse) {
  'use strict';

  /**
   * WhoIs service.
   * @module api/WhoIsApi
   * @version 0.9.1-SNAPSHOT
   */

  /**
   * Constructs a new WhoIsApi. 
   * @alias module:api/WhoIsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resolveWhoIsEntry operation.
     * @callback module:api/WhoIsApi~resolveWhoIsEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhoIsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resolve owner of id4n
     * @param {String} id4n id4n
     * @param {module:api/WhoIsApi~resolveWhoIsEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhoIsResponse}
     */
    this.resolveWhoIsEntry = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling resolveWhoIsEntry");
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

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = WhoIsResponse;

      return this.apiClient.callApi(
        '/whois/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
