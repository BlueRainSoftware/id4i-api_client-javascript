# Id4iApi.ImagesApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resolveImageUsingGET**](ImagesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image


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

var apiInstance = new Id4iApi.ImagesApi();

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

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

