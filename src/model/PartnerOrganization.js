/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.5-SNAPSHOT
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
    root.Id4iApi.PartnerOrganization = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PartnerOrganization model module.
   * @module model/PartnerOrganization
   * @version 0.8.5-SNAPSHOT
   */

  /**
   * Constructs a new <code>PartnerOrganization</code>.
   * A partner organization
   * @alias module:model/PartnerOrganization
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PartnerOrganization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartnerOrganization} obj Optional instance to populate.
   * @return {module:model/PartnerOrganization} The populated <code>PartnerOrganization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('logoURL')) {
        obj['logoURL'] = ApiClient.convertToType(data['logoURL'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL to a logo of the organization
   * @member {String} logoURL
   */
  exports.prototype['logoURL'] = undefined;
  /**
   * The name of the organization
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The namespace of the organization
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;



  return exports;
}));


