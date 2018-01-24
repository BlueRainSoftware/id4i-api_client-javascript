/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.4-SNAPSHOT
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
    root.Id4iApi.RegistrationVerificationTokenPresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RegistrationVerificationTokenPresentation model module.
   * @module model/RegistrationVerificationTokenPresentation
   * @version 0.1.4-SNAPSHOT
   */

  /**
   * Constructs a new <code>RegistrationVerificationTokenPresentation</code>.
   * @alias module:model/RegistrationVerificationTokenPresentation
   * @class
   * @param token {String} 
   */
  var exports = function(token) {
    var _this = this;

    _this['token'] = token;
  };

  /**
   * Constructs a <code>RegistrationVerificationTokenPresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistrationVerificationTokenPresentation} obj Optional instance to populate.
   * @return {module:model/RegistrationVerificationTokenPresentation} The populated <code>RegistrationVerificationTokenPresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


