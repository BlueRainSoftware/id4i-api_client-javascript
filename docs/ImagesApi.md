# Id4iApi.ImagesApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resolveImageUsingGET**](ImagesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image


<a name="resolveImageUsingGET"></a>
# **resolveImageUsingGET**
> &#39;Blob&#39; resolveImageUsingGET(imageID, opts)

Resolve image

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ImagesApi();

var imageID = "imageID_example"; // String | The id of the image to be resolved.

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resolveImageUsingGET(imageID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageID** | **String**| The id of the image to be resolved. | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

