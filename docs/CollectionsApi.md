# Id4iApi.CollectionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToCollectionUsingPUT**](CollectionsApi.md#addElementsToCollectionUsingPUT) | **PUT** /api/v1/collections/{id4n}/elements | Add elements to collection
[**addElementsToLabelledCollectionUsingPUT**](CollectionsApi.md#addElementsToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionId4n}/elements | Add elements to labelled collection
[**addElementsToLogisticCollectionUsingPUT**](CollectionsApi.md#addElementsToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionId4n}/elements | Add elements to logistic collection
[**addElementsToRoutingCollectionUsingPUT**](CollectionsApi.md#addElementsToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionId4n}/elements | Add element to routing collection
[**addSingleElementToCollectionUsingPUT**](CollectionsApi.md#addSingleElementToCollectionUsingPUT) | **PUT** /api/v1/collections/{id4n}/elements/{elementGuid} | Add element to collection
[**addSingleElementToLabelledCollectionUsingPUT**](CollectionsApi.md#addSingleElementToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionId4n}/elements/{elementGuid} | Add element to labelled collection
[**addSingleElementToLogisticCollectionUsingPUT**](CollectionsApi.md#addSingleElementToLogisticCollectionUsingPUT) | **PUT** /api/v1/collections/logistic/{collectionId4n}/elements/{guid} | Add element to logistic collection
[**addSingleElementToRoutingCollectionUsingPUT**](CollectionsApi.md#addSingleElementToRoutingCollectionUsingPUT) | **PUT** /api/v1/collections/routing/{collectionId4n}/elements/{guid} | Add element to routing collection
[**createLabelledCollectionUsingPOST**](CollectionsApi.md#createLabelledCollectionUsingPOST) | **POST** /api/v1/collections/labelled | Create labelled collection
[**createLogisticCollectionUsingPOST**](CollectionsApi.md#createLogisticCollectionUsingPOST) | **POST** /api/v1/collections/logistic | Create logistic collection
[**createRoutingCollectionUsingPOST**](CollectionsApi.md#createRoutingCollectionUsingPOST) | **POST** /api/v1/collections/routing | Create routing collecton
[**deleteCollectionUsingDELETE**](CollectionsApi.md#deleteCollectionUsingDELETE) | **DELETE** /api/v1/collections/{id4n} | Delete collection
[**deleteRoutingCollectionUsingDELETE**](CollectionsApi.md#deleteRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{id4n} | Delete routing collection
[**deleteUsingDELETE**](CollectionsApi.md#deleteUsingDELETE) | **DELETE** /api/v1/collections/labelled/{id4n} | Delete labelled collection
[**deleteUsingDELETE1**](CollectionsApi.md#deleteUsingDELETE1) | **DELETE** /api/v1/collections/logistic/{id4n} | Delete logistic collection
[**findById4nUsingGET**](CollectionsApi.md#findById4nUsingGET) | **GET** /api/v1/collections/{id4n} | Find collection
[**findById4nUsingGET1**](CollectionsApi.md#findById4nUsingGET1) | **GET** /api/v1/collections/labelled/{id4n} | Find labelled collection
[**findById4nUsingGET2**](CollectionsApi.md#findById4nUsingGET2) | **GET** /api/v1/collections/logistic/{id4n} | Find logistic collection
[**findById4nUsingGET3**](CollectionsApi.md#findById4nUsingGET3) | **GET** /api/v1/collections/routing/{id4n} | Find routing collection
[**getAllCollectionsOfOrganization**](CollectionsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organization/{organizationId}/collections | Get collections of organization
[**listContentsUsingGET**](CollectionsApi.md#listContentsUsingGET) | **GET** /api/v1/collections/{id4n}/elements | List contents of the collection
[**removeElementsFromCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{id4n}/elements | Remove elements from collection
[**removeElementsFromLabelledCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionId4n}/elements | Remove elements from labelled collection
[**removeElementsFromLogisticCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionId4n}/elements | Remove elements from logistic collection
[**removeElementsFromRoutingCollectionUsingDELETE**](CollectionsApi.md#removeElementsFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionId4n}/elements | Remove elements from routing collection
[**removeSingleElementFromCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromCollectionUsingDELETE) | **DELETE** /api/v1/collections/{id4n}/elements/{elementGuid} | Remove element from collection
[**removeSingleElementFromLabelledCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionId4n}/elements/{elementGuid} | Remove element from labelled collection
[**removeSingleElementFromLogisticCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromLogisticCollectionUsingDELETE) | **DELETE** /api/v1/collections/logistic/{collectionId4n}/elements/{elementId4n} | Remove element from logistic collection
[**removeSingleElementFromRoutingCollectionUsingDELETE**](CollectionsApi.md#removeSingleElementFromRoutingCollectionUsingDELETE) | **DELETE** /api/v1/collections/routing/{collectionId4n}/elements/{guid} | Remove element from routing collection
[**updateUsingPUT**](CollectionsApi.md#updateUsingPUT) | **PUT** /api/v1/collections/{id4n} | Alter collection
[**updateUsingPUT1**](CollectionsApi.md#updateUsingPUT1) | **PUT** /api/v1/collections/labelled/{id4n} | Rename labelled collection
[**updateUsingPUT2**](CollectionsApi.md#updateUsingPUT2) | **PUT** /api/v1/collections/logistic/{id4n} | Update logistic collection
[**updateUsingPUT3**](CollectionsApi.md#updateUsingPUT3) | **PUT** /api/v1/collections/routing/{id4n} | Update routing collection


<a name="addElementsToCollectionUsingPUT"></a>
# **addElementsToCollectionUsingPUT**
> &#39;Number&#39; addElementsToCollectionUsingPUT(id4n, listOfGuids, opts)

Add elements to collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.addElementsToCollectionUsingPUT(id4n, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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
> &#39;Number&#39; addElementsToLabelledCollectionUsingPUT(collectionId4n, listOfId4ns, opts)

Add elements to labelled collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addElementsToLabelledCollectionUsingPUT(collectionId4n, listOfId4ns, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; addElementsToLogisticCollectionUsingPUT(collectionId4n, id4nList, opts)

Add elements to logistic collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addElementsToLogisticCollectionUsingPUT(collectionId4n, id4nList, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; addElementsToRoutingCollectionUsingPUT(collectionId4n, listOfGuids, opts)

Add element to routing collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addElementsToRoutingCollectionUsingPUT(collectionId4n, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; addSingleElementToCollectionUsingPUT(id4n, elementGuid, opts)

Add element to collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.addSingleElementToCollectionUsingPUT(id4n, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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
> &#39;Number&#39; addSingleElementToLabelledCollectionUsingPUT(collectionId4n, elementGuid, opts)

Add element to labelled collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addSingleElementToLabelledCollectionUsingPUT(collectionId4n, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; addSingleElementToLogisticCollectionUsingPUT(collectionId4n, guid, opts)

Add element to logistic collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addSingleElementToLogisticCollectionUsingPUT(collectionId4n, guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
 **guid** | **String**| guid | 
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
> &#39;Number&#39; addSingleElementToRoutingCollectionUsingPUT(collectionId4n, guid, opts)

Add element to routing collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.addSingleElementToRoutingCollectionUsingPUT(collectionId4n, guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
 **guid** | **String**| guid | 
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

Create labelled collection

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

Create logistic collection

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

Create routing collecton

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
> ApiError deleteCollectionUsingDELETE(id4n, opts)

Delete collection

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

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteRoutingCollectionUsingDELETE"></a>
# **deleteRoutingCollectionUsingDELETE**
> ApiError deleteRoutingCollectionUsingDELETE(id4n, opts)

Delete routing collection

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

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteUsingDELETE"></a>
# **deleteUsingDELETE**
> ApiError deleteUsingDELETE(id4n, opts)

Delete labelled collection

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
apiInstance.deleteUsingDELETE(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteUsingDELETE1"></a>
# **deleteUsingDELETE1**
> ResponseEntity deleteUsingDELETE1(id4n, opts)

Delete logistic collection

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
apiInstance.deleteUsingDELETE1(id4n, opts, callback);
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

Find collection

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

Find labelled collection

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

Find logistic collection

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

Find routing collection

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

<a name="getAllCollectionsOfOrganization"></a>
# **getAllCollectionsOfOrganization**
> PaginatedGuidCollection getAllCollectionsOfOrganization(organizationId, opts)

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
  'offset': 56, // Number | Start with the n-th element. 
  'limit': 56, // Number | The maximum count of returned elements.
  'type': "type_example", // String | Filter by this type
  'label': "label_example" // String | Filter by this label
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
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 
 **type** | **String**| Filter by this type | [optional] 
 **label** | **String**| Filter by this label | [optional] 

### Return type

[**PaginatedGuidCollection**](PaginatedGuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listContentsUsingGET"></a>
# **listContentsUsingGET**
> PaginatedResponsestring listContentsUsingGET(id4n, opts)

List contents of the collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | Start with the n-th element. 
  'limit': 56 // Number | The maximum count of returned elements.
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
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**PaginatedResponsestring**](PaginatedResponsestring.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeElementsFromCollectionUsingDELETE"></a>
# **removeElementsFromCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromCollectionUsingDELETE(id4n, listOfGuids, opts)

Remove elements from collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.removeElementsFromCollectionUsingDELETE(id4n, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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
> &#39;Number&#39; removeElementsFromLabelledCollectionUsingDELETE(collectionId4n, listOfGuids, opts)

Remove elements from labelled collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeElementsFromLabelledCollectionUsingDELETE(collectionId4n, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; removeElementsFromLogisticCollectionUsingDELETE(collectionId4n, id4nlist, opts)

Remove elements from logistic collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeElementsFromLogisticCollectionUsingDELETE(collectionId4n, id4nlist, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; removeElementsFromRoutingCollectionUsingDELETE(collectionId4n, listOfGuids, opts)

Remove elements from routing collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeElementsFromRoutingCollectionUsingDELETE(collectionId4n, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; removeSingleElementFromCollectionUsingDELETE(id4n, elementGuid, opts)

Remove element from collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.removeSingleElementFromCollectionUsingDELETE(id4n, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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
> &#39;Number&#39; removeSingleElementFromLabelledCollectionUsingDELETE(collectionId4n, elementGuid, opts)

Remove element from labelled collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeSingleElementFromLabelledCollectionUsingDELETE(collectionId4n, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
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
> &#39;Number&#39; removeSingleElementFromLogisticCollectionUsingDELETE(collectionId4n, guid, opts)

Remove element from logistic collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeSingleElementFromLogisticCollectionUsingDELETE(collectionId4n, guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
 **guid** | **String**| guid | 
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
> &#39;Number&#39; removeSingleElementFromRoutingCollectionUsingDELETE(collectionId4n, guid, opts)

Remove element from routing collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.CollectionsApi();

var collectionId4n = "collectionId4n_example"; // String | collectionId4n

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
apiInstance.removeSingleElementFromRoutingCollectionUsingDELETE(collectionId4n, guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId4n** | **String**| collectionId4n | 
 **guid** | **String**| guid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> ResponseEntity updateUsingPUT(id4n, request, opts)

Alter collection

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
apiInstance.updateUsingPUT(id4n, request, opts, callback);
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

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> ResponseEntity updateUsingPUT1(id4n, request, opts)

Rename labelled collection

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
apiInstance.updateUsingPUT1(id4n, request, opts, callback);
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

<a name="updateUsingPUT2"></a>
# **updateUsingPUT2**
> ResponseEntity updateUsingPUT2(id4n, request, opts)

Update logistic collection

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
apiInstance.updateUsingPUT2(id4n, request, opts, callback);
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

<a name="updateUsingPUT3"></a>
# **updateUsingPUT3**
> ResponseEntity updateUsingPUT3(id4n, request, opts)

Update routing collection

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
apiInstance.updateUsingPUT3(id4n, request, opts, callback);
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

