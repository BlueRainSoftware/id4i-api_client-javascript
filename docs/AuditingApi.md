# Id4iApi.AuditingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOrganizationChangeLog**](AuditingApi.md#listOrganizationChangeLog) | **GET** /api/v1/changelog/organization/{organizationId}/ | List change log entries of an organization


<a name="listOrganizationChangeLog"></a>
# **listOrganizationChangeLog**
> PaginatedChangeLogEntryResponse listOrganizationChangeLog(organizationId, opts)

List change log entries of an organization

Listing change log entries of the specified organization id.

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.AuditingApi();

var organizationId = "organizationId_example"; // String | The namespace identifying the organization whose change log entries are to be listed

var opts = { 
  'fromDate': new Date("\"2018-05-10T10:05:10.690Z\""), // Date | From date time as UTC Date-Time format
  'limit': 100, // Number | The maximum count of returned elements
  'messageMimeType': "text/mustache", // String | The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' 
  'offset': 0, // Number | Start with the n-th element
  'toDate': new Date("\"2018-05-11T01:01:01.690Z\"") // Date | To date time as UTC Date-Time format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOrganizationChangeLog(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The namespace identifying the organization whose change log entries are to be listed | 
 **fromDate** | **Date**| From date time as UTC Date-Time format | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 
 **messageMimeType** | **String**| The Mime-type for the message format that should be returned. e.g. &#39;text/plain&#39; or &#39;text/mustache&#39;  | [optional] [default to text/mustache]
 **offset** | **Number**| Start with the n-th element | [optional] 
 **toDate** | **Date**| To date time as UTC Date-Time format | [optional] 

### Return type

[**PaginatedChangeLogEntryResponse**](PaginatedChangeLogEntryResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

