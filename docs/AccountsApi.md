# Id4iApi.AccountsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMultipleUserRolesUsingPOST**](AccountsApi.md#addMultipleUserRolesUsingPOST) | **POST** /api/v1/organization/{organizationId}/users/role | addMultipleUserRoles
[**addUserRolesUsingPOST**](AccountsApi.md#addUserRolesUsingPOST) | **POST** /api/v1/organization/{organizationId}/user/{username}/roles | addUserRoles
[**findUserByUsernameUsingGET**](AccountsApi.md#findUserByUsernameUsingGET) | **GET** /api/v1/users/{username} | findUserByUsername
[**getMultipleUserRolesUsingGET**](AccountsApi.md#getMultipleUserRolesUsingGET) | **GET** /api/v1/organization/{organizationId}/users/role | getMultipleUserRoles
[**getOrganizationsUsingGET**](AccountsApi.md#getOrganizationsUsingGET) | **GET** /api/v1/user/organizations | getOrganizations
[**getUserRolesByUsernameUsingGET**](AccountsApi.md#getUserRolesByUsernameUsingGET) | **GET** /api/v1/organization/{organizationId}/user/{username}/roles | getUserRolesByUsername
[**getUsersUsingGET**](AccountsApi.md#getUsersUsingGET) | **GET** /api/v1/organization/{organizationId}/users | getUsers
[**listUsingGET2**](AccountsApi.md#listUsingGET2) | **GET** /api/v1/roles | list
[**login**](AccountsApi.md#login) | **POST** /login | 
[**registerUserUsingPOST**](AccountsApi.md#registerUserUsingPOST) | **POST** /account/registration | registerUser
[**removeMultipleUserRolesUsingDELETE**](AccountsApi.md#removeMultipleUserRolesUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/users/role | removeMultipleUserRoles
[**removeUserRolesUsingDELETE**](AccountsApi.md#removeUserRolesUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/user/{username}/roles | removeUserRoles
[**requestPasswordResetUsingPOST**](AccountsApi.md#requestPasswordResetUsingPOST) | **POST** /account/password | requestPasswordReset
[**verifyPasswordResetUsingPUT**](AccountsApi.md#verifyPasswordResetUsingPUT) | **PUT** /account/password | verifyPasswordReset
[**verifyRegistrationUsingPOST**](AccountsApi.md#verifyRegistrationUsingPOST) | **POST** /account/verification | verifyRegistration


<a name="addMultipleUserRolesUsingPOST"></a>
# **addMultipleUserRolesUsingPOST**
> ResponseEntity addMultipleUserRolesUsingPOST(organizationId, changeUserRoleRequest, opts)

addMultipleUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var changeUserRoleRequest = new Id4iApi.ChangeUserRoleRequest(); // ChangeUserRoleRequest | changeUserRoleRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMultipleUserRolesUsingPOST(organizationId, changeUserRoleRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **changeUserRoleRequest** | [**ChangeUserRoleRequest**](ChangeUserRoleRequest.md)| changeUserRoleRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addUserRolesUsingPOST"></a>
# **addUserRolesUsingPOST**
> ResponseEntity addUserRolesUsingPOST(organizationId, username, changeRoleRequest, opts)

addUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserRolesUsingPOST(organizationId, username, changeRoleRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findUserByUsernameUsingGET"></a>
# **findUserByUsernameUsingGET**
> UserPresentation findUserByUsernameUsingGET(username, opts)

findUserByUsername

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var username = "username_example"; // String | username

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserByUsernameUsingGET(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**UserPresentation**](UserPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getMultipleUserRolesUsingGET"></a>
# **getMultipleUserRolesUsingGET**
> PaginatedUserRolesResponse getMultipleUserRolesUsingGET(organizationId, opts)

getMultipleUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMultipleUserRolesUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**PaginatedUserRolesResponse**](PaginatedUserRolesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getOrganizationsUsingGET"></a>
# **getOrganizationsUsingGET**
> PaginatedResponseOrganization getOrganizationsUsingGET(opts)

getOrganizations

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'role': "role_example", // String | role
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **role** | **String**| role | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**PaginatedResponseOrganization**](PaginatedResponseOrganization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getUserRolesByUsernameUsingGET"></a>
# **getUserRolesByUsernameUsingGET**
> UserRoles getUserRolesByUsernameUsingGET(organizationId, username, opts)

getUserRolesByUsername

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRolesByUsernameUsingGET(organizationId, username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**UserRoles**](UserRoles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> PaginatedUserPresentationResponse getUsersUsingGET(organizationId, opts)

getUsers

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**PaginatedUserPresentationResponse**](PaginatedUserPresentationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listUsingGET2"></a>
# **listUsingGET2**
> RoleResponse listUsingGET2(opts)

list

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'privilege': "privilege_example", // String | privilege
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **privilege** | **String**| privilege | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**RoleResponse**](RoleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

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

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="registerUserUsingPOST"></a>
# **registerUserUsingPOST**
> UserRegistrationResponse registerUserUsingPOST(userRegistration, opts)

registerUser

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var userRegistration = new Id4iApi.UserRegistrationRequest(); // UserRegistrationRequest | userRegistration

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUserUsingPOST(userRegistration, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRegistration** | [**UserRegistrationRequest**](UserRegistrationRequest.md)| userRegistration | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**UserRegistrationResponse**](UserRegistrationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeMultipleUserRolesUsingDELETE"></a>
# **removeMultipleUserRolesUsingDELETE**
> ResponseEntity removeMultipleUserRolesUsingDELETE(organizationId, changeUserRoleRequest, opts)

removeMultipleUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var changeUserRoleRequest = new Id4iApi.ChangeUserRoleRequest(); // ChangeUserRoleRequest | changeUserRoleRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeMultipleUserRolesUsingDELETE(organizationId, changeUserRoleRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **changeUserRoleRequest** | [**ChangeUserRoleRequest**](ChangeUserRoleRequest.md)| changeUserRoleRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeUserRolesUsingDELETE"></a>
# **removeUserRolesUsingDELETE**
> ResponseEntity removeUserRolesUsingDELETE(organizationId, username, changeRoleRequest, opts)

removeUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUserRolesUsingDELETE(organizationId, username, changeRoleRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> SimpleMessageResponse requestPasswordResetUsingPOST(resetRequest, opts)

requestPasswordReset

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var resetRequest = new Id4iApi.PasswordResetRequest(); // PasswordResetRequest | resetRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestPasswordResetUsingPOST(resetRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetRequest** | [**PasswordResetRequest**](PasswordResetRequest.md)| resetRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="verifyPasswordResetUsingPUT"></a>
# **verifyPasswordResetUsingPUT**
> SimpleMessageResponse verifyPasswordResetUsingPUT(verificationRequest, opts)

verifyPasswordReset

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var verificationRequest = new Id4iApi.PasswordResetVerificationRequest(); // PasswordResetVerificationRequest | verificationRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyPasswordResetUsingPUT(verificationRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationRequest** | [**PasswordResetVerificationRequest**](PasswordResetVerificationRequest.md)| verificationRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="verifyRegistrationUsingPOST"></a>
# **verifyRegistrationUsingPOST**
> ResponseEntity verifyRegistrationUsingPOST(token, opts)

verifyRegistration

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountsApi();

var token = new Id4iApi.RegistrationVerificationTokenPresentation(); // RegistrationVerificationTokenPresentation | token

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyRegistrationUsingPOST(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**RegistrationVerificationTokenPresentation**](RegistrationVerificationTokenPresentation.md)| token | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

