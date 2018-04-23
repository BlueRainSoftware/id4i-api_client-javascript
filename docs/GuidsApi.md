# Id4iApi.GuidsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGuidAlias**](GuidsApi.md#addGuidAlias) | **POST** /api/v1/guids/{id4n}/alias/{aliasType} | Add alias for GUIDs
[**createGuid**](GuidsApi.md#createGuid) | **POST** /api/v1/guids | Create GUID(s)
[**getGuid**](GuidsApi.md#getGuid) | **GET** /api/v1/guids/{id4n} | Retrieve GUID information
[**getGuidAliases**](GuidsApi.md#getGuidAliases) | **GET** /api/v1/guids/{id4n}/alias | Get all aliases for the given GUID
[**getGuidsWithoutCollection**](GuidsApi.md#getGuidsWithoutCollection) | **GET** /api/v1/guids/withoutCollection | Retrieve GUIDs not in any collection
[**getId4n**](GuidsApi.md#getId4n) | **GET** /api/v1/id4ns/{id4n} | Retrieve ID4n information
[**removeGuidAlias**](GuidsApi.md#removeGuidAlias) | **DELETE** /api/v1/guids/{id4n}/alias/{aliasType} | Remove aliases from GUIDs
[**updateGuid**](GuidsApi.md#updateGuid) | **PATCH** /api/v1/guids/{id4n} | Change GUID information.


<a name="addGuidAlias"></a>
# **addGuidAlias**
> addGuidAlias(id4n, aliasType, alias)

Add alias for GUIDs

Adds or replaces aliases for single GUIDs (alias type item and mapp) or groups of GUIDs (alias types gtin, ean and article)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The GUID to operate on

var aliasType = "aliasType_example"; // String | Alias type, see the corresponding API model

var alias = new Id4iApi.GuidAlias(); // GuidAlias | The alias to add or update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGuidAlias(id4n, aliasType, alias, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 
 **aliasType** | **String**| Alias type, see the corresponding API model | 
 **alias** | [**GuidAlias**](GuidAlias.md)| The alias to add or update | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="createGuid"></a>
# **createGuid**
> ListOfId4ns createGuid(createGUIDInfo)

Create GUID(s)

Creating one or more GUIDs with a specified length.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var createGUIDInfo = new Id4iApi.CreateGuidRequest(); // CreateGuidRequest | createGUIDInfo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGuid(createGUIDInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateGuidRequest**](CreateGuidRequest.md)| createGUIDInfo | 

### Return type

[**ListOfId4ns**](ListOfId4ns.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getGuid"></a>
# **getGuid**
> Guid getGuid(id4n)

Retrieve GUID information

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The GUID number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGuid(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID number | 

### Return type

[**Guid**](Guid.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getGuidAliases"></a>
# **getGuidAliases**
> {&#39;String&#39;: &#39;String&#39;} getGuidAliases(id4n)

Get all aliases for the given GUID

Looks up the alias for each alias type (group and single GUID) and returns all found ones

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The GUID to operate on


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGuidAliases(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getGuidsWithoutCollection"></a>
# **getGuidsWithoutCollection**
> PaginatedResponseGuid getGuidsWithoutCollection(organizationId, opts)

Retrieve GUIDs not in any collection

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var organizationId = 789; // Number | Organization to search GUIDs for (required).

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
apiInstance.getGuidsWithoutCollection(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| Organization to search GUIDs for (required). | 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedResponseGuid**](PaginatedResponseGuid.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getId4n"></a>
# **getId4n**
> Id4nPresentation getId4n(id4n)

Retrieve ID4n information

Retrieving basic information about an ID like the type and the creation time.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The ID to resolve to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getId4n(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The ID to resolve to | 

### Return type

[**Id4nPresentation**](Id4nPresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="removeGuidAlias"></a>
# **removeGuidAlias**
> removeGuidAlias(id4n, aliasType)

Remove aliases from GUIDs

Remove the alias of the given type

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The GUID to operate on

var aliasType = "aliasType_example"; // String | Alias type, see the corresponding API model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeGuidAlias(id4n, aliasType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 
 **aliasType** | **String**| Alias type, see the corresponding API model | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateGuid"></a>
# **updateGuid**
> Object updateGuid(id4n, request)

Change GUID information.

Allows ownership transfer.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.GuidsApi();

var id4n = "id4n_example"; // String | The GUID number

var request = new Id4iApi.Guid(); // Guid | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGuid(id4n, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID number | 
 **request** | [**Guid**](Guid.md)| request | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

