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
    describe('addElementsToLogisticCollectionUsingPUT', function() {
      it('should call addElementsToLogisticCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addElementsToLogisticCollectionUsingPUT
        //instance.addElementsToLogisticCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addElementsToRoutingCollectionUsingPUT', function() {
      it('should call addElementsToRoutingCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addElementsToRoutingCollectionUsingPUT
        //instance.addElementsToRoutingCollectionUsingPUT(function(error) {
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
    describe('addSingleElementToLogisticCollectionUsingPUT', function() {
      it('should call addSingleElementToLogisticCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addSingleElementToLogisticCollectionUsingPUT
        //instance.addSingleElementToLogisticCollectionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSingleElementToRoutingCollectionUsingPUT', function() {
      it('should call addSingleElementToRoutingCollectionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test addSingleElementToRoutingCollectionUsingPUT
        //instance.addSingleElementToRoutingCollectionUsingPUT(function(error) {
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
    describe('createLogisticCollectionUsingPOST', function() {
      it('should call createLogisticCollectionUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createLogisticCollectionUsingPOST
        //instance.createLogisticCollectionUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoutingCollectionUsingPOST', function() {
      it('should call createRoutingCollectionUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createRoutingCollectionUsingPOST
        //instance.createRoutingCollectionUsingPOST(function(error) {
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
    describe('deleteLogisticCollectionUsingDELETE', function() {
      it('should call deleteLogisticCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteLogisticCollectionUsingDELETE
        //instance.deleteLogisticCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoutingCollectionUsingDELETE', function() {
      it('should call deleteRoutingCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteRoutingCollectionUsingDELETE
        //instance.deleteRoutingCollectionUsingDELETE(function(error) {
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
    describe('findById4nUsingGET2', function() {
      it('should call findById4nUsingGET2 successfully', function(done) {
        //uncomment below and update the code to test findById4nUsingGET2
        //instance.findById4nUsingGET2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findById4nUsingGET3', function() {
      it('should call findById4nUsingGET3 successfully', function(done) {
        //uncomment below and update the code to test findById4nUsingGET3
        //instance.findById4nUsingGET3(function(error) {
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
    describe('getAllUsingGET', function() {
      it('should call getAllUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllUsingGET
        //instance.getAllUsingGET(function(error) {
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
    describe('removeElementsFromLogisticCollectionUsingDELETE', function() {
      it('should call removeElementsFromLogisticCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromLogisticCollectionUsingDELETE
        //instance.removeElementsFromLogisticCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromRoutingCollectionUsingDELETE', function() {
      it('should call removeElementsFromRoutingCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromRoutingCollectionUsingDELETE
        //instance.removeElementsFromRoutingCollectionUsingDELETE(function(error) {
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
    describe('removeSingleElementFromLogisticCollectionUsingDELETE', function() {
      it('should call removeSingleElementFromLogisticCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeSingleElementFromLogisticCollectionUsingDELETE
        //instance.removeSingleElementFromLogisticCollectionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSingleElementFromRoutingCollectionUsingDELETE', function() {
      it('should call removeSingleElementFromRoutingCollectionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeSingleElementFromRoutingCollectionUsingDELETE
        //instance.removeSingleElementFromRoutingCollectionUsingDELETE(function(error) {
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
