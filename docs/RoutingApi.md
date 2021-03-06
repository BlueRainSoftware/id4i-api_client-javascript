# Id4iApi.RoutingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllRoutes**](RoutingApi.md#getAllRoutes) | **GET** /api/v1/routingfiles/{id4n}/routes/{type} | Retrieve all routes of a GUID (or ID4N)
[**getRoute**](RoutingApi.md#getRoute) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | Retrieve current route of a GUID (or ID4N)
[**getRoutingFile**](RoutingApi.md#getRoutingFile) | **GET** /api/v1/routingfiles/{id4n} | Retrieve routing file
[**updateRoutingFile**](RoutingApi.md#updateRoutingFile) | **PUT** /api/v1/routingfiles/{id4n} | Store routing file


<a name="getAllRoutes"></a>
# **getAllRoutes**
> [Route] getAllRoutes(id4n, type, opts)

Retrieve all routes of a GUID (or ID4N)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var type = "type_example"; // String | The type of route you want to have

var opts = { 
  'organizationId': "organizationId_example", // String | organizationId
  'interpolate': true // Boolean | interpolate
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRoutes(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| The type of route you want to have | 
 **organizationId** | **String**| organizationId | [optional] 
 **interpolate** | **Boolean**| interpolate | [optional] [default to true]

### Return type

[**[Route]**](Route.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getRoute"></a>
# **getRoute**
> Route getRoute(id4n, type, opts)

Retrieve current route of a GUID (or ID4N)

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var type = "type_example"; // String | The type of route you want to have

var opts = { 
  'privateRoutes': true, // Boolean | privateRoutes
  'publicRoutes': true, // Boolean | publicRoutes
  'interpolate': true // Boolean | interpolate
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoute(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| The type of route you want to have | 
 **privateRoutes** | **Boolean**| privateRoutes | [optional] [default to true]
 **publicRoutes** | **Boolean**| publicRoutes | [optional] [default to true]
 **interpolate** | **Boolean**| interpolate | [optional] [default to true]

### Return type

[**Route**](Route.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getRoutingFile"></a>
# **getRoutingFile**
> RoutingFile getRoutingFile(id4n, opts)

Retrieve routing file

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'organizationId': "organizationId_example" // String | organizationId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoutingFile(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **organizationId** | **String**| organizationId | [optional] 

### Return type

[**RoutingFile**](RoutingFile.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="updateRoutingFile"></a>
# **updateRoutingFile**
> updateRoutingFile(rfr, id4n)

Store routing file

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.RoutingApi();

var rfr = new Id4iApi.RoutingFileRequest(); // RoutingFileRequest | rfr

var id4n = "id4n_example"; // String | id4n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRoutingFile(rfr, id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rfr** | [**RoutingFileRequest**](RoutingFileRequest.md)| rfr | 
 **id4n** | **String**| id4n | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

