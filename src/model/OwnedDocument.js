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
    root.Id4iApi.OwnedDocument = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OwnedDocument model module.
   * @module model/OwnedDocument
   * @version 0.1.4-SNAPSHOT
   */

  /**
   * Constructs a new <code>OwnedDocument</code>.
   * @alias module:model/OwnedDocument
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OwnedDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OwnedDocument} obj Optional instance to populate.
   * @return {module:model/OwnedDocument} The populated <code>OwnedDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'Number');
      }
      if (data.hasOwnProperty('publicVisibility')) {
        obj['publicVisibility'] = ApiClient.convertToType(data['publicVisibility'], 'Boolean');
      }
      if (data.hasOwnProperty('sharedWithOrganizationIds')) {
        obj['sharedWithOrganizationIds'] = ApiClient.convertToType(data['sharedWithOrganizationIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The organization's id which owns the document
   * @member {Number} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;
  /**
   * Document is publicly readable
   * @member {Boolean} publicVisibility
   */
  exports.prototype['publicVisibility'] = undefined;
  /**
   * Document is readable by these organizations
   * @member {Array.<Number>} sharedWithOrganizationIds
   */
  exports.prototype['sharedWithOrganizationIds'] = undefined;



  return exports;
}));

