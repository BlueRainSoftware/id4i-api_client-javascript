/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.3.1
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
    instance = new Id4iApi.StorageApi();
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

  describe('StorageApi', function() {
    describe('deleteDocument', function() {
      it('should call deleteDocument successfully', function(done) {
        //uncomment below and update the code to test deleteDocument
        //instance.deleteDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocument', function() {
      it('should call getDocument successfully', function(done) {
        //uncomment below and update the code to test getDocument
        //instance.getDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('listAllDocuments', function() {
      it('should call listAllDocuments successfully', function(done) {
        //uncomment below and update the code to test listAllDocuments
        //instance.listAllDocuments(function(error) {
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
    describe('listDocuments', function() {
      it('should call listDocuments successfully', function(done) {
        //uncomment below and update the code to test listDocuments
        //instance.listDocuments(function(error) {
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
    describe('readDocument', function() {
      it('should call readDocument successfully', function(done) {
        //uncomment below and update the code to test readDocument
        //instance.readDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFromMicrostorage', function() {
      it('should call readFromMicrostorage successfully', function(done) {
        //uncomment below and update the code to test readFromMicrostorage
        //instance.readFromMicrostorage(function(error) {
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
    describe('updateDocumentMetadata', function() {
      it('should call updateDocumentMetadata successfully', function(done) {
        //uncomment below and update the code to test updateDocumentMetadata
        //instance.updateDocumentMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('writeToMicrostorage', function() {
      it('should call writeToMicrostorage successfully', function(done) {
        //uncomment below and update the code to test writeToMicrostorage
        //instance.writeToMicrostorage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
