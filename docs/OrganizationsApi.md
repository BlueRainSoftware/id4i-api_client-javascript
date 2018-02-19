# Id4iApi.OrganizationsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserRoles**](OrganizationsApi.md#addUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
[**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /api/v1/organizations | Create organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /api/v1/organizations/{organizationId} | Delete organization
[**deleteOrganizationBillingAddress**](OrganizationsApi.md#deleteOrganizationBillingAddress) | **DELETE** /api/v1/organizations/{organizationId}/addresses/billing | Remove billing address
[**deleteOrganizationLogo**](OrganizationsApi.md#deleteOrganizationLogo) | **DELETE** /api/v1/organizations/{organizationId}/logo | Delete organization logo
[**findOrganization**](OrganizationsApi.md#findOrganization) | **GET** /api/v1/organizations/{organizationId} | Find organization by id
[**findOrganizationAddress**](OrganizationsApi.md#findOrganizationAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/default | Retrieve address
[**findOrganizationBillingAddress**](OrganizationsApi.md#findOrganizationBillingAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/billing | Retrieve billing address
[**getAllCollectionsOfOrganization**](OrganizationsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
[**getAllOrganizationRoles**](OrganizationsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
[**getOrganizationsOfUser**](OrganizationsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
[**getUserRoles**](OrganizationsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
[**getUsersOfOrganization**](OrganizationsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
[**inviteUsers**](OrganizationsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
[**listCountries**](OrganizationsApi.md#listCountries) | **GET** /api/v1/countries | List countries
[**removeUserRoles**](OrganizationsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
[**setOrganizationLogo**](OrganizationsApi.md#setOrganizationLogo) | **POST** /api/v1/organizations/{organizationId}/logo | Update organization logo
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PUT** /api/v1/organizations/{organizationId} | Update organization
[**updateOrganizationAddress**](OrganizationsApi.md#updateOrganizationAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/default | Store address
[**updateOrganizationBillingAddress**](OrganizationsApi.md#updateOrganizationBillingAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/billing | Store billing address


<a name="addUserRoles"></a>
# **addUserRoles**
> ApiError addUserRoles(organizationId, username, changeRoleRequest)

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserRoles(organizationId, username, changeRoleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createOrganization"></a>
# **createOrganization**
> Organization createOrganization(organization)

Create organization

Creating a new organization.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organization = new Id4iApi.Organization(); // Organization | Organization to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrganization(organization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**Organization**](Organization.md)| Organization to be created | 

### Return type

[**Organization**](Organization.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteOrganization"></a>
# **deleteOrganization**
> ApiError deleteOrganization(organizationId)

Delete organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | The id of the organization to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOrganization(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization to be deleted. | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteOrganizationBillingAddress"></a>
# **deleteOrganizationBillingAddress**
> ApiError deleteOrganizationBillingAddress(organizationId)

Remove billing address

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOrganizationBillingAddress(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteOrganizationLogo"></a>
# **deleteOrganizationLogo**
> ApiError deleteOrganizationLogo(organizationId)

Delete organization logo

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | The id of the organization where the logo should be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOrganizationLogo(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization where the logo should be deleted. | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findOrganization"></a>
# **findOrganization**
> Organization findOrganization(organizationId)

Find organization by id

Returns a single organization.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | The id of the organization to be retrieved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findOrganization(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization to be retrieved. | 

### Return type

[**Organization**](Organization.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findOrganizationAddress"></a>
# **findOrganizationAddress**
> OrganizationAddress findOrganizationAddress(organizationId)

Retrieve address

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findOrganizationAddress(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findOrganizationBillingAddress"></a>
# **findOrganizationBillingAddress**
> OrganizationAddress findOrganizationBillingAddress(organizationId)

Retrieve billing address

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findOrganizationBillingAddress(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getAllCollectionsOfOrganization"></a>
# **getAllCollectionsOfOrganization**
> PaginatedGuidCollection getAllCollectionsOfOrganization(organizationId, opts)

Get collections of organization

Retrieving all collections of an organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56, // Number | The maximum count of returned elements
  'type': "type_example", // String | Filter by this type
  'label': "label_example", // String | Filter by this label
  'labelPrefix': "labelPrefix_example" // String | Filter by this label prefix
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCollectionsOfOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **type** | **String**| Filter by this type | [optional] 
 **label** | **String**| Filter by this label | [optional] 
 **labelPrefix** | **String**| Filter by this label prefix | [optional] 

### Return type

[**PaginatedGuidCollection**](PaginatedGuidCollection.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
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
 **organizationId** | **Number**| organizationId | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedUserRolesResponse**](PaginatedUserRolesResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

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

var apiInstance = new Id4iApi.OrganizationsApi();

var opts = { 
  'role': "role_example", // String | role
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
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
 **role** | **String**| role | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOrganizationResponse**](PaginatedOrganizationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
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
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedStringResponse**](PaginatedStringResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
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
 **organizationId** | **Number**| organizationId | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedUserPresentationResponse**](PaginatedUserPresentationResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="inviteUsers"></a>
# **inviteUsers**
> ApiError inviteUsers(organizationId, invitationList)

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var invitationList = new Id4iApi.OrganizationUserInvitationListRequest(); // OrganizationUserInvitationListRequest | invitationList


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inviteUsers(organizationId, invitationList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **invitationList** | [**OrganizationUserInvitationListRequest**](OrganizationUserInvitationListRequest.md)| invitationList | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listCountries"></a>
# **listCountries**
> PaginatedCountryResponse listCountries(opts)

List countries

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCountries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedCountryResponse**](PaginatedCountryResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeUserRoles"></a>
# **removeUserRoles**
> ApiError removeUserRoles(organizationId, username, changeRoleRequest)

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

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var username = "username_example"; // String | username

var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // ChangeRoleRequest | changeRoleRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUserRoles(organizationId, username, changeRoleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **username** | **String**| username | 
 **changeRoleRequest** | [**ChangeRoleRequest**](ChangeRoleRequest.md)| changeRoleRequest | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="setOrganizationLogo"></a>
# **setOrganizationLogo**
> PublicImagePresentation setOrganizationLogo(organizationId, file)

Update organization logo

Updating an organization logo using a multipart file upload.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | The id of the organization where the logo should be updated.

var file = "/path/to/file.txt"; // File | An image containing the new logo.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setOrganizationLogo(organizationId, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization where the logo should be updated. | 
 **file** | **File**| An image containing the new logo. | 

### Return type

[**PublicImagePresentation**](PublicImagePresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateOrganization"></a>
# **updateOrganization**
> Organization updateOrganization(organizationId, organization)

Update organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | The id of the organization to be updated.

var organization = new Id4iApi.Organization(); // Organization | Updated organization object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganization(organizationId, organization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization to be updated. | 
 **organization** | [**Organization**](Organization.md)| Updated organization object | 

### Return type

[**Organization**](Organization.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateOrganizationAddress"></a>
# **updateOrganizationAddress**
> OrganizationAddress updateOrganizationAddress(organizationId, addressResource)

Store address

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationAddress(organizationId, addressResource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateOrganizationBillingAddress"></a>
# **updateOrganizationBillingAddress**
> OrganizationAddress updateOrganizationBillingAddress(organizationId, addressResource)

Store billing address

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationBillingAddress(organizationId, addressResource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

