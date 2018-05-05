/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.0-SNAPSHOT
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
    root.Id4iApi.ApiKeyPresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyPresentation model module.
   * @module model/ApiKeyPresentation
   * @version 0.7.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>ApiKeyPresentation</code>.
   * @alias module:model/ApiKeyPresentation
   * @class
   * @param active {Boolean} Whether this API key is active
   * @param createdAt {Number} The UTC unix timestamp of when this api key has been created
   * @param createdBy {String} 
   * @param key {String} The api key identifier
   * @param label {String} The label / name of the api key
   * @param organizationId {String} The organization namespace this api key belongs to
   */
  var exports = function(active, createdAt, createdBy, key, label, organizationId) {
    var _this = this;

    _this['active'] = active;
    _this['createdAt'] = createdAt;
    _this['createdBy'] = createdBy;
    _this['key'] = key;
    _this['label'] = label;
    _this['organizationId'] = organizationId;
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
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
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
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Whether this API key is active
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * The UTC unix timestamp of when this api key has been created
   * @member {Number} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * The api key identifier
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The label / name of the api key
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The organization namespace this api key belongs to
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));


