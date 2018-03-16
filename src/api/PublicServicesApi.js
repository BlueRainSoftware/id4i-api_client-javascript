/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.0
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
    define(['ApiClient', 'model/ApiError', 'model/Document', 'model/PaginatedDocumentResponse', 'model/PaginatedOwnedDocumentResponse', 'model/WhoIsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/Document'), require('../model/PaginatedDocumentResponse'), require('../model/PaginatedOwnedDocumentResponse'), require('../model/WhoIsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.PublicServicesApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.Document, root.Id4iApi.PaginatedDocumentResponse, root.Id4iApi.PaginatedOwnedDocumentResponse, root.Id4iApi.WhoIsResponse);
  }
}(this, function(ApiClient, ApiError, Document, PaginatedDocumentResponse, PaginatedOwnedDocumentResponse, WhoIsResponse) {
  'use strict';

  /**
   * PublicServices service.
   * @module api/PublicServicesApi
   * @version 0.3.0
   */

  /**
   * Constructs a new PublicServicesApi. 
   * @alias module:api/PublicServicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPublicDocument operation.
     * @callback module:api/PublicServicesApi~getPublicDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a document (meta-data only, no content)
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/PublicServicesApi~getPublicDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.getPublicDocument = function(organizationId, id4n, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getPublicDocument");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getPublicDocument");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling getPublicDocument");
      }


      var pathParams = {
        'organizationId': organizationId,
        'id4n': id4n,
        'fileName': fileName
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
      var returnType = Document;

      return this.apiClient.callApi(
        '/api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the go operation.
     * @callback module:api/PublicServicesApi~goCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forward
     * Forwarding to the designated route defined in the routing,
     * @param {String} guid guid
     * @param {module:api/PublicServicesApi~goCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.go = function(guid, callback) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/go/{guid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllPublicDocuments operation.
     * @callback module:api/PublicServicesApi~listAllPublicDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedOwnedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization specific documents
     * Listing documents of an id4n owned by a specified organization
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {Number} opts.organizationId organizationId
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/PublicServicesApi~listAllPublicDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedOwnedDocumentResponse}
     */
    this.listAllPublicDocuments = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listAllPublicDocuments");
      }


      var pathParams = {
        'id4n': id4n
      };
      var queryParams = {
        'organizationId': opts['organizationId'],
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = PaginatedOwnedDocumentResponse;

      return this.apiClient.callApi(
        '/api/v1/public/documents/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPublicDocuments operation.
     * @callback module:api/PublicServicesApi~listPublicDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization specific documents
     * Listing documents of an id4n owned by a specified organization
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/PublicServicesApi~listPublicDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDocumentResponse}
     */
    this.listPublicDocuments = function(organizationId, id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listPublicDocuments");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listPublicDocuments");
      }


      var pathParams = {
        'organizationId': organizationId,
        'id4n': id4n
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = PaginatedDocumentResponse;

      return this.apiClient.callApi(
        '/api/v1/public/documents/{id4n}/{organizationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readPublicDocument operation.
     * @callback module:api/PublicServicesApi~readPublicDocumentCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read document contents
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/PublicServicesApi~readPublicDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.readPublicDocument = function(organizationId, id4n, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling readPublicDocument");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling readPublicDocument");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling readPublicDocument");
      }


      var pathParams = {
        'organizationId': organizationId,
        'id4n': id4n,
        'fileName': fileName
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/v1/public/documents/{id4n}/{organizationId}/{fileName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {module:api/PublicServicesApi~resolveImageUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.resolveImageUsingGET = function(imageID, callback) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/v1/public/image/{imageID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
     * @param {module:api/PublicServicesApi~resolveWhoIsEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhoIsResponse}
     */
    this.resolveWhoIsEntry = function(id4n, callback) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = WhoIsResponse;

      return this.apiClient.callApi(
        '/whois/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
