# Id4iApi.HistoryApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItem**](HistoryApi.md#addItem) | **POST** /api/v1/history/{id4n} | Add history item
[**filteredList**](HistoryApi.md#filteredList) | **GET** /api/v1/history/{id4n} | List history
[**list**](HistoryApi.md#list) | **GET** /api/v1/history/{id4n}/{organizationId} | DEPRECATED - List history
[**retrieveItem**](HistoryApi.md#retrieveItem) | **GET** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | Get history item
[**updateItem**](HistoryApi.md#updateItem) | **PATCH** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | Update history item
[**updateItemVisibility**](HistoryApi.md#updateItemVisibility) | **PUT** /api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility | Set history item visibility


<a name="addItem"></a>
# **addItem**
> addItem(historyItem, id4n)

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

var historyItem = new Id4iApi.HistoryItem(); // HistoryItem | The history item to publish

var id4n = "id4n_example"; // String | GUID to retrieve the history for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addItem(historyItem, id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **historyItem** | [**HistoryItem**](HistoryItem.md)| The history item to publish | 
 **id4n** | **String**| GUID to retrieve the history for | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="filteredList"></a>
# **filteredList**
> PaginatedHistoryItemResponse filteredList(id4n, opts)

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
  'fromDate': new Date("\"2018-05-10T10:05:10.690Z\""), // Date | From date time as UTC Date-Time format
  'includePrivate': true, // Boolean | Also return private history entries
  'limit': 100, // Number | The maximum count of returned elements
  'offset': 0, // Number | Start with the n-th element
  'organization': "organization_example", // String | Show only entries created by one of the given organizations. This parameter can be used multiple times.
  'qualifier': ["qualifier_example"], // [String] | Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.
  'toDate': new Date("\"2018-05-11T01:01:01.690Z\""), // Date | To date time as UTC Date-Time format
  'type': ["type_example"] // [String] | Show only entries matching one of the given history item types. This parameter can be used multiple times.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filteredList(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **fromDate** | **Date**| From date time as UTC Date-Time format | [optional] 
 **includePrivate** | **Boolean**| Also return private history entries | [optional] [default to true]
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **organization** | **String**| Show only entries created by one of the given organizations. This parameter can be used multiple times. | [optional] 
 **qualifier** | [**[String]**](String.md)| Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times. | [optional] 
 **toDate** | **Date**| To date time as UTC Date-Time format | [optional] 
 **type** | [**[String]**](String.md)| Show only entries matching one of the given history item types. This parameter can be used multiple times. | [optional] 

### Return type

[**PaginatedHistoryItemResponse**](PaginatedHistoryItemResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="list"></a>
# **list**
> PaginatedHistoryItemResponse list(id4n, organizationId, opts)

DEPRECATED - List history

DEPRECATED - please use filteredList with organization parameter to achieve the same functionality

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

var organizationId = "organizationId_example"; // String | organizationId

var opts = { 
  'includePrivate': true, // Boolean | Also return private history entries
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
apiInstance.list(id4n, organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| GUID to retrieve the history for | 
 **organizationId** | **String**| organizationId | 
 **includePrivate** | **Boolean**| Also return private history entries | [optional] [default to true]
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 

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

Get history item

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

var organizationId = "organizationId_example"; // String | organizationId

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
 **organizationId** | **String**| organizationId | 
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

var organizationId = "organizationId_example"; // String | organizationId

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
 **organizationId** | **String**| organizationId | 
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

var organizationId = "organizationId_example"; // String | organizationId

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
 **organizationId** | **String**| organizationId | 
 **sequenceId** | **Number**| sequenceId | 
 **visibility** | [**Visibility**](Visibility.md)| History item visibility restrictions | 

### Return type

[**HistoryItem**](HistoryItem.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

