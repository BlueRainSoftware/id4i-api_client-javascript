/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.6-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError', 'model/GuidAlias', 'model/PaginatedGuidResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/GuidAlias'), require('../model/PaginatedGuidResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.AliasApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.GuidAlias, root.Id4iApi.PaginatedGuidResponse);
  }
}(this, function(ApiClient, ApiError, GuidAlias, PaginatedGuidResponse) {
  'use strict';

  /**
   * Alias service.
   * @module api/AliasApi
   * @version 0.8.6-SNAPSHOT
   */

  /**
   * Constructs a new AliasApi. 
   * @alias module:api/AliasApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGuidAlias operation.
     * @callback module:api/AliasApi~addGuidAliasCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add alias for GUID or Collection
     * Adds or replaces aliases for single ID4ns (alias type item and mapp) or groups of ID4ns (alias types gtin, ean and article)
     * @param {String} id4n The GUID or Collection to operate on
     * @param {module:model/String} aliasType Alias type, see the corresponding API model
     * @param {module:model/GuidAlias} alias The alias to add or update
     * @param {module:api/AliasApi~addGuidAliasCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGuidAlias = function(id4n, aliasType, alias, callback) {
      var postBody = alias;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling addGuidAlias");
      }

      // verify the required parameter 'aliasType' is set
      if (aliasType === undefined || aliasType === null) {
        throw new Error("Missing the required parameter 'aliasType' when calling addGuidAlias");
      }

      // verify the required parameter 'alias' is set
      if (alias === undefined || alias === null) {
        throw new Error("Missing the required parameter 'alias' when calling addGuidAlias");
      }


      var pathParams = {
        'id4n': id4n,
        'aliasType': aliasType
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
        '/api/v1/id4ns/{id4n}/alias/{aliasType}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuidAliasTypes operation.
     * @callback module:api/AliasApi~getGuidAliasTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all supported alias types
     * Retrieve this list to find out all alias types to use with alias search and change operations
     * @param {module:api/AliasApi~getGuidAliasTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getGuidAliasTypes = function(callback) {
      var postBody = null;


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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/api/v1/search/guids/aliases/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGuidAliases operation.
     * @callback module:api/AliasApi~getGuidAliasesCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': 'String'}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all aliases for the given GUID or Collection.
     * Looks up the alias for each alias type (group and single) and returns a map of all aliases found.
     * @param {String} id4n The GUID or Collection to operate on
     * @param {module:api/AliasApi~getGuidAliasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': 'String'}>}
     */
    this.getGuidAliases = function(id4n, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling getGuidAliases");
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
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/api/v1/id4ns/{id4n}/alias', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeGuidAlias operation.
     * @callback module:api/AliasApi~removeGuidAliasCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove aliases from GUID or Collection
     * Remove the alias of the given type
     * @param {String} id4n The GUID or Collection to operate on
     * @param {module:model/String} aliasType Alias type, see the corresponding API model
     * @param {module:api/AliasApi~removeGuidAliasCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeGuidAlias = function(id4n, aliasType, callback) {
      var postBody = null;

      // verify the required parameter 'id4n' is set
      if (id4n === undefined || id4n === null) {
        throw new Error("Missing the required parameter 'id4n' when calling removeGuidAlias");
      }

      // verify the required parameter 'aliasType' is set
      if (aliasType === undefined || aliasType === null) {
        throw new Error("Missing the required parameter 'aliasType' when calling removeGuidAlias");
      }


      var pathParams = {
        'id4n': id4n,
        'aliasType': aliasType
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
        '/api/v1/id4ns/{id4n}/alias/{aliasType}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchByAlias operation.
     * @callback module:api/AliasApi~searchByAliasCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedGuidResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for GUIDs by alias
     * @param {String} alias The alias to search for
     * @param {module:model/String} aliasType Alias type type to search for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AliasApi~searchByAliasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedGuidResponse}
     */
    this.searchByAlias = function(alias, aliasType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'alias' is set
      if (alias === undefined || alias === null) {
        throw new Error("Missing the required parameter 'alias' when calling searchByAlias");
      }

      // verify the required parameter 'aliasType' is set
      if (aliasType === undefined || aliasType === null) {
        throw new Error("Missing the required parameter 'aliasType' when calling searchByAlias");
      }


      var pathParams = {
      };
      var queryParams = {
        'alias': alias,
        'aliasType': aliasType,
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
      var returnType = PaginatedGuidResponse;

      return this.apiClient.callApi(
        '/api/v1/search/guids', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
