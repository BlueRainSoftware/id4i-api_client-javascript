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
    root.Id4iApi.TransferReceiveInfo = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransferReceiveInfo model module.
   * @module model/TransferReceiveInfo
   * @version 0.8.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>TransferReceiveInfo</code>.
   * @alias module:model/TransferReceiveInfo
   * @class
   * @param holderOrganizationId {String} The current holder of the object
   */
  var exports = function(holderOrganizationId) {
    var _this = this;

    _this['holderOrganizationId'] = holderOrganizationId;




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

      if (data.hasOwnProperty('holderOrganizationId')) {
        obj['holderOrganizationId'] = ApiClient.convertToType(data['holderOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('keepOwnership')) {
        obj['keepOwnership'] = ApiClient.convertToType(data['keepOwnership'], 'Boolean');
      }
      if (data.hasOwnProperty('openForClaims')) {
        obj['openForClaims'] = ApiClient.convertToType(data['openForClaims'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerOrganizationId')) {
        obj['ownerOrganizationId'] = ApiClient.convertToType(data['ownerOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('recipientOrganizationIds')) {
        obj['recipientOrganizationIds'] = ApiClient.convertToType(data['recipientOrganizationIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The current holder of the object
   * @member {String} holderOrganizationId
   */
  exports.prototype['holderOrganizationId'] = undefined;
  /**
   * Keep the public ownership while transferring the object
   * @member {Boolean} keepOwnership
   */
  exports.prototype['keepOwnership'] = undefined;
  /**
   * Anyone who knows (or can scan) the ID4N can claim ownership of this object
   * @member {Boolean} openForClaims
   */
  exports.prototype['openForClaims'] = undefined;
  /**
   * The current publicly visible owner of the object
   * @member {String} ownerOrganizationId
   */
  exports.prototype['ownerOrganizationId'] = undefined;
  /**
   * Allow only these organizations to obtain this object
   * @member {Array.<String>} recipientOrganizationIds
   */
  exports.prototype['recipientOrganizationIds'] = undefined;



  return exports;
}));


