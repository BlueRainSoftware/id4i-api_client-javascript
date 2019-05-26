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
    root.Id4iApi.AppInfoPresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppInfoPresentation model module.
   * @module model/AppInfoPresentation
   * @version 0.9.7-SNAPSHOT
   */

  /**
   * Constructs a new <code>AppInfoPresentation</code>.
   * @alias module:model/AppInfoPresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AppInfoPresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppInfoPresentation} obj Optional instance to populate.
   * @return {module:model/AppInfoPresentation} The populated <code>AppInfoPresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('branch')) {
        obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
      }
      if (data.hasOwnProperty('commitTime')) {
        obj['commitTime'] = ApiClient.convertToType(data['commitTime'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('productionMode')) {
        obj['productionMode'] = ApiClient.convertToType(data['productionMode'], 'Boolean');
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} branch
   */
  exports.prototype['branch'] = undefined;
  /**
   * @member {String} commitTime
   */
  exports.prototype['commitTime'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} productionMode
   */
  exports.prototype['productionMode'] = undefined;
  /**
   * @member {String} revision
   */
  exports.prototype['revision'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


