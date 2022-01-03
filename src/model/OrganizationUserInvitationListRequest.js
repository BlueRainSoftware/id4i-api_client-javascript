/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/OrganizationUserInvitation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationUserInvitation'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.OrganizationUserInvitationListRequest = factory(root.Id4iApi.ApiClient, root.Id4iApi.OrganizationUserInvitation);
  }
}(this, function(ApiClient, OrganizationUserInvitation) {
  'use strict';




  /**
   * The OrganizationUserInvitationListRequest model module.
   * @module model/OrganizationUserInvitationListRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrganizationUserInvitationListRequest</code>.
   * @alias module:model/OrganizationUserInvitationListRequest
   * @class
   * @param invitations {Array.<module:model/OrganizationUserInvitation>} 
   */
  var exports = function(invitations) {
    var _this = this;

    _this['invitations'] = invitations;
  };

  /**
   * Constructs a <code>OrganizationUserInvitationListRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationUserInvitationListRequest} obj Optional instance to populate.
   * @return {module:model/OrganizationUserInvitationListRequest} The populated <code>OrganizationUserInvitationListRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invitations')) {
        obj['invitations'] = ApiClient.convertToType(data['invitations'], [OrganizationUserInvitation]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OrganizationUserInvitation>} invitations
   */
  exports.prototype['invitations'] = undefined;



  return exports;
}));


