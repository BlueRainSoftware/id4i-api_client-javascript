/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.1-SNAPSHOT
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
    define(['ApiClient', 'model/Id4nPresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id4nPresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.Id4nPresentationPaginatedResponse = factory(root.Id4iApi.ApiClient, root.Id4iApi.Id4nPresentation);
  }
}(this, function(ApiClient, Id4nPresentation) {
  'use strict';




  /**
   * The Id4nPresentationPaginatedResponse model module.
   * @module model/Id4nPresentationPaginatedResponse
   * @version 0.9.1-SNAPSHOT
   */

  /**
   * Constructs a new <code>Id4nPresentationPaginatedResponse</code>.
   * @alias module:model/Id4nPresentationPaginatedResponse
   * @class
   * @param elements {Array.<module:model/Id4nPresentation>} 
   * @param limit {Number} The number of returned elements
   * @param offset {Number} Starting with the n-th element
   */
  var exports = function(elements, limit, offset) {
    var _this = this;

    _this['elements'] = elements;
    _this['limit'] = limit;
    _this['offset'] = offset;

  };

  /**
   * Constructs a <code>Id4nPresentationPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Id4nPresentationPaginatedResponse} obj Optional instance to populate.
   * @return {module:model/Id4nPresentationPaginatedResponse} The populated <code>Id4nPresentationPaginatedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [Id4nPresentation]);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Id4nPresentation>} elements
   */
  exports.prototype['elements'] = undefined;
  /**
   * The number of returned elements
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Starting with the n-th element
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The total number of elements
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


