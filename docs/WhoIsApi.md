# Id4iApi.WhoIsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resolveHTMLUsingGET**](WhoIsApi.md#resolveHTMLUsingGET) | **GET** /whois/{id4n} | resolveHTML


<a name="resolveHTMLUsingGET"></a>
# **resolveHTMLUsingGET**
> &#39;String&#39; resolveHTMLUsingGET(id4n, opts)

resolveHTML

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.WhoIsApi();

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
apiInstance.resolveHTMLUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, text/html, application/json;charset=UTF-8

