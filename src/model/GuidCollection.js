/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.2
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
    root.Id4iApi.GuidCollection = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GuidCollection model module.
   * @module model/GuidCollection
   * @version 0.1.2
   */

  /**
   * Constructs a new <code>GuidCollection</code>.
   * @alias module:model/GuidCollection
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GuidCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GuidCollection} obj Optional instance to populate.
   * @return {module:model/GuidCollection} The populated <code>GuidCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdTimestamp')) {
        obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
      }
      if (data.hasOwnProperty('id4n')) {
        obj['id4n'] = ApiClient.convertToType(data['id4n'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('nextScanOwnership')) {
        obj['nextScanOwnership'] = ApiClient.convertToType(data['nextScanOwnership'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} createdTimestamp
   */
  exports.prototype['createdTimestamp'] = undefined;
  /**
   * @member {String} id4n
   */
  exports.prototype['id4n'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {Boolean} nextScanOwnership
   */
  exports.prototype['nextScanOwnership'] = undefined;
  /**
   * @member {Number} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;
  /**
   * @member {module:model/GuidCollection.TypeEnum} type
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


