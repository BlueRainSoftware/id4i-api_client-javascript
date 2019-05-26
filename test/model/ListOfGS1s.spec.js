/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.6
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Id4iApi);
  }
}(this, function(expect, Id4iApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Id4iApi.ListOfGS1s();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ListOfGS1s', function() {
    it('should create an instance of ListOfGS1s', function() {
      // uncomment below and update the code to test ListOfGS1s
      //var instane = new Id4iApi.ListOfGS1s();
      //expect(instance).to.be.a(Id4iApi.ListOfGS1s);
    });

    it('should have the property codes (base name: "codes")', function() {
      // uncomment below and update the code to test the property codes
      //var instane = new Id4iApi.ListOfGS1s();
      //expect(instance).to.be();
    });

  });

}));