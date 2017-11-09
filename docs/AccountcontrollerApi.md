# Id4iApi.AccountcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerUserUsingPOST**](AccountcontrollerApi.md#registerUserUsingPOST) | **POST** /account/registration | registerUser
[**requestPasswordResetUsingPOST**](AccountcontrollerApi.md#requestPasswordResetUsingPOST) | **POST** /account/password | requestPasswordReset
[**verifyPasswordResetUsingPUT**](AccountcontrollerApi.md#verifyPasswordResetUsingPUT) | **PUT** /account/password | verifyPasswordReset
[**verifyRegistrationUsingPOST**](AccountcontrollerApi.md#verifyRegistrationUsingPOST) | **POST** /account/verification | verifyRegistration


<a name="registerUserUsingPOST"></a>
# **registerUserUsingPOST**
> UserRegistrationResponse registerUserUsingPOST(userRegistration, opts)

registerUser

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountcontrollerApi();

var userRegistration = new Id4iApi.UserRegistrationRequest(); // UserRegistrationRequest | userRegistration

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
apiInstance.registerUserUsingPOST(userRegistration, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRegistration** | [**UserRegistrationRequest**](UserRegistrationRequest.md)| userRegistration | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**UserRegistrationResponse**](UserRegistrationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> SimpleMessageResponse requestPasswordResetUsingPOST(resetRequest, opts)

requestPasswordReset

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountcontrollerApi();

var resetRequest = new Id4iApi.PasswordResetRequest(); // PasswordResetRequest | resetRequest

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
apiInstance.requestPasswordResetUsingPOST(resetRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetRequest** | [**PasswordResetRequest**](PasswordResetRequest.md)| resetRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="verifyPasswordResetUsingPUT"></a>
# **verifyPasswordResetUsingPUT**
> SimpleMessageResponse verifyPasswordResetUsingPUT(verificationRequest, opts)

verifyPasswordReset

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountcontrollerApi();

var verificationRequest = new Id4iApi.PasswordResetVerificationRequest(); // PasswordResetVerificationRequest | verificationRequest

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
apiInstance.verifyPasswordResetUsingPUT(verificationRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationRequest** | [**PasswordResetVerificationRequest**](PasswordResetVerificationRequest.md)| verificationRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**SimpleMessageResponse**](SimpleMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="verifyRegistrationUsingPOST"></a>
# **verifyRegistrationUsingPOST**
> ResponseEntity verifyRegistrationUsingPOST(token, opts)

verifyRegistration

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AccountcontrollerApi();

var token = new Id4iApi.RegistrationVerificationTokenPresentation(); // RegistrationVerificationTokenPresentation | token

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
apiInstance.verifyRegistrationUsingPOST(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**RegistrationVerificationTokenPresentation**](RegistrationVerificationTokenPresentation.md)| token | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

