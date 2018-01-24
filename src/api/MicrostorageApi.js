/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.3
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
    define(['ApiClient', 'model/ApiError', 'model/InputStreamResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/InputStreamResource'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.MicrostorageApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.InputStreamResource);
  }
}(this, function(ApiClient, ApiError, InputStreamResource) {
  'use strict';

  /**
   * Microstorage service.
   * @module api/MicrostorageApi
   * @version 0.1.3
   */

  /**
   * Constructs a new MicrostorageApi. 
   * @alias module:api/MicrostorageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the read operation.
     * @callback module:api/MicrostorageApi~readCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InputStreamResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read data from microstorage
     * @param {Number} organization organization
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/MicrostorageApi~readCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InputStreamResource}
     */
    this.read = function(organization, id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling read");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling read");
      }


      var pathParams = {
        'organization': organization,
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
      var returnType = InputStreamResource;

      return this.apiClient.callApi(
        '/api/v1/microstorage/{id4n}/{organization}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the write operation.
     * @callback module:api/MicrostorageApi~writeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Write data to microstorage
     * @param {Number} organization organization
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token
     * @param {String} opts.acceptLanguage Requested language
     * @param {String} opts.contentType Content-Type
     * @param {Number} opts.contentLength Content-Length
     * @param {module:api/MicrostorageApi~writeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.write = function(organization, id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling write");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling write");
      }


      var pathParams = {
        'organization': organization,
        'id4n': id4n
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage'],
        'Content-Type': opts['contentType'],
        'Content-Length': opts['contentLength']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['*/*'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/microstorage/{id4n}/{organization}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
