/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.7-SNAPSHOT
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
    root.Id4iApi.ListOfId4ns = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListOfId4ns model module.
   * @module model/ListOfId4ns
   * @version 0.9.7-SNAPSHOT
   */

  /**
   * Constructs a new <code>ListOfId4ns</code>.
   * A list of id4ns
   * @alias module:model/ListOfId4ns
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListOfId4ns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOfId4ns} obj Optional instance to populate.
   * @return {module:model/ListOfId4ns} The populated <code>ListOfId4ns</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id4ns')) {
        obj['id4ns'] = ApiClient.convertToType(data['id4ns'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A list of id4ns.
   * @member {Array.<String>} id4ns
   */
  exports.prototype['id4ns'] = undefined;



  return exports;
}));


