# Id4iApi.RoutingcontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveCurrentParamsByTypeUsingGET**](RoutingcontrollerApi.md#retrieveCurrentParamsByTypeUsingGET) | **GET** /api/v1/routingfiles/{guid}/route/{type} | retrieveCurrentParamsByType
[**retrieveRoutingFileUsingGET**](RoutingcontrollerApi.md#retrieveRoutingFileUsingGET) | **GET** /api/v1/routingfiles/{guid} | retrieveRoutingFile
[**storeRoutingFileUsingPOST**](RoutingcontrollerApi.md#storeRoutingFileUsingPOST) | **POST** /api/v1/routingfiles | storeRoutingFile


<a name="retrieveCurrentParamsByTypeUsingGET"></a>
# **retrieveCurrentParamsByTypeUsingGET**
> {&#39;String&#39;: &#39;String&#39;} retrieveCurrentParamsByTypeUsingGET(guid, type, opts)

retrieveCurrentParamsByType

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var guid = "guid_example"; // String | guid

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
apiInstance.retrieveCurrentParamsByTypeUsingGET(guid, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
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
> RoutingFile retrieveRoutingFileUsingGET(guid, opts)

retrieveRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var guid = "guid_example"; // String | guid

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
apiInstance.retrieveRoutingFileUsingGET(guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
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

<a name="storeRoutingFileUsingPOST"></a>
# **storeRoutingFileUsingPOST**
> ResponseEntity storeRoutingFileUsingPOST(rfr, opts)

storeRoutingFile

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingcontrollerApi();

var rfr = new Id4iApi.RoutingFileRequest(); // RoutingFileRequest | rfr

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
apiInstance.storeRoutingFileUsingPOST(rfr, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rfr** | [**RoutingFileRequest**](RoutingFileRequest.md)| rfr | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

