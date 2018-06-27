/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.2-SNAPSHOT
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
    root.Id4iApi.BillingPosition = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BillingPosition model module.
   * @module model/BillingPosition
   * @version 0.8.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>BillingPosition</code>.
   * @alias module:model/BillingPosition
   * @class
   * @param count {Number} 
   * @param description {String} 
   * @param service {String} 
   * @param sum {Number} 
   */
  var exports = function(count, description, service, sum) {
    var _this = this;

    _this['count'] = count;
    _this['description'] = description;
    _this['service'] = service;
    _this['sum'] = sum;
  };

  /**
   * Constructs a <code>BillingPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingPosition} obj Optional instance to populate.
   * @return {module:model/BillingPosition} The populated <code>BillingPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('sum')) {
        obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} service
   */
  exports.prototype['service'] = undefined;
  /**
   * @member {Number} sum
   */
  exports.prototype['sum'] = undefined;



  return exports;
}));


