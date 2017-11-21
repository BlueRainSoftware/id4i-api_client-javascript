# Id4iApi.GocontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forwardUsingGET**](GocontrollerApi.md#forwardUsingGET) | **GET** /go/{guid} | forward


<a name="forwardUsingGET"></a>
# **forwardUsingGET**
> ResponseEntity forwardUsingGET(guid, opts)

forward

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GocontrollerApi();

var guid = "guid_example"; // String | guid

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
apiInstance.forwardUsingGET(guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

