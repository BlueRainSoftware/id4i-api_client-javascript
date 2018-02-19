/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.2.2-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ImagesApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError);
  }
}(this, function(ApiClient, ApiError) {
  'use strict';

  /**
   * Images service.
   * @module api/ImagesApi
   * @version 0.2.2-SNAPSHOT
   */

  /**
   * Constructs a new ImagesApi. 
   * @alias module:api/ImagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resolveImageUsingGET operation.
     * @callback module:api/ImagesApi~resolveImageUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resolve image
     * @param {String} imageID The id of the image to be resolved.
     * @param {module:api/ImagesApi~resolveImageUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.resolveImageUsingGET = function(imageID, callback) {
      var postBody = null;

      // verify the required parameter 'imageID' is set
      if (imageID === undefined || imageID === null) {
        throw new Error("Missing the required parameter 'imageID' when calling resolveImageUsingGET");
      }


      var pathParams = {
        'imageID': imageID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/v1/public/image/{imageID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
