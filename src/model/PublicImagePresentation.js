/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.6.0
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
    root.Id4iApi.PublicImagePresentation = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PublicImagePresentation model module.
   * @module model/PublicImagePresentation
   * @version 0.6.0
   */

  /**
   * Constructs a new <code>PublicImagePresentation</code>.
   * @alias module:model/PublicImagePresentation
   * @class
   * @param uri {String} The uri/url of the image
   */
  var exports = function(uri) {
    var _this = this;

    _this['uri'] = uri;
  };

  /**
   * Constructs a <code>PublicImagePresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicImagePresentation} obj Optional instance to populate.
   * @return {module:model/PublicImagePresentation} The populated <code>PublicImagePresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * The uri/url of the image
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


