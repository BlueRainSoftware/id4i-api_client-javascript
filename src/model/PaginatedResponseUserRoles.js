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
    define(['ApiClient', 'model/UserRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.PaginatedResponseUserRoles = factory(root.Id4iApi.ApiClient, root.Id4iApi.UserRoles);
  }
}(this, function(ApiClient, UserRoles) {
  'use strict';




  /**
   * The PaginatedResponseUserRoles model module.
   * @module model/PaginatedResponseUserRoles
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new <code>PaginatedResponseUserRoles</code>.
   * @alias module:model/PaginatedResponseUserRoles
   * @class
   * @param limit {Number} 
   * @param offset {Number} 
   */
  var exports = function(limit, offset) {
    var _this = this;


    _this['limit'] = limit;
    _this['offset'] = offset;

  };

  /**
   * Constructs a <code>PaginatedResponseUserRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedResponseUserRoles} obj Optional instance to populate.
   * @return {module:model/PaginatedResponseUserRoles} The populated <code>PaginatedResponseUserRoles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [UserRoles]);
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
   * @member {Array.<module:model/UserRoles>} elements
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


