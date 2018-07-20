/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.5-SNAPSHOT
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
    root.Id4iApi.Id4n = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Id4n model module.
   * @module model/Id4n
   * @version 0.8.5-SNAPSHOT
   */

  /**
   * Constructs a new <code>Id4n</code>.
   * @alias module:model/Id4n
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Id4n</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Id4n} obj Optional instance to populate.
   * @return {module:model/Id4n} The populated <code>Id4n</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id4n')) {
        obj['id4n'] = ApiClient.convertToType(data['id4n'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID
   * @member {String} id4n
   */
  exports.prototype['id4n'] = undefined;



  return exports;
}));


