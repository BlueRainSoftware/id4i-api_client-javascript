# Id4iApi.Id4ierrorcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**errorUsingDELETE**](Id4ierrorcontrollerApi.md#errorUsingDELETE) | **DELETE** /error | error
[**errorUsingGET**](Id4ierrorcontrollerApi.md#errorUsingGET) | **GET** /error | error
[**errorUsingHEAD**](Id4ierrorcontrollerApi.md#errorUsingHEAD) | **HEAD** /error | error
[**errorUsingOPTIONS**](Id4ierrorcontrollerApi.md#errorUsingOPTIONS) | **OPTIONS** /error | error
[**errorUsingPATCH**](Id4ierrorcontrollerApi.md#errorUsingPATCH) | **PATCH** /error | error
[**errorUsingPOST**](Id4ierrorcontrollerApi.md#errorUsingPOST) | **POST** /error | error
[**errorUsingPUT**](Id4ierrorcontrollerApi.md#errorUsingPUT) | **PUT** /error | error


<a name="errorUsingDELETE"></a>
# **errorUsingDELETE**
> ApiError errorUsingDELETE(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingDELETE(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingGET"></a>
# **errorUsingGET**
> ApiError errorUsingGET(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingHEAD"></a>
# **errorUsingHEAD**
> ApiError errorUsingHEAD(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingHEAD(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingOPTIONS"></a>
# **errorUsingOPTIONS**
> ApiError errorUsingOPTIONS(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingOPTIONS(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingPATCH"></a>
# **errorUsingPATCH**
> ApiError errorUsingPATCH(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingPATCH(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingPOST"></a>
# **errorUsingPOST**
> ApiError errorUsingPOST(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="errorUsingPUT"></a>
# **errorUsingPUT**
> ApiError errorUsingPUT(opts)

error

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.Id4ierrorcontrollerApi();

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
apiInstance.errorUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

