# Id4iApi.DefaultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPOST**](DefaultApi.md#loginPOST) | **POST** /login | 


<a name="loginPOST"></a>
# **loginPOST**
> loginPOST(accountCredentials)



ID4i API Login

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.DefaultApi();

var accountCredentials = new Id4iApi.AccountCredentials(); // AccountCredentials | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginPOST(accountCredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountCredentials** | [**AccountCredentials**](AccountCredentials.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

