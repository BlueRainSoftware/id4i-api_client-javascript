/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.2-SNAPSHOT
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
    define(['ApiClient', 'model/InputStream', 'model/URI', 'model/URL'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InputStream'), require('./URI'), require('./URL'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.InputStreamResource = factory(root.Id4iApi.ApiClient, root.Id4iApi.InputStream, root.Id4iApi.URI, root.Id4iApi.URL);
  }
}(this, function(ApiClient, InputStream, URI, URL) {
  'use strict';




  /**
   * The InputStreamResource model module.
   * @module model/InputStreamResource
   * @version 0.3.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>InputStreamResource</code>.
   * @alias module:model/InputStreamResource
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InputStreamResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputStreamResource} obj Optional instance to populate.
   * @return {module:model/InputStreamResource} The populated <code>InputStreamResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = File.constructFromObject(data['file']);
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('inputStream')) {
        obj['inputStream'] = InputStream.constructFromObject(data['inputStream']);
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Boolean');
      }
      if (data.hasOwnProperty('readable')) {
        obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = URI.constructFromObject(data['uri']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = URL.constructFromObject(data['url']);
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {File} file
   */
  exports.prototype['file'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {module:model/InputStream} inputStream
   */
  exports.prototype['inputStream'] = undefined;
  /**
   * @member {Boolean} open
   */
  exports.prototype['open'] = undefined;
  /**
   * @member {Boolean} readable
   */
  exports.prototype['readable'] = undefined;
  /**
   * @member {module:model/URI} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * @member {module:model/URL} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


