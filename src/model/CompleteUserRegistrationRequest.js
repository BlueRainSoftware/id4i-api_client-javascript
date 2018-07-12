/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.3
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
    root.Id4iApi.CompleteUserRegistrationRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompleteUserRegistrationRequest model module.
   * @module model/CompleteUserRegistrationRequest
   * @version 0.8.3
   */

  /**
   * Constructs a new <code>CompleteUserRegistrationRequest</code>.
   * @alias module:model/CompleteUserRegistrationRequest
   * @class
   * @param verificationToken {String} 
   * @param username {String} 
   * @param password {String} 
   */
  var exports = function(verificationToken, username, password) {
    var _this = this;

    _this['verificationToken'] = verificationToken;
    _this['username'] = username;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>CompleteUserRegistrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompleteUserRegistrationRequest} obj Optional instance to populate.
   * @return {module:model/CompleteUserRegistrationRequest} The populated <code>CompleteUserRegistrationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('verificationToken')) {
        obj['verificationToken'] = ApiClient.convertToType(data['verificationToken'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} verificationToken
   */
  exports.prototype['verificationToken'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


