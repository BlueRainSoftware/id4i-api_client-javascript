# Id4iApi.AccountsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserRoles**](AccountsApi.md#addUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
[**completeRegistration**](AccountsApi.md#completeRegistration) | **PUT** /account/registration | Complete registration
[**findUserByUsername**](AccountsApi.md#findUserByUsername) | **GET** /api/v1/users/{username} | Find by username
[**findUsers**](AccountsApi.md#findUsers) | **GET** /api/v1/users | Find users
[**getAllOrganizationRoles**](AccountsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
[**getOrganizationsOfUser**](AccountsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
[**getUserRoles**](AccountsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
[**getUsersOfOrganization**](AccountsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
[**inviteUsers**](AccountsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
[**listAllRoles**](AccountsApi.md#listAllRoles) | **GET** /api/v1/roles | List roles
[**login**](AccountsApi.md#login) | **POST** /login | 
[**registerUser**](AccountsApi.md#registerUser) | **POST** /account/registration | Register user
[**removeUserRoles**](AccountsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
[**requestPasswordReset**](AccountsApi.md#requestPasswordReset) | **POST** /account/password | Request password reset
[**verifyPasswordReset**](AccountsApi.md#verifyPasswordReset) | **PUT** /account/password | Verify password reset
[**verifyUserRegistration**](AccountsApi.md#verifyUserRegistration) | **POST** /account/verification | Verify registration


<a name="addUserRoles"></a>
# **addUserRoles**
> addUserRoles(changeRoleRequest, organizationId, username)

Add role(s) to user

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest

var organizationId = "organizationId_example"; // String | The namespace of the organization

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUserRoles(changeRoleRequest, organizationId, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 
 **organizationId** | **String**| The namespace of the organization | 
 **username** | **String**| username | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="completeRegistration"></a>
# **completeRegistration**
> completeRegistration(completeRegistration)

Complete registration

Completing a registration e.g. for invited users. Finish registration with a username and a password.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var completeRegistration = new Id4iApi.CompleteUserRegistrationRequest(); // CompleteUserRegistrationRequest | Contains the verification token, the username and the initial password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.completeRegistration(completeRegistration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **completeRegistration** | [**CompleteUserRegistrationRequest**](CompleteUserRegistrationRequest.md)| Contains the verification token, the username and the initial password. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="findUserByUsername"></a>
# **findUserByUsername**
> UserPresentation findUserByUsername(username)

Find by username

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserByUsername(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 

### Return type

[**UserPresentation**](UserPresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="findUsers"></a>
# **findUsers**
> PaginatedUserPresentationResponse findUsers(usernamePrefix, opts)

Find users

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var usernamePrefix = "\"a.v\""; // String | Find users starting with this prefix.

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0 // Number | Start with the n-th element
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUsers(usernamePrefix, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usernamePrefix** | **String**| Find users starting with this prefix. | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedUserPresentationResponse**](PaginatedUserPresentationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getAllOrganizationRoles"></a>
# **getAllOrganizationRoles**
> PaginatedUserRolesResponse getAllOrganizationRoles(organizationId, opts)

List users and their roles

Listing users and their roles in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = "organizationId_example"; // String | organizationId

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0 // Number | Start with the n-th element
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllOrganizationRoles(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organizationId | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedUserRolesResponse**](PaginatedUserRolesResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getOrganizationsOfUser"></a>
# **getOrganizationsOfUser**
> PaginatedOrganizationResponse getOrganizationsOfUser(opts)

Retrieve organizations of user

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'role': "role_example" // String | role
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationsOfUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **role** | **String**| role | [optional] 

### Return type

[**PaginatedOrganizationResponse**](PaginatedOrganizationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getUserRoles"></a>
# **getUserRoles**
> PaginatedStringResponse getUserRoles(organizationId, username, opts)

Get user roles by username

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = "organizationId_example"; // String | The namespace of the organization

var username = "username_example"; // String | username

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0 // Number | Start with the n-th element
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRoles(organizationId, username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization | 
 **username** | **String**| username | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedStringResponse**](PaginatedStringResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getUsersOfOrganization"></a>
# **getUsersOfOrganization**
> PaginatedUserPresentationResponse getUsersOfOrganization(organizationId, opts)

Find users in organization

Finding users in the specified organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = "organizationId_example"; // String | organizationId

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0 // Number | Start with the n-th element
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersOfOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organizationId | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedUserPresentationResponse**](PaginatedUserPresentationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="inviteUsers"></a>
# **inviteUsers**
> inviteUsers(invitationList, organizationId)

Invite Users

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var invitationList = new Id4iApi.OrganizationUserInvitationListRequest(); // OrganizationUserInvitationListRequest | invitationList

var organizationId = "organizationId_example"; // String | The namespace of the organization where users should be invited


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.inviteUsers(invitationList, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitationList** | [**OrganizationUserInvitationListRequest**](OrganizationUserInvitationListRequest.md)| invitationList | 
 **organizationId** | **String**| The namespace of the organization where users should be invited | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listAllRoles"></a>
# **listAllRoles**
> RoleResponse listAllRoles(opts)

List roles

Listing of roles.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'privilege': "privilege_example" // String | If specified the roles will be filtered containing that privilege.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllRoles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **privilege** | **String**| If specified the roles will be filtered containing that privilege. | [optional] 

### Return type

[**RoleResponse**](RoleResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="login"></a>
# **login**
> login(accountCredentials)



ID4i API Login

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var accountCredentials = new Id4iApi.AccountCredentials(); // AccountCredentials | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.login(accountCredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountCredentials** | [**AccountCredentials**](AccountCredentials.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="registerUser"></a>
# **registerUser**
> UserRegistrationResponse registerUser(userRegistration)

Register user

Registering a new user.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var userRegistration = new Id4iApi.UserRegistrationRequest(); // UserRegistrationRequest | The user information about the new created user.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUser(userRegistration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRegistration** | [**UserRegistrationRequest**](UserRegistrationRequest.md)| The user information about the new created user. | 

### Return type

[**UserRegistrationResponse**](UserRegistrationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="removeUserRoles"></a>
# **removeUserRoles**
> removeUserRoles(changeRoleRequest, organizationId, username)

Remove role(s) from user

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AccountsApi();

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest

var organizationId = "organizationId_example"; // String | The namespace of the organization

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeUserRoles(changeRoleRequest, organizationId, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 
 **organizationId** | **String**| The namespace of the organization | 
 **username** | **String**| username | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="requestPasswordReset"></a>
# **requestPasswordReset**
> SimpleMessageResponse requestPasswordReset(resetRequest)

Request password reset

Requesting a reset for a new password. 

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var resetRequest = new Id4iApi.PasswordResetRequest(); // PasswordResetRequest | Contains the required information to request a new password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestPasswordReset(resetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetRequest** | [**PasswordResetRequest**](PasswordResetRequest.md)| Contains the required information to request a new password. | 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="verifyPasswordReset"></a>
# **verifyPasswordReset**
> SimpleMessageResponse verifyPasswordReset(verificationRequest)

Verify password reset

Setting a new password and verifying the request to set the password.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var verificationRequest = new Id4iApi.PasswordResetVerificationRequest(); // PasswordResetVerificationRequest | Contains the new password and the verification token to set the new password.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyPasswordReset(verificationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationRequest** | [**PasswordResetVerificationRequest**](PasswordResetVerificationRequest.md)| Contains the new password and the verification token to set the new password. | 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="verifyUserRegistration"></a>
# **verifyUserRegistration**
> verifyUserRegistration(token)

Verify registration

Verifies a new user registration.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var token = new Id4iApi.RegistrationVerificationTokenPresentation(); // RegistrationVerificationTokenPresentation | The token for user verification.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.verifyUserRegistration(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**RegistrationVerificationTokenPresentation**](RegistrationVerificationTokenPresentation.md)| The token for user verification. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

