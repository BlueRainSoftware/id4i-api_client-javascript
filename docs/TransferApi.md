# Id4iApi.TransferApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReceiveInfo**](TransferApi.md#getReceiveInfo) | **GET** /api/v1/transfers/{id4n}/receiveInfo | Show transfer information
[**getSendInfo**](TransferApi.md#getSendInfo) | **GET** /api/v1/transfers/{id4n}/sendInfo | Show transfer preparation information
[**prepare**](TransferApi.md#prepare) | **PUT** /api/v1/transfers/{id4n}/sendInfo | Prepare an object for transfer
[**receive**](TransferApi.md#receive) | **PUT** /api/v1/transfers/{id4n}/receiveInfo | Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership


<a name="getReceiveInfo"></a>
# **getReceiveInfo**
> TransferReceiveInfo getReceiveInfo(id4n)

Show transfer information

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.TransferApi();

var id4n = "id4n_example"; // String | The ID4N to retrieve information about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceiveInfo(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The ID4N to retrieve information about | 

### Return type

[**TransferReceiveInfo**](TransferReceiveInfo.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getSendInfo"></a>
# **getSendInfo**
> TransferSendInfo getSendInfo(id4n)

Show transfer preparation information

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.TransferApi();

var id4n = "id4n_example"; // String | The ID4N to retrieve information about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSendInfo(id4n, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The ID4N to retrieve information about | 

### Return type

[**TransferSendInfo**](TransferSendInfo.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="prepare"></a>
# **prepare**
> Object prepare(id4n, request)

Prepare an object for transfer

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.TransferApi();

var id4n = "id4n_example"; // String | The ID4N to prepare for transfer

var request = new Id4iApi.TransferSendInfo(); // TransferSendInfo | Transfer preparation status


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prepare(id4n, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The ID4N to prepare for transfer | 
 **request** | [**TransferSendInfo**](TransferSendInfo.md)| Transfer preparation status | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="receive"></a>
# **receive**
> receive(id4n, request)

Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership

Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.TransferApi();

var id4n = "id4n_example"; // String | This ID4N identifies the object to take hold of

var request = new Id4iApi.TransferReceiveInfo(); // TransferReceiveInfo | Required information to receive an id4n object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.receive(id4n, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| This ID4N identifies the object to take hold of | 
 **request** | [**TransferReceiveInfo**](TransferReceiveInfo.md)| Required information to receive an id4n object | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

