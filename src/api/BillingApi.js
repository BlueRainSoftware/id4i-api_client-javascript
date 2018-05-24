/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.3-SNAPSHOT
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
    define(['ApiClient', 'model/ApiError', 'model/BillingPosition', 'model/ServiceCosts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/BillingPosition'), require('../model/ServiceCosts'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.BillingApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError, root.Id4iApi.BillingPosition, root.Id4iApi.ServiceCosts);
  }
}(this, function(ApiClient, ApiError, BillingPosition, ServiceCosts) {
  'use strict';

  /**
   * Billing service.
   * @module api/BillingApi
   * @version 0.7.3-SNAPSHOT
   */

  /**
   * Constructs a new BillingApi. 
   * @alias module:api/BillingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPositionsForOrganization operation.
     * @callback module:api/BillingApi~getPositionsForOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BillingPosition>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get billing positions for a given organization
     * @param {String} organizationId The organization to compute the billing information for
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate Billing start date
     * @param {Date} opts.toDate Billing end date
     * @param {module:api/BillingApi~getPositionsForOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BillingPosition>}
     */
    this.getPositionsForOrganization = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getPositionsForOrganization");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
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
      var returnType = [BillingPosition];

      return this.apiClient.callApi(
        '/api/v1/billing/{organizationId}/positions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSumForOrganization operation.
     * @callback module:api/BillingApi~getSumForOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceCosts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get billing amount of services for a given organization
     * @param {String} organizationId The organization to compute the billing information for
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate Billing start date
     * @param {Date} opts.toDate Billing end date
     * @param {module:api/BillingApi~getSumForOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceCosts}
     */
    this.getSumForOrganization = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getSumForOrganization");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
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
      var returnType = ServiceCosts;

      return this.apiClient.callApi(
        '/api/v1/billing/{organizationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
