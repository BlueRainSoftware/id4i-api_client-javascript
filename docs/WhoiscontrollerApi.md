# Id4iApi.WhoiscontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resolveWhoIsEntryUsingGET**](WhoiscontrollerApi.md#resolveWhoIsEntryUsingGET) | **GET** /whois/{id4n} | resolveWhoIsEntry


<a name="resolveWhoIsEntryUsingGET"></a>
# **resolveWhoIsEntryUsingGET**
> WhoIsResponse resolveWhoIsEntryUsingGET(id4n, opts)

resolveWhoIsEntry

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.WhoiscontrollerApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.resolveWhoIsEntryUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**WhoIsResponse**](WhoIsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

