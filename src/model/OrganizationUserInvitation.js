/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.1
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
    root.Id4iApi.OrganizationUserInvitation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrganizationUserInvitation model module.
   * @module model/OrganizationUserInvitation
   * @version 0.3.1
   */

  /**
   * Constructs a new <code>OrganizationUserInvitation</code>.
   * @alias module:model/OrganizationUserInvitation
   * @class
   * @param roles {Array.<String>} 
   */
  var exports = function(roles) {
    var _this = this;


    _this['roles'] = roles;

  };

  /**
   * Constructs a <code>OrganizationUserInvitation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationUserInvitation} obj Optional instance to populate.
   * @return {module:model/OrganizationUserInvitation} The populated <code>OrganizationUserInvitation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


