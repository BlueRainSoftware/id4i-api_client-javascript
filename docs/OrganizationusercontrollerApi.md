# Id4iApi.OrganizationusercontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserRolesUsingGET**](OrganizationusercontrollerApi.md#getUserRolesUsingGET) | **GET** /api/v1/organization/{organizationId}/userroles | getUserRoles
[**getUsersUsingGET**](OrganizationusercontrollerApi.md#getUsersUsingGET) | **GET** /api/v1/organization/{organizationId}/users | getUsers


<a name="getUserRolesUsingGET"></a>
# **getUserRolesUsingGET**
> PaginatedResponseUserRoles getUserRolesUsingGET(organizationId, opts)

getUserRoles

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationusercontrollerApi();

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
apiInstance.getUserRolesUsingGET(organizationId, opts, callback);
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

[**PaginatedResponseUserRoles**](PaginatedResponseUserRoles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> PaginatedResponseUserPresentation getUsersUsingGET(organizationId, opts)

getUsers

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationusercontrollerApi();

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

[**PaginatedResponseUserPresentation**](PaginatedResponseUserPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

