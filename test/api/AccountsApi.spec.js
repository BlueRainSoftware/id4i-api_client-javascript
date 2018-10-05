/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.2-SNAPSHOT
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
    instance = new Id4iApi.AccountsApi();
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

  describe('AccountsApi', function() {
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
    describe('completeRegistration', function() {
      it('should call completeRegistration successfully', function(done) {
        //uncomment below and update the code to test completeRegistration
        //instance.completeRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUserByUsername', function() {
      it('should call findUserByUsername successfully', function(done) {
        //uncomment below and update the code to test findUserByUsername
        //instance.findUserByUsername(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsers', function() {
      it('should call findUsers successfully', function(done) {
        //uncomment below and update the code to test findUsers
        //instance.findUsers(function(error) {
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
    describe('listAllRoles', function() {
      it('should call listAllRoles successfully', function(done) {
        //uncomment below and update the code to test listAllRoles
        //instance.listAllRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('login', function() {
      it('should call login successfully', function(done) {
        //uncomment below and update the code to test login
        //instance.login(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerUser', function() {
      it('should call registerUser successfully', function(done) {
        //uncomment below and update the code to test registerUser
        //instance.registerUser(function(error) {
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
    describe('requestPasswordReset', function() {
      it('should call requestPasswordReset successfully', function(done) {
        //uncomment below and update the code to test requestPasswordReset
        //instance.requestPasswordReset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyPasswordReset', function() {
      it('should call verifyPasswordReset successfully', function(done) {
        //uncomment below and update the code to test verifyPasswordReset
        //instance.verifyPasswordReset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyUserRegistration', function() {
      it('should call verifyUserRegistration successfully', function(done) {
        //uncomment below and update the code to test verifyUserRegistration
        //instance.verifyUserRegistration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
