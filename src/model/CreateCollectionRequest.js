/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 1.0.0
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
    root.Id4iApi.CreateCollectionRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateCollectionRequest model module.
   * @module model/CreateCollectionRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateCollectionRequest</code>.
   * @alias module:model/CreateCollectionRequest
   * @class
   * @param organizationId {String} 
   * @param length {Number} 
   * @param type {module:model/CreateCollectionRequest.TypeEnum} 
   */
  var exports = function(organizationId, length, type) {
    var _this = this;


    _this['organizationId'] = organizationId;
    _this['length'] = length;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>CreateCollectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCollectionRequest} obj Optional instance to populate.
   * @return {module:model/CreateCollectionRequest} The populated <code>CreateCollectionRequest</code> instance.
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
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * @member {module:model/CreateCollectionRequest.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ROUTING_COLLECTION"
     * @const
     */
    "ROUTING_COLLECTION": "ROUTING_COLLECTION",
    /**
     * value: "LOGISTIC_COLLECTION"
     * @const
     */
    "LOGISTIC_COLLECTION": "LOGISTIC_COLLECTION",
    /**
     * value: "LABELLED_COLLECTION"
     * @const
     */
    "LABELLED_COLLECTION": "LABELLED_COLLECTION"  };


  return exports;
}));


