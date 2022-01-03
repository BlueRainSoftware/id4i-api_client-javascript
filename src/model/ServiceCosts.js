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
    root.Id4iApi.ServiceCosts = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ServiceCosts model module.
   * @module model/ServiceCosts
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ServiceCosts</code>.
   * @alias module:model/ServiceCosts
   * @class
   * @param listing {Object.<String, Number>} 
   */
  var exports = function(listing) {
    var _this = this;

    _this['listing'] = listing;
  };

  /**
   * Constructs a <code>ServiceCosts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceCosts} obj Optional instance to populate.
   * @return {module:model/ServiceCosts} The populated <code>ServiceCosts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('listing')) {
        obj['listing'] = ApiClient.convertToType(data['listing'], {'String': 'Number'});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, Number>} listing
   */
  exports.prototype['listing'] = undefined;



  return exports;
}));


