/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.5-SNAPSHOT
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
    instance = new Id4iApi.AliasApi();
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

  describe('AliasApi', function() {
    describe('addGuidAlias', function() {
      it('should call addGuidAlias successfully', function(done) {
        //uncomment below and update the code to test addGuidAlias
        //instance.addGuidAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGuidAliasTypes', function() {
      it('should call getGuidAliasTypes successfully', function(done) {
        //uncomment below and update the code to test getGuidAliasTypes
        //instance.getGuidAliasTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGuidAliases', function() {
      it('should call getGuidAliases successfully', function(done) {
        //uncomment below and update the code to test getGuidAliases
        //instance.getGuidAliases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeGuidAlias', function() {
      it('should call removeGuidAlias successfully', function(done) {
        //uncomment below and update the code to test removeGuidAlias
        //instance.removeGuidAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchByAlias', function() {
      it('should call searchByAlias successfully', function(done) {
        //uncomment below and update the code to test searchByAlias
        //instance.searchByAlias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
