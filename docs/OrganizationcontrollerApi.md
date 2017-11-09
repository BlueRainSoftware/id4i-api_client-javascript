# Id4iApi.OrganizationcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganzationUsingPOST**](OrganizationcontrollerApi.md#createOrganzationUsingPOST) | **POST** /api/v1/organization | createOrganzation
[**deleteOrganizationUsingDELETE**](OrganizationcontrollerApi.md#deleteOrganizationUsingDELETE) | **DELETE** /api/v1/organization/{organizationId} | deleteOrganization
[**getOrganizationUsingGET**](OrganizationcontrollerApi.md#getOrganizationUsingGET) | **GET** /api/v1/organization/{organizationId} | getOrganization
[**updateOrganizationUsingPUT**](OrganizationcontrollerApi.md#updateOrganizationUsingPUT) | **PUT** /api/v1/organization/{organizationId} | updateOrganization


<a name="createOrganzationUsingPOST"></a>
# **createOrganzationUsingPOST**
> ResponseEntity createOrganzationUsingPOST(organization, opts)

createOrganzation

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationcontrollerApi();

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

<a name="deleteOrganizationUsingDELETE"></a>
# **deleteOrganizationUsingDELETE**
> ResponseEntity deleteOrganizationUsingDELETE(organizationId, opts)

deleteOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationcontrollerApi();

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

<a name="getOrganizationUsingGET"></a>
# **getOrganizationUsingGET**
> Organization getOrganizationUsingGET(organizationId, opts)

getOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationcontrollerApi();

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

<a name="updateOrganizationUsingPUT"></a>
# **updateOrganizationUsingPUT**
> Organization updateOrganizationUsingPUT(organizationId, organization, opts)

updateOrganization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationcontrollerApi();

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

