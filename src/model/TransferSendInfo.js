/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.4-SNAPSHOT
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
    root.Id4iApi.TransferSendInfo = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransferSendInfo model module.
   * @module model/TransferSendInfo
   * @version 0.9.4-SNAPSHOT
   */

  /**
   * Constructs a new <code>TransferSendInfo</code>.
   * @alias module:model/TransferSendInfo
   * @class
   * @param keepOwnership {Boolean} Keep the public ownership while transferring the object
   * @param openForClaims {Boolean} Allow anyone who knows (or can scan) the ID4N to claim ownership of this object
   * @param recipientOrganizationIds {Array.<String>} Allow only these organizations to obtain this object
   */
  var exports = function(keepOwnership, openForClaims, recipientOrganizationIds) {
    var _this = this;


    _this['keepOwnership'] = keepOwnership;
    _this['openForClaims'] = openForClaims;

    _this['recipientOrganizationIds'] = recipientOrganizationIds;
  };

  /**
   * Constructs a <code>TransferSendInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferSendInfo} obj Optional instance to populate.
   * @return {module:model/TransferSendInfo} The populated <code>TransferSendInfo</code> instance.
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
   * Allow anyone who knows (or can scan) the ID4N to claim ownership of this object
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


