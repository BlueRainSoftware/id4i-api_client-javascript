/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.0.1-alpha
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
    instance = new Id4iApi.CollectioncontrollerApi();
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

  describe('CollectioncontrollerApi', function() {
    describe('addElementsToCollectionUsingPUT', function() {
      it('should call addElementsToCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addElementsToCollectionUsingPUT
        //instance.addElementsToCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSingleElementToCollectionUsingPUT', function() {
      it('should call addSingleElementToCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addSingleElementToCollectionUsingPUT
        //instance.addSingleElementToCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionUsingDELETE', function() {
      it('should call deleteCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionUsingDELETE
        //instance.deleteCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findById4nUsingGET', function() {
      it('should call findById4nUsingGET successfully', function(done) {
        //uncomment below and update the code to test findById4nUsingGET
        //instance.findById4nUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContentsUsingGET', function() {
      it('should call listContentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test listContentsUsingGET
        //instance.listContentsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromCollectionUsingDELETE', function() {
      it('should call removeElementsFromCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromCollectionUsingDELETE
        //instance.removeElementsFromCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSingleElementFromCollectionUsingDELETE', function() {
      it('should call removeSingleElementFromCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeSingleElementFromCollectionUsingDELETE
        //instance.removeSingleElementFromCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
