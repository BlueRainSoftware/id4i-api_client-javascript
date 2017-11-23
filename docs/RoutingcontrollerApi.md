# Id4iApi.RoutingcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveCurrentParamsByTypeUsingGET**](RoutingcontrollerApi.md#retrieveCurrentParamsByTypeUsingGET) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | retrieveCurrentParamsByType
[**retrieveRoutingFileUsingGET**](RoutingcontrollerApi.md#retrieveRoutingFileUsingGET) | **GET** /api/v1/routingfiles/{id4n} | retrieveRoutingFile
[**storeRoutingFileUsingPUT**](RoutingcontrollerApi.md#storeRoutingFileUsingPUT) | **PUT** /api/v1/routingfiles/{id4n} | storeRoutingFile


<a name="retrieveCurrentParamsByTypeUsingGET"></a>
# **retrieveCurrentParamsByTypeUsingGET**
> {&#39;String&#39;: &#39;String&#39;} retrieveCurrentParamsByTypeUsingGET(id4n, type, opts)

retrieveCurrentParamsByType

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var id4n = "id4n_example"; // String | id4n

var type = "type_example"; // String | type

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
apiInstance.retrieveCurrentParamsByTypeUsingGET(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| type | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="retrieveRoutingFileUsingGET"></a>
# **retrieveRoutingFileUsingGET**
> RoutingFile retrieveRoutingFileUsingGET(id4n, opts)

retrieveRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var id4n = "id4n_example"; // String | id4n

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'organizationId': 789 // Number | organizationId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveRoutingFileUsingGET(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **organizationId** | **Number**| organizationId | [optional] 

### Return type

[**RoutingFile**](RoutingFile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeRoutingFileUsingPUT"></a>
# **storeRoutingFileUsingPUT**
> ResponseEntity storeRoutingFileUsingPUT(rfr, id4n, opts)

storeRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var rfr = new Id4iApi.RoutingFileRequest(); // RoutingFileRequest | rfr

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
apiInstance.storeRoutingFileUsingPUT(rfr, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rfr** | [**RoutingFileRequest**](RoutingFileRequest.md)| rfr | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

