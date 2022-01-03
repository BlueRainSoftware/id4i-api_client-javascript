# Id4iApi.MessagingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enqueueCustomMessage**](MessagingApi.md#enqueueCustomMessage) | **POST** /api/v1/organizations/{organizationId}/messaging/enqueueCustomMessage | Enqueue a custom message
[**getDefaultQueue**](MessagingApi.md#getDefaultQueue) | **GET** /api/v1/organizations/{organizationId}/messaging | 
[**patchDefaultQueue**](MessagingApi.md#patchDefaultQueue) | **PATCH** /api/v1/organizations/{organizationId}/messaging | 


<a name="enqueueCustomMessage"></a>
# **enqueueCustomMessage**
> enqueueCustomMessage(organizationId, request)

Enqueue a custom message

Enqueue a custom organisation message with custom data.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.MessagingApi();

var organizationId = "organizationId_example"; // String | The organisation namespace

var request = new Id4iApi.SendCustomMessage(); // SendCustomMessage | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.enqueueCustomMessage(organizationId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The organisation namespace | 
 **request** | [**SendCustomMessage**](SendCustomMessage.md)| request | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getDefaultQueue"></a>
# **getDefaultQueue**
> QueuePresentation getDefaultQueue(organizationId)



### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.MessagingApi();

var organizationId = "organizationId_example"; // String | organizationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDefaultQueue(organizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organizationId | 

### Return type

[**QueuePresentation**](QueuePresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="patchDefaultQueue"></a>
# **patchDefaultQueue**
> patchDefaultQueue(organizationId, request)



### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.MessagingApi();

var organizationId = "organizationId_example"; // String | organizationId

var request = new Id4iApi.QueueUpdateRequest(); // QueueUpdateRequest | request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.patchDefaultQueue(organizationId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organizationId | 
 **request** | [**QueueUpdateRequest**](QueueUpdateRequest.md)| request | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

