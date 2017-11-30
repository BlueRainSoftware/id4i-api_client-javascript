# Id4iApi.ApikeycontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](ApikeycontrollerApi.md#createUsingPOST) | **POST** /api/v1/apikeys | Create apiKey
[**listUsingGET**](ApikeycontrollerApi.md#listUsingGET) | **GET** /api/v1/apikeys | Find apiKeys by organization
[**removeKeyUsingDELETE**](ApikeycontrollerApi.md#removeKeyUsingDELETE) | **DELETE** /api/v1/apikeys/{key} | Delete apiKey
[**setKeyActivationStatusUsingPUT**](ApikeycontrollerApi.md#setKeyActivationStatusUsingPUT) | **PUT** /api/v1/apikeys/{key} | Set apiKey activation state
[**showKeyUsingGET**](ApikeycontrollerApi.md#showKeyUsingGET) | **GET** /api/v1/apikeys/{key} | Show apiKey


<a name="createUsingPOST"></a>
# **createUsingPOST**
> ApiKeyPresentation createUsingPOST(creationRequest, opts)

Create apiKey

Creation of a new apiKey.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var creationRequest = new Id4iApi.ApiKeyCreationRequest(); // ApiKeyCreationRequest | ApiKey to be created.

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
 **creationRequest** | [**ApiKeyCreationRequest**](ApiKeyCreationRequest.md)| ApiKey to be created. | 
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
> PaginatedApiKeyResponse listUsingGET(organizationId, opts)

Find apiKeys by organization

Finding all apiKeys assigned to the specified organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var organizationId = 789; // Number | The id of the organization to search in.

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'offset': 56, // Number | Start with the n-th element. 
  'limit': 56 // Number | The maximum count of returned elements.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization to search in. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**PaginatedApiKeyResponse**](PaginatedApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeKeyUsingDELETE"></a>
# **removeKeyUsingDELETE**
> ApiError removeKeyUsingDELETE(key, opts)

Delete apiKey

Deletion of an apiKey.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | The apiKey to delete.

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
 **key** | **String**| The apiKey to delete. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="setKeyActivationStatusUsingPUT"></a>
# **setKeyActivationStatusUsingPUT**
> ApiError setKeyActivationStatusUsingPUT(key, apiKeyStatus, opts)

Set apiKey activation state

Setting the apiKey activation state.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | The apiKey to change the activation state.

var apiKeyStatus = new Id4iApi.ApiKeyStatus(); // ApiKeyStatus | Activation state to set.

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
 **key** | **String**| The apiKey to change the activation state. | 
 **apiKeyStatus** | [**ApiKeyStatus**](ApiKeyStatus.md)| Activation state to set. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="showKeyUsingGET"></a>
# **showKeyUsingGET**
> ApiKeyPresentation showKeyUsingGET(key, opts)

Show apiKey

Showing the details of an apiKey.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeycontrollerApi();

var key = "key_example"; // String | The apiKey to show.

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
 **key** | **String**| The apiKey to show. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiKeyPresentation**](ApiKeyPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

