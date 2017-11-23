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
    instance = new Id4iApi.LabelledcollectioncontrollerApi();
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

  describe('LabelledcollectioncontrollerApi', function() {
    describe('addElementsToLabelledCollectionUsingPUT', function() {
      it('should call addElementsToLabelledCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addElementsToLabelledCollectionUsingPUT
        //instance.addElementsToLabelledCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSingleElementToLabelledCollectionUsingPUT', function() {
      it('should call addSingleElementToLabelledCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addSingleElementToLabelledCollectionUsingPUT
        //instance.addSingleElementToLabelledCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLabelledCollectionUsingPOST', function() {
      it('should call createLabelledCollectionUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createLabelledCollectionUsingPOST
        //instance.createLabelledCollectionUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLabelledCollectionUsingDELETE', function() {
      it('should call deleteLabelledCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteLabelledCollectionUsingDELETE
        //instance.deleteLabelledCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findById4nUsingGET1', function() {
      it('should call findById4nUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test findById4nUsingGET1
        //instance.findById4nUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findByLabelUsingGET', function() {
      it('should call findByLabelUsingGET successfully', function(done) {
        //uncomment below and update the code to test findByLabelUsingGET
        //instance.findByLabelUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromLabelledCollectionUsingDELETE', function() {
      it('should call removeElementsFromLabelledCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromLabelledCollectionUsingDELETE
        //instance.removeElementsFromLabelledCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSingleElementFromLabelledCollectionUsingDELETE', function() {
      it('should call removeSingleElementFromLabelledCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeSingleElementFromLabelledCollectionUsingDELETE
        //instance.removeSingleElementFromLabelledCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameUsingPUT', function() {
      it('should call renameUsingPUT successfully', function(done) {
        //uncomment below and update the code to test renameUsingPUT
        //instance.renameUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
