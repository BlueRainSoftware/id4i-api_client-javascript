/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.3
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
    root.Id4iApi.Timestamp = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timestamp model module.
   * @module model/Timestamp
   * @version 0.9.3
   */

  /**
   * Constructs a new <code>Timestamp</code>.
   * @alias module:model/Timestamp
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Timestamp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timestamp} obj Optional instance to populate.
   * @return {module:model/Timestamp} The populated <code>Timestamp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient.convertToType(data['day'], 'Number');
      }
      if (data.hasOwnProperty('hours')) {
        obj['hours'] = ApiClient.convertToType(data['hours'], 'Number');
      }
      if (data.hasOwnProperty('minutes')) {
        obj['minutes'] = ApiClient.convertToType(data['minutes'], 'Number');
      }
      if (data.hasOwnProperty('month')) {
        obj['month'] = ApiClient.convertToType(data['month'], 'Number');
      }
      if (data.hasOwnProperty('nanos')) {
        obj['nanos'] = ApiClient.convertToType(data['nanos'], 'Number');
      }
      if (data.hasOwnProperty('seconds')) {
        obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('timezoneOffset')) {
        obj['timezoneOffset'] = ApiClient.convertToType(data['timezoneOffset'], 'Number');
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} day
   */
  exports.prototype['day'] = undefined;
  /**
   * @member {Number} hours
   */
  exports.prototype['hours'] = undefined;
  /**
   * @member {Number} minutes
   */
  exports.prototype['minutes'] = undefined;
  /**
   * @member {Number} month
   */
  exports.prototype['month'] = undefined;
  /**
   * @member {Number} nanos
   */
  exports.prototype['nanos'] = undefined;
  /**
   * @member {Number} seconds
   */
  exports.prototype['seconds'] = undefined;
  /**
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * @member {Number} timezoneOffset
   */
  exports.prototype['timezoneOffset'] = undefined;
  /**
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;



  return exports;
}));


