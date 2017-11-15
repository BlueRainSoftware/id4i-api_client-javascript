# Id4iApi.UserorganizationscontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationsUsingGET**](UserorganizationscontrollerApi.md#getOrganizationsUsingGET) | **GET** /api/v1/user/organizations | getOrganizations


<a name="getOrganizationsUsingGET"></a>
# **getOrganizationsUsingGET**
> PaginatedResponseOrganization getOrganizationsUsingGET(opts)

getOrganizations

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.UserorganizationscontrollerApi();

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

