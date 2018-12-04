/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.5
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
    root.Id4iApi.TransferReceiveInfo = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransferReceiveInfo model module.
   * @module model/TransferReceiveInfo
   * @version 0.9.5
   */

  /**
   * Constructs a new <code>TransferReceiveInfo</code>.
   * @alias module:model/TransferReceiveInfo
   * @class
   * @param organizationId {String} Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.
   */
  var exports = function(organizationId) {
    var _this = this;

    _this['organizationId'] = organizationId;
  };

  /**
   * Constructs a <code>TransferReceiveInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferReceiveInfo} obj Optional instance to populate.
   * @return {module:model/TransferReceiveInfo} The populated <code>TransferReceiveInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));


