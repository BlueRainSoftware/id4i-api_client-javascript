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
    root.Id4iApi.ListOfGS1s = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListOfGS1s model module.
   * @module model/ListOfGS1s
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ListOfGS1s</code>.
   * A list of GS1/MAPP codes
   * @alias module:model/ListOfGS1s
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListOfGS1s</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOfGS1s} obj Optional instance to populate.
   * @return {module:model/ListOfGS1s} The populated <code>ListOfGS1s</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A list of GS1/MAPP codes.
   * @member {Array.<String>} codes
   */
  exports.prototype['codes'] = undefined;



  return exports;
}));


