# Id4iApi.LogisticcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToLogisticCollectionUsingPUT**](LogisticcollectioncontrollerApi.md#addElementsToLogisticCollectionUsingPUT) | **PUT** /api/v1/collection/logistic/{collectionGuid}/elements | addElementsToLogisticCollection
[**addSingleElementToLogisticCollectionUsingPUT**](LogisticcollectioncontrollerApi.md#addSingleElementToLogisticCollectionUsingPUT) | **PUT** /api/v1/collection/logistic/{collectionGuid}/elements/{elementGuid} | addSingleElementToLogisticCollection
[**createLogisticCollectionUsingPOST**](LogisticcollectioncontrollerApi.md#createLogisticCollectionUsingPOST) | **POST** /api/v1/collection/logistic | createLogisticCollection
[**deleteLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#deleteLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collection/logistic/{guid} | deleteLogisticCollection
[**removeElementsFromLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#removeElementsFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collection/logistic/{collectionGuid}/elements | removeElementsFromLogisticCollection
[**removeSingleElementFromLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#removeSingleElementFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collection/logistic/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromLogisticCollection


<a name="addElementsToLogisticCollectionUsingPUT"></a>
# **addElementsToLogisticCollectionUsingPUT**
> &#39;Number&#39; addElementsToLogisticCollectionUsingPUT(collectionGuid, guids, opts)

addElementsToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var guids = new Id4iApi.ListOfGuids(); // ListOfGuids | guids

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
apiInstance.addElementsToLogisticCollectionUsingPUT(collectionGuid, guids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **guids** | [**ListOfGuids**](ListOfGuids.md)| guids | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addSingleElementToLogisticCollectionUsingPUT"></a>
# **addSingleElementToLogisticCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToLogisticCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementGuid = "elementGuid_example"; // String | elementGuid

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
apiInstance.addSingleElementToLogisticCollectionUsingPUT(collectionGuid, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementGuid** | **String**| elementGuid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createLogisticCollectionUsingPOST"></a>
# **createLogisticCollectionUsingPOST**
> [&#39;String&#39;] createLogisticCollectionUsingPOST(createGUIDInfo, opts)

createLogisticCollection

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
apiInstance.createLogisticCollectionUsingPOST(createGUIDInfo, opts, callback);
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

<a name="deleteLogisticCollectionUsingDELETE"></a>
# **deleteLogisticCollectionUsingDELETE**
> ResponseEntity deleteLogisticCollectionUsingDELETE(guid, opts)

deleteLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

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
apiInstance.deleteLogisticCollectionUsingDELETE(guid, opts, callback);
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

<a name="removeElementsFromLogisticCollectionUsingDELETE"></a>
# **removeElementsFromLogisticCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromLogisticCollectionUsingDELETE(collectionGuid, guids, opts)

removeElementsFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var guids = new Id4iApi.ListOfGuids(); // ListOfGuids | guids

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
apiInstance.removeElementsFromLogisticCollectionUsingDELETE(collectionGuid, guids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **guids** | [**ListOfGuids**](ListOfGuids.md)| guids | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeSingleElementFromLogisticCollectionUsingDELETE"></a>
# **removeSingleElementFromLogisticCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromLogisticCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementGuid = "elementGuid_example"; // String | elementGuid

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
apiInstance.removeSingleElementFromLogisticCollectionUsingDELETE(collectionGuid, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementGuid** | **String**| elementGuid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

