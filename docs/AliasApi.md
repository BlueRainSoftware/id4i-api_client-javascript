# Id4iApi.AliasApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGuidAlias**](AliasApi.md#addGuidAlias) | **POST** /api/v1/guids/{id4n}/alias/{aliasType} | Add alias for GUIDs
[**addGuidAlias1**](AliasApi.md#addGuidAlias1) | **DELETE** /api/v1/guids/{id4n}/alias/{aliasType} | Remove aliases from GUIDs
[**getGuidAliases**](AliasApi.md#getGuidAliases) | **GET** /api/v1/guids/{id4n}/alias | Get all aliases for the given GUID
[**searchByAlias**](AliasApi.md#searchByAlias) | **GET** /api/v1/search/guids | Search for GUIDs by alias


<a name="addGuidAlias"></a>
# **addGuidAlias**
> ApiError addGuidAlias(id4n, aliasType, alias, opts)

Add alias for GUIDs

Adds or replaces aliases for single GUIDs (alias type item and mapp) or groups of GUIDs (alias types gtin, ean and article)

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AliasApi();

var id4n = "id4n_example"; // String | The GUID to operate on

var aliasType = "aliasType_example"; // String | Alias type, see the corresponding API model

var alias = new Id4iApi.GuidAlias(); // GuidAlias | The alias to add or update

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
apiInstance.addGuidAlias(id4n, aliasType, alias, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 
 **aliasType** | **String**| Alias type, see the corresponding API model | 
 **alias** | [**GuidAlias**](GuidAlias.md)| The alias to add or update | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addGuidAlias1"></a>
# **addGuidAlias1**
> ApiError addGuidAlias1(id4n, aliasType, opts)

Remove aliases from GUIDs

Remove the alias of the given type

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AliasApi();

var id4n = "id4n_example"; // String | The GUID to operate on

var aliasType = "aliasType_example"; // String | Alias type, see the corresponding API model

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
apiInstance.addGuidAlias1(id4n, aliasType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 
 **aliasType** | **String**| Alias type, see the corresponding API model | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getGuidAliases"></a>
# **getGuidAliases**
> {&#39;String&#39;: &#39;String&#39;} getGuidAliases(id4n, opts)

Get all aliases for the given GUID

Looks up the alias for each alias type (group and single GUID) and returns all found ones

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AliasApi();

var id4n = "id4n_example"; // String | The GUID to operate on

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
apiInstance.getGuidAliases(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| The GUID to operate on | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="searchByAlias"></a>
# **searchByAlias**
> PaginatedGuidResponse searchByAlias(alias, aliasType, opts)

Search for GUIDs by alias

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.AliasApi();

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

[**PaginatedGuidResponse**](PaginatedGuidResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

