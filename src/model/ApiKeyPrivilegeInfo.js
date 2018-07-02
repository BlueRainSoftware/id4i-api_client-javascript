/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.3-SNAPSHOT
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
    root.Id4iApi.ApiKeyPrivilegeInfo = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiKeyPrivilegeInfo model module.
   * @module model/ApiKeyPrivilegeInfo
   * @version 0.8.3-SNAPSHOT
   */

  /**
   * Constructs a new <code>ApiKeyPrivilegeInfo</code>.
   * @alias module:model/ApiKeyPrivilegeInfo
   * @class
   * @param id4nAssociated {Boolean} 
   * @param name {String} 
   */
  var exports = function(id4nAssociated, name) {
    var _this = this;



    _this['id4nAssociated'] = id4nAssociated;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>ApiKeyPrivilegeInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiKeyPrivilegeInfo} obj Optional instance to populate.
   * @return {module:model/ApiKeyPrivilegeInfo} The populated <code>ApiKeyPrivilegeInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allowsBillableOperations')) {
        obj['allowsBillableOperations'] = ApiClient.convertToType(data['allowsBillableOperations'], 'Boolean');
      }
      if (data.hasOwnProperty('helpText')) {
        obj['helpText'] = ApiClient.convertToType(data['helpText'], 'String');
      }
      if (data.hasOwnProperty('id4nAssociated')) {
        obj['id4nAssociated'] = ApiClient.convertToType(data['id4nAssociated'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} allowsBillableOperations
   */
  exports.prototype['allowsBillableOperations'] = undefined;
  /**
   * @member {String} helpText
   */
  exports.prototype['helpText'] = undefined;
  /**
   * @member {Boolean} id4nAssociated
   */
  exports.prototype['id4nAssociated'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


