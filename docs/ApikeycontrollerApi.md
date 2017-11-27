# Id4iApi.ApikeycontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](ApikeycontrollerApi.md#createUsingPOST) | **POST** /api/v1/apikeys | create
[**listUsingGET**](ApikeycontrollerApi.md#listUsingGET) | **GET** /api/v1/apikeys | list
[**removeKeyUsingDELETE**](ApikeycontrollerApi.md#removeKeyUsingDELETE) | **DELETE** /api/v1/apikeys/{key} | removeKey
[**setKeyActivationStatusUsingPUT**](ApikeycontrollerApi.md#setKeyActivationStatusUsingPUT) | **PUT** /api/v1/apikeys/{key} | setKeyActivationStatus
[**showKeyUsingGET**](ApikeycontrollerApi.md#showKeyUsingGET) | **GET** /api/v1/apikeys/{key} | showKey


<a name="createUsingPOST"></a>
# **createUsingPOST**
> ApiKeyPresentation createUsingPOST(creationRequest, opts)

create

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var creationRequest = new Id4iApi.ApiKeyCreationRequest(); // ApiKeyCreationRequest | creationRequest

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsingPOST(creationRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creationRequest** | [**ApiKeyCreationRequest**](ApiKeyCreationRequest.md)| creationRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiKeyPresentation**](ApiKeyPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listUsingGET"></a>
# **listUsingGET**
> PaginatedApiKeyResponse listUsingGET(opts)

list

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'organizationId': 789, // Number | organizationId
  'offset': 56, // Number | 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **organizationId** | **Number**| organizationId | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**PaginatedApiKeyResponse**](PaginatedApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeKeyUsingDELETE"></a>
# **removeKeyUsingDELETE**
> ResponseEntity removeKeyUsingDELETE(key, opts)

removeKey

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | key

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeKeyUsingDELETE(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="setKeyActivationStatusUsingPUT"></a>
# **setKeyActivationStatusUsingPUT**
> ResponseEntity setKeyActivationStatusUsingPUT(key, apiKeyStatus, opts)

setKeyActivationStatus

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | key

var apiKeyStatus = new Id4iApi.ApiKeyStatus(); // ApiKeyStatus | apiKeyStatus

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setKeyActivationStatusUsingPUT(key, apiKeyStatus, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **apiKeyStatus** | [**ApiKeyStatus**](ApiKeyStatus.md)| apiKeyStatus | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="showKeyUsingGET"></a>
# **showKeyUsingGET**
> ApiKeyPresentation showKeyUsingGET(key, opts)

showKey

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | key

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showKeyUsingGET(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiKeyPresentation**](ApiKeyPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

