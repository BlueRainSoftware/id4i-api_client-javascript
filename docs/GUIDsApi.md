# Id4iApi.GUIDsApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGuid**](GUIDsApi.md#createGuid) | **POST** /api/v1/guids | Create GUID(s)
[**getGuid**](GUIDsApi.md#getGuid) | **GET** /api/v1/guids/{id4n} | Retrieve GUID information
[**getGuidsWithoutCollection**](GUIDsApi.md#getGuidsWithoutCollection) | **GET** /api/v1/guids/withoutCollection | Retrieve GUIDs not in any collection
[**updateGuid**](GUIDsApi.md#updateGuid) | **PUT** /api/v1/guids/{id4n} | Change GUID information.


<a name="createGuid"></a>
# **createGuid**
> ListOfId4ns createGuid(createGUIDInfo, opts)

Create GUID(s)

Creating one or more GUIDs with a specified length.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GUIDsApi();

var createGUIDInfo = new Id4iApi.CreateGuidRequest(); // CreateGuidRequest | createGUIDInfo

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
apiInstance.createGuid(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateGuidRequest**](CreateGuidRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ListOfId4ns**](ListOfId4ns.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getGuid"></a>
# **getGuid**
> Guid getGuid(id4n, opts)

Retrieve GUID information

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GUIDsApi();

var id4n = "id4n_example"; // String | The GUID number

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
apiInstance.getGuid(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID number | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Guid**](Guid.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getGuidsWithoutCollection"></a>
# **getGuidsWithoutCollection**
> PaginatedResponseGuid getGuidsWithoutCollection(organizationId, opts)

Retrieve GUIDs not in any collection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GUIDsApi();

var organizationId = 789; // Number | Organization to search GUIDs for (required).

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example", // String | Requested language
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
apiInstance.getGuidsWithoutCollection(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| Organization to search GUIDs for (required). | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**PaginatedResponseGuid**](PaginatedResponseGuid.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateGuid"></a>
# **updateGuid**
> ResponseEntity updateGuid(id4n, request, opts)

Change GUID information.

Allows ownership transfer.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.GUIDsApi();

var id4n = "id4n_example"; // String | The GUID number

var request = new Id4iApi.Guid(); // Guid | request

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
apiInstance.updateGuid(id4n, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID number | 
 **request** | [**Guid**](Guid.md)| request | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

