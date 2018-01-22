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
    instance = new Id4iApi.File();
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

  describe('File', function() {
    it('should create an instance of File', function() {
      // uncomment below and update the code to test File
      //var instane = new Id4iApi.File();
      //expect(instance).to.be.a(Id4iApi.File);
    });

    it('should have the property absolute (base name: "absolute")', function() {
      // uncomment below and update the code to test the property absolute
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property absoluteFile (base name: "absoluteFile")', function() {
      // uncomment below and update the code to test the property absoluteFile
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property absolutePath (base name: "absolutePath")', function() {
      // uncomment below and update the code to test the property absolutePath
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property canonicalFile (base name: "canonicalFile")', function() {
      // uncomment below and update the code to test the property canonicalFile
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property canonicalPath (base name: "canonicalPath")', function() {
      // uncomment below and update the code to test the property canonicalPath
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property directory (base name: "directory")', function() {
      // uncomment below and update the code to test the property directory
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property freeSpace (base name: "freeSpace")', function() {
      // uncomment below and update the code to test the property freeSpace
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property parentFile (base name: "parentFile")', function() {
      // uncomment below and update the code to test the property parentFile
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property totalSpace (base name: "totalSpace")', function() {
      // uncomment below and update the code to test the property totalSpace
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

    it('should have the property usableSpace (base name: "usableSpace")', function() {
      // uncomment below and update the code to test the property usableSpace
      //var instane = new Id4iApi.File();
      //expect(instance).to.be();
    });

  });

}));
