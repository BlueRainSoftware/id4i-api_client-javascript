/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.2-SNAPSHOT
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
    define(['ApiClient', 'model/Visibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Visibility'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.HistoryItemUpdate = factory(root.Id4iApi.ApiClient, root.Id4iApi.Visibility);
  }
}(this, function(ApiClient, Visibility) {
  'use strict';




  /**
   * The HistoryItemUpdate model module.
   * @module model/HistoryItemUpdate
   * @version 0.7.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>HistoryItemUpdate</code>.
   * GUID history item update (diff patch)
   * @alias module:model/HistoryItemUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HistoryItemUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoryItemUpdate} obj Optional instance to populate.
   * @return {module:model/HistoryItemUpdate} The populated <code>HistoryItemUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = Visibility.constructFromObject(data['visibility']);
      }
    }
    return obj;
  }

  /**
   * New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * History item visibility restrictions
   * @member {module:model/Visibility} visibility
   */
  exports.prototype['visibility'] = undefined;



  return exports;
}));


