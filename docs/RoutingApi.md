# Id4iApi.RoutingApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToRoutingCollectionUsingPUT**](RoutingApi.md#addElementsToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionGuid}/elements | addElementsToRoutingCollection
[**addSingleElementToRoutingCollectionUsingPUT**](RoutingApi.md#addSingleElementToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionGuid}/elements/{elementGuid} | addSingleElementToRoutingCollection
[**createRoutingCollectionUsingPOST**](RoutingApi.md#createRoutingCollectionUsingPOST) | **POST** /api/v1/collections/routing | createRoutingCollection
[**deleteRoutingCollectionUsingDELETE**](RoutingApi.md#deleteRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{id4n} | deleteRoutingCollection
[**findById4nUsingGET3**](RoutingApi.md#findById4nUsingGET3) | **GET** /api/v1/collections/routing/{id4n} | findById4n
[**forwardUsingGET**](RoutingApi.md#forwardUsingGET) | **GET** /go/{guid} | forward
[**removeElementsFromRoutingCollectionUsingDELETE**](RoutingApi.md#removeElementsFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionGuid}/elements | removeElementsFromRoutingCollection
[**removeSingleElementFromRoutingCollectionUsingDELETE**](RoutingApi.md#removeSingleElementFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromRoutingCollection
[**retrieveCurrentParamsByTypeUsingGET**](RoutingApi.md#retrieveCurrentParamsByTypeUsingGET) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | retrieveCurrentParamsByType
[**retrieveRoutingFileUsingGET**](RoutingApi.md#retrieveRoutingFileUsingGET) | **GET** /api/v1/routingfiles/{id4n} | retrieveRoutingFile
[**storeRoutingFileUsingPUT**](RoutingApi.md#storeRoutingFileUsingPUT) | **PUT** /api/v1/routingfiles/{id4n} | storeRoutingFile


<a name="addElementsToRoutingCollectionUsingPUT"></a>
# **addElementsToRoutingCollectionUsingPUT**
> &#39;Number&#39; addElementsToRoutingCollectionUsingPUT(collectionGuid, listOfGuids, opts)

addElementsToRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.addElementsToRoutingCollectionUsingPUT(collectionGuid, listOfGuids, opts, callback);
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

<a name="addSingleElementToRoutingCollectionUsingPUT"></a>
# **addSingleElementToRoutingCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToRoutingCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.addSingleElementToRoutingCollectionUsingPUT(collectionGuid, elementGuid, opts, callback);
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

<a name="createRoutingCollectionUsingPOST"></a>
# **createRoutingCollectionUsingPOST**
> Id4n createRoutingCollectionUsingPOST(createInfo, opts)

createRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

var createInfo = new Id4iApi.CreateRoutingCollectionRequest(); // CreateRoutingCollectionRequest | createInfo

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
apiInstance.createRoutingCollectionUsingPOST(createInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInfo** | [**CreateRoutingCollectionRequest**](CreateRoutingCollectionRequest.md)| createInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Id4n**](Id4n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteRoutingCollectionUsingDELETE"></a>
# **deleteRoutingCollectionUsingDELETE**
> ResponseEntity deleteRoutingCollectionUsingDELETE(id4n, opts)

deleteRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.deleteRoutingCollectionUsingDELETE(id4n, opts, callback);
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

<a name="findById4nUsingGET3"></a>
# **findById4nUsingGET3**
> GuidCollection findById4nUsingGET3(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.findById4nUsingGET3(id4n, opts, callback);
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

<a name="forwardUsingGET"></a>
# **forwardUsingGET**
> ResponseEntity forwardUsingGET(guid, opts)

forward

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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

<a name="removeElementsFromRoutingCollectionUsingDELETE"></a>
# **removeElementsFromRoutingCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromRoutingCollectionUsingDELETE(collectionGuid, listOfGuids, opts)

removeElementsFromRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.removeElementsFromRoutingCollectionUsingDELETE(collectionGuid, listOfGuids, opts, callback);
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

<a name="removeSingleElementFromRoutingCollectionUsingDELETE"></a>
# **removeSingleElementFromRoutingCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromRoutingCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.removeSingleElementFromRoutingCollectionUsingDELETE(collectionGuid, elementGuid, opts, callback);
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

<a name="retrieveCurrentParamsByTypeUsingGET"></a>
# **retrieveCurrentParamsByTypeUsingGET**
> {&#39;String&#39;: &#39;String&#39;} retrieveCurrentParamsByTypeUsingGET(id4n, type, opts)

retrieveCurrentParamsByType

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var type = "type_example"; // String | type

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
apiInstance.retrieveCurrentParamsByTypeUsingGET(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| type | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="retrieveRoutingFileUsingGET"></a>
# **retrieveRoutingFileUsingGET**
> RoutingFile retrieveRoutingFileUsingGET(id4n, opts)

retrieveRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'organizationId': 789 // Number | organizationId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveRoutingFileUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **organizationId** | **Number**| organizationId | [optional] 

### Return type

[**RoutingFile**](RoutingFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeRoutingFileUsingPUT"></a>
# **storeRoutingFileUsingPUT**
> ResponseEntity storeRoutingFileUsingPUT(rfr, id4n, opts)

storeRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

var rfr = new Id4iApi.RoutingFileRequest(); // RoutingFileRequest | rfr

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
apiInstance.storeRoutingFileUsingPUT(rfr, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rfr** | [**RoutingFileRequest**](RoutingFileRequest.md)| rfr | 
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

