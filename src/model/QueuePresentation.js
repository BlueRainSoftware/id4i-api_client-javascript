/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.7
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
    root.Id4iApi.QueuePresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QueuePresentation model module.
   * @module model/QueuePresentation
   * @version 0.9.7
   */

  /**
   * Constructs a new <code>QueuePresentation</code>.
   * @alias module:model/QueuePresentation
   * @class
   * @param active {Boolean} 
   * @param id {String} 
   */
  var exports = function(active, id) {
    var _this = this;

    _this['active'] = active;
    _this['id'] = id;

  };

  /**
   * Constructs a <code>QueuePresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueuePresentation} obj Optional instance to populate.
   * @return {module:model/QueuePresentation} The populated <code>QueuePresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('waitingMessages')) {
        obj['waitingMessages'] = ApiClient.convertToType(data['waitingMessages'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The count of queued messages
   * @member {Number} waitingMessages
   */
  exports.prototype['waitingMessages'] = undefined;



  return exports;
}));


