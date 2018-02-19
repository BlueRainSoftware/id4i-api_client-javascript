/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.2.1
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
    root.Id4iApi.ChangeRoleRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangeRoleRequest model module.
   * @module model/ChangeRoleRequest
   * @version 0.2.1
   */

  /**
   * Constructs a new <code>ChangeRoleRequest</code>.
   * @alias module:model/ChangeRoleRequest
   * @class
   * @param roles {Array.<String>} 
   */
  var exports = function(roles) {
    var _this = this;

    _this['roles'] = roles;
  };

  /**
   * Constructs a <code>ChangeRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeRoleRequest} obj Optional instance to populate.
   * @return {module:model/ChangeRoleRequest} The populated <code>ChangeRoleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;



  return exports;
}));


