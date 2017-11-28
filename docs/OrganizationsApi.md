# Id4iApi.OrganizationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMultipleUserRolesUsingPOST**](OrganizationsApi.md#addMultipleUserRolesUsingPOST) | **POST** /api/v1/organization/{organizationId}/users/role | addMultipleUserRoles
[**addUserRolesUsingPOST**](OrganizationsApi.md#addUserRolesUsingPOST) | **POST** /api/v1/organization/{organizationId}/user/{username}/roles | addUserRoles
[**createOrganzationUsingPOST**](OrganizationsApi.md#createOrganzationUsingPOST) | **POST** /api/v1/organization | createOrganzation
[**deleteOrganizationLogoUsingDELETE**](OrganizationsApi.md#deleteOrganizationLogoUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/logo | deleteOrganizationLogo
[**deleteOrganizationUsingDELETE**](OrganizationsApi.md#deleteOrganizationUsingDELETE) | **DELETE** /api/v1/organization/{organizationId} | deleteOrganization
[**getAddressUsingGET**](OrganizationsApi.md#getAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/default | getAddress
[**getAllCollectionsOfOrganization**](OrganizationsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organization/{organizationId}/collections | Get collections of organization
[**getBillingAddressUsingGET**](OrganizationsApi.md#getBillingAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/billing | getBillingAddress
[**getMultipleUserRolesUsingGET**](OrganizationsApi.md#getMultipleUserRolesUsingGET) | **GET** /api/v1/organization/{organizationId}/users/role | getMultipleUserRoles
[**getOrganizationUsingGET**](OrganizationsApi.md#getOrganizationUsingGET) | **GET** /api/v1/organization/{organizationId} | getOrganization
[**getOrganizationsUsingGET**](OrganizationsApi.md#getOrganizationsUsingGET) | **GET** /api/v1/user/organizations | getOrganizations
[**getUserRolesByUsernameUsingGET**](OrganizationsApi.md#getUserRolesByUsernameUsingGET) | **GET** /api/v1/organization/{organizationId}/user/{username}/roles | getUserRolesByUsername
[**getUsersUsingGET**](OrganizationsApi.md#getUsersUsingGET) | **GET** /api/v1/organization/{organizationId}/users | getUsers
[**removeBillingAddressUsingDELETE**](OrganizationsApi.md#removeBillingAddressUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/addresses/billing | removeBillingAddress
[**removeMultipleUserRolesUsingDELETE**](OrganizationsApi.md#removeMultipleUserRolesUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/users/role | removeMultipleUserRoles
[**removeUserRolesUsingDELETE**](OrganizationsApi.md#removeUserRolesUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/user/{username}/roles | removeUserRoles
[**setOrganizationLogoUsingPOST**](OrganizationsApi.md#setOrganizationLogoUsingPOST) | **POST** /api/v1/organization/{organizationId}/logo | setOrganizationLogo
[**storeAddressUsingPOST**](OrganizationsApi.md#storeAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/default | storeAddress
[**storeBillingAddressUsingPOST**](OrganizationsApi.md#storeBillingAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/billing | storeBillingAddress
[**updateOrganizationUsingPUT**](OrganizationsApi.md#updateOrganizationUsingPUT) | **PUT** /api/v1/organization/{organizationId} | updateOrganization


<a name="addMultipleUserRolesUsingPOST"></a>
# **addMultipleUserRolesUsingPOST**
> ResponseEntity addMultipleUserRolesUsingPOST(organizationId, changeUserRoleRequest, opts)

addMultipleUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="createOrganzationUsingPOST"></a>
# **createOrganzationUsingPOST**
> ResponseEntity createOrganzationUsingPOST(organization, opts)

createOrganzation

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organization = new Id4iApi.Organization(); // Organization | organization

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
apiInstance.createOrganzationUsingPOST(organization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**Organization**](Organization.md)| organization | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteOrganizationLogoUsingDELETE"></a>
# **deleteOrganizationLogoUsingDELETE**
> ResponseEntity deleteOrganizationLogoUsingDELETE(organizationId, opts)

deleteOrganizationLogo

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.deleteOrganizationLogoUsingDELETE(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteOrganizationUsingDELETE"></a>
# **deleteOrganizationUsingDELETE**
> ResponseEntity deleteOrganizationUsingDELETE(organizationId, opts)

deleteOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.deleteOrganizationUsingDELETE(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getAddressUsingGET"></a>
# **getAddressUsingGET**
> OrganizationAddress getAddressUsingGET(organizationId, opts)

getAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.getAddressUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getAllCollectionsOfOrganization"></a>
# **getAllCollectionsOfOrganization**
> PaginatedResponseGuidCollection getAllCollectionsOfOrganization(organizationId, opts)

Get collections of organization

Retrieving all collections of an organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56, // Number | 
  'type': "type_example" // String | type
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
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **type** | **String**| type | [optional] 

### Return type

[**PaginatedResponseGuidCollection**](PaginatedResponseGuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getBillingAddressUsingGET"></a>
# **getBillingAddressUsingGET**
> OrganizationAddress getBillingAddressUsingGET(organizationId, opts)

getBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.getBillingAddressUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="getOrganizationUsingGET"></a>
# **getOrganizationUsingGET**
> Organization getOrganizationUsingGET(organizationId, opts)

getOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.getOrganizationUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Organization**](Organization.md)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="removeBillingAddressUsingDELETE"></a>
# **removeBillingAddressUsingDELETE**
> ResponseEntity removeBillingAddressUsingDELETE(organizationId, opts)

removeBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.removeBillingAddressUsingDELETE(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

var apiInstance = new Id4iApi.OrganizationsApi();

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

<a name="setOrganizationLogoUsingPOST"></a>
# **setOrganizationLogoUsingPOST**
> ResponseEntity setOrganizationLogoUsingPOST(organizationId, file, opts)

setOrganizationLogo

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var file = "/path/to/file.txt"; // File | file

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
apiInstance.setOrganizationLogoUsingPOST(organizationId, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **file** | **File**| file | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeAddressUsingPOST"></a>
# **storeAddressUsingPOST**
> ResponseEntity storeAddressUsingPOST(organizationId, addressResource, opts)

storeAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

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
apiInstance.storeAddressUsingPOST(organizationId, addressResource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeBillingAddressUsingPOST"></a>
# **storeBillingAddressUsingPOST**
> ResponseEntity storeBillingAddressUsingPOST(organizationId, addressResource, opts)

storeBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

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
apiInstance.storeBillingAddressUsingPOST(organizationId, addressResource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateOrganizationUsingPUT"></a>
# **updateOrganizationUsingPUT**
> Organization updateOrganizationUsingPUT(organizationId, organization, opts)

updateOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationsApi();

var organizationId = 789; // Number | organizationId

var organization = new Id4iApi.Organization(); // Organization | organization

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
apiInstance.updateOrganizationUsingPUT(organizationId, organization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **organization** | [**Organization**](Organization.md)| organization | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

