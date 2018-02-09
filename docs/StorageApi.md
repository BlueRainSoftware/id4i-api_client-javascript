# Id4iApi.StorageApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](StorageApi.md#createDocument) | **PUT** /api/v1/collections/{id4n}/documents/{organizationId} | Create an empty document for an id4n
[**createDocument1**](StorageApi.md#createDocument1) | **PUT** /api/v1/guids/{id4n}/documents/{organizationId} | Create an empty document for an id4n
[**deleteDocument**](StorageApi.md#deleteDocument) | **DELETE** /api/v1/collections/{id4n}/documents/{organizationId}/{fileName} | Delete a document
[**deleteDocument1**](StorageApi.md#deleteDocument1) | **DELETE** /api/v1/guids/{id4n}/documents/{organizationId}/{fileName} | Delete a document
[**getDocument**](StorageApi.md#getDocument) | **GET** /api/v1/collections/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**getDocument1**](StorageApi.md#getDocument1) | **GET** /api/v1/guids/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**getPublicDocument**](StorageApi.md#getPublicDocument) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**getPublicDocument1**](StorageApi.md#getPublicDocument1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId}/{fileName} | Retrieve a document (meta-data only, no content)
[**listAllDocuments**](StorageApi.md#listAllDocuments) | **GET** /api/v1/collections/{id4n}/documents | List documents
[**listAllDocuments1**](StorageApi.md#listAllDocuments1) | **GET** /api/v1/guids/{id4n}/documents | List documents
[**listAllPublicDocuments**](StorageApi.md#listAllPublicDocuments) | **GET** /api/v1/public/collections/{id4n}/documents | List organization specific documents
[**listAllPublicDocuments1**](StorageApi.md#listAllPublicDocuments1) | **GET** /api/v1/public/guids/{id4n}/documents | List organization specific documents
[**listDocuments**](StorageApi.md#listDocuments) | **GET** /api/v1/collections/{id4n}/documents/{organizationId} | List organization specific documents
[**listDocuments1**](StorageApi.md#listDocuments1) | **GET** /api/v1/guids/{id4n}/documents/{organizationId} | List organization specific documents
[**listPublicDocuments**](StorageApi.md#listPublicDocuments) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId} | List organization specific documents
[**listPublicDocuments1**](StorageApi.md#listPublicDocuments1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId} | List organization specific documents
[**read**](StorageApi.md#read) | **GET** /api/v1/collections/{id4n}/micro/{organization} | Read data from microstorage
[**read1**](StorageApi.md#read1) | **GET** /api/v1/guids/{id4n}/micro/{organization} | Read data from microstorage
[**readDocument**](StorageApi.md#readDocument) | **GET** /api/v1/collections/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**readDocument1**](StorageApi.md#readDocument1) | **GET** /api/v1/guids/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**readPublicDocument**](StorageApi.md#readPublicDocument) | **GET** /api/v1/public/collections/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**readPublicDocument1**](StorageApi.md#readPublicDocument1) | **GET** /api/v1/public/guids/{id4n}/documents/{organizationId}/{fileName}/content | Read document contents
[**updateDocument**](StorageApi.md#updateDocument) | **PATCH** /api/v1/collections/{id4n}/documents/{organizationId}/{fileName} | Update a document
[**updateDocument1**](StorageApi.md#updateDocument1) | **PATCH** /api/v1/guids/{id4n}/documents/{organizationId}/{fileName} | Update a document
[**write**](StorageApi.md#write) | **PUT** /api/v1/collections/{id4n}/micro/{organization} | Write data to microstorage
[**write1**](StorageApi.md#write1) | **PUT** /api/v1/guids/{id4n}/micro/{organization} | Write data to microstorage
[**writeDocument**](StorageApi.md#writeDocument) | **PUT** /api/v1/collections/{id4n}/documents/{organizationId}/{fileName}/content | Write document contents
[**writeDocument1**](StorageApi.md#writeDocument1) | **PUT** /api/v1/guids/{id4n}/documents/{organizationId}/{fileName}/content | Write document contents


<a name="createDocument"></a>
# **createDocument**
> Object createDocument(id4n, organizationId, document, opts)

Create an empty document for an id4n

The document is created empty, mime-type defaults to text/plain

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var organizationId = 789; // Number | organizationId

var document = new Id4iApi.Document(); // Document | document

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'mimeType': "mimeType_example" // String | mimeType
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocument(id4n, organizationId, document, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **Number**| organizationId | 
 **document** | [**Document**](Document.md)| document | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **mimeType** | **String**| mimeType | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createDocument1"></a>
# **createDocument1**
> Object createDocument1(id4n, organizationId, document, opts)

Create an empty document for an id4n

The document is created empty, mime-type defaults to text/plain

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var organizationId = 789; // Number | organizationId

var document = new Id4iApi.Document(); // Document | document

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'mimeType': "mimeType_example" // String | mimeType
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDocument1(id4n, organizationId, document, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **Number**| organizationId | 
 **document** | [**Document**](Document.md)| document | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **mimeType** | **String**| mimeType | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteDocument"></a>
# **deleteDocument**
> Object deleteDocument(organizationId, id4n, fileName, opts)

Delete a document

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteDocument1"></a>
# **deleteDocument1**
> Object deleteDocument1(organizationId, id4n, fileName, opts)

Delete a document

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(organizationId, id4n, fileName, opts)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getDocument1"></a>
# **getDocument1**
> Document getDocument1(organizationId, id4n, fileName, opts)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getPublicDocument"></a>
# **getPublicDocument**
> Document getPublicDocument(organizationId, id4n, fileName, opts)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getPublicDocument1"></a>
# **getPublicDocument1**
> Document getPublicDocument1(organizationId, id4n, fileName, opts)

Retrieve a document (meta-data only, no content)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublicDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllDocuments"></a>
# **listAllDocuments**
> PaginatedOwnedDocumentResponse listAllDocuments(id4n, opts)

List documents

Listing all documents of an id4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
apiInstance.listAllDocuments(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllDocuments1"></a>
# **listAllDocuments1**
> PaginatedOwnedDocumentResponse listAllDocuments1(id4n, opts)

List documents

Listing all documents of an id4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
apiInstance.listAllDocuments1(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

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

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **organizationId** | **Number**| organizationId | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

### Authorization

No authorization required

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

var apiInstance = new Id4iApi.StorageApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **organizationId** | **Number**| organizationId | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedOwnedDocumentResponse**](PaginatedOwnedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listDocuments"></a>
# **listDocuments**
> PaginatedDocumentResponse listDocuments(organizationId, id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
apiInstance.listDocuments(organizationId, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listDocuments1"></a>
# **listDocuments1**
> PaginatedDocumentResponse listDocuments1(organizationId, id4n, opts)

List organization specific documents

Listing documents of an id4n owned by a specified organization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
apiInstance.listDocuments1(organizationId, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

No authorization required

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

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

No authorization required

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

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedDocumentResponse**](PaginatedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="read"></a>
# **read**
> InputStreamResource read(organization, id4n, opts)

Read data from microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.read(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="read1"></a>
# **read1**
> InputStreamResource read1(organization, id4n, opts)

Read data from microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.read1(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readDocument"></a>
# **readDocument**
> InputStreamResource readDocument(organizationId, id4n, fileName, opts)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readDocument1"></a>
# **readDocument1**
> InputStreamResource readDocument1(organizationId, id4n, fileName, opts)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readPublicDocument"></a>
# **readPublicDocument**
> InputStreamResource readPublicDocument(organizationId, id4n, fileName, opts)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPublicDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="readPublicDocument1"></a>
# **readPublicDocument1**
> InputStreamResource readPublicDocument1(organizationId, id4n, fileName, opts)

Read document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readPublicDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**InputStreamResource**](InputStreamResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateDocument"></a>
# **updateDocument**
> Document updateDocument(organizationId, id4n, fileName, document, opts)

Update a document

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var document = new Id4iApi.DocumentUpdate(); // DocumentUpdate | document

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocument(organizationId, id4n, fileName, document, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **document** | [**DocumentUpdate**](DocumentUpdate.md)| document | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateDocument1"></a>
# **updateDocument1**
> Document updateDocument1(organizationId, id4n, fileName, document, opts)

Update a document

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var document = new Id4iApi.DocumentUpdate(); // DocumentUpdate | document

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDocument1(organizationId, id4n, fileName, document, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **document** | [**DocumentUpdate**](DocumentUpdate.md)| document | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="write"></a>
# **write**
> Object write(organization, id4n, opts)

Write data to microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'contentType': "contentType_example", // String | Content-Type
  'contentLength': 789 // Number | Content-Length
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.write(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **contentLength** | **Number**| Content-Length | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="write1"></a>
# **write1**
> Object write1(organization, id4n, opts)

Write data to microstorage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organization = 789; // Number | organization

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'contentType': "contentType_example", // String | Content-Type
  'contentLength': 789 // Number | Content-Length
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.write1(organization, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Number**| organization | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **contentLength** | **Number**| Content-Length | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="writeDocument"></a>
# **writeDocument**
> Object writeDocument(organizationId, id4n, fileName, opts)

Write document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'contentType': "contentType_example", // String | Content-Type
  'contentLength': 789 // Number | Content-Length
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writeDocument(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **contentLength** | **Number**| Content-Length | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="writeDocument1"></a>
# **writeDocument1**
> Object writeDocument1(organizationId, id4n, fileName, opts)

Write document contents

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.StorageApi();

var organizationId = 789; // Number | organizationId

var id4n = "id4n_example"; // String | id4n

var fileName = "fileName_example"; // String | fileName

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'contentType': "contentType_example", // String | Content-Type
  'contentLength': 789 // Number | Content-Length
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writeDocument1(organizationId, id4n, fileName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **id4n** | **String**| id4n | 
 **fileName** | **String**| fileName | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **contentType** | **String**| Content-Type | [optional] 
 **contentLength** | **Number**| Content-Length | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/xml, application/json;charset=UTF-8

