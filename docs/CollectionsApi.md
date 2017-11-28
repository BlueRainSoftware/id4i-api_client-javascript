# Id4iApi.CollectionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToCollectionUsingPUT**](CollectionsApi.md#addElementsToCollectionUsingPUT) | **PUT** /api/v1/collections/{collectionGuid}/elements | addElementsToCollection
[**addElementsToLabelledCollectionUsingPUT**](CollectionsApi.md#addElementsToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionGuid}/elements | addElementsToLabelledCollection
[**addElementsToLogisticCollectionUsingPUT**](CollectionsApi.md#addElementsToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionGuid}/elements | addElementsToLogisticCollection
[**addElementsToRoutingCollectionUsingPUT**](CollectionsApi.md#addElementsToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionGuid}/elements | addElementsToRoutingCollection
[**addSingleElementToCollectionUsingPUT**](CollectionsApi.md#addSingleElementToCollectionUsingPUT) | **PUT** /api/v1/collections/{collectionGuid}/elements/{elementGuid} | addSingleElementToCollection
[**addSingleElementToLabelledCollectionUsingPUT**](CollectionsApi.md#addSingleElementToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid} | addSingleElementToLabelledCollection
[**addSingleElementToLogisticCollectionUsingPUT**](CollectionsApi.md#addSingleElementToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionGuid}/elements/{elementId4n} | addSingleElementToLogisticCollection
[**addSingleElementToRoutingCollectionUsingPUT**](CollectionsApi.md#addSingleElementToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionGuid}/elements/{elementGuid} | addSingleElementToRoutingCollection
[**createLabelledCollectionUsingPOST**](CollectionsApi.md#createLabelledCollectionUsingPOST) | **POST** /api/v1/collections/labelled | createLabelledCollection
[**createLogisticCollectionUsingPOST**](CollectionsApi.md#createLogisticCollectionUsingPOST) | **POST** /api/v1/collections/logistic | createLogisticCollection
[**createRoutingCollectionUsingPOST**](CollectionsApi.md#createRoutingCollectionUsingPOST) | **POST** /api/v1/collections/routing | createRoutingCollection
[**deleteCollectionUsingDELETE**](CollectionsApi.md#deleteCollectionUsingDELETE) | **DELETE** /api/v1/collections/{id4n} | deleteCollection
[**deleteLabelledCollectionUsingDELETE**](CollectionsApi.md#deleteLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{id4n} | deleteLabelledCollection
[**deleteLogisticCollectionUsingDELETE**](CollectionsApi.md#deleteLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{id4n} | deleteLogisticCollection
[**deleteRoutingCollectionUsingDELETE**](CollectionsApi.md#deleteRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{id4n} | deleteRoutingCollection
[**findById4nUsingGET**](CollectionsApi.md#findById4nUsingGET) | **GET** /api/v1/collections/{id4n} | findById4n
[**findById4nUsingGET1**](CollectionsApi.md#findById4nUsingGET1) | **GET** /api/v1/collections/labelled/{id4n} | findById4n
[**findById4nUsingGET2**](CollectionsApi.md#findById4nUsingGET2) | **GET** /api/v1/collections/logistic/{id4n} | findById4n
[**findById4nUsingGET3**](CollectionsApi.md#findById4nUsingGET3) | **GET** /api/v1/collections/routing/{id4n} | findById4n
[**findByLabelUsingGET**](CollectionsApi.md#findByLabelUsingGET) | **GET** /api/v1/collections/labelled/{organizationId}/{label} | findByLabel
[**getAllCollectionsOfOrganization**](CollectionsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organization/{organizationId}/collections | Get collections of organization
[**listContentsUsingGET**](CollectionsApi.md#listContentsUsingGET) | **GET** /api/v1/collections/{id4n}/elements | listContents
[**removeElementsFromCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{collectionGuid}/elements | removeElementsFromCollection
[**removeElementsFromLabelledCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionGuid}/elements | removeElementsFromLabelledCollection
[**removeElementsFromLogisticCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionGuid}/elements | removeElementsFromLogisticCollection
[**removeElementsFromRoutingCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionGuid}/elements | removeElementsFromRoutingCollection
[**removeSingleElementFromCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromCollection
[**removeSingleElementFromLabelledCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromLabelledCollection
[**removeSingleElementFromLogisticCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionGuid}/elements/{elementId4n} | removeSingleElementFromLogisticCollection
[**removeSingleElementFromRoutingCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromRoutingCollection
[**renameUsingPUT**](CollectionsApi.md#renameUsingPUT) | **PUT** /api/v1/collections/labelled/{id4n} | rename


<a name="addElementsToCollectionUsingPUT"></a>
# **addElementsToCollectionUsingPUT**
> &#39;Number&#39; addElementsToCollectionUsingPUT(collectionGuid, listOfGuids, opts)

addElementsToCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="addElementsToLabelledCollectionUsingPUT"></a>
# **addElementsToLabelledCollectionUsingPUT**
> &#39;Number&#39; addElementsToLabelledCollectionUsingPUT(collectionGuid, listOfId4ns, opts)

addElementsToLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var listOfId4ns = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfId4ns

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
apiInstance.addElementsToLabelledCollectionUsingPUT(collectionGuid, listOfId4ns, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **listOfId4ns** | [**ListOfId4ns**](ListOfId4ns.md)| listOfId4ns | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addElementsToLogisticCollectionUsingPUT"></a>
# **addElementsToLogisticCollectionUsingPUT**
> &#39;Number&#39; addElementsToLogisticCollectionUsingPUT(collectionGuid, id4nList, opts)

addElementsToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="addElementsToRoutingCollectionUsingPUT"></a>
# **addElementsToRoutingCollectionUsingPUT**
> &#39;Number&#39; addElementsToRoutingCollectionUsingPUT(collectionGuid, listOfGuids, opts)

addElementsToRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="addSingleElementToCollectionUsingPUT"></a>
# **addSingleElementToCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="addSingleElementToLabelledCollectionUsingPUT"></a>
# **addSingleElementToLabelledCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToLabelledCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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
apiInstance.addSingleElementToLabelledCollectionUsingPUT(collectionGuid, elementGuid, opts, callback);
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

<a name="addSingleElementToLogisticCollectionUsingPUT"></a>
# **addSingleElementToLogisticCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToLogisticCollectionUsingPUT(collectionGuid, elementId4n, opts)

addSingleElementToLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="addSingleElementToRoutingCollectionUsingPUT"></a>
# **addSingleElementToRoutingCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToRoutingCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="createLabelledCollectionUsingPOST"></a>
# **createLabelledCollectionUsingPOST**
> Id4n createLabelledCollectionUsingPOST(createInfo, opts)

createLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var createInfo = new Id4iApi.CreateLabelledCollectionRequest(); // CreateLabelledCollectionRequest | createInfo

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
apiInstance.createLabelledCollectionUsingPOST(createInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInfo** | [**CreateLabelledCollectionRequest**](CreateLabelledCollectionRequest.md)| createInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Id4n**](Id4n.md)

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

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="createRoutingCollectionUsingPOST"></a>
# **createRoutingCollectionUsingPOST**
> Id4n createRoutingCollectionUsingPOST(createInfo, opts)

createRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="deleteCollectionUsingDELETE"></a>
# **deleteCollectionUsingDELETE**
> ResponseEntity deleteCollectionUsingDELETE(id4n, opts)

deleteCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="deleteLabelledCollectionUsingDELETE"></a>
# **deleteLabelledCollectionUsingDELETE**
> ResponseEntity deleteLabelledCollectionUsingDELETE(id4n, opts)

deleteLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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
apiInstance.deleteLabelledCollectionUsingDELETE(id4n, opts, callback);
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

<a name="deleteLogisticCollectionUsingDELETE"></a>
# **deleteLogisticCollectionUsingDELETE**
> ResponseEntity deleteLogisticCollectionUsingDELETE(id4n, opts)

deleteLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="deleteRoutingCollectionUsingDELETE"></a>
# **deleteRoutingCollectionUsingDELETE**
> ResponseEntity deleteRoutingCollectionUsingDELETE(id4n, opts)

deleteRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="findById4nUsingGET"></a>
# **findById4nUsingGET**
> GuidCollection findById4nUsingGET(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="findById4nUsingGET1"></a>
# **findById4nUsingGET1**
> GuidCollection findById4nUsingGET1(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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
apiInstance.findById4nUsingGET1(id4n, opts, callback);
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

<a name="findById4nUsingGET2"></a>
# **findById4nUsingGET2**
> GuidCollection findById4nUsingGET2(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="findById4nUsingGET3"></a>
# **findById4nUsingGET3**
> GuidCollection findById4nUsingGET3(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="findByLabelUsingGET"></a>
# **findByLabelUsingGET**
> GuidCollection findByLabelUsingGET(organizationId, label, opts)

findByLabel

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var organizationId = 56; // Number | organizationId

var label = "label_example"; // String | label

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
apiInstance.findByLabelUsingGET(organizationId, label, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **label** | **String**| label | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**GuidCollection**](GuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getAllCollectionsOfOrganization"></a>
# **getAllCollectionsOfOrganization**
> PaginatedResponseGuidCollection getAllCollectionsOfOrganization(organizationId, opts)

Get collections of organization

Retrieving all collections of an organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var organizationId = 789; // Number | organizationId

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | 
  'limit': 56, // Number | 
  'type': "type_example" // String | type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCollectionsOfOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **type** | **String**| type | [optional] 

### Return type

[**PaginatedResponseGuidCollection**](PaginatedResponseGuidCollection.md)

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

var apiInstance = new Id4iApi.CollectionsApi();

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

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="removeElementsFromLabelledCollectionUsingDELETE"></a>
# **removeElementsFromLabelledCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, listOfGuids, opts)

removeElementsFromLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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
apiInstance.removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, listOfGuids, opts, callback);
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

<a name="removeElementsFromLogisticCollectionUsingDELETE"></a>
# **removeElementsFromLogisticCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromLogisticCollectionUsingDELETE(collectionGuid, id4nlist, opts)

removeElementsFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="removeElementsFromRoutingCollectionUsingDELETE"></a>
# **removeElementsFromRoutingCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromRoutingCollectionUsingDELETE(collectionGuid, listOfGuids, opts)

removeElementsFromRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="removeSingleElementFromCollectionUsingDELETE"></a>
# **removeSingleElementFromCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="removeSingleElementFromLabelledCollectionUsingDELETE"></a>
# **removeSingleElementFromLabelledCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromLabelledCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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
apiInstance.removeSingleElementFromLabelledCollectionUsingDELETE(collectionGuid, elementGuid, opts, callback);
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

<a name="removeSingleElementFromLogisticCollectionUsingDELETE"></a>
# **removeSingleElementFromLogisticCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromLogisticCollectionUsingDELETE(collectionGuid, elementId4n, opts)

removeSingleElementFromLogisticCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="removeSingleElementFromRoutingCollectionUsingDELETE"></a>
# **removeSingleElementFromRoutingCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromRoutingCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromRoutingCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

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

<a name="renameUsingPUT"></a>
# **renameUsingPUT**
> ResponseEntity renameUsingPUT(id4n, request, opts)

rename

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var request = new Id4iApi.GuidCollection(); // GuidCollection | request

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
apiInstance.renameUsingPUT(id4n, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **request** | [**GuidCollection**](GuidCollection.md)| request | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

