/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.4.1-SNAPSHOT
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
    instance = new Id4iApi.OrganizationsApi();
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

  describe('OrganizationsApi', function() {
    describe('addUserRoles', function() {
      it('should call addUserRoles successfully', function(done) {
        //uncomment below and update the code to test addUserRoles
        //instance.addUserRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganization', function() {
      it('should call createOrganization successfully', function(done) {
        //uncomment below and update the code to test createOrganization
        //instance.createOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganization', function() {
      it('should call deleteOrganization successfully', function(done) {
        //uncomment below and update the code to test deleteOrganization
        //instance.deleteOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationBillingAddress', function() {
      it('should call deleteOrganizationBillingAddress successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationBillingAddress
        //instance.deleteOrganizationBillingAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationLogo', function() {
      it('should call deleteOrganizationLogo successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationLogo
        //instance.deleteOrganizationLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOrganization', function() {
      it('should call findOrganization successfully', function(done) {
        //uncomment below and update the code to test findOrganization
        //instance.findOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOrganizationAddress', function() {
      it('should call findOrganizationAddress successfully', function(done) {
        //uncomment below and update the code to test findOrganizationAddress
        //instance.findOrganizationAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findOrganizationBillingAddress', function() {
      it('should call findOrganizationBillingAddress successfully', function(done) {
        //uncomment below and update the code to test findOrganizationBillingAddress
        //instance.findOrganizationBillingAddress(function(error) {
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
    describe('getAllOrganizationRoles', function() {
      it('should call getAllOrganizationRoles successfully', function(done) {
        //uncomment below and update the code to test getAllOrganizationRoles
        //instance.getAllOrganizationRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationsOfUser', function() {
      it('should call getOrganizationsOfUser successfully', function(done) {
        //uncomment below and update the code to test getOrganizationsOfUser
        //instance.getOrganizationsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserRoles', function() {
      it('should call getUserRoles successfully', function(done) {
        //uncomment below and update the code to test getUserRoles
        //instance.getUserRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersOfOrganization', function() {
      it('should call getUsersOfOrganization successfully', function(done) {
        //uncomment below and update the code to test getUsersOfOrganization
        //instance.getUsersOfOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteUsers', function() {
      it('should call inviteUsers successfully', function(done) {
        //uncomment below and update the code to test inviteUsers
        //instance.inviteUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCountries', function() {
      it('should call listCountries successfully', function(done) {
        //uncomment below and update the code to test listCountries
        //instance.listCountries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserRoles', function() {
      it('should call removeUserRoles successfully', function(done) {
        //uncomment below and update the code to test removeUserRoles
        //instance.removeUserRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setOrganizationLogo', function() {
      it('should call setOrganizationLogo successfully', function(done) {
        //uncomment below and update the code to test setOrganizationLogo
        //instance.setOrganizationLogo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganization', function() {
      it('should call updateOrganization successfully', function(done) {
        //uncomment below and update the code to test updateOrganization
        //instance.updateOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationAddress', function() {
      it('should call updateOrganizationAddress successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationAddress
        //instance.updateOrganizationAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationBillingAddress', function() {
      it('should call updateOrganizationBillingAddress successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationBillingAddress
        //instance.updateOrganizationBillingAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
