/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.2-SNAPSHOT
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.RemoveApiKeyPrivilegeRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RemoveApiKeyPrivilegeRequest model module.
   * @module model/RemoveApiKeyPrivilegeRequest
   * @version 0.7.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>RemoveApiKeyPrivilegeRequest</code>.
   * @alias module:model/RemoveApiKeyPrivilegeRequest
   * @class
   * @param privilege {String} 
   */
  var exports = function(privilege) {
    var _this = this;

    _this['privilege'] = privilege;
  };

  /**
   * Constructs a <code>RemoveApiKeyPrivilegeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveApiKeyPrivilegeRequest} obj Optional instance to populate.
   * @return {module:model/RemoveApiKeyPrivilegeRequest} The populated <code>RemoveApiKeyPrivilegeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('privilege')) {
        obj['privilege'] = ApiClient.convertToType(data['privilege'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} privilege
   */
  exports.prototype['privilege'] = undefined;



  return exports;
}));


