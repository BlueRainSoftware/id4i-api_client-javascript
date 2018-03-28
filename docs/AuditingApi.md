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

var organizationId = 789; // Number | Organization-ID of change log entries to be listed

var opts = { 
  'messageMimeType': "text/mustache", // String | The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' 
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | From date time as UTC Date-Time format
  'toDate': new Date("2013-10-20T19:20:30+01:00"), // Date | To date time as UTC Date-Time format
  'offset': 56, // Number | Start with the n-th element
  'limit': 56 // Number | The maximum count of returned elements
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
 **organizationId** | **Number**| Organization-ID of change log entries to be listed | 
 **messageMimeType** | **String**| The Mime-type for the message format that should be returned. e.g. &#39;text/plain&#39; or &#39;text/mustache&#39;  | [optional] [default to text/mustache]
 **fromDate** | **Date**| From date time as UTC Date-Time format | [optional] 
 **toDate** | **Date**| To date time as UTC Date-Time format | [optional] 
 **offset** | **Number**| Start with the n-th element | [optional] 
 **limit** | **Number**| The maximum count of returned elements | [optional] 

### Return type

[**PaginatedChangeLogEntryResponse**](PaginatedChangeLogEntryResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

