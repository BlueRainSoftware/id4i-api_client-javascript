# Id4iApi.UsercontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findUserByUsernameUsingGET**](UsercontrollerApi.md#findUserByUsernameUsingGET) | **GET** /api/v1/users/{username} | findUserByUsername
[**usersUsingGET**](UsercontrollerApi.md#usersUsingGET) | **GET** /api/v1/users | users


<a name="findUserByUsernameUsingGET"></a>
# **findUserByUsernameUsingGET**
> UserPresentation findUserByUsernameUsingGET(username, opts)

findUserByUsername

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.UsercontrollerApi();

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

<a name="usersUsingGET"></a>
# **usersUsingGET**
> [UserPresentation] usersUsingGET(opts)

users

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.UsercontrollerApi();

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
apiInstance.usersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**[UserPresentation]**](UserPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

