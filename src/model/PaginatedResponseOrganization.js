/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.2.2-SNAPSHOT
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
    define(['ApiClient', 'model/Organization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organization'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.PaginatedResponseOrganization = factory(root.Id4iApi.ApiClient, root.Id4iApi.Organization);
  }
}(this, function(ApiClient, Organization) {
  'use strict';




  /**
   * The PaginatedResponseOrganization model module.
   * @module model/PaginatedResponseOrganization
   * @version 0.2.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PaginatedResponseOrganization</code>.
   * @alias module:model/PaginatedResponseOrganization
   * @class
   * @param elements {Array.<module:model/Organization>} 
   * @param limit {Number} The number of returned elements
   * @param offset {Number} Starting with the n-th element
   */
  var exports = function(elements, limit, offset) {
    var _this = this;

    _this['elements'] = elements;
    _this['limit'] = limit;
    _this['offset'] = offset;

  };

  /**
   * Constructs a <code>PaginatedResponseOrganization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedResponseOrganization} obj Optional instance to populate.
   * @return {module:model/PaginatedResponseOrganization} The populated <code>PaginatedResponseOrganization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [Organization]);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Organization>} elements
   */
  exports.prototype['elements'] = undefined;
  /**
   * The number of returned elements
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Starting with the n-th element
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The total number of elements
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


