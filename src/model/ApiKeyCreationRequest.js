/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.3-SNAPSHOT
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
    root.Id4iApi.ApiKeyCreationRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyCreationRequest model module.
   * @module model/ApiKeyCreationRequest
   * @version 0.7.3-SNAPSHOT
   */

  /**
   * Constructs a new <code>ApiKeyCreationRequest</code>.
   * @alias module:model/ApiKeyCreationRequest
   * @class
   * @param label {String} 
   * @param organizationId {String} 
   * @param secret {String} 
   */
  var exports = function(label, organizationId, secret) {
    var _this = this;

    _this['label'] = label;
    _this['organizationId'] = organizationId;
    _this['secret'] = secret;
  };

  /**
   * Constructs a <code>ApiKeyCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiKeyCreationRequest} obj Optional instance to populate.
   * @return {module:model/ApiKeyCreationRequest} The populated <code>ApiKeyCreationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;



  return exports;
}));


