# Id4iApi.LogisticcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST1**](LogisticcollectioncontrollerApi.md#createUsingPOST1) | **POST** /api/v1/collection/logistic | create


<a name="createUsingPOST1"></a>
# **createUsingPOST1**
> [&#39;String&#39;] createUsingPOST1(createGUIDInfo, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var createGUIDInfo = new Id4iApi.CreateLogisticCollectionRequest(); // CreateLogisticCollectionRequest | createGUIDInfo

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
apiInstance.createUsingPOST1(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateLogisticCollectionRequest**](CreateLogisticCollectionRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

