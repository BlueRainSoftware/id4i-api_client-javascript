# Id4iApi.HistoryApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItem**](HistoryApi.md#addItem) | **POST** /api/v1/history/{id4n} | Add history item
[**list**](HistoryApi.md#list) | **GET** /api/v1/history/{id4n}/{organizationId} | List history
[**listAll**](HistoryApi.md#listAll) | **GET** /api/v1/history/{id4n} | List history
[**retrieveItem**](HistoryApi.md#retrieveItem) | **GET** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | List history
[**updateItem**](HistoryApi.md#updateItem) | **PATCH** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | Update history item
[**updateItemVisibility**](HistoryApi.md#updateItemVisibility) | **PUT** /api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility | Set history item visibility


<a name="addItem"></a>
# **addItem**
> addItem(id4n, historyItem)

Add history item

Add a new history item

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var historyItem = new Id4iApi.HistoryItem(); // HistoryItem | The history item to publish


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItem(id4n, historyItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **historyItem** | [**HistoryItem**](HistoryItem.md)| The history item to publish | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="list"></a>
# **list**
> PaginatedHistoryItemResponse list(id4n, organizationId, opts)

List history

Lists the history of a GUID

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var organizationId = 789; // Number | organizationId

var opts = { 
  'includePrivate': true, // Boolean | Also return private history entries
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
apiInstance.list(id4n, organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **organizationId** | **Number**| organizationId | 
 **includePrivate** | **Boolean**| Also return private history entries | [optional] [default to true]
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedHistoryItemResponse**](PaginatedHistoryItemResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listAll"></a>
# **listAll**
> PaginatedHistoryItemResponse listAll(id4n, opts)

List history

Lists the history of a GUID

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var opts = { 
  'includePrivate': true, // Boolean | Also return private history entries
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
apiInstance.listAll(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **includePrivate** | **Boolean**| Also return private history entries | [optional] [default to true]
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedHistoryItemResponse**](PaginatedHistoryItemResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="retrieveItem"></a>
# **retrieveItem**
> PaginatedHistoryItemResponse retrieveItem(id4n, organizationId, sequenceId)

List history

Lists the history of a GUID

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var organizationId = 789; // Number | organizationId

var sequenceId = 56; // Number | sequenceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveItem(id4n, organizationId, sequenceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **organizationId** | **Number**| organizationId | 
 **sequenceId** | **Number**| sequenceId | 

### Return type

[**PaginatedHistoryItemResponse**](PaginatedHistoryItemResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateItem"></a>
# **updateItem**
> HistoryItem updateItem(id4n, organizationId, sequenceId, update)

Update history item

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var organizationId = 789; // Number | organizationId

var sequenceId = 56; // Number | sequenceId

var update = new Id4iApi.HistoryItemUpdate(); // HistoryItemUpdate | update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateItem(id4n, organizationId, sequenceId, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **organizationId** | **Number**| organizationId | 
 **sequenceId** | **Number**| sequenceId | 
 **update** | [**HistoryItemUpdate**](HistoryItemUpdate.md)| update | 

### Return type

[**HistoryItem**](HistoryItem.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateItemVisibility"></a>
# **updateItemVisibility**
> HistoryItem updateItemVisibility(id4n, organizationId, sequenceId, visibility)

Set history item visibility

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.HistoryApi();

var id4n = "id4n_example"; // String | GUID to retrieve the history for

var organizationId = 789; // Number | organizationId

var sequenceId = 56; // Number | sequenceId

var visibility = new Id4iApi.Visibility(); // Visibility | History item visibility restrictions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateItemVisibility(id4n, organizationId, sequenceId, visibility, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **organizationId** | **Number**| organizationId | 
 **sequenceId** | **Number**| sequenceId | 
 **visibility** | [**Visibility**](Visibility.md)| History item visibility restrictions | 

### Return type

[**HistoryItem**](HistoryItem.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

