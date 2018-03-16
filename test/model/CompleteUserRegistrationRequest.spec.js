/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.0
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
    instance = new Id4iApi.CompleteUserRegistrationRequest();
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

  describe('CompleteUserRegistrationRequest', function() {
    it('should create an instance of CompleteUserRegistrationRequest', function() {
      // uncomment below and update the code to test CompleteUserRegistrationRequest
      //var instane = new Id4iApi.CompleteUserRegistrationRequest();
      //expect(instance).to.be.a(Id4iApi.CompleteUserRegistrationRequest);
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new Id4iApi.CompleteUserRegistrationRequest();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new Id4iApi.CompleteUserRegistrationRequest();
      //expect(instance).to.be();
    });

    it('should have the property verificationToken (base name: "verificationToken")', function() {
      // uncomment below and update the code to test the property verificationToken
      //var instane = new Id4iApi.CompleteUserRegistrationRequest();
      //expect(instance).to.be();
    });

  });

}));
