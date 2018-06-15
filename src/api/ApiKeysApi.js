/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.0-SNAPSHOT
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
    define(['ApiClient', 'model/AddApiKeyPrivilegeRequest', 'model/ApiError', 'model/ApiKeyChangeRequest', 'model/ApiKeyCreationRequest', 'model/ApiKeyPresentation', 'model/ApiKeyPrivilegeInfoResponse', 'model/ApiKeyPrivilegePaginatedResponse', 'model/Id4nPresentationPaginatedResponse', 'model/ListOfId4ns', 'model/PaginatedApiKeyResponse', 'model/RemoveApiKeyPrivilegeRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddApiKeyPrivilegeRequest'), require('../model/ApiError'), require('../model/ApiKeyChangeRequest'), require('../model/ApiKeyCreationRequest'), require('../model/ApiKeyPresentation'), require('../model/ApiKeyPrivilegeInfoResponse'), require('../model/ApiKeyPrivilegePaginatedResponse'), require('../model/Id4nPresentationPaginatedResponse'), require('../model/ListOfId4ns'), require('../model/PaginatedApiKeyResponse'), require('../model/RemoveApiKeyPrivilegeRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ApiKeysApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.AddApiKeyPrivilegeRequest, root.Id4iApi.ApiError, root.Id4iApi.ApiKeyChangeRequest, root.Id4iApi.ApiKeyCreationRequest, root.Id4iApi.ApiKeyPresentation, root.Id4iApi.ApiKeyPrivilegeInfoResponse, root.Id4iApi.ApiKeyPrivilegePaginatedResponse, root.Id4iApi.Id4nPresentationPaginatedResponse, root.Id4iApi.ListOfId4ns, root.Id4iApi.PaginatedApiKeyResponse, root.Id4iApi.RemoveApiKeyPrivilegeRequest);
  }
}(this, function(ApiClient, AddApiKeyPrivilegeRequest, ApiError, ApiKeyChangeRequest, ApiKeyCreationRequest, ApiKeyPresentation, ApiKeyPrivilegeInfoResponse, ApiKeyPrivilegePaginatedResponse, Id4nPresentationPaginatedResponse, ListOfId4ns, PaginatedApiKeyResponse, RemoveApiKeyPrivilegeRequest) {
  'use strict';

  /**
   * ApiKeys service.
   * @module api/ApiKeysApi
   * @version 0.8.0-SNAPSHOT
   */

  /**
   * Constructs a new ApiKeysApi. 
   * @alias module:api/ApiKeysApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addApiKeyPrivilege operation.
     * @callback module:api/ApiKeysApi~addApiKeyPrivilegeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add privilege
     * @param {String} key key
     * @param {module:model/AddApiKeyPrivilegeRequest} addApiKeyPrivilegeRequest addApiKeyPrivilegeRequest
     * @param {module:api/ApiKeysApi~addApiKeyPrivilegeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addApiKeyPrivilege = function(key, addApiKeyPrivilegeRequest, callback) {
      var postBody = addApiKeyPrivilegeRequest;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling addApiKeyPrivilege");
      }

      // verify the required parameter 'addApiKeyPrivilegeRequest' is set
      if (addApiKeyPrivilegeRequest === undefined || addApiKeyPrivilegeRequest === null) {
        throw new Error("Missing the required parameter 'addApiKeyPrivilegeRequest' when calling addApiKeyPrivilege");
      }


      var pathParams = {
        'key': key
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
        '/api/v1/apikeys/{key}/privileges', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addApiKeyPrivilegeForId4ns operation.
     * @callback module:api/ApiKeysApi~addApiKeyPrivilegeForId4nsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add ID4ns of a privilege
     * @param {String} key key
     * @param {String} privilege privilege
     * @param {module:model/ListOfId4ns} id4ns id4ns
     * @param {module:api/ApiKeysApi~addApiKeyPrivilegeForId4nsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addApiKeyPrivilegeForId4ns = function(key, privilege, id4ns, callback) {
      var postBody = id4ns;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling addApiKeyPrivilegeForId4ns");
      }

      // verify the required parameter 'privilege' is set
      if (privilege === undefined || privilege === null) {
        throw new Error("Missing the required parameter 'privilege' when calling addApiKeyPrivilegeForId4ns");
      }

      // verify the required parameter 'id4ns' is set
      if (id4ns === undefined || id4ns === null) {
        throw new Error("Missing the required parameter 'id4ns' when calling addApiKeyPrivilegeForId4ns");
      }


      var pathParams = {
        'key': key,
        'privilege': privilege
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
        '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNewApiKey operation.
     * @callback module:api/ApiKeysApi~createNewApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKeyPresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API key
     * Creation of a new API key.
     * @param {module:model/ApiKeyCreationRequest} creationRequest API key to be created.
     * @param {module:api/ApiKeysApi~createNewApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKeyPresentation}
     */
    this.createNewApiKey = function(creationRequest, callback) {
      var postBody = creationRequest;

      // verify the required parameter 'creationRequest' is set
      if (creationRequest === undefined || creationRequest === null) {
        throw new Error("Missing the required parameter 'creationRequest' when calling createNewApiKey");
      }


      var pathParams = {
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
      var returnType = ApiKeyPresentation;

      return this.apiClient.callApi(
        '/api/v1/apikeys', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteApiKey operation.
     * @callback module:api/ApiKeysApi~deleteApiKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete API key
     * Deletion of an API key.
     * @param {String} key The API key to delete.
     * @param {module:api/ApiKeysApi~deleteApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApiKey = function(key, callback) {
      var postBody = null;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteApiKey");
      }


      var pathParams = {
        'key': key
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
        '/api/v1/apikeys/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiKey operation.
     * @callback module:api/ApiKeysApi~getApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKeyPresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show API key
     * Showing the details of an API key.
     * @param {String} key The API key to show.
     * @param {module:api/ApiKeysApi~getApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKeyPresentation}
     */
    this.getApiKey = function(key, callback) {
      var postBody = null;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getApiKey");
      }


      var pathParams = {
        'key': key
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
      var returnType = ApiKeyPresentation;

      return this.apiClient.callApi(
        '/api/v1/apikeys/{key}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllApiKeyPrivileges operation.
     * @callback module:api/ApiKeysApi~listAllApiKeyPrivilegesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKeyPrivilegeInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all privileges
     * Listing all possible API key privileges.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.id4nConcerning id4nConcerning
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/ApiKeysApi~listAllApiKeyPrivilegesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKeyPrivilegeInfoResponse}
     */
    this.listAllApiKeyPrivileges = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id4nConcerning': opts['id4nConcerning'],
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
      var returnType = ApiKeyPrivilegeInfoResponse;

      return this.apiClient.callApi(
        '/api/v1/apikeys/privileges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllApiKeysOfOrganization operation.
     * @callback module:api/ApiKeysApi~listAllApiKeysOfOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedApiKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find API key by organization
     * Finding all API key assigned to the specified organization in a paginated manner.
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId The namespace of the organization to search in.
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/ApiKeysApi~listAllApiKeysOfOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedApiKeyResponse}
     */
    this.listAllApiKeysOfOrganization = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PaginatedApiKeyResponse;

      return this.apiClient.callApi(
        '/api/v1/apikeys', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listApiKeyPrivileges operation.
     * @callback module:api/ApiKeysApi~listApiKeyPrivilegesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKeyPrivilegePaginatedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List privileges
     * @param {String} key key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/ApiKeysApi~listApiKeyPrivilegesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKeyPrivilegePaginatedResponse}
     */
    this.listApiKeyPrivileges = function(key, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling listApiKeyPrivileges");
      }


      var pathParams = {
        'key': key
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
      var returnType = ApiKeyPrivilegePaginatedResponse;

      return this.apiClient.callApi(
        '/api/v1/apikeys/{key}/privileges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listId4ns operation.
     * @callback module:api/ApiKeysApi~listId4nsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Id4nPresentationPaginatedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ID4ns of a privilege
     * Listing ID4ns of a id4n concerning privilege
     * @param {String} key key
     * @param {String} privilege privilege
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/ApiKeysApi~listId4nsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Id4nPresentationPaginatedResponse}
     */
    this.listId4ns = function(key, privilege, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling listId4ns");
      }

      // verify the required parameter 'privilege' is set
      if (privilege === undefined || privilege === null) {
        throw new Error("Missing the required parameter 'privilege' when calling listId4ns");
      }


      var pathParams = {
        'key': key,
        'privilege': privilege
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
      var returnType = Id4nPresentationPaginatedResponse;

      return this.apiClient.callApi(
        '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeApiKeyPrivilege operation.
     * @callback module:api/ApiKeysApi~removeApiKeyPrivilegeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove privilege
     * @param {String} key key
     * @param {module:model/RemoveApiKeyPrivilegeRequest} removeApiKeyPrivilegeRequest removeApiKeyPrivilegeRequest
     * @param {module:api/ApiKeysApi~removeApiKeyPrivilegeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeApiKeyPrivilege = function(key, removeApiKeyPrivilegeRequest, callback) {
      var postBody = removeApiKeyPrivilegeRequest;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling removeApiKeyPrivilege");
      }

      // verify the required parameter 'removeApiKeyPrivilegeRequest' is set
      if (removeApiKeyPrivilegeRequest === undefined || removeApiKeyPrivilegeRequest === null) {
        throw new Error("Missing the required parameter 'removeApiKeyPrivilegeRequest' when calling removeApiKeyPrivilege");
      }


      var pathParams = {
        'key': key
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
        '/api/v1/apikeys/{key}/privileges', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeApiKeyPrivilegeForId4ns operation.
     * @callback module:api/ApiKeysApi~removeApiKeyPrivilegeForId4nsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove id4ns of a privilege
     * @param {String} key key
     * @param {String} privilege privilege
     * @param {module:model/ListOfId4ns} id4ns id4ns
     * @param {module:api/ApiKeysApi~removeApiKeyPrivilegeForId4nsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeApiKeyPrivilegeForId4ns = function(key, privilege, id4ns, callback) {
      var postBody = id4ns;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling removeApiKeyPrivilegeForId4ns");
      }

      // verify the required parameter 'privilege' is set
      if (privilege === undefined || privilege === null) {
        throw new Error("Missing the required parameter 'privilege' when calling removeApiKeyPrivilegeForId4ns");
      }

      // verify the required parameter 'id4ns' is set
      if (id4ns === undefined || id4ns === null) {
        throw new Error("Missing the required parameter 'id4ns' when calling removeApiKeyPrivilegeForId4ns");
      }


      var pathParams = {
        'key': key,
        'privilege': privilege
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
        '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateApiKey operation.
     * @callback module:api/ApiKeysApi~updateApiKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update API keys
     * API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.
     * @param {String} key The API key to be updated.
     * @param {module:model/ApiKeyChangeRequest} apiKeyChange The new values to apply.
     * @param {module:api/ApiKeysApi~updateApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateApiKey = function(key, apiKeyChange, callback) {
      var postBody = apiKeyChange;

      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling updateApiKey");
      }

      // verify the required parameter 'apiKeyChange' is set
      if (apiKeyChange === undefined || apiKeyChange === null) {
        throw new Error("Missing the required parameter 'apiKeyChange' when calling updateApiKey");
      }


      var pathParams = {
        'key': key
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
        '/api/v1/apikeys/{key}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
