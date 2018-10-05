/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.2-SNAPSHOT
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
    root.Id4iApi.Organization = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Organization model module.
   * @module model/Organization
   * @version 0.9.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>Organization</code>.
   * An organization
   * @alias module:model/Organization
   * @class
   * @param name {String} The name of the organization
   * @param namespace {String} The namespace of the organization
   */
  var exports = function(name, namespace) {
    var _this = this;



    _this['name'] = name;
    _this['namespace'] = namespace;
  };

  /**
   * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Organization} obj Optional instance to populate.
   * @return {module:model/Organization} The populated <code>Organization</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
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
   * The id of the organization ( Deprecated: Use namespace instead. )
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
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


