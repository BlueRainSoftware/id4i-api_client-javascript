# Id4iApi.LabelledcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](LabelledcollectioncontrollerApi.md#createUsingPOST) | **POST** /api/v1/collection/labelled | create
[**renameUsingPUT**](LabelledcollectioncontrollerApi.md#renameUsingPUT) | **PUT** /api/v1/collection/labelled | rename


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

<a name="renameUsingPUT"></a>
# **renameUsingPUT**
> [&#39;String&#39;] renameUsingPUT(opts)

rename

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'label': "label_example", // String | label
  'newName': "newName_example" // String | newName
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.renameUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **label** | **String**| label | [optional] 
 **newName** | **String**| newName | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

