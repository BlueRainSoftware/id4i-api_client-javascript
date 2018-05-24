/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.2
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
    root.Id4iApi.VisibilityUpdate = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VisibilityUpdate model module.
   * @module model/VisibilityUpdate
   * @version 0.7.2
   */

  /**
   * Constructs a new <code>VisibilityUpdate</code>.
   * @alias module:model/VisibilityUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VisibilityUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VisibilityUpdate} obj Optional instance to populate.
   * @return {module:model/VisibilityUpdate} The populated <code>VisibilityUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('sharedWithOrganizationIds')) {
        obj['sharedWithOrganizationIds'] = ApiClient.convertToType(data['sharedWithOrganizationIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Document is publicly readable (if ID4N is owned by the same organization)
   * @member {Boolean} public
   */
  exports.prototype['public'] = undefined;
  /**
   * Document is readable by these organizations (independend of ID4N ownership)
   * @member {Array.<String>} sharedWithOrganizationIds
   */
  exports.prototype['sharedWithOrganizationIds'] = undefined;



  return exports;
}));


