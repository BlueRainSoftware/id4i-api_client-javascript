# Id4iApi.ApiKeysApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addApiKeyPrivilege**](ApiKeysApi.md#addApiKeyPrivilege) | **POST** /api/v1/apikeys/{key}/privileges | Add privilege
[**addApiKeyPrivilegeForId4ns**](ApiKeysApi.md#addApiKeyPrivilegeForId4ns) | **POST** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | Add ID4ns of a privilege
[**createNewApiKey**](ApiKeysApi.md#createNewApiKey) | **POST** /api/v1/apikeys | Create API key
[**deleteApiKey**](ApiKeysApi.md#deleteApiKey) | **DELETE** /api/v1/apikeys/{key} | Delete API key
[**getApiKey**](ApiKeysApi.md#getApiKey) | **GET** /api/v1/apikeys/{key} | Show API key
[**listAllApiKeyPrivileges**](ApiKeysApi.md#listAllApiKeyPrivileges) | **GET** /api/v1/apikeys/privileges | List all privileges
[**listAllApiKeysOfOrganization**](ApiKeysApi.md#listAllApiKeysOfOrganization) | **GET** /api/v1/apikeys | Find API key by organization
[**listApiKeyPrivileges**](ApiKeysApi.md#listApiKeyPrivileges) | **GET** /api/v1/apikeys/{key}/privileges | List privileges
[**listId4ns**](ApiKeysApi.md#listId4ns) | **GET** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | ID4ns of a privilege
[**removeApiKeyPrivilege**](ApiKeysApi.md#removeApiKeyPrivilege) | **DELETE** /api/v1/apikeys/{key}/privileges | Remove privilege
[**removeApiKeyPrivilegeForId4ns**](ApiKeysApi.md#removeApiKeyPrivilegeForId4ns) | **DELETE** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | Remove id4ns of a privilege
[**updateApiKey**](ApiKeysApi.md#updateApiKey) | **PUT** /api/v1/apikeys/{key} | Update API keys


<a name="addApiKeyPrivilege"></a>
# **addApiKeyPrivilege**
> ApiError addApiKeyPrivilege(key, addApiKeyPrivilegeRequest, opts)

Add privilege

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

var addApiKeyPrivilegeRequest = new Id4iApi.AddApiKeyPrivilegeRequest(); // AddApiKeyPrivilegeRequest | addApiKeyPrivilegeRequest

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
apiInstance.addApiKeyPrivilege(key, addApiKeyPrivilegeRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **addApiKeyPrivilegeRequest** | [**AddApiKeyPrivilegeRequest**](AddApiKeyPrivilegeRequest.md)| addApiKeyPrivilegeRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addApiKeyPrivilegeForId4ns"></a>
# **addApiKeyPrivilegeForId4ns**
> ApiError addApiKeyPrivilegeForId4ns(key, privilege, id4ns, opts)

Add ID4ns of a privilege

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

var privilege = "privilege_example"; // String | privilege

var id4ns = new Id4iApi.ListOfId4ns(); // ListOfId4ns | id4ns

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
apiInstance.addApiKeyPrivilegeForId4ns(key, privilege, id4ns, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **privilege** | **String**| privilege | 
 **id4ns** | [**ListOfId4ns**](ListOfId4ns.md)| id4ns | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createNewApiKey"></a>
# **createNewApiKey**
> ApiKeyPresentation createNewApiKey(creationRequest, opts)

Create API key

Creation of a new API key.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var creationRequest = new Id4iApi.ApiKeyCreationRequest(); // ApiKeyCreationRequest | API key to be created.

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
apiInstance.createNewApiKey(creationRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creationRequest** | [**ApiKeyCreationRequest**](ApiKeyCreationRequest.md)| API key to be created. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiKeyPresentation**](ApiKeyPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteApiKey"></a>
# **deleteApiKey**
> ApiError deleteApiKey(key, opts)

Delete API key

Deletion of an API key.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | The API key to delete.

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
apiInstance.deleteApiKey(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to delete. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getApiKey"></a>
# **getApiKey**
> ApiKeyPresentation getApiKey(key, opts)

Show API key

Showing the details of an API key.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | The API key to show.

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
apiInstance.getApiKey(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to show. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiKeyPresentation**](ApiKeyPresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllApiKeyPrivileges"></a>
# **listAllApiKeyPrivileges**
> ApiKeyPrivilegeInfoResponse listAllApiKeyPrivileges(opts)

List all privileges

Listing all possible API key privileges.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

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
apiInstance.listAllApiKeyPrivileges(opts, callback);
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

[**ApiKeyPrivilegeInfoResponse**](ApiKeyPrivilegeInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listAllApiKeysOfOrganization"></a>
# **listAllApiKeysOfOrganization**
> PaginatedApiKeyResponse listAllApiKeysOfOrganization(organizationId, opts)

Find API key by organization

Finding all API key assigned to the specified organization in a paginated manner.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var organizationId = 789; // Number | The id of the organization to search in.

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
apiInstance.listAllApiKeysOfOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| The id of the organization to search in. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**PaginatedApiKeyResponse**](PaginatedApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listApiKeyPrivileges"></a>
# **listApiKeyPrivileges**
> ApiKeyPrivilegePaginatedResponse listApiKeyPrivileges(key, opts)

List privileges

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

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
apiInstance.listApiKeyPrivileges(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**ApiKeyPrivilegePaginatedResponse**](ApiKeyPrivilegePaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="listId4ns"></a>
# **listId4ns**
> Id4nPresentationPaginatedResponse listId4ns(key, privilege, opts)

ID4ns of a privilege

Listing ID4ns of a id4n concerning privilege

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

var privilege = "privilege_example"; // String | privilege

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
apiInstance.listId4ns(key, privilege, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **privilege** | **String**| privilege | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 
 **offset** | **Number**| Start with the n-th element.  | [optional] 
 **limit** | **Number**| The maximum count of returned elements. | [optional] 

### Return type

[**Id4nPresentationPaginatedResponse**](Id4nPresentationPaginatedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeApiKeyPrivilege"></a>
# **removeApiKeyPrivilege**
> ApiError removeApiKeyPrivilege(key, removeApiKeyPrivilegeRequest, opts)

Remove privilege

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

var removeApiKeyPrivilegeRequest = new Id4iApi.RemoveApiKeyPrivilegeRequest(); // RemoveApiKeyPrivilegeRequest | removeApiKeyPrivilegeRequest

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
apiInstance.removeApiKeyPrivilege(key, removeApiKeyPrivilegeRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **removeApiKeyPrivilegeRequest** | [**RemoveApiKeyPrivilegeRequest**](RemoveApiKeyPrivilegeRequest.md)| removeApiKeyPrivilegeRequest | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeApiKeyPrivilegeForId4ns"></a>
# **removeApiKeyPrivilegeForId4ns**
> ApiError removeApiKeyPrivilegeForId4ns(key, privilege, id4ns, opts)

Remove id4ns of a privilege

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | key

var privilege = "privilege_example"; // String | privilege

var id4ns = new Id4iApi.ListOfId4ns(); // ListOfId4ns | id4ns

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
apiInstance.removeApiKeyPrivilegeForId4ns(key, privilege, id4ns, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **privilege** | **String**| privilege | 
 **id4ns** | [**ListOfId4ns**](ListOfId4ns.md)| id4ns | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="updateApiKey"></a>
# **updateApiKey**
> ApiError updateApiKey(key, apiKeyChange, opts)

Update API keys

API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.ApiKeysApi();

var key = "key_example"; // String | The API key to be updated.

var apiKeyChange = new Id4iApi.ApiKeyChangeRequest(); // ApiKeyChangeRequest | The new values to apply.

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
apiInstance.updateApiKey(key, apiKeyChange, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to be updated. | 
 **apiKeyChange** | [**ApiKeyChangeRequest**](ApiKeyChangeRequest.md)| The new values to apply. | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ApiError**](ApiError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

