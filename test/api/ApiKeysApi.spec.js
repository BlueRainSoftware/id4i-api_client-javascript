/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.2.5-SNAPSHOT
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
    instance = new Id4iApi.ApiKeysApi();
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

  describe('ApiKeysApi', function() {
    describe('addApiKeyPrivilege', function() {
      it('should call addApiKeyPrivilege successfully', function(done) {
        //uncomment below and update the code to test addApiKeyPrivilege
        //instance.addApiKeyPrivilege(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addApiKeyPrivilegeForId4ns', function() {
      it('should call addApiKeyPrivilegeForId4ns successfully', function(done) {
        //uncomment below and update the code to test addApiKeyPrivilegeForId4ns
        //instance.addApiKeyPrivilegeForId4ns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNewApiKey', function() {
      it('should call createNewApiKey successfully', function(done) {
        //uncomment below and update the code to test createNewApiKey
        //instance.createNewApiKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApiKey', function() {
      it('should call deleteApiKey successfully', function(done) {
        //uncomment below and update the code to test deleteApiKey
        //instance.deleteApiKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApiKey', function() {
      it('should call getApiKey successfully', function(done) {
        //uncomment below and update the code to test getApiKey
        //instance.getApiKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllApiKeyPrivileges', function() {
      it('should call listAllApiKeyPrivileges successfully', function(done) {
        //uncomment below and update the code to test listAllApiKeyPrivileges
        //instance.listAllApiKeyPrivileges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllApiKeysOfOrganization', function() {
      it('should call listAllApiKeysOfOrganization successfully', function(done) {
        //uncomment below and update the code to test listAllApiKeysOfOrganization
        //instance.listAllApiKeysOfOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApiKeyPrivileges', function() {
      it('should call listApiKeyPrivileges successfully', function(done) {
        //uncomment below and update the code to test listApiKeyPrivileges
        //instance.listApiKeyPrivileges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listId4ns', function() {
      it('should call listId4ns successfully', function(done) {
        //uncomment below and update the code to test listId4ns
        //instance.listId4ns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeApiKeyPrivilege', function() {
      it('should call removeApiKeyPrivilege successfully', function(done) {
        //uncomment below and update the code to test removeApiKeyPrivilege
        //instance.removeApiKeyPrivilege(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeApiKeyPrivilegeForId4ns', function() {
      it('should call removeApiKeyPrivilegeForId4ns successfully', function(done) {
        //uncomment below and update the code to test removeApiKeyPrivilegeForId4ns
        //instance.removeApiKeyPrivilegeForId4ns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApiKey', function() {
      it('should call updateApiKey successfully', function(done) {
        //uncomment below and update the code to test updateApiKey
        //instance.updateApiKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
