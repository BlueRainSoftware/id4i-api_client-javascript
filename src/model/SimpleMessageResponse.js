/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.6
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
    root.Id4iApi.SimpleMessageResponse = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SimpleMessageResponse model module.
   * @module model/SimpleMessageResponse
   * @version 0.9.6
   */

  /**
   * Constructs a new <code>SimpleMessageResponse</code>.
   * @alias module:model/SimpleMessageResponse
   * @class
   * @param message {String} 
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>SimpleMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleMessageResponse} obj Optional instance to populate.
   * @return {module:model/SimpleMessageResponse} The populated <code>SimpleMessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


