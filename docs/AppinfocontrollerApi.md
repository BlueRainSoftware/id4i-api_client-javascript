# Id4iApi.AppinfocontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**infoUsingGET**](AppinfocontrollerApi.md#infoUsingGET) | **GET** /api/v1/info | info


<a name="infoUsingGET"></a>
# **infoUsingGET**
> AppInfoPresentation infoUsingGET(opts)

info

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AppinfocontrollerApi();

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
apiInstance.infoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**AppInfoPresentation**](AppInfoPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

