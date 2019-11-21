# Id4iApi.CollectionsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToCollection**](CollectionsApi.md#addElementsToCollection) | **POST** /api/v1/collections/{id4n}/elements | Add elements to collection
[**createCollection**](CollectionsApi.md#createCollection) | **POST** /api/v1/collections | Create collection
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /api/v1/collections/{id4n} | Delete collection
[**deleteProperties**](CollectionsApi.md#deleteProperties) | **DELETE** /api/v1/id4ns/{id4n}/properties | Delete ID4n properties
[**findCollection**](CollectionsApi.md#findCollection) | **GET** /api/v1/collections/{id4n} | Find collection
[**getAllCollectionsOfOrganization**](CollectionsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
[**getProperties**](CollectionsApi.md#getProperties) | **GET** /api/v1/id4ns/{id4n}/properties | Retrieve ID4n properties
[**listElementsOfCollection**](CollectionsApi.md#listElementsOfCollection) | **GET** /api/v1/collections/{id4n}/elements | List contents of the collection
[**patchProperties**](CollectionsApi.md#patchProperties) | **PATCH** /api/v1/id4ns/{id4n}/properties | Patch ID4n properties
[**removeElementsFromCollection**](CollectionsApi.md#removeElementsFromCollection) | **DELETE** /api/v1/collections/{id4n}/elements | Remove elements from collection
[**updateCollection**](CollectionsApi.md#updateCollection) | **PATCH** /api/v1/collections/{id4n} | Update collection


<a name="addElementsToCollection"></a>
# **addElementsToCollection**
> addElementsToCollection(id4n, listOfGuids)

Add elements to collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var listOfGuids = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfGuids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addElementsToCollection(id4n, listOfGuids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **listOfGuids** | [**ListOfId4ns**](ListOfId4ns.md)| listOfGuids | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="createCollection"></a>
# **createCollection**
> Id4n createCollection(createInfo)

Create collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var createInfo = new Id4iApi.CreateCollectionRequest(); // CreateCollectionRequest | createInfo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCollection(createInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInfo** | [**CreateCollectionRequest**](CreateCollectionRequest.md)| createInfo | 

### Return type

[**Id4n**](Id4n.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="deleteCollection"></a>
# **deleteCollection**
> deleteCollection(id4n)

Delete collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCollection(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="deleteProperties"></a>
# **deleteProperties**
> deleteProperties(id4n, organizationId, properties)

Delete ID4n properties

Partial deletion of id4n properties. If the property does not exist, it will be ignored.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | The id4n

var organizationId = "organizationId_example"; // String | The organization namespace to work on while deleting the properties.

var properties = [new Id4iApi.[String]()]; // [String] | A set of property keys to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProperties(id4n, organizationId, properties, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The id4n | 
 **organizationId** | **String**| The organization namespace to work on while deleting the properties. | 
 **properties** | **[String]**| A set of property keys to delete. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="findCollection"></a>
# **findCollection**
> GuidCollection findCollection(id4n)

Find collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findCollection(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 

### Return type

[**GuidCollection**](GuidCollection.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getAllCollectionsOfOrganization"></a>
# **getAllCollectionsOfOrganization**
> PaginatedResponseOfGuidCollection getAllCollectionsOfOrganization(organizationId, opts)

Get collections of organization

Retrieving all collections of an organization in a paginated manner. You may filter the results by specifying id4n properties with filter operations (eq, in, ne) in the query parameters. e.g. &#x60;com.yourcompany.orderId.eq&#x3D;1234&#x60;  

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var organizationId = "organizationId_example"; // String | The namespace of the organization

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56, // Number | The maximum count of returned elements
  'type': "type_example", // String | Filter by this type
  'label': "label_example", // String | Filter by this label
  'labelPrefix': "labelPrefix_example", // String | Filter by this label prefix
  'property': ["property_example"] // [String] | List of i4dn property filter. e.g. \"com.myorga.state:IN:waiting|processing\" or \"com.myorga.orderId:EQ:SAP001\"
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
 **organizationId** | **String**| The namespace of the organization | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **type** | **String**| Filter by this type | [optional] 
 **label** | **String**| Filter by this label | [optional] 
 **labelPrefix** | **String**| Filter by this label prefix | [optional] 
 **property** | [**[String]**](String.md)| List of i4dn property filter. e.g. \&quot;com.myorga.state:IN:waiting|processing\&quot; or \&quot;com.myorga.orderId:EQ:SAP001\&quot; | [optional] 

### Return type

[**PaginatedResponseOfGuidCollection**](PaginatedResponseOfGuidCollection.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getProperties"></a>
# **getProperties**
> {&#39;String&#39;: &#39;String&#39;} getProperties(id4n, opts)

Retrieve ID4n properties

List all properties of an id4n.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | The id4n

var opts = { 
  'organizationId': "organizationId_example" // String | The organization namespace.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProperties(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The id4n | 
 **organizationId** | **String**| The organization namespace. | [optional] 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listElementsOfCollection"></a>
# **listElementsOfCollection**
> PaginatedResponseOfGuid listElementsOfCollection(id4n, opts)

List contents of the collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listElementsOfCollection(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedResponseOfGuid**](PaginatedResponseOfGuid.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="patchProperties"></a>
# **patchProperties**
> patchProperties(id4n, organizationId, properties)

Patch ID4n properties

Partial updating of id4n properties. If a property contains a null value the property will be deleted other values will be saved and overwritten if they already exist.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | The id4n

var organizationId = "organizationId_example"; // String | The organization namespace to work on while patching the properties.

var properties = null; // Object | The properties to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchProperties(id4n, organizationId, properties, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The id4n | 
 **organizationId** | **String**| The organization namespace to work on while patching the properties. | 
 **properties** | **Object**| The properties to update. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="removeElementsFromCollection"></a>
# **removeElementsFromCollection**
> removeElementsFromCollection(id4n, listOfGuids)

Remove elements from collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var listOfGuids = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfGuids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeElementsFromCollection(id4n, listOfGuids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **listOfGuids** | [**ListOfId4ns**](ListOfId4ns.md)| listOfGuids | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateCollection"></a>
# **updateCollection**
> Object updateCollection(id4n, request)

Update collection

Update collection changing only the given values

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.CollectionsApi();

var id4n = "id4n_example"; // String | id4n

var request = new Id4iApi.GuidCollection(); // GuidCollection | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCollection(id4n, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **request** | [**GuidCollection**](GuidCollection.md)| request | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

