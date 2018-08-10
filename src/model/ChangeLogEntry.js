/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.0
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
    root.Id4iApi.ChangeLogEntry = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangeLogEntry model module.
   * @module model/ChangeLogEntry
   * @version 0.9.0
   */

  /**
   * Constructs a new <code>ChangeLogEntry</code>.
   * A changelog entry
   * @alias module:model/ChangeLogEntry
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ChangeLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeLogEntry} obj Optional instance to populate.
   * @return {module:model/ChangeLogEntry} The populated <code>ChangeLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageProperties')) {
        obj['messageProperties'] = ApiClient.convertToType(data['messageProperties'], {'String': Object});
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The unique id of the changelog entry
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The message as template or rendered as plain text
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The values of the properties in the message. May be nested as object with a value field 
   * @member {Object.<String, Object>} messageProperties
   */
  exports.prototype['messageProperties'] = undefined;
  /**
   * The UTC unix timestamp when this change occurred
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


