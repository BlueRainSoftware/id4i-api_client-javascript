/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.7.4-SNAPSHOT
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountCredentials', 'model/ApiError', 'model/ChangeRoleRequest', 'model/CompleteUserRegistrationRequest', 'model/OrganizationUserInvitationListRequest', 'model/PaginatedOrganizationResponse', 'model/PaginatedStringResponse', 'model/PaginatedUserPresentationResponse', 'model/PaginatedUserRolesResponse', 'model/PasswordResetRequest', 'model/PasswordResetVerificationRequest', 'model/RegistrationVerificationTokenPresentation', 'model/RoleResponse', 'model/SimpleMessageResponse', 'model/UserPresentation', 'model/UserRegistrationRequest', 'model/UserRegistrationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountCredentials'), require('../model/ApiError'), require('../model/ChangeRoleRequest'), require('../model/CompleteUserRegistrationRequest'), require('../model/OrganizationUserInvitationListRequest'), require('../model/PaginatedOrganizationResponse'), require('../model/PaginatedStringResponse'), require('../model/PaginatedUserPresentationResponse'), require('../model/PaginatedUserRolesResponse'), require('../model/PasswordResetRequest'), require('../model/PasswordResetVerificationRequest'), require('../model/RegistrationVerificationTokenPresentation'), require('../model/RoleResponse'), require('../model/SimpleMessageResponse'), require('../model/UserPresentation'), require('../model/UserRegistrationRequest'), require('../model/UserRegistrationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.AccountsApi = factory(root.Id4iApi.ApiClient, root.Id4iApi.AccountCredentials, root.Id4iApi.ApiError, root.Id4iApi.ChangeRoleRequest, root.Id4iApi.CompleteUserRegistrationRequest, root.Id4iApi.OrganizationUserInvitationListRequest, root.Id4iApi.PaginatedOrganizationResponse, root.Id4iApi.PaginatedStringResponse, root.Id4iApi.PaginatedUserPresentationResponse, root.Id4iApi.PaginatedUserRolesResponse, root.Id4iApi.PasswordResetRequest, root.Id4iApi.PasswordResetVerificationRequest, root.Id4iApi.RegistrationVerificationTokenPresentation, root.Id4iApi.RoleResponse, root.Id4iApi.SimpleMessageResponse, root.Id4iApi.UserPresentation, root.Id4iApi.UserRegistrationRequest, root.Id4iApi.UserRegistrationResponse);
  }
}(this, function(ApiClient, AccountCredentials, ApiError, ChangeRoleRequest, CompleteUserRegistrationRequest, OrganizationUserInvitationListRequest, PaginatedOrganizationResponse, PaginatedStringResponse, PaginatedUserPresentationResponse, PaginatedUserRolesResponse, PasswordResetRequest, PasswordResetVerificationRequest, RegistrationVerificationTokenPresentation, RoleResponse, SimpleMessageResponse, UserPresentation, UserRegistrationRequest, UserRegistrationResponse) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 0.7.4-SNAPSHOT
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserRoles operation.
     * @callback module:api/AccountsApi~addUserRolesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add role(s) to user
     * @param {String} organizationId The namespace of the organization
     * @param {String} username username
     * @param {module:model/ChangeRoleRequest} changeRoleRequest changeRoleRequest
     * @param {module:api/AccountsApi~addUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserRoles = function(organizationId, username, changeRoleRequest, callback) {
      var postBody = changeRoleRequest;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addUserRoles");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addUserRoles");
      }

      // verify the required parameter 'changeRoleRequest' is set
      if (changeRoleRequest === undefined || changeRoleRequest === null) {
        throw new Error("Missing the required parameter 'changeRoleRequest' when calling addUserRoles");
      }


      var pathParams = {
        'organizationId': organizationId,
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/users/{username}/roles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the completeRegistration operation.
     * @callback module:api/AccountsApi~completeRegistrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete registration
     * Completing a registration e.g. for invited users. Finish registration with a username and a password.
     * @param {module:model/CompleteUserRegistrationRequest} completeRegistration Contains the verification token, the username and the initial password.
     * @param {module:api/AccountsApi~completeRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.completeRegistration = function(completeRegistration, callback) {
      var postBody = completeRegistration;

      // verify the required parameter 'completeRegistration' is set
      if (completeRegistration === undefined || completeRegistration === null) {
        throw new Error("Missing the required parameter 'completeRegistration' when calling completeRegistration");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/registration', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserByUsername operation.
     * @callback module:api/AccountsApi~findUserByUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find by username
     * @param {String} username username
     * @param {module:api/AccountsApi~findUserByUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPresentation}
     */
    this.findUserByUsername = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling findUserByUsername");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = UserPresentation;

      return this.apiClient.callApi(
        '/api/v1/users/{username}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsers operation.
     * @callback module:api/AccountsApi~findUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUserPresentationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users
     * @param {Object} opts Optional parameters
     * @param {String} opts.usernamePrefix 
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~findUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUserPresentationResponse}
     */
    this.findUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'usernamePrefix': opts['usernamePrefix'],
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedUserPresentationResponse;

      return this.apiClient.callApi(
        '/api/v1/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllOrganizationRoles operation.
     * @callback module:api/AccountsApi~getAllOrganizationRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUserRolesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users and their roles
     * Listing users and their roles in a paginated manner.
     * @param {String} organizationId organizationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~getAllOrganizationRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUserRolesResponse}
     */
    this.getAllOrganizationRoles = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAllOrganizationRoles");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedUserRolesResponse;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationsOfUser operation.
     * @callback module:api/AccountsApi~getOrganizationsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedOrganizationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve organizations of user
     * @param {Object} opts Optional parameters
     * @param {String} opts.role role
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~getOrganizationsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedOrganizationResponse}
     */
    this.getOrganizationsOfUser = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'role': opts['role'],
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedOrganizationResponse;

      return this.apiClient.callApi(
        '/api/v1/user/organizations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserRoles operation.
     * @callback module:api/AccountsApi~getUserRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedStringResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user roles by username
     * @param {String} organizationId The namespace of the organization
     * @param {String} username username
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~getUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedStringResponse}
     */
    this.getUserRoles = function(organizationId, username, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getUserRoles");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserRoles");
      }


      var pathParams = {
        'organizationId': organizationId,
        'username': username
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedStringResponse;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/users/{username}/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersOfOrganization operation.
     * @callback module:api/AccountsApi~getUsersOfOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUserPresentationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users in organization
     * Finding users in the specified organization in a paginated manner.
     * @param {String} organizationId organizationId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~getUsersOfOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUserPresentationResponse}
     */
    this.getUsersOfOrganization = function(organizationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getUsersOfOrganization");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PaginatedUserPresentationResponse;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the inviteUsers operation.
     * @callback module:api/AccountsApi~inviteUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite Users
     * @param {String} organizationId The namespace of the organization where users should be invited
     * @param {module:model/OrganizationUserInvitationListRequest} invitationList invitationList
     * @param {module:api/AccountsApi~inviteUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.inviteUsers = function(organizationId, invitationList, callback) {
      var postBody = invitationList;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling inviteUsers");
      }

      // verify the required parameter 'invitationList' is set
      if (invitationList === undefined || invitationList === null) {
        throw new Error("Missing the required parameter 'invitationList' when calling inviteUsers");
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/users/invite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the isContractRequired operation.
     * @callback module:api/AccountsApi~isContractRequiredCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tells you whether your company needs to have a contract with BlueRain to be able to sign up
     * On production systems, users must confirm that their organization has a valid contract for ID4i usage. It is not required on test and sandbox systems. 
     * @param {module:api/AccountsApi~isContractRequiredCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.isContractRequired = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/account/contractRequired', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllRoles operation.
     * @callback module:api/AccountsApi~listAllRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List roles
     * Listing of roles.
     * @param {Object} opts Optional parameters
     * @param {String} opts.privilege If specified the roles will be filtered containing that privilege.
     * @param {Number} opts.offset Start with the n-th element
     * @param {Number} opts.limit The maximum count of returned elements
     * @param {module:api/AccountsApi~listAllRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoleResponse}
     */
    this.listAllRoles = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'privilege': opts['privilege'],
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = RoleResponse;

      return this.apiClient.callApi(
        '/api/v1/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AccountsApi~loginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ID4i API Login
     * @param {module:model/AccountCredentials} accountCredentials 
     * @param {module:api/AccountsApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.login = function(accountCredentials, callback) {
      var postBody = accountCredentials;

      // verify the required parameter 'accountCredentials' is set
      if (accountCredentials === undefined || accountCredentials === null) {
        throw new Error("Missing the required parameter 'accountCredentials' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerUser operation.
     * @callback module:api/AccountsApi~registerUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRegistrationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register user
     * Registering a new user.
     * @param {module:model/UserRegistrationRequest} userRegistration The user information about the new created user.
     * @param {module:api/AccountsApi~registerUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRegistrationResponse}
     */
    this.registerUser = function(userRegistration, callback) {
      var postBody = userRegistration;

      // verify the required parameter 'userRegistration' is set
      if (userRegistration === undefined || userRegistration === null) {
        throw new Error("Missing the required parameter 'userRegistration' when calling registerUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = UserRegistrationResponse;

      return this.apiClient.callApi(
        '/account/registration', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserRoles operation.
     * @callback module:api/AccountsApi~removeUserRolesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove role(s) from user
     * @param {String} organizationId The namespace of the organization
     * @param {String} username username
     * @param {module:model/ChangeRoleRequest} changeRoleRequest changeRoleRequest
     * @param {module:api/AccountsApi~removeUserRolesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeUserRoles = function(organizationId, username, changeRoleRequest, callback) {
      var postBody = changeRoleRequest;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeUserRoles");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling removeUserRoles");
      }

      // verify the required parameter 'changeRoleRequest' is set
      if (changeRoleRequest === undefined || changeRoleRequest === null) {
        throw new Error("Missing the required parameter 'changeRoleRequest' when calling removeUserRoles");
      }


      var pathParams = {
        'organizationId': organizationId,
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/organizations/{organizationId}/users/{username}/roles', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestPasswordReset operation.
     * @callback module:api/AccountsApi~requestPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request password reset
     * Requesting a reset for a new password. 
     * @param {module:model/PasswordResetRequest} resetRequest Contains the required information to request a new password.
     * @param {module:api/AccountsApi~requestPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleMessageResponse}
     */
    this.requestPasswordReset = function(resetRequest, callback) {
      var postBody = resetRequest;

      // verify the required parameter 'resetRequest' is set
      if (resetRequest === undefined || resetRequest === null) {
        throw new Error("Missing the required parameter 'resetRequest' when calling requestPasswordReset");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = SimpleMessageResponse;

      return this.apiClient.callApi(
        '/account/password', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyPasswordReset operation.
     * @callback module:api/AccountsApi~verifyPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify password reset
     * Setting a new password and verifying the request to set the password.
     * @param {module:model/PasswordResetVerificationRequest} verificationRequest Contains the new password and the verification token to set the new password.
     * @param {module:api/AccountsApi~verifyPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleMessageResponse}
     */
    this.verifyPasswordReset = function(verificationRequest, callback) {
      var postBody = verificationRequest;

      // verify the required parameter 'verificationRequest' is set
      if (verificationRequest === undefined || verificationRequest === null) {
        throw new Error("Missing the required parameter 'verificationRequest' when calling verifyPasswordReset");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = SimpleMessageResponse;

      return this.apiClient.callApi(
        '/account/password', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyUserRegistration operation.
     * @callback module:api/AccountsApi~verifyUserRegistrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify registration
     * Verifies a new user registration.
     * @param {module:model/RegistrationVerificationTokenPresentation} token The token for user verification.
     * @param {module:api/AccountsApi~verifyUserRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.verifyUserRegistration = function(token, callback) {
      var postBody = token;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling verifyUserRegistration");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/verification', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
