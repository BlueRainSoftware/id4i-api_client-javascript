/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.2.4
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
    define(['ApiClient', 'model/Organization', 'model/OrganizationAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organization'), require('./OrganizationAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.WhoIsResponse = factory(root.Id4iApi.ApiClient, root.Id4iApi.Organization, root.Id4iApi.OrganizationAddress);
  }
}(this, function(ApiClient, Organization, OrganizationAddress) {
  'use strict';




  /**
   * The WhoIsResponse model module.
   * @module model/WhoIsResponse
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>WhoIsResponse</code>.
   * @alias module:model/WhoIsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>WhoIsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhoIsResponse} obj Optional instance to populate.
   * @return {module:model/WhoIsResponse} The populated <code>WhoIsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aliases')) {
        obj['aliases'] = ApiClient.convertToType(data['aliases'], {'String': 'String'});
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('organizationAddress')) {
        obj['organizationAddress'] = OrganizationAddress.constructFromObject(data['organizationAddress']);
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} aliases
   */
  exports.prototype['aliases'] = undefined;
  /**
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * @member {module:model/OrganizationAddress} organizationAddress
   */
  exports.prototype['organizationAddress'] = undefined;



  return exports;
}));


