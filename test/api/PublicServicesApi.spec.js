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
    instance = new Id4iApi.PublicServicesApi();
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

  describe('PublicServicesApi', function() {
    describe('getPublicDocument', function() {
      it('should call getPublicDocument successfully', function(done) {
        //uncomment below and update the code to test getPublicDocument
        //instance.getPublicDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('go', function() {
      it('should call go successfully', function(done) {
        //uncomment below and update the code to test go
        //instance.go(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllPublicDocuments', function() {
      it('should call listAllPublicDocuments successfully', function(done) {
        //uncomment below and update the code to test listAllPublicDocuments
        //instance.listAllPublicDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPublicDocuments', function() {
      it('should call listPublicDocuments successfully', function(done) {
        //uncomment below and update the code to test listPublicDocuments
        //instance.listPublicDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readPublicDocument', function() {
      it('should call readPublicDocument successfully', function(done) {
        //uncomment below and update the code to test readPublicDocument
        //instance.readPublicDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resolveImageUsingGET', function() {
      it('should call resolveImageUsingGET successfully', function(done) {
        //uncomment below and update the code to test resolveImageUsingGET
        //instance.resolveImageUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resolveWhoIsEntry', function() {
      it('should call resolveWhoIsEntry successfully', function(done) {
        //uncomment below and update the code to test resolveWhoIsEntry
        //instance.resolveWhoIsEntry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
