# Id4iApi.CollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToCollectionUsingPUT**](CollectioncontrollerApi.md#addElementsToCollectionUsingPUT) | **PUT** /api/v1/collection/{collectionGuid}/elements | addElementsToCollection
[**addSingleElementToCollectionUsingPUT**](CollectioncontrollerApi.md#addSingleElementToCollectionUsingPUT) | **PUT** /api/v1/collection/{collectionGuid}/elements/{elementGuid} | addSingleElementToCollection
[**deleteCollectionUsingDELETE**](CollectioncontrollerApi.md#deleteCollectionUsingDELETE) | **DELETE** /api/v1/collection/{guid} | deleteCollection
[**removeElementsFromCollectionUsingDELETE**](CollectioncontrollerApi.md#removeElementsFromCollectionUsingDELETE) | **DELETE** /api/v1/collection/{collectionGuid}/elements | removeElementsFromCollection
[**removeSingleElementFromCollectionUsingDELETE**](CollectioncontrollerApi.md#removeSingleElementFromCollectionUsingDELETE) | **DELETE** /api/v1/collection/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromCollection


<a name="addElementsToCollectionUsingPUT"></a>
# **addElementsToCollectionUsingPUT**
> &#39;Number&#39; addElementsToCollectionUsingPUT(collectionGuid, guids, opts)

addElementsToCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.addElementsToCollectionUsingPUT(collectionGuid, guids, opts, callback);
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

<a name="addSingleElementToCollectionUsingPUT"></a>
# **addSingleElementToCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.addSingleElementToCollectionUsingPUT(collectionGuid, elementGuid, opts, callback);
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

<a name="deleteCollectionUsingDELETE"></a>
# **deleteCollectionUsingDELETE**
> ResponseEntity deleteCollectionUsingDELETE(guid, opts)

deleteCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.deleteCollectionUsingDELETE(guid, opts, callback);
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

<a name="removeElementsFromCollectionUsingDELETE"></a>
# **removeElementsFromCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromCollectionUsingDELETE(collectionGuid, guids, opts)

removeElementsFromCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.removeElementsFromCollectionUsingDELETE(collectionGuid, guids, opts, callback);
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

<a name="removeSingleElementFromCollectionUsingDELETE"></a>
# **removeSingleElementFromCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.removeSingleElementFromCollectionUsingDELETE(collectionGuid, elementGuid, opts, callback);
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

