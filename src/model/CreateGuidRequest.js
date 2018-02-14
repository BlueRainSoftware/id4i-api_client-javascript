/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.2.0-SNAPSHOT
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    root.Id4iApi.CreateGuidRequest = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateGuidRequest model module.
   * @module model/CreateGuidRequest
   * @version 0.2.0-SNAPSHOT
   */

  /**
   * Constructs a new <code>CreateGuidRequest</code>.
   * GUID creation information
   * @alias module:model/CreateGuidRequest
   * @class
   * @param count {Number} The total number of GUIDs to create
   * @param length {Number} The charactersequence length of the GUID
   * @param organizationId {Number} The id of the organization where the generated GUIDs should be assigned.
   */
  var exports = function(count, length, organizationId) {
    var _this = this;

    _this['count'] = count;
    _this['length'] = length;
    _this['organizationId'] = organizationId;
  };

  /**
   * Constructs a <code>CreateGuidRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateGuidRequest} obj Optional instance to populate.
   * @return {module:model/CreateGuidRequest} The populated <code>CreateGuidRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The total number of GUIDs to create
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The charactersequence length of the GUID
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * The id of the organization where the generated GUIDs should be assigned.
   * @member {Number} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));


