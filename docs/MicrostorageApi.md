# Id4iApi.MicrostorageApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**read**](MicrostorageApi.md#read) | **GET** /api/v1/microstorage/{id4n}/{organization} | Read data from microstorage
[**write**](MicrostorageApi.md#write) | **PUT** /api/v1/microstorage/{id4n}/{organization} | Write data to microstorage


<a name="read"></a>
# **read**
> InputStreamResource read(organization, id4n, opts)

Read data from microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.MicrostorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

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
apiInstance.read(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="write"></a>
# **write**
> Object write(organization, id4n, opts)

Write data to microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.MicrostorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'contentType': "contentType_example", // String | Content-Type
  'contentLength': 789 // Number | Content-Length
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.write(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **contentLength** | **Number**| Content-Length | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, */*, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

