# Id4iApi.SearchApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchByAlias**](SearchApi.md#searchByAlias) | **GET** /api/v1/search/guids | Search for GUIDs by alias


<a name="searchByAlias"></a>
# **searchByAlias**
> PaginatedResponseGuid searchByAlias(alias, aliasType, opts)

Search for GUIDs by alias

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.SearchApi();

var alias = "alias_example"; // String | The alias to search for

var aliasType = "aliasType_example"; // String | Alias type type to search for

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
apiInstance.searchByAlias(alias, aliasType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **String**| The alias to search for | 
 **aliasType** | **String**| Alias type type to search for | 
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

