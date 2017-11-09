# Id4iApi.LogisticcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST1**](LogisticcollectioncontrollerApi.md#createUsingPOST1) | **POST** /api/v1/collection/logistic | create
[**createUsingPUT2**](LogisticcollectioncontrollerApi.md#createUsingPUT2) | **PUT** /api/v1/collection/logistic/elements | create


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

<a name="createUsingPUT2"></a>
# **createUsingPUT2**
> &#39;Number&#39; createUsingPUT2(info, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var info = new Id4iApi.AddGuidsToCollectionRequest(); // AddGuidsToCollectionRequest | info

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
apiInstance.createUsingPUT2(info, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **info** | [**AddGuidsToCollectionRequest**](AddGuidsToCollectionRequest.md)| info | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

