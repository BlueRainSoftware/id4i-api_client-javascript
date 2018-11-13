# Id4iApi.OrganizationsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPartnerOrganization**](OrganizationsApi.md#addPartnerOrganization) | **PUT** /api/v1/organizations/{organizationId}/partner | Add partner
[**addUserRoles**](OrganizationsApi.md#addUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
[**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /api/v1/organizations | Create organization
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /api/v1/organizations/{organizationId} | Delete organization
[**deleteOrganizationBillingAddress**](OrganizationsApi.md#deleteOrganizationBillingAddress) | **DELETE** /api/v1/organizations/{organizationId}/addresses/billing | Remove billing address
[**deleteOrganizationLogo**](OrganizationsApi.md#deleteOrganizationLogo) | **DELETE** /api/v1/organizations/{organizationId}/logo | Delete organization logo
[**findOrganization**](OrganizationsApi.md#findOrganization) | **GET** /api/v1/organizations/{organizationId} | Find organization by id/namespace
[**findOrganizationAddress**](OrganizationsApi.md#findOrganizationAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/default | Retrieve address
[**findOrganizationBillingAddress**](OrganizationsApi.md#findOrganizationBillingAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/billing | Retrieve billing address
[**getAllCollectionsOfOrganization**](OrganizationsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
[**getAllOrganizationRoles**](OrganizationsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
[**getOrganizationPrivileges**](OrganizationsApi.md#getOrganizationPrivileges) | **GET** /api/v1/organizations/{organizationId}/privileges | List my privileges
[**getOrganizationsOfUser**](OrganizationsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
[**getPartnerOrganizations**](OrganizationsApi.md#getPartnerOrganizations) | **GET** /api/v1/organizations/{organizationId}/partner | Get partners of an organization
[**getUserRoles**](OrganizationsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
[**getUsersOfOrganization**](OrganizationsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
[**inviteUsers**](OrganizationsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
[**listCountries**](OrganizationsApi.md#listCountries) | **GET** /api/v1/countries | List countries
[**removePartnerOrganization**](OrganizationsApi.md#removePartnerOrganization) | **DELETE** /api/v1/organizations/{organizationId}/partner | Remove partner
[**removeUserRoles**](OrganizationsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
[**setOrganizationLogo**](OrganizationsApi.md#setOrganizationLogo) | **POST** /api/v1/organizations/{organizationId}/logo | Update organization logo
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PUT** /api/v1/organizations/{organizationId} | Update organization
[**updateOrganizationAddress**](OrganizationsApi.md#updateOrganizationAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/default | Store address
[**updateOrganizationBillingAddress**](OrganizationsApi.md#updateOrganizationBillingAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/billing | Store billing address


<a name="addPartnerOrganization"></a>
# **addPartnerOrganization**
> addPartnerOrganization(organizationId, request)

Add partner

Adding a partner organization. If the given organization is already a partner the result will be state 200 too.

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

var organizationId = "organizationId_example"; // String | The namespace of the organization

var request = new Id4iApi.AddPartnerRequest(); // AddPartnerRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPartnerOrganization(organizationId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization | 
 **request** | [**AddPartnerRequest**](AddPartnerRequest.md)| request | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="deleteOrganization"></a>
# **deleteOrganization**
> deleteOrganization(organizationId)

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

var organizationId = "organizationId_example"; // String | The namespace of the organization to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganization(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization to be deleted. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="deleteOrganizationBillingAddress"></a>
# **deleteOrganizationBillingAddress**
> deleteOrganizationBillingAddress(organizationId)

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

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationBillingAddress(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organizationId | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="deleteOrganizationLogo"></a>
# **deleteOrganizationLogo**
> deleteOrganizationLogo(organizationId)

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

var organizationId = "organizationId_example"; // String | The namespace of the organization where the logo should be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationLogo(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization where the logo should be deleted. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="findOrganization"></a>
# **findOrganization**
> Organization findOrganization(organizationId)

Find organization by id/namespace

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

var organizationId = "organizationId_example"; // String | The namespace of the organization to be retrieved.


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
 **organizationId** | **String**| The namespace of the organization to be retrieved. | 

### Return type

[**Organization**](Organization.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

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

var organizationId = "organizationId_example"; // String | organizationId


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
 **organizationId** | **String**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

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

var organizationId = "organizationId_example"; // String | organizationId


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
 **organizationId** | **String**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

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

var organizationId = "organizationId_example"; // String | The namespace of the organization

var opts = { 
  'label': "label_example", // String | Filter by this label
  'labelPrefix': "labelPrefix_example", // String | Filter by this label prefix
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'type': "type_example" // String | Filter by this type
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
 **organizationId** | **String**| The namespace of the organization | 
 **label** | **String**| Filter by this label | [optional] 
 **labelPrefix** | **String**| Filter by this label prefix | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **type** | **String**| Filter by this type | [optional] 

### Return type

[**PaginatedGuidCollection**](PaginatedGuidCollection.md)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="getOrganizationPrivileges"></a>
# **getOrganizationPrivileges**
> [&#39;String&#39;] getOrganizationPrivileges(organizationId)

List my privileges

Listing all privileges of the current user/APIKey of the specified organization.

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

var organizationId = "organizationId_example"; // String | The namespace of the organization


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationPrivileges(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization | 

### Return type

**[&#39;String&#39;]**

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="getPartnerOrganizations"></a>
# **getPartnerOrganizations**
> PaginatedResponseOfPartnerOrganization getPartnerOrganizations(organizationId, opts)

Get partners of an organization

Listing partners in a paginated manner.

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

var organizationId = "organizationId_example"; // String | The namespace of the organization to query partner organizations

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
apiInstance.getPartnerOrganizations(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization to query partner organizations | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedResponseOfPartnerOrganization**](PaginatedResponseOfPartnerOrganization.md)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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
apiInstance.listCountries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedCountryResponse**](PaginatedCountryResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="removePartnerOrganization"></a>
# **removePartnerOrganization**
> removePartnerOrganization(organizationId, request)

Remove partner

Removing a partner organization

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

var organizationId = "organizationId_example"; // String | The namespace of the organization

var request = new Id4iApi.RemovePartnerRequest(); // RemovePartnerRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removePartnerOrganization(organizationId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization | 
 **request** | [**RemovePartnerRequest**](RemovePartnerRequest.md)| request | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="setOrganizationLogo"></a>
# **setOrganizationLogo**
> PublicImagePresentation setOrganizationLogo(file, organizationId)

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

var file = "/path/to/file.txt"; // File | An image containing the new logo.

var organizationId = "organizationId_example"; // String | The namespace of the organization where the logo should be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setOrganizationLogo(file, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| An image containing the new logo. | 
 **organizationId** | **String**| The namespace of the organization where the logo should be updated. | 

### Return type

[**PublicImagePresentation**](PublicImagePresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json

<a name="updateOrganization"></a>
# **updateOrganization**
> Organization updateOrganization(organizationId, organizationUpdate)

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

var organizationId = "organizationId_example"; // String | The namespace of the organization to be updated.

var organizationUpdate = new Id4iApi.OrganizationUpdate(); // OrganizationUpdate | Updated organization object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganization(organizationId, organizationUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace of the organization to be updated. | 
 **organizationUpdate** | [**OrganizationUpdate**](OrganizationUpdate.md)| Updated organization object | 

### Return type

[**Organization**](Organization.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateOrganizationAddress"></a>
# **updateOrganizationAddress**
> OrganizationAddress updateOrganizationAddress(addressResource, organizationId)

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

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationAddress(addressResource, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **organizationId** | **String**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateOrganizationBillingAddress"></a>
# **updateOrganizationBillingAddress**
> OrganizationAddress updateOrganizationBillingAddress(addressResource, organizationId)

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

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationBillingAddress(addressResource, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **organizationId** | **String**| organizationId | 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

