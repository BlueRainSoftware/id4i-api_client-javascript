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
    define(['ApiClient', 'model/UserPresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserPresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.UserscontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.UserPresentation);
  }
}(this, function(ApiClient, UserPresentation) {
  'use strict';

  /**
   * Userscontroller service.
   * @module api/UserscontrollerApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new UserscontrollerApi. 
   * @alias module:api/UserscontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the findUserByUsernameUsingGET operation.
     * @callback module:api/UserscontrollerApi~findUserByUsernameUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findUserByUsername
     * @param {String} username username
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/UserscontrollerApi~findUserByUsernameUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPresentation}
     */
    this.findUserByUsernameUsingGET = function(username, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling findUserByUsernameUsingGET");
      }


      var pathParams = {
        'username': username
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
      var returnType = UserPresentation;

      return this.apiClient.callApi(
        '/api/v1/users/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));