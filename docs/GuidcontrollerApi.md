# Id4iApi.GuidcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuidsUsingPOST**](GuidcontrollerApi.md#createGuidsUsingPOST) | **POST** /api/v1/guid | createGuids


<a name="createGuidsUsingPOST"></a>
# **createGuidsUsingPOST**
> [&#39;String&#39;] createGuidsUsingPOST(createGUIDInfo, opts)

createGuids

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GuidcontrollerApi();

var createGUIDInfo = new Id4iApi.CreateGuidsRequest(); // CreateGuidsRequest | createGUIDInfo

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
apiInstance.createGuidsUsingPOST(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateGuidsRequest**](CreateGuidsRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

