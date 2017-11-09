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
    define(['ApiClient', 'model/AddGuidsToCollectionRequest', 'model/CreateLabelledCollectionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddGuidsToCollectionRequest'), require('../model/CreateLabelledCollectionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.LabelledcollectioncontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.AddGuidsToCollectionRequest, root.Id4iApi.CreateLabelledCollectionRequest);
  }
}(this, function(ApiClient, AddGuidsToCollectionRequest, CreateLabelledCollectionRequest) {
  'use strict';

  /**
   * Labelledcollectioncontroller service.
   * @module api/LabelledcollectioncontrollerApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new LabelledcollectioncontrollerApi. 
   * @alias module:api/LabelledcollectioncontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsingPOST operation.
     * @callback module:api/LabelledcollectioncontrollerApi~createUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create
     * @param {module:model/CreateLabelledCollectionRequest} createGUIDInfo createGUIDInfo
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~createUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/v1/collection/labelled', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUsingPUT1 operation.
     * @callback module:api/LabelledcollectioncontrollerApi~createUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create
     * @param {module:model/AddGuidsToCollectionRequest} info info
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~createUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.createUsingPUT1 = function(info, opts, callback) {
      opts = opts || {};
      var postBody = info;

      // verify the required parameter 'info' is set
      if (info === undefined || info === null) {
        throw new Error("Missing the required parameter 'info' when calling createUsingPUT1");
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/api/v1/collection/labelled/elements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
