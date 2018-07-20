/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.4
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
    define(['ApiClient', 'model/ApiError', 'model/TransferReceiveInfo', 'model/TransferSendInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/TransferReceiveInfo'), require('../model/TransferSendInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.TransferApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.TransferReceiveInfo, root.Id4iApi.TransferSendInfo);
  }
}(this, function(ApiClient, ApiError, TransferReceiveInfo, TransferSendInfo) {
  'use strict';

  /**
   * Transfer service.
   * @module api/TransferApi
   * @version 0.8.4
   */

  /**
   * Constructs a new TransferApi. 
   * @alias module:api/TransferApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getReceiveInfo operation.
     * @callback module:api/TransferApi~getReceiveInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferReceiveInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show transfer information
     * @param {String} id4n The ID4N to retrieve information about
     * @param {module:api/TransferApi~getReceiveInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferReceiveInfo}
     */
    this.getReceiveInfo = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getReceiveInfo");
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

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = TransferReceiveInfo;

      return this.apiClient.callApi(
        '/api/v1/transfers/{id4n}/receiveInfo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSendInfo operation.
     * @callback module:api/TransferApi~getSendInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferSendInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show transfer preparation information
     * @param {String} id4n The ID4N to retrieve information about
     * @param {module:api/TransferApi~getSendInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransferSendInfo}
     */
    this.getSendInfo = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getSendInfo");
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

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = TransferSendInfo;

      return this.apiClient.callApi(
        '/api/v1/transfers/{id4n}/sendInfo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the prepare operation.
     * @callback module:api/TransferApi~prepareCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Prepare an object for transfer
     * @param {String} id4n The ID4N to prepare for transfer
     * @param {module:model/TransferSendInfo} request Transfer preparation status
     * @param {module:api/TransferApi~prepareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.prepare = function(id4n, request, callback) {
      var postBody = request;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling prepare");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling prepare");
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

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/transfers/{id4n}/sendInfo', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the receive operation.
     * @callback module:api/TransferApi~receiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership
     * Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo
     * @param {String} id4n This ID4N identifies the object to take hold of
     * @param {module:model/TransferReceiveInfo} request Required information to receive an id4n object
     * @param {module:api/TransferApi~receiveCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.receive = function(id4n, request, callback) {
      var postBody = request;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling receive");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling receive");
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

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/transfers/{id4n}/receiveInfo', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
