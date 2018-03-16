/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.2-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError', 'model/Document', 'model/DocumentUpdate', 'model/PaginatedDocumentResponse', 'model/PaginatedOwnedDocumentResponse', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/Document'), require('../model/DocumentUpdate'), require('../model/PaginatedDocumentResponse'), require('../model/PaginatedOwnedDocumentResponse'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.StorageApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.Document, root.Id4iApi.DocumentUpdate, root.Id4iApi.PaginatedDocumentResponse, root.Id4iApi.PaginatedOwnedDocumentResponse, root.Id4iApi.ResponseEntity);
  }
}(this, function(ApiClient, ApiError, Document, DocumentUpdate, PaginatedDocumentResponse, PaginatedOwnedDocumentResponse, ResponseEntity) {
  'use strict';

  /**
   * Storage service.
   * @module api/StorageApi
   * @version 0.3.2-SNAPSHOT
   */

  /**
   * Constructs a new StorageApi. 
   * @alias module:api/StorageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteDocument operation.
     * @callback module:api/StorageApi~deleteDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a document
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/StorageApi~deleteDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteDocument = function(organizationId, id4n, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteDocument");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling deleteDocument");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling deleteDocument");
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
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/api/v1/documents/{id4n}/{organizationId}/{fileName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDocument operation.
     * @callback module:api/StorageApi~getDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a document (meta-data only, no content)
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/StorageApi~getDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.getDocument = function(organizationId, id4n, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getDocument");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getDocument");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling getDocument");
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
        '/api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPublicDocument operation.
     * @callback module:api/StorageApi~getPublicDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a document (meta-data only, no content)
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/StorageApi~getPublicDocumentCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listAllDocuments operation.
     * @callback module:api/StorageApi~listAllDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedOwnedDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List documents
     * Listing all documents of an id4n
     * @param {String} id4n id4n
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/StorageApi~listAllDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedOwnedDocumentResponse}
     */
    this.listAllDocuments = function(id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listAllDocuments");
      }


      var pathParams = {
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
      var returnType = PaginatedOwnedDocumentResponse;

      return this.apiClient.callApi(
        '/api/v1/documents/{id4n}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllPublicDocuments operation.
     * @callback module:api/StorageApi~listAllPublicDocumentsCallback
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
     * @param {module:api/StorageApi~listAllPublicDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listDocuments operation.
     * @callback module:api/StorageApi~listDocumentsCallback
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
     * @param {module:api/StorageApi~listDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDocumentResponse}
     */
    this.listDocuments = function(organizationId, id4n, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listDocuments");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling listDocuments");
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
        '/api/v1/documents/{id4n}/{organizationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPublicDocuments operation.
     * @callback module:api/StorageApi~listPublicDocumentsCallback
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
     * @param {module:api/StorageApi~listPublicDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the readDocument operation.
     * @callback module:api/StorageApi~readDocumentCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read document contents
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/StorageApi~readDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.readDocument = function(organizationId, id4n, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling readDocument");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling readDocument");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling readDocument");
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
        '/api/v1/documents/{id4n}/{organizationId}/{fileName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readFromMicrostorage operation.
     * @callback module:api/StorageApi~readFromMicrostorageCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read data from microstorage
     * @param {Number} organization organization
     * @param {String} id4n id4n
     * @param {module:api/StorageApi~readFromMicrostorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.readFromMicrostorage = function(organization, id4n, callback) {
      var postBody = null;

      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling readFromMicrostorage");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling readFromMicrostorage");
      }


      var pathParams = {
        'organization': organization,
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/v1/microstorage/{id4n}/{organization}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readPublicDocument operation.
     * @callback module:api/StorageApi~readPublicDocumentCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read document contents
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:api/StorageApi~readPublicDocumentCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the updateDocumentMetadata operation.
     * @callback module:api/StorageApi~updateDocumentMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Document} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a document
     * @param {Number} organizationId organizationId
     * @param {String} id4n id4n
     * @param {String} fileName fileName
     * @param {module:model/DocumentUpdate} document document
     * @param {module:api/StorageApi~updateDocumentMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Document}
     */
    this.updateDocumentMetadata = function(organizationId, id4n, fileName, document, callback) {
      var postBody = document;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateDocumentMetadata");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling updateDocumentMetadata");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling updateDocumentMetadata");
      }

      // verify the required parameter 'document' is set
      if (document === undefined || document === null) {
        throw new Error("Missing the required parameter 'document' when calling updateDocumentMetadata");
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
        '/api/v1/documents/{id4n}/{organizationId}/{fileName}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the writeToMicrostorage operation.
     * @callback module:api/StorageApi~writeToMicrostorageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Write data to microstorage
     * @param {Number} organization organization
     * @param {String} id4n id4n
     * @param {String} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType Content-Type
     * @param {Number} opts.contentLength Content-Length
     * @param {module:api/StorageApi~writeToMicrostorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.writeToMicrostorage = function(organization, id4n, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling writeToMicrostorage");
      }

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling writeToMicrostorage");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling writeToMicrostorage");
      }


      var pathParams = {
        'organization': organization,
        'id4n': id4n
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Content-Length': opts['contentLength']
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['*/*'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/microstorage/{id4n}/{organization}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
