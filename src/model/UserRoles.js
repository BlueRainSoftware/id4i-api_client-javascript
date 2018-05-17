/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.2-SNAPSHOT
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
    define(['ApiClient', 'model/UserPresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserPresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.UserRoles = factory(root.Id4iApi.ApiClient, root.Id4iApi.UserPresentation);
  }
}(this, function(ApiClient, UserPresentation) {
  'use strict';




  /**
   * The UserRoles model module.
   * @module model/UserRoles
   * @version 0.7.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>UserRoles</code>.
   * @alias module:model/UserRoles
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRoles} obj Optional instance to populate.
   * @return {module:model/UserRoles} The populated <code>UserRoles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserPresentation.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {module:model/UserPresentation} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


