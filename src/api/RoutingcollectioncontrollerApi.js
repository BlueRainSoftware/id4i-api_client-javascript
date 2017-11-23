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
    define(['ApiClient', 'model/ApiError', 'model/CreateRoutingCollectionRequest', 'model/GuidCollection', 'model/Id4n', 'model/ListOfId4ns', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/CreateRoutingCollectionRequest'), require('../model/GuidCollection'), require('../model/Id4n'), require('../model/ListOfId4ns'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.RoutingcollectioncontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.CreateRoutingCollectionRequest, root.Id4iApi.GuidCollection, root.Id4iApi.Id4n, root.Id4iApi.ListOfId4ns, root.Id4iApi.ResponseEntity);
  }
}(this, function(ApiClient, ApiError, CreateRoutingCollectionRequest, GuidCollection, Id4n, ListOfId4ns, ResponseEntity) {
  'use strict';

  /**
   * Routingcollectioncontroller service.
   * @module api/RoutingcollectioncontrollerApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new RoutingcollectioncontrollerApi. 
   * @alias module:api/RoutingcollectioncontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addElementsToRoutingCollectionUsingPUT operation.
     * @callback module:api/RoutingcollectioncontrollerApi~addElementsToRoutingCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addElementsToRoutingCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~addElementsToRoutingCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addElementsToRoutingCollectionUsingPUT = function(collectionGuid, listOfGuids, opts, callback) {
      opts = opts || {};
      var postBody = listOfGuids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addElementsToRoutingCollectionUsingPUT");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling addElementsToRoutingCollectionUsingPUT");
      }


      var pathParams = {
        'collectionGuid': collectionGuid
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
        '/api/v1/collections/routing/{collectionGuid}/elements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSingleElementToRoutingCollectionUsingPUT operation.
     * @callback module:api/RoutingcollectioncontrollerApi~addSingleElementToRoutingCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addSingleElementToRoutingCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~addSingleElementToRoutingCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addSingleElementToRoutingCollectionUsingPUT = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addSingleElementToRoutingCollectionUsingPUT");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling addSingleElementToRoutingCollectionUsingPUT");
      }


      var pathParams = {
        'collectionGuid': collectionGuid,
        'elementGuid': elementGuid
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
        '/api/v1/collections/routing/{collectionGuid}/elements/{elementGuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRoutingCollectionUsingPOST operation.
     * @callback module:api/RoutingcollectioncontrollerApi~createRoutingCollectionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Id4n} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRoutingCollection
     * @param {module:model/CreateRoutingCollectionRequest} createInfo createInfo
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~createRoutingCollectionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Id4n}
     */
    this.createRoutingCollectionUsingPOST = function(createInfo, opts, callback) {
      opts = opts || {};
      var postBody = createInfo;

      // verify the required parameter 'createInfo' is set
      if (createInfo === undefined || createInfo === null) {
        throw new Error("Missing the required parameter 'createInfo' when calling createRoutingCollectionUsingPOST");
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
      var returnType = Id4n;

      return this.apiClient.callApi(
        '/api/v1/collections/routing', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRoutingCollectionUsingDELETE operation.
     * @callback module:api/RoutingcollectioncontrollerApi~deleteRoutingCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteRoutingCollection
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~deleteRoutingCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteRoutingCollectionUsingDELETE = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling deleteRoutingCollectionUsingDELETE");
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
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/collections/routing/{id4n}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findById4nUsingGET3 operation.
     * @callback module:api/RoutingcollectioncontrollerApi~findById4nUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GuidCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findById4n
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~findById4nUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuidCollection}
     */
    this.findById4nUsingGET3 = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling findById4nUsingGET3");
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
      var returnType = GuidCollection;

      return this.apiClient.callApi(
        '/api/v1/collections/routing/{id4n}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeElementsFromRoutingCollectionUsingDELETE operation.
     * @callback module:api/RoutingcollectioncontrollerApi~removeElementsFromRoutingCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeElementsFromRoutingCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~removeElementsFromRoutingCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeElementsFromRoutingCollectionUsingDELETE = function(collectionGuid, listOfGuids, opts, callback) {
      opts = opts || {};
      var postBody = listOfGuids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeElementsFromRoutingCollectionUsingDELETE");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling removeElementsFromRoutingCollectionUsingDELETE");
      }


      var pathParams = {
        'collectionGuid': collectionGuid
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
        '/api/v1/collections/routing/{collectionGuid}/elements', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSingleElementFromRoutingCollectionUsingDELETE operation.
     * @callback module:api/RoutingcollectioncontrollerApi~removeSingleElementFromRoutingCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeSingleElementFromRoutingCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/RoutingcollectioncontrollerApi~removeSingleElementFromRoutingCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeSingleElementFromRoutingCollectionUsingDELETE = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeSingleElementFromRoutingCollectionUsingDELETE");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling removeSingleElementFromRoutingCollectionUsingDELETE");
      }


      var pathParams = {
        'collectionGuid': collectionGuid,
        'elementGuid': elementGuid
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
        '/api/v1/collections/routing/{collectionGuid}/elements/{elementGuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
