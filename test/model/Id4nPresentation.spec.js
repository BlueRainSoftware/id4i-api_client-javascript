/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.0
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
    instance = new Id4iApi.Id4nPresentation();
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

  describe('Id4nPresentation', function() {
    it('should create an instance of Id4nPresentation', function() {
      // uncomment below and update the code to test Id4nPresentation
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be.a(Id4iApi.Id4nPresentation);
    });

    it('should have the property createdTimestamp (base name: "createdTimestamp")', function() {
      // uncomment below and update the code to test the property createdTimestamp
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

    it('should have the property holderOrganizationId (base name: "holderOrganizationId")', function() {
      // uncomment below and update the code to test the property holderOrganizationId
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

    it('should have the property id4n (base name: "id4n")', function() {
      // uncomment below and update the code to test the property id4n
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

    it('should have the property ownerOrganizationId (base name: "ownerOrganizationId")', function() {
      // uncomment below and update the code to test the property ownerOrganizationId
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Id4iApi.Id4nPresentation();
      //expect(instance).to.be();
    });

  });

}));
