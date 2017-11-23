# Id4iApi.LogisticcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToLogisticCollectionUsingPUT**](LogisticcollectioncontrollerApi.md#addElementsToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionGuid}/elements | addElementsToLogisticCollection
[**addSingleElementToLogisticCollectionUsingPUT**](LogisticcollectioncontrollerApi.md#addSingleElementToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionGuid}/elements/{elementId4n} | addSingleElementToLogisticCollection
[**createLogisticCollectionUsingPOST**](LogisticcollectioncontrollerApi.md#createLogisticCollectionUsingPOST) | **POST** /api/v1/collections/logistic | createLogisticCollection
[**deleteLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#deleteLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{id4n} | deleteLogisticCollection
[**findById4nUsingGET2**](LogisticcollectioncontrollerApi.md#findById4nUsingGET2) | **GET** /api/v1/collections/logistic/{id4n} | findById4n
[**removeElementsFromLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#removeElementsFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionGuid}/elements | removeElementsFromLogisticCollection
[**removeSingleElementFromLogisticCollectionUsingDELETE**](LogisticcollectioncontrollerApi.md#removeSingleElementFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionGuid}/elements/{elementId4n} | removeSingleElementFromLogisticCollection


<a name="addElementsToLogisticCollectionUsingPUT"></a>
# **addElementsToLogisticCollectionUsingPUT**
> &#39;Number&#39; addElementsToLogisticCollectionUsingPUT(collectionGuid, id4nList, opts)

addElementsToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var id4nList = new Id4iApi.ListOfId4ns(); // ListOfId4ns | id4nList

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
apiInstance.addElementsToLogisticCollectionUsingPUT(collectionGuid, id4nList, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **id4nList** | [**ListOfId4ns**](ListOfId4ns.md)| id4nList | 
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
> &#39;Number&#39; addSingleElementToLogisticCollectionUsingPUT(collectionGuid, elementId4n, opts)

addSingleElementToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementId4n = "elementId4n_example"; // String | elementId4n

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
apiInstance.addSingleElementToLogisticCollectionUsingPUT(collectionGuid, elementId4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementId4n** | **String**| elementId4n | 
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
> Id4n createLogisticCollectionUsingPOST(createInfo, opts)

createLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var createInfo = new Id4iApi.CreateLogisticCollectionRequest(); // CreateLogisticCollectionRequest | createInfo

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
apiInstance.createLogisticCollectionUsingPOST(createInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInfo** | [**CreateLogisticCollectionRequest**](CreateLogisticCollectionRequest.md)| createInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Id4n**](Id4n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteLogisticCollectionUsingDELETE"></a>
# **deleteLogisticCollectionUsingDELETE**
> ResponseEntity deleteLogisticCollectionUsingDELETE(id4n, opts)

deleteLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

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
apiInstance.deleteLogisticCollectionUsingDELETE(id4n, opts, callback);
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

<a name="findById4nUsingGET2"></a>
# **findById4nUsingGET2**
> GuidCollection findById4nUsingGET2(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

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
apiInstance.findById4nUsingGET2(id4n, opts, callback);
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

<a name="removeElementsFromLogisticCollectionUsingDELETE"></a>
# **removeElementsFromLogisticCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromLogisticCollectionUsingDELETE(collectionGuid, id4nlist, opts)

removeElementsFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var id4nlist = new Id4iApi.ListOfId4ns(); // ListOfId4ns | id4nlist

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
apiInstance.removeElementsFromLogisticCollectionUsingDELETE(collectionGuid, id4nlist, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **id4nlist** | [**ListOfId4ns**](ListOfId4ns.md)| id4nlist | 
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
> &#39;Number&#39; removeSingleElementFromLogisticCollectionUsingDELETE(collectionGuid, elementId4n, opts)

removeSingleElementFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LogisticcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementId4n = "elementId4n_example"; // String | elementId4n

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
apiInstance.removeSingleElementFromLogisticCollectionUsingDELETE(collectionGuid, elementId4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementId4n** | **String**| elementId4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

