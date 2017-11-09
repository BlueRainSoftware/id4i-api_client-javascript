# Id4iApi.RoutingcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST3**](RoutingcollectioncontrollerApi.md#createUsingPOST3) | **POST** /api/v1/collection/routing | create
[**createUsingPUT**](RoutingcollectioncontrollerApi.md#createUsingPUT) | **PUT** /api/v1/collection/routing/elements | create


<a name="createUsingPOST3"></a>
# **createUsingPOST3**
> [&#39;String&#39;] createUsingPOST3(createGUIDInfo, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcollectioncontrollerApi();

var createGUIDInfo = new Id4iApi.CreateRoutingCollectionRequest(); // CreateRoutingCollectionRequest | createGUIDInfo

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
apiInstance.createUsingPOST3(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateRoutingCollectionRequest**](CreateRoutingCollectionRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createUsingPUT"></a>
# **createUsingPUT**
> &#39;Number&#39; createUsingPUT(info, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcollectioncontrollerApi();

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
apiInstance.createUsingPUT(info, opts, callback);
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

