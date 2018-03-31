/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.4.0
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
    define(['ApiClient', 'model/ApiError', 'model/Route', 'model/RoutingFile', 'model/RoutingFileRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/Route'), require('../model/RoutingFile'), require('../model/RoutingFileRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.RoutingApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.Route, root.Id4iApi.RoutingFile, root.Id4iApi.RoutingFileRequest);
  }
}(this, function(ApiClient, ApiError, Route, RoutingFile, RoutingFileRequest) {
  'use strict';

  /**
   * Routing service.
   * @module api/RoutingApi
   * @version 0.4.0
   */

  /**
   * Constructs a new RoutingApi. 
   * @alias module:api/RoutingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllWebRoutes operation.
     * @callback module:api/RoutingApi~getAllWebRoutesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Route>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all web routes
     * Retrieves public and private web routes and interpolates them
     * @param {String} id4n id4n
     * @param {module:api/RoutingApi~getAllWebRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Route>}
     */
    this.getAllWebRoutes = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getAllWebRoutes");
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
      var returnType = [Route];

      return this.apiClient.callApi(
        '/api/v1/routingfiles/{id4n}/routes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoute operation.
     * @callback module:api/RoutingApi~getRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Route} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve current route of a GUID (or ID4N)
     * @param {String} id4n id4n
     * @param {String} type The type of route you want to have
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.privateRoutes privateRoutes
     * @param {Boolean} opts.publicRoutes publicRoutes
     * @param {Boolean} opts.interpolate interpolate
     * @param {module:api/RoutingApi~getRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Route}
     */
    this.getRoute = function(id4n, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getRoute");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getRoute");
      }


      var pathParams = {
        'id4n': id4n,
        'type': type
      };
      var queryParams = {
        'privateRoutes': opts['privateRoutes'],
        'publicRoutes': opts['publicRoutes'],
        'interpolate': opts['interpolate'],
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
      var returnType = Route;

      return this.apiClient.callApi(
        '/api/v1/routingfiles/{id4n}/routes/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoutingFile operation.
     * @callback module:api/RoutingApi~getRoutingFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoutingFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve routing file
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {Number} opts.organizationId organizationId
     * @param {module:api/RoutingApi~getRoutingFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoutingFile}
     */
    this.getRoutingFile = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = opts['organizationId'];

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getRoutingFile");
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
      var returnType = RoutingFile;

      return this.apiClient.callApi(
        '/api/v1/routingfiles/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRoutingFile operation.
     * @callback module:api/RoutingApi~updateRoutingFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Store routing file
     * @param {module:model/RoutingFileRequest} rfr rfr
     * @param {String} id4n id4n
     * @param {module:api/RoutingApi~updateRoutingFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRoutingFile = function(rfr, id4n, callback) {
      var postBody = rfr;

      // verify the required parameter 'rfr' is set
      if (rfr === undefined || rfr === null) {
        throw new Error("Missing the required parameter 'rfr' when calling updateRoutingFile");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateRoutingFile");
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
        '/api/v1/routingfiles/{id4n}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
