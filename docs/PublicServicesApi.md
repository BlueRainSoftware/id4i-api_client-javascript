# Id4iApi.PublicServicesApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicDocument**](PublicServicesApi.md#getPublicDocument) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**getPublicDocument1**](PublicServicesApi.md#getPublicDocument1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**go**](PublicServicesApi.md#go) | **GET** /go/{guid} | Forward
[**listAllPublicDocuments**](PublicServicesApi.md#listAllPublicDocuments) | **GET** /api/v1/public/collections/{id4n}/documents | List organization specific documents
[**listAllPublicDocuments1**](PublicServicesApi.md#listAllPublicDocuments1) | **GET** /api/v1/public/guids/{id4n}/documents | List organization specific documents
[**listPublicDocuments**](PublicServicesApi.md#listPublicDocuments) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId} | List organization specific documents
[**listPublicDocuments1**](PublicServicesApi.md#listPublicDocuments1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId} | List organization specific documents
[**readPublicDocument**](PublicServicesApi.md#readPublicDocument) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**readPublicDocument1**](PublicServicesApi.md#readPublicDocument1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**resolveImageUsingGET**](PublicServicesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
[**resolveWhoIsEntry**](PublicServicesApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n


<a name="getPublicDocument"></a>
# **getPublicDocument**
> Document getPublicDocument(organizationId, id4n, fileName)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicDocument(organizationId, id4n, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getPublicDocument1"></a>
# **getPublicDocument1**
> Document getPublicDocument1(organizationId, id4n, fileName)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicDocument1(organizationId, id4n, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="go"></a>
# **go**
> ApiError go(guid)

Forward

Forwarding to the designated route defined in the routing,

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.PublicServicesApi();

var guid = "guid_example"; // String | guid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.go(guid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllPublicDocuments"></a>
# **listAllPublicDocuments**
> PaginatedOwnedDocumentResponse listAllPublicDocuments(id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'organizationId': 789, // Number | organizationId
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
apiInstance.listAllPublicDocuments(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **Number**| organizationId | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllPublicDocuments1"></a>
# **listAllPublicDocuments1**
> PaginatedOwnedDocumentResponse listAllPublicDocuments1(id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'organizationId': 789, // Number | organizationId
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
apiInstance.listAllPublicDocuments1(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **Number**| organizationId | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listPublicDocuments"></a>
# **listPublicDocuments**
> PaginatedDocumentResponse listPublicDocuments(organizationId, id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.listPublicDocuments(organizationId, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listPublicDocuments1"></a>
# **listPublicDocuments1**
> PaginatedDocumentResponse listPublicDocuments1(organizationId, id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.listPublicDocuments1(organizationId, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readPublicDocument"></a>
# **readPublicDocument**
> InputStreamResource readPublicDocument(organizationId, id4n, fileName)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPublicDocument(organizationId, id4n, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readPublicDocument1"></a>
# **readPublicDocument1**
> InputStreamResource readPublicDocument1(organizationId, id4n, fileName)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPublicDocument1(organizationId, id4n, fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="resolveImageUsingGET"></a>
# **resolveImageUsingGET**
> &#39;Blob&#39; resolveImageUsingGET(imageID)

Resolve image

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.PublicServicesApi();

var imageID = "imageID_example"; // String | The id of the image to be resolved.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resolveImageUsingGET(imageID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageID** | **String**| The id of the image to be resolved. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="resolveWhoIsEntry"></a>
# **resolveWhoIsEntry**
> WhoIsResponse resolveWhoIsEntry(id4n)

Resolve owner of id4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.PublicServicesApi();

var id4n = "id4n_example"; // String | id4n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resolveWhoIsEntry(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 

### Return type

[**WhoIsResponse**](WhoIsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

