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
    define(['ApiClient', 'model/ApiError', 'model/ListOfId4ns', 'model/PaginatedResponsestring', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/ListOfId4ns'), require('../model/PaginatedResponsestring'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.CollectionscontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.ListOfId4ns, root.Id4iApi.PaginatedResponsestring, root.Id4iApi.ResponseEntity);
  }
}(this, function(ApiClient, ApiError, ListOfId4ns, PaginatedResponsestring, ResponseEntity) {
  'use strict';

  /**
   * Collectionscontroller service.
   * @module api/CollectionscontrollerApi
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new CollectionscontrollerApi. 
   * @alias module:api/CollectionscontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addElementsToCollectionUsingPUT operation.
     * @callback module:api/CollectionscontrollerApi~addElementsToCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addElementsToCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/CollectionscontrollerApi~addElementsToCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addElementsToCollectionUsingPUT = function(collectionGuid, listOfGuids, opts, callback) {
      opts = opts || {};
      var postBody = listOfGuids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addElementsToCollectionUsingPUT");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling addElementsToCollectionUsingPUT");
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
        '/api/v1/collections/{collectionGuid}/elements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSingleElementToCollectionUsingPUT operation.
     * @callback module:api/CollectionscontrollerApi~addSingleElementToCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addSingleElementToCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/CollectionscontrollerApi~addSingleElementToCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addSingleElementToCollectionUsingPUT = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addSingleElementToCollectionUsingPUT");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling addSingleElementToCollectionUsingPUT");
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
        '/api/v1/collections/{collectionGuid}/elements/{elementGuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollectionUsingDELETE operation.
     * @callback module:api/CollectionscontrollerApi~deleteCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteCollection
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/CollectionscontrollerApi~deleteCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteCollectionUsingDELETE = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling deleteCollectionUsingDELETE");
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
        '/api/v1/collections/{id4n}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listContentsUsingGET operation.
     * @callback module:api/CollectionscontrollerApi~listContentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedResponsestring} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listContents
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {Number} opts.offset 
     * @param {Number} opts.limit 
     * @param {module:api/CollectionscontrollerApi~listContentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedResponsestring}
     */
    this.listContentsUsingGET = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listContentsUsingGET");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
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
      var returnType = PaginatedResponsestring;

      return this.apiClient.callApi(
        '/api/v1/collections/{id4n}/elements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeElementsFromCollectionUsingDELETE operation.
     * @callback module:api/CollectionscontrollerApi~removeElementsFromCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeElementsFromCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfId4ns} listOfGuids listOfGuids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/CollectionscontrollerApi~removeElementsFromCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeElementsFromCollectionUsingDELETE = function(collectionGuid, listOfGuids, opts, callback) {
      opts = opts || {};
      var postBody = listOfGuids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeElementsFromCollectionUsingDELETE");
      }

      // verify the required parameter 'listOfGuids' is set
      if (listOfGuids === undefined || listOfGuids === null) {
        throw new Error("Missing the required parameter 'listOfGuids' when calling removeElementsFromCollectionUsingDELETE");
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
        '/api/v1/collections/{collectionGuid}/elements', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSingleElementFromCollectionUsingDELETE operation.
     * @callback module:api/CollectionscontrollerApi~removeSingleElementFromCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeSingleElementFromCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/CollectionscontrollerApi~removeSingleElementFromCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeSingleElementFromCollectionUsingDELETE = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeSingleElementFromCollectionUsingDELETE");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling removeSingleElementFromCollectionUsingDELETE");
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
        '/api/v1/collections/{collectionGuid}/elements/{elementGuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));