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
    root.Id4iApi.Id4nPresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Id4nPresentation model module.
   * @module model/Id4nPresentation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Id4nPresentation</code>.
   * @alias module:model/Id4nPresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Id4nPresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Id4nPresentation} obj Optional instance to populate.
   * @return {module:model/Id4nPresentation} The populated <code>Id4nPresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdTimestamp')) {
        obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
      }
      if (data.hasOwnProperty('holderOrganizationId')) {
        obj['holderOrganizationId'] = ApiClient.convertToType(data['holderOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('id4n')) {
        obj['id4n'] = ApiClient.convertToType(data['id4n'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The UTC unix timestamp of when this ID has been created
   * @member {Number} createdTimestamp
   */
  exports.prototype['createdTimestamp'] = undefined;
  /**
   * Organization namespace of the holder of the ID
   * @member {String} holderOrganizationId
   */
  exports.prototype['holderOrganizationId'] = undefined;
  /**
   * The ID
   * @member {String} id4n
   */
  exports.prototype['id4n'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Organization namespace of the ID owner
   * @member {String} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;
  /**
   * The properties of the organization
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The type of ID
   * @member {module:model/Id4nPresentation.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "GUID"
     * @const
     */
    "GUID": "GUID",
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


