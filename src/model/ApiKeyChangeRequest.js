/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.2.4
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
    root.Id4iApi.ApiKeyChangeRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyChangeRequest model module.
   * @module model/ApiKeyChangeRequest
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>ApiKeyChangeRequest</code>.
   * @alias module:model/ApiKeyChangeRequest
   * @class
   * @param newLabel {String} 
   */
  var exports = function(newLabel) {
    var _this = this;


    _this['newLabel'] = newLabel;
  };

  /**
   * Constructs a <code>ApiKeyChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiKeyChangeRequest} obj Optional instance to populate.
   * @return {module:model/ApiKeyChangeRequest} The populated <code>ApiKeyChangeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('newLabel')) {
        obj['newLabel'] = ApiClient.convertToType(data['newLabel'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} newLabel
   */
  exports.prototype['newLabel'] = undefined;



  return exports;
}));


