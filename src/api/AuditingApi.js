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
    define(['ApiClient', 'model/ApiError', 'model/PaginatedChangeLogEntryResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/PaginatedChangeLogEntryResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.AuditingApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.PaginatedChangeLogEntryResponse);
  }
}(this, function(ApiClient, ApiError, PaginatedChangeLogEntryResponse) {
  'use strict';

  /**
   * Auditing service.
   * @module api/AuditingApi
   * @version 0.8.6-SNAPSHOT
   */

  /**
   * Constructs a new AuditingApi. 
   * @alias module:api/AuditingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listOrganizationChangeLog operation.
     * @callback module:api/AuditingApi~listOrganizationChangeLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedChangeLogEntryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List change log entries of an organization
     * Listing change log entries of the specified organization id.
     * @param {String} organizationId The namespace identifying the organization whose change log entries are to be listed
     * @param {Object} opts Optional parameters
     * @param {String} opts.messageMimeType The Mime-type for the message format that should be returned. e.g. &#39;text/plain&#39; or &#39;text/mustache&#39;  (default to text/mustache)
     * @param {Date} opts.fromDate From date time as UTC Date-Time format
     * @param {Date} opts.toDate To date time as UTC Date-Time format
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AuditingApi~listOrganizationChangeLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedChangeLogEntryResponse}
     */
    this.listOrganizationChangeLog = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling listOrganizationChangeLog");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'messageMimeType': opts['messageMimeType'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
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
      var returnType = PaginatedChangeLogEntryResponse;

      return this.apiClient.callApi(
        '/api/v1/changelog/organization/{organizationId}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
