# Id4iApi.StorageApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](StorageApi.md#createDocument) | **PUT** /api/v1/documents/{id4n}/{organizationId} | Create an empty document for an id4n
[**deleteDocument**](StorageApi.md#deleteDocument) | **DELETE** /api/v1/documents/{id4n}/{organizationId}/{fileName} | Delete a document
[**getDocument**](StorageApi.md#getDocument) | **GET** /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a document (meta-data only, no content)
[**getPublicDocument**](StorageApi.md#getPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a public document (meta-data only, no content)
[**listAllDocuments**](StorageApi.md#listAllDocuments) | **GET** /api/v1/documents/{id4n} | List documents
[**listAllPublicDocuments**](StorageApi.md#listAllPublicDocuments) | **GET** /api/v1/public/documents/{id4n} | List public documents
[**listDocuments**](StorageApi.md#listDocuments) | **GET** /api/v1/documents/{id4n}/{organizationId} | List organization specific documents
[**readDocument**](StorageApi.md#readDocument) | **GET** /api/v1/documents/{id4n}/{organizationId}/{fileName} | Read document contents
[**readFromMicrostorage**](StorageApi.md#readFromMicrostorage) | **GET** /api/v1/microstorage/{id4n}/{organization} | Read data from microstorage
[**readPublicDocument**](StorageApi.md#readPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName} | Read public document contents
[**updateDocumentMetadata**](StorageApi.md#updateDocumentMetadata) | **PATCH** /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata | Update a document
[**writeToMicrostorage**](StorageApi.md#writeToMicrostorage) | **PUT** /api/v1/microstorage/{id4n}/{organization} | Write data to microstorage


<a name="createDocument"></a>
# **createDocument**
> Document createDocument(content, id4n, organizationId)

Create an empty document for an id4n

The document is created empty, mime-type defaults to text/plain

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var content = "/path/to/file.txt"; // File | content

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocument(content, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **File**| content | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(fileName, id4n, organizationId)

Delete a document

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDocument(fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(fileName, id4n, organizationId)

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

var apiInstance = new Id4iApi.StorageApi();

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument(fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getPublicDocument"></a>
# **getPublicDocument**
> Document getPublicDocument(fileName, id4n, organizationId)

Retrieve a public document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicDocument(fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listAllDocuments"></a>
# **listAllDocuments**
> PaginatedDocumentResponse listAllDocuments(id4n, opts)

List documents

Listing all documents of an id4n

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'owner': "owner_example" // String | Filter by owner organization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllDocuments(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **owner** | **String**| Filter by owner organization | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listAllPublicDocuments"></a>
# **listAllPublicDocuments**
> PaginatedDocumentResponse listAllPublicDocuments(id4n, opts)

List public documents

Listing all public documents of an id4n

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'organizationId': "organizationId_example", // String | organizationId
  'owner': "owner_example" // String | Filter by owner organization
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
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **organizationId** | **String**| organizationId | [optional] 
 **owner** | **String**| Filter by owner organization | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listDocuments"></a>
# **listDocuments**
> PaginatedDocumentResponse listDocuments(id4n, organizationId, opts)

List organization specific documents

Listing documents of an id4n seen by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'owner': "owner_example" // String | Filter by owner organization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDocuments(id4n, organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **owner** | **String**| Filter by owner organization | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="readDocument"></a>
# **readDocument**
> &#39;Blob&#39; readDocument(fileName, id4n, organizationId)

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

var apiInstance = new Id4iApi.StorageApi();

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDocument(fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="readFromMicrostorage"></a>
# **readFromMicrostorage**
> &#39;Blob&#39; readFromMicrostorage(id4n, organization)

Read data from microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var organization = "organization_example"; // String | organization


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readFromMicrostorage(id4n, organization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organization** | **String**| organization | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="readPublicDocument"></a>
# **readPublicDocument**
> &#39;Blob&#39; readPublicDocument(fileName, id4n, organizationId)

Read public document contents

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPublicDocument(fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateDocumentMetadata"></a>
# **updateDocumentMetadata**
> Document updateDocumentMetadata(document, fileName, id4n, organizationId)

Update a document

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var document = new Id4iApi.DocumentUpdate(); // DocumentUpdate | document

var fileName = "fileName_example"; // String | fileName

var id4n = "id4n_example"; // String | id4n

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocumentMetadata(document, fileName, id4n, organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document** | [**DocumentUpdate**](DocumentUpdate.md)| document | 
 **fileName** | **String**| fileName | 
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | 

### Return type

[**Document**](Document.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="writeToMicrostorage"></a>
# **writeToMicrostorage**
> Object writeToMicrostorage(id4n, organization, opts)

Write data to microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var organization = "organization_example"; // String | organization

var opts = { 
  'contentLength': 789, // Number | Content-Length
  'contentType': "contentType_example", // String | Content-Type
  'body': B // Blob | body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writeToMicrostorage(id4n, organization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organization** | **String**| organization | 
 **contentLength** | **Number**| Content-Length | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **body** | **Blob**| body | [optional] 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/xml, application/json

