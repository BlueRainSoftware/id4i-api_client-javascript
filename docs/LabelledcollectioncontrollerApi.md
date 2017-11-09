# Id4iApi.LabelledcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](LabelledcollectioncontrollerApi.md#createUsingPOST) | **POST** /api/v1/collection/labelled | create
[**createUsingPUT1**](LabelledcollectioncontrollerApi.md#createUsingPUT1) | **PUT** /api/v1/collection/labelled/elements | create


<a name="createUsingPOST"></a>
# **createUsingPOST**
> &#39;String&#39; createUsingPOST(createGUIDInfo, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var createGUIDInfo = new Id4iApi.CreateLabelledCollectionRequest(); // CreateLabelledCollectionRequest | createGUIDInfo

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
apiInstance.createUsingPOST(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateLabelledCollectionRequest**](CreateLabelledCollectionRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createUsingPUT1"></a>
# **createUsingPUT1**
> &#39;Number&#39; createUsingPUT1(info, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

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
apiInstance.createUsingPUT1(info, opts, callback);
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

