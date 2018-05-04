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
    root.Id4iApi.OrganizationAddress = factory(root.Id4iApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrganizationAddress model module.
   * @module model/OrganizationAddress
   * @version 0.6.0
   */

  /**
   * Constructs a new <code>OrganizationAddress</code>.
   * @alias module:model/OrganizationAddress
   * @class
   * @param firstname {String} 
   * @param lastname {String} 
   * @param street {String} 
   * @param postCode {String} 
   * @param city {String} 
   * @param countryCode {String} The ISO 3166 two-letter country code
   */
  var exports = function(firstname, lastname, street, postCode, city, countryCode) {
    var _this = this;


    _this['firstname'] = firstname;
    _this['lastname'] = lastname;
    _this['street'] = street;
    _this['postCode'] = postCode;
    _this['city'] = city;
    _this['countryCode'] = countryCode;


  };

  /**
   * Constructs a <code>OrganizationAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationAddress} obj Optional instance to populate.
   * @return {module:model/OrganizationAddress} The populated <code>OrganizationAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('postCode')) {
        obj['postCode'] = ApiClient.convertToType(data['postCode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * @member {String} postCode
   */
  exports.prototype['postCode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The ISO 3166 two-letter country code
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * The country name
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * The telephone number e.g.
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;



  return exports;
}));


