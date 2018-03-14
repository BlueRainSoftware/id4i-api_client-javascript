# Id4iApi.MetaInformationApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationInfo**](MetaInformationApi.md#applicationInfo) | **GET** /api/v1/info | Retrieve version information about ID4i


<a name="applicationInfo"></a>
# **applicationInfo**
> AppInfoPresentation applicationInfo()

Retrieve version information about ID4i

Retrieving version information about ID4i.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.MetaInformationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.applicationInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppInfoPresentation**](AppInfoPresentation.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

