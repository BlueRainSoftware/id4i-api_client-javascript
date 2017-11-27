# Id4iApi.ImagesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resolveImageUsingGET**](ImagesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | resolveImage


<a name="resolveImageUsingGET"></a>
# **resolveImageUsingGET**
> &#39;Blob&#39; resolveImageUsingGET(imageID, opts)

resolveImage

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ImagesApi();

var imageID = "imageID_example"; // String | imageID

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
apiInstance.resolveImageUsingGET(imageID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageID** | **String**| imageID | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

