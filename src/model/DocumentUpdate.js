/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.4.1-SNAPSHOT
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
    define(['ApiClient', 'model/VisibilityUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VisibilityUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.DocumentUpdate = factory(root.Id4iApi.ApiClient, root.Id4iApi.VisibilityUpdate);
  }
}(this, function(ApiClient, VisibilityUpdate) {
  'use strict';




  /**
   * The DocumentUpdate model module.
   * @module model/DocumentUpdate
   * @version 0.4.1-SNAPSHOT
   */

  /**
   * Constructs a new <code>DocumentUpdate</code>.
   * @alias module:model/DocumentUpdate
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocumentUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentUpdate} obj Optional instance to populate.
   * @return {module:model/DocumentUpdate} The populated <code>DocumentUpdate</code> instance.
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
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = VisibilityUpdate.constructFromObject(data['visibility']);
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
   * Visibility configuration
   * @member {module:model/VisibilityUpdate} visibility
   */
  exports.prototype['visibility'] = undefined;



  return exports;
}));


