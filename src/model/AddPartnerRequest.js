/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.0
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
    root.Id4iApi.AddPartnerRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddPartnerRequest model module.
   * @module model/AddPartnerRequest
   * @version 0.8.0
   */

  /**
   * Constructs a new <code>AddPartnerRequest</code>.
   * @alias module:model/AddPartnerRequest
   * @class
   * @param organizationId {String} The namespace of the partner organization to add
   */
  var exports = function(organizationId) {
    var _this = this;

    _this['organizationId'] = organizationId;
  };

  /**
   * Constructs a <code>AddPartnerRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddPartnerRequest} obj Optional instance to populate.
   * @return {module:model/AddPartnerRequest} The populated <code>AddPartnerRequest</code> instance.
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
   * The namespace of the partner organization to add
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));


