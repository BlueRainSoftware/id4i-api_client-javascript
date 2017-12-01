# Id4iApi.ApikeyprivilegecontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUsingGET1**](ApikeyprivilegecontrollerApi.md#listUsingGET1) | **GET** /api/v1/apikeys/privileges | List ApiKey privileges


<a name="listUsingGET1"></a>
# **listUsingGET1**
> ApiKeyPrivilegeResponse listUsingGET1(opts)

List ApiKey privileges

Listing api key privileges.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApikeyprivilegecontrollerApi();

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'id4nConcerning': true, // Boolean | id4nConcerning
  'offset': 56, // Number | Start with the n-th element. 
  'limit': 56 // Number | The maximum count of returned elements.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **id4nConcerning** | **Boolean**| id4nConcerning | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**ApiKeyPrivilegeResponse**](ApiKeyPrivilegeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

