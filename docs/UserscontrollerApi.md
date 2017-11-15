# Id4iApi.UserscontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findUserByUsernameUsingGET**](UserscontrollerApi.md#findUserByUsernameUsingGET) | **GET** /api/v1/users/{username} | findUserByUsername


<a name="findUserByUsernameUsingGET"></a>
# **findUserByUsernameUsingGET**
> UserPresentation findUserByUsernameUsingGET(username, opts)

findUserByUsername

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.UserscontrollerApi();

var username = "username_example"; // String | username

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
apiInstance.findUserByUsernameUsingGET(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| username | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**UserPresentation**](UserPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

