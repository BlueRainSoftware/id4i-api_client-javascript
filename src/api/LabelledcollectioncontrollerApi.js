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
    define(['ApiClient', 'model/ApiError', 'model/CreateLabelledCollectionRequest', 'model/GuidCollection', 'model/ListOfGuids', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/CreateLabelledCollectionRequest'), require('../model/GuidCollection'), require('../model/ListOfGuids'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.LabelledcollectioncontrollerApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.CreateLabelledCollectionRequest, root.Id4iApi.GuidCollection, root.Id4iApi.ListOfGuids, root.Id4iApi.ResponseEntity);
  }
}(this, function(ApiClient, ApiError, CreateLabelledCollectionRequest, GuidCollection, ListOfGuids, ResponseEntity) {
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
     * Callback function to receive the result of the addElementsToLabelledCollectionUsingPUT operation.
     * @callback module:api/LabelledcollectioncontrollerApi~addElementsToLabelledCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addElementsToLabelledCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfGuids} guids guids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~addElementsToLabelledCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addElementsToLabelledCollectionUsingPUT = function(collectionGuid, guids, opts, callback) {
      opts = opts || {};
      var postBody = guids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addElementsToLabelledCollectionUsingPUT");
      }

      // verify the required parameter 'guids' is set
      if (guids === undefined || guids === null) {
        throw new Error("Missing the required parameter 'guids' when calling addElementsToLabelledCollectionUsingPUT");
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
        '/api/v1/collections/labelled/{collectionGuid}/elements', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSingleElementToLabelledCollectionUsingPUT operation.
     * @callback module:api/LabelledcollectioncontrollerApi~addSingleElementToLabelledCollectionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addSingleElementToLabelledCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~addSingleElementToLabelledCollectionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.addSingleElementToLabelledCollectionUsingPUT = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling addSingleElementToLabelledCollectionUsingPUT");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling addSingleElementToLabelledCollectionUsingPUT");
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
        '/api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createLabelledCollectionUsingPOST operation.
     * @callback module:api/LabelledcollectioncontrollerApi~createLabelledCollectionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfGuids} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createLabelledCollection
     * @param {module:model/CreateLabelledCollectionRequest} createGUIDInfo createGUIDInfo
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~createLabelledCollectionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfGuids}
     */
    this.createLabelledCollectionUsingPOST = function(createGUIDInfo, opts, callback) {
      opts = opts || {};
      var postBody = createGUIDInfo;

      // verify the required parameter 'createGUIDInfo' is set
      if (createGUIDInfo === undefined || createGUIDInfo === null) {
        throw new Error("Missing the required parameter 'createGUIDInfo' when calling createLabelledCollectionUsingPOST");
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
      var returnType = ListOfGuids;

      return this.apiClient.callApi(
        '/api/v1/collections/labelled', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLabelledCollectionUsingDELETE operation.
     * @callback module:api/LabelledcollectioncontrollerApi~deleteLabelledCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteLabelledCollection
     * @param {String} guid guid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~deleteLabelledCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteLabelledCollectionUsingDELETE = function(guid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling deleteLabelledCollectionUsingDELETE");
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
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/collections/labelled/{guid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findByGuidUsingGET operation.
     * @callback module:api/LabelledcollectioncontrollerApi~findByGuidUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GuidCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findByGuid
     * @param {String} guid guid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~findByGuidUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuidCollection}
     */
    this.findByGuidUsingGET = function(guid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling findByGuidUsingGET");
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
      var returnType = GuidCollection;

      return this.apiClient.callApi(
        '/api/v1/collections/labelled/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findByLabelUsingGET operation.
     * @callback module:api/LabelledcollectioncontrollerApi~findByLabelUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GuidCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findByLabel
     * @param {Number} organizationId organizationId
     * @param {String} label label
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~findByLabelUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GuidCollection}
     */
    this.findByLabelUsingGET = function(organizationId, label, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findByLabelUsingGET");
      }

      // verify the required parameter 'label' is set
      if (label === undefined || label === null) {
        throw new Error("Missing the required parameter 'label' when calling findByLabelUsingGET");
      }


      var pathParams = {
        'organizationId': organizationId,
        'label': label
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
        '/api/v1/collections/labelled/{organizationId}/{label}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeElementsFromLabelledCollectionUsingDELETE operation.
     * @callback module:api/LabelledcollectioncontrollerApi~removeElementsFromLabelledCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeElementsFromLabelledCollection
     * @param {String} collectionGuid collectionGuid
     * @param {module:model/ListOfGuids} guids guids
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~removeElementsFromLabelledCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeElementsFromLabelledCollectionUsingDELETE = function(collectionGuid, guids, opts, callback) {
      opts = opts || {};
      var postBody = guids;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeElementsFromLabelledCollectionUsingDELETE");
      }

      // verify the required parameter 'guids' is set
      if (guids === undefined || guids === null) {
        throw new Error("Missing the required parameter 'guids' when calling removeElementsFromLabelledCollectionUsingDELETE");
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
        '/api/v1/collections/labelled/{collectionGuid}/elements', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSingleElementFromLabelledCollectionUsingDELETE operation.
     * @callback module:api/LabelledcollectioncontrollerApi~removeSingleElementFromLabelledCollectionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeSingleElementFromLabelledCollection
     * @param {String} collectionGuid collectionGuid
     * @param {String} elementGuid elementGuid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~removeSingleElementFromLabelledCollectionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.removeSingleElementFromLabelledCollectionUsingDELETE = function(collectionGuid, elementGuid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'collectionGuid' is set
      if (collectionGuid === undefined || collectionGuid === null) {
        throw new Error("Missing the required parameter 'collectionGuid' when calling removeSingleElementFromLabelledCollectionUsingDELETE");
      }

      // verify the required parameter 'elementGuid' is set
      if (elementGuid === undefined || elementGuid === null) {
        throw new Error("Missing the required parameter 'elementGuid' when calling removeSingleElementFromLabelledCollectionUsingDELETE");
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
        '/api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renameUsingPUT operation.
     * @callback module:api/LabelledcollectioncontrollerApi~renameUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * rename
     * @param {String} guid guid
     * @param {module:model/GuidCollection} request request
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization JWT Bearer Token as returned from /login
     * @param {String} opts.acceptLanguage Requested language
     * @param {module:api/LabelledcollectioncontrollerApi~renameUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.renameUsingPUT = function(guid, request, opts, callback) {
      opts = opts || {};
      var postBody = request;

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling renameUsingPUT");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling renameUsingPUT");
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
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/collections/labelled/{guid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
