/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.2-SNAPSHOT
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
    root.Id4iApi.UserRegistrationRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserRegistrationRequest model module.
   * @module model/UserRegistrationRequest
   * @version 0.8.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>UserRegistrationRequest</code>.
   * @alias module:model/UserRegistrationRequest
   * @class
   * @param username {String} 
   * @param password {String} 
   * @param email {String} 
   */
  var exports = function(username, password, email) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;
    _this['email'] = email;
  };

  /**
   * Constructs a <code>UserRegistrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRegistrationRequest} obj Optional instance to populate.
   * @return {module:model/UserRegistrationRequest} The populated <code>UserRegistrationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));


