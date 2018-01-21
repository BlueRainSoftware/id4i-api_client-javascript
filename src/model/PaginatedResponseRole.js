/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.2
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
    define(['ApiClient', 'model/Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.PaginatedResponseRole = factory(root.Id4iApi.ApiClient, root.Id4iApi.Role);
  }
}(this, function(ApiClient, Role) {
  'use strict';




  /**
   * The PaginatedResponseRole model module.
   * @module model/PaginatedResponseRole
   * @version 0.1.2
   */

  /**
   * Constructs a new <code>PaginatedResponseRole</code>.
   * @alias module:model/PaginatedResponseRole
   * @class
   * @param elements {Array.<module:model/Role>} 
   * @param limit {Number} 
   * @param offset {Number} 
   */
  var exports = function(elements, limit, offset) {
    var _this = this;

    _this['elements'] = elements;
    _this['limit'] = limit;
    _this['offset'] = offset;

  };

  /**
   * Constructs a <code>PaginatedResponseRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedResponseRole} obj Optional instance to populate.
   * @return {module:model/PaginatedResponseRole} The populated <code>PaginatedResponseRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [Role]);
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
   * @member {Array.<module:model/Role>} elements
   */
  exports.prototype['elements'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


