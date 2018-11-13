# Id4iApi.PublicServicesApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicDocument**](PublicServicesApi.md#getPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a public document (meta-data only, no content)
[**getRoutes**](PublicServicesApi.md#getRoutes) | **GET** /api/v1/public/routes/{id4n} | Retrieve all public routes for a GUID
[**go**](PublicServicesApi.md#go) | **GET** /go/{guid} | Forward
[**listAllPublicDocuments**](PublicServicesApi.md#listAllPublicDocuments) | **GET** /api/v1/public/documents/{id4n} | List public documents
[**listPublicHistory**](PublicServicesApi.md#listPublicHistory) | **GET** /api/v1/public/history/{id4n} | Shows the public history of the given GUID
[**readOrganizationInfo**](PublicServicesApi.md#readOrganizationInfo) | **GET** /api/v1/public/organizations/{organizationId} | Read public organization information
[**readPublicDocument**](PublicServicesApi.md#readPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName} | Read public document contents
[**resolveImageUsingGET**](PublicServicesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
[**resolveWhoIsEntry**](PublicServicesApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n


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

var apiInstance = new Id4iApi.PublicServicesApi();

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

<a name="getRoutes"></a>
# **getRoutes**
> [Route] getRoutes(id4n, type, opts)

Retrieve all public routes for a GUID

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

var type = "web"; // String | type

var opts = { 
  'interpolate': true // Boolean | interpolate
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoutes(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| type | [default to web]
 **interpolate** | **Boolean**| interpolate | [optional] [default to true]

### Return type

[**[Route]**](Route.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="go"></a>
# **go**
> go(guid)

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
    console.log('API called successfully.');
  }
};
apiInstance.go(guid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

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

var apiInstance = new Id4iApi.PublicServicesApi();

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

<a name="listPublicHistory"></a>
# **listPublicHistory**
> PaginatedHistoryItemResponse listPublicHistory(id4n, opts)

Shows the public history of the given GUID

Only contains public history items

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

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var opts = { 
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0 // Number | Start with the n-th element
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPublicHistory(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

### Return type

[**PaginatedHistoryItemResponse**](PaginatedHistoryItemResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="readOrganizationInfo"></a>
# **readOrganizationInfo**
> Organization readOrganizationInfo(organizationId)

Read public organization information

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

var organizationId = "organizationId_example"; // String | Organization ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readOrganizationInfo(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| Organization ID | 

### Return type

[**Organization**](Organization.md)

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

var apiInstance = new Id4iApi.PublicServicesApi();

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

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

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

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

