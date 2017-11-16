# Id4iApi.OrganizationscollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllUsingGET**](OrganizationscollectioncontrollerApi.md#getAllUsingGET) | **GET** /api/v1/organization/{organizationId}/collections | getAll


<a name="getAllUsingGET"></a>
# **getAllUsingGET**
> PaginatedResponseGuidCollection getAllUsingGET(organizationId, opts)

getAll

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationscollectioncontrollerApi();

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
apiInstance.getAllUsingGET(organizationId, opts, callback);
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

