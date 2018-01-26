/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.4-SNAPSHOT
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    root.Id4iApi.Guid = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Guid model module.
   * @module model/Guid
   * @version 0.1.4-SNAPSHOT
   */

  /**
   * Constructs a new <code>Guid</code>.
   * @alias module:model/Guid
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Guid</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Guid} obj Optional instance to populate.
   * @return {module:model/Guid} The populated <code>Guid</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdTimestamp')) {
        obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
      }
      if (data.hasOwnProperty('id4n')) {
        obj['id4n'] = ApiClient.convertToType(data['id4n'], 'String');
      }
      if (data.hasOwnProperty('nextScanOwnership')) {
        obj['nextScanOwnership'] = ApiClient.convertToType(data['nextScanOwnership'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} createdTimestamp
   */
  exports.prototype['createdTimestamp'] = undefined;
  /**
   * @member {String} id4n
   */
  exports.prototype['id4n'] = undefined;
  /**
   * @member {Boolean} nextScanOwnership
   */
  exports.prototype['nextScanOwnership'] = undefined;
  /**
   * @member {Number} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;



  return exports;
}));


