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
    define(['ApiClient', 'model/ListOfGS1s'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ListOfGS1s'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ImportGS1CodesRequest = factory(root.Id4iApi.ApiClient, root.Id4iApi.ListOfGS1s);
  }
}(this, function(ApiClient, ListOfGS1s) {
  'use strict';




  /**
   * The ImportGS1CodesRequest model module.
   * @module model/ImportGS1CodesRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ImportGS1CodesRequest</code>.
   * GS1/MAPP codes import information
   * @alias module:model/ImportGS1CodesRequest
   * @class
   * @param listOfGS1s {module:model/ListOfGS1s} The list of GS1/Mapp codes to be imported
   * @param organizationId {String} The organization where the GS1/Mapp code is imported.
   */
  var exports = function(listOfGS1s, organizationId) {
    var _this = this;

    _this['listOfGS1s'] = listOfGS1s;
    _this['organizationId'] = organizationId;
  };

  /**
   * Constructs a <code>ImportGS1CodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportGS1CodesRequest} obj Optional instance to populate.
   * @return {module:model/ImportGS1CodesRequest} The populated <code>ImportGS1CodesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('listOfGS1s')) {
        obj['listOfGS1s'] = ListOfGS1s.constructFromObject(data['listOfGS1s']);
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The list of GS1/Mapp codes to be imported
   * @member {module:model/ListOfGS1s} listOfGS1s
   */
  exports.prototype['listOfGS1s'] = undefined;
  /**
   * The organization where the GS1/Mapp code is imported.
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;



  return exports;
}));


