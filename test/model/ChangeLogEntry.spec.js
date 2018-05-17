/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.1
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
    instance = new Id4iApi.ChangeLogEntry();
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

  describe('ChangeLogEntry', function() {
    it('should create an instance of ChangeLogEntry', function() {
      // uncomment below and update the code to test ChangeLogEntry
      //var instane = new Id4iApi.ChangeLogEntry();
      //expect(instance).to.be.a(Id4iApi.ChangeLogEntry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Id4iApi.ChangeLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new Id4iApi.ChangeLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property messageProperties (base name: "messageProperties")', function() {
      // uncomment below and update the code to test the property messageProperties
      //var instane = new Id4iApi.ChangeLogEntry();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new Id4iApi.ChangeLogEntry();
      //expect(instance).to.be();
    });

  });

}));
