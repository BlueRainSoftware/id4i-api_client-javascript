/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.3-SNAPSHOT
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
    define(['ApiClient', 'model/Route', 'model/RoutingOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Route'), require('./RoutingOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.RoutingFile = factory(root.Id4iApi.ApiClient, root.Id4iApi.Route, root.Id4iApi.RoutingOptions);
  }
}(this, function(ApiClient, Route, RoutingOptions) {
  'use strict';




  /**
   * The RoutingFile model module.
   * @module model/RoutingFile
   * @version 0.1.3-SNAPSHOT
   */

  /**
   * Constructs a new <code>RoutingFile</code>.
   * @alias module:model/RoutingFile
   * @class
   * @param routes {Array.<module:model/Route>} 
   */
  var exports = function(routes) {
    var _this = this;


    _this['routes'] = routes;
  };

  /**
   * Constructs a <code>RoutingFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoutingFile} obj Optional instance to populate.
   * @return {module:model/RoutingFile} The populated <code>RoutingFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('options')) {
        obj['options'] = RoutingOptions.constructFromObject(data['options']);
      }
      if (data.hasOwnProperty('routes')) {
        obj['routes'] = ApiClient.convertToType(data['routes'], [Route]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RoutingOptions} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Array.<module:model/Route>} routes
   */
  exports.prototype['routes'] = undefined;



  return exports;
}));


