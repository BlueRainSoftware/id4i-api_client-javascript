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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ApiKeyPrivilege = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyPrivilege model module.
   * @module model/ApiKeyPrivilege
   * @version 0.1.2
   */

  /**
   * Constructs a new <code>ApiKeyPrivilege</code>.
   * @alias module:model/ApiKeyPrivilege
   * @class
   * @param id4nAssociated {Boolean} 
   * @param privilege {String} 
   */
  var exports = function(id4nAssociated, privilege) {
    var _this = this;

    _this['id4nAssociated'] = id4nAssociated;
    _this['privilege'] = privilege;
  };

  /**
   * Constructs a <code>ApiKeyPrivilege</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiKeyPrivilege} obj Optional instance to populate.
   * @return {module:model/ApiKeyPrivilege} The populated <code>ApiKeyPrivilege</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id4nAssociated')) {
        obj['id4nAssociated'] = ApiClient.convertToType(data['id4nAssociated'], 'Boolean');
      }
      if (data.hasOwnProperty('privilege')) {
        obj['privilege'] = ApiClient.convertToType(data['privilege'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} id4nAssociated
   */
  exports.prototype['id4nAssociated'] = undefined;
  /**
   * @member {String} privilege
   */
  exports.prototype['privilege'] = undefined;



  return exports;
}));


