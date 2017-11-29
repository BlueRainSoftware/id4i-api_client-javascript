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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ApiKeyPresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyPresentation model module.
   * @module model/ApiKeyPresentation
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new <code>ApiKeyPresentation</code>.
   * @alias module:model/ApiKeyPresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ApiKeyPresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiKeyPresentation} obj Optional instance to populate.
   * @return {module:model/ApiKeyPresentation} The populated <code>ApiKeyPresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Number} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));

