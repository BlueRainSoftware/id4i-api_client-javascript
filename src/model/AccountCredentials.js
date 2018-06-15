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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.AccountCredentials = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountCredentials model module.
   * @module model/AccountCredentials
   * @version 0.8.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>AccountCredentials</code>.
   * @alias module:model/AccountCredentials
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountCredentials} obj Optional instance to populate.
   * @return {module:model/AccountCredentials} The populated <code>AccountCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


