# Id4iApi.CollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToCollectionUsingPUT**](CollectioncontrollerApi.md#addElementsToCollectionUsingPUT) | **PUT** /api/v1/collections/{collectionGuid}/elements | addElementsToCollection
[**addSingleElementToCollectionUsingPUT**](CollectioncontrollerApi.md#addSingleElementToCollectionUsingPUT) | **PUT** /api/v1/collections/{collectionGuid}/elements/{elementGuid} | addSingleElementToCollection
[**deleteCollectionUsingDELETE**](CollectioncontrollerApi.md#deleteCollectionUsingDELETE) | **DELETE** /api/v1/collections/{id4n} | deleteCollection
[**findById4nUsingGET**](CollectioncontrollerApi.md#findById4nUsingGET) | **GET** /api/v1/collections/{id4n} | findById4n
[**listContentsUsingGET**](CollectioncontrollerApi.md#listContentsUsingGET) | **GET** /api/v1/collections/{id4n}/elements | listContents
[**removeElementsFromCollectionUsingDELETE**](CollectioncontrollerApi.md#removeElementsFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{collectionGuid}/elements | removeElementsFromCollection
[**removeSingleElementFromCollectionUsingDELETE**](CollectioncontrollerApi.md#removeSingleElementFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromCollection


<a name="addElementsToCollectionUsingPUT"></a>
# **addElementsToCollectionUsingPUT**
> &#39;Number&#39; addElementsToCollectionUsingPUT(collectionGuid, listOfGuids, opts)

addElementsToCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var listOfGuids = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfGuids

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
apiInstance.addElementsToCollectionUsingPUT(collectionGuid, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **listOfGuids** | [**ListOfId4ns**](ListOfId4ns.md)| listOfGuids | 
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
> ResponseEntity deleteCollectionUsingDELETE(id4n, opts)

deleteCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.deleteCollectionUsingDELETE(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findById4nUsingGET"></a>
# **findById4nUsingGET**
> GuidCollection findById4nUsingGET(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

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
apiInstance.findById4nUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**GuidCollection**](GuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listContentsUsingGET"></a>
# **listContentsUsingGET**
> PaginatedResponsestring listContentsUsingGET(id4n, opts)

listContents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContentsUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**PaginatedResponsestring**](PaginatedResponsestring.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeElementsFromCollectionUsingDELETE"></a>
# **removeElementsFromCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromCollectionUsingDELETE(collectionGuid, listOfGuids, opts)

removeElementsFromCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var listOfGuids = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfGuids

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
apiInstance.removeElementsFromCollectionUsingDELETE(collectionGuid, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **listOfGuids** | [**ListOfId4ns**](ListOfId4ns.md)| listOfGuids | 
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

