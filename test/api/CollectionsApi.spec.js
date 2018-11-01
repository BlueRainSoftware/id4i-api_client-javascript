/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.3
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
    instance = new Id4iApi.CollectionsApi();
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

  describe('CollectionsApi', function() {
    describe('addElementsToCollection', function() {
      it('should call addElementsToCollection successfully', function(done) {
        //uncomment below and update the code to test addElementsToCollection
        //instance.addElementsToCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCollection', function() {
      it('should call createCollection successfully', function(done) {
        //uncomment below and update the code to test createCollection
        //instance.createCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollection', function() {
      it('should call deleteCollection successfully', function(done) {
        //uncomment below and update the code to test deleteCollection
        //instance.deleteCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findCollection', function() {
      it('should call findCollection successfully', function(done) {
        //uncomment below and update the code to test findCollection
        //instance.findCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllCollectionsOfOrganization', function() {
      it('should call getAllCollectionsOfOrganization successfully', function(done) {
        //uncomment below and update the code to test getAllCollectionsOfOrganization
        //instance.getAllCollectionsOfOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listElementsOfCollection', function() {
      it('should call listElementsOfCollection successfully', function(done) {
        //uncomment below and update the code to test listElementsOfCollection
        //instance.listElementsOfCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromCollection', function() {
      it('should call removeElementsFromCollection successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromCollection
        //instance.removeElementsFromCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCollection', function() {
      it('should call updateCollection successfully', function(done) {
        //uncomment below and update the code to test updateCollection
        //instance.updateCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
