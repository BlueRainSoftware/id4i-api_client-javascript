# Id4iApi.RoutingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRoute**](RoutingApi.md#getRoute) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | Retrieve current route of a GUID (or ID4N)
[**getRoutingFile**](RoutingApi.md#getRoutingFile) | **GET** /api/v1/routingfiles/{id4n} | Retrieve routing file
[**updateRoutingFile**](RoutingApi.md#updateRoutingFile) | **PUT** /api/v1/routingfiles/{id4n} | Store routing file


<a name="getRoute"></a>
# **getRoute**
> Route getRoute(id4n, type, opts)

Retrieve current route of a GUID (or ID4N)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

var id4n = "id4n_example"; // String | id4n

var type = "type_example"; // String | The type of route you want to have

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
  'privateRoutes': true, // Boolean | privateRoutes
  'publicRoutes': true // Boolean | publicRoutes
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRoute(id4n, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **type** | **String**| The type of route you want to have | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **privateRoutes** | **Boolean**| privateRoutes | [optional] 
 **publicRoutes** | **Boolean**| publicRoutes | [optional] 

### Return type

[**Route**](Route.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getRoutingFile"></a>
# **getRoutingFile**
> RoutingFile getRoutingFile(id4n, opts)

Retrieve routing file

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.getRoutingFile(id4n, opts, callback);
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

<a name="updateRoutingFile"></a>
# **updateRoutingFile**
> ApiError updateRoutingFile(rfr, id4n, opts)

Store routing file

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.RoutingApi();

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
apiInstance.updateRoutingFile(rfr, id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rfr** | [**RoutingFileRequest**](RoutingFileRequest.md)| rfr | 
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

