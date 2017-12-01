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
    define(['ApiClient', 'model/ApiError', 'model/WhoIsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/WhoIsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.PublicServicesApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.WhoIsResponse);
  }
}(this, function(ApiClient, ApiError, WhoIsResponse) {
  'use strict';

  /**
   * PublicServices service.
   * @module api/PublicServicesApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new PublicServicesApi. 
   * @alias module:api/PublicServicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the go operation.
     * @callback module:api/PublicServicesApi~goCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiError} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forward
     * Forwarding to the designated route defined in the routing,
     * @param {String} guid guid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/PublicServicesApi~goCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiError}
     */
    this.go = function(guid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling go");
      }


      var pathParams = {
        'guid': guid
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
      var returnType = ApiError;

      return this.apiClient.callApi(
        '/go/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resolveImageUsingGET operation.
     * @callback module:api/PublicServicesApi~resolveImageUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resolve image
     * @param {String} imageID The id of the image to be resolved.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/PublicServicesApi~resolveImageUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.resolveImageUsingGET = function(imageID, opts, callback) {
      opts = opts || {};
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
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/v1/public/image/{imageID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resolveWhoIsEntry operation.
     * @callback module:api/PublicServicesApi~resolveWhoIsEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhoIsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resolve owner of id4n
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/PublicServicesApi~resolveWhoIsEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhoIsResponse}
     */
    this.resolveWhoIsEntry = function(id4n, opts, callback) {
      opts = opts || {};
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
      var headerParams = {
        'Authorization': opts['authorization'],
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json;charset=UTF-8'];
      var accepts = ['application/xml', 'application/json;charset=UTF-8'];
      var returnType = WhoIsResponse;

      return this.apiClient.callApi(
        '/whois/{id4n}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
