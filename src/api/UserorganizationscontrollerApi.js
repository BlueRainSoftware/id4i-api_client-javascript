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
    define(['ApiClient', 'model/ApiError', 'model/PaginatedResponseOrganization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/PaginatedResponseOrganization'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.UserorganizationscontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.PaginatedResponseOrganization);
  }
}(this, function(ApiClient, ApiError, PaginatedResponseOrganization) {
  'use strict';

  /**
   * Userorganizationscontroller service.
   * @module api/UserorganizationscontrollerApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new UserorganizationscontrollerApi. 
   * @alias module:api/UserorganizationscontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOrganizationsUsingGET operation.
     * @callback module:api/UserorganizationscontrollerApi~getOrganizationsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResponseOrganization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrganizations
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {String} opts.role role
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {module:api/UserorganizationscontrollerApi~getOrganizationsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResponseOrganization}
     */
    this.getOrganizationsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'role': opts['role'],
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
      var returnType = PaginatedResponseOrganization;

      return this.apiClient.callApi(
        '/api/v1/user/organizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
