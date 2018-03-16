/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.2-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError', 'model/AppInfoPresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/AppInfoPresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.MetaInformationApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.AppInfoPresentation);
  }
}(this, function(ApiClient, ApiError, AppInfoPresentation) {
  'use strict';

  /**
   * MetaInformation service.
   * @module api/MetaInformationApi
   * @version 0.3.2-SNAPSHOT
   */

  /**
   * Constructs a new MetaInformationApi. 
   * @alias module:api/MetaInformationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the applicationInfo operation.
     * @callback module:api/MetaInformationApi~applicationInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppInfoPresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve version information about ID4i
     * Retrieving version information about ID4i.
     * @param {module:api/MetaInformationApi~applicationInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppInfoPresentation}
     */
    this.applicationInfo = function(callback) {
      var postBody = null;


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
      var returnType = AppInfoPresentation;

      return this.apiClient.callApi(
        '/api/v1/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
