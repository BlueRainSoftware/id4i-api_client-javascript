/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.1.4-SNAPSHOT
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
    describe('addElementsToLabelledCollection', function() {
      it('should call addElementsToLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test addElementsToLabelledCollection
        //instance.addElementsToLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addElementsToLogisticCollection', function() {
      it('should call addElementsToLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test addElementsToLogisticCollection
        //instance.addElementsToLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addElementsToRoutingCollection', function() {
      it('should call addElementsToRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test addElementsToRoutingCollection
        //instance.addElementsToRoutingCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLabelledCollection', function() {
      it('should call createLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test createLabelledCollection
        //instance.createLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLogisticCollection', function() {
      it('should call createLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test createLogisticCollection
        //instance.createLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRoutingCollection', function() {
      it('should call createRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test createRoutingCollection
        //instance.createRoutingCollection(function(error) {
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
    describe('deleteLabelledCollection', function() {
      it('should call deleteLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test deleteLabelledCollection
        //instance.deleteLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLogisticCollection', function() {
      it('should call deleteLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test deleteLogisticCollection
        //instance.deleteLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRoutingCollection', function() {
      it('should call deleteRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test deleteRoutingCollection
        //instance.deleteRoutingCollection(function(error) {
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
    describe('findLabelledCollection', function() {
      it('should call findLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test findLabelledCollection
        //instance.findLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findLogisticCollection', function() {
      it('should call findLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test findLogisticCollection
        //instance.findLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findRoutingCollection', function() {
      it('should call findRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test findRoutingCollection
        //instance.findRoutingCollection(function(error) {
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
    describe('listElementsOfLabelledCollection', function() {
      it('should call listElementsOfLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test listElementsOfLabelledCollection
        //instance.listElementsOfLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listElementsOfLogisticCollection', function() {
      it('should call listElementsOfLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test listElementsOfLogisticCollection
        //instance.listElementsOfLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listElementsOfRoutingCollection', function() {
      it('should call listElementsOfRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test listElementsOfRoutingCollection
        //instance.listElementsOfRoutingCollection(function(error) {
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
    describe('removeElementsFromLabelledCollection', function() {
      it('should call removeElementsFromLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromLabelledCollection
        //instance.removeElementsFromLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromLogisticCollection', function() {
      it('should call removeElementsFromLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromLogisticCollection
        //instance.removeElementsFromLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromRoutingCollection', function() {
      it('should call removeElementsFromRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromRoutingCollection
        //instance.removeElementsFromRoutingCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCollection', function() {
      it('should call setCollection successfully', function(done) {
        //uncomment below and update the code to test setCollection
        //instance.setCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setLabelledCollection', function() {
      it('should call setLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test setLabelledCollection
        //instance.setLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setLogisticCollection', function() {
      it('should call setLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test setLogisticCollection
        //instance.setLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setRoutingCollection', function() {
      it('should call setRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test setRoutingCollection
        //instance.setRoutingCollection(function(error) {
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
    describe('updateLabelledCollection', function() {
      it('should call updateLabelledCollection successfully', function(done) {
        //uncomment below and update the code to test updateLabelledCollection
        //instance.updateLabelledCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLogisticCollection', function() {
      it('should call updateLogisticCollection successfully', function(done) {
        //uncomment below and update the code to test updateLogisticCollection
        //instance.updateLogisticCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRoutingCollection', function() {
      it('should call updateRoutingCollection successfully', function(done) {
        //uncomment below and update the code to test updateRoutingCollection
        //instance.updateRoutingCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
