/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.4-SNAPSHOT
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
    define(['ApiClient', 'model/Visibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Visibility'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.OwnedDocument = factory(root.Id4iApi.ApiClient, root.Id4iApi.Visibility);
  }
}(this, function(ApiClient, Visibility) {
  'use strict';




  /**
   * The OwnedDocument model module.
   * @module model/OwnedDocument
   * @version 0.7.4-SNAPSHOT
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
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = Visibility.constructFromObject(data['visibility']);
      }
    }
    return obj;
  }

  /**
   * File Name
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * Mime Type
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * The organization's namespace which owns the document
   * @member {String} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;
  /**
   * Visibility configuration
   * @member {module:model/Visibility} visibility
   */
  exports.prototype['visibility'] = undefined;



  return exports;
}));


