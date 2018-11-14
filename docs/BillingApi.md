# Id4iApi.BillingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPositionsForOrganization**](BillingApi.md#getPositionsForOrganization) | **GET** /api/v1/billing/{organizationId}/positions | Get billing positions for a given organization
[**getSumForOrganization**](BillingApi.md#getSumForOrganization) | **GET** /api/v1/billing/{organizationId} | Get billing amount of services for a given organization


<a name="getPositionsForOrganization"></a>
# **getPositionsForOrganization**
> [BillingPosition] getPositionsForOrganization(organizationId, opts)

Get billing positions for a given organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.BillingApi();

var organizationId = "organizationId_example"; // String | The organization to compute the billing information for

var opts = { 
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Billing start date
  'toDate': new Date("2013-10-20T19:20:30+01:00") // Date | Billing end date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPositionsForOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The organization to compute the billing information for | 
 **fromDate** | **Date**| Billing start date | [optional] 
 **toDate** | **Date**| Billing end date | [optional] 

### Return type

[**[BillingPosition]**](BillingPosition.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="getSumForOrganization"></a>
# **getSumForOrganization**
> ServiceCosts getSumForOrganization(organizationId, opts)

Get billing amount of services for a given organization

### Example
```javascript
var Id4iApi = require('id4i_api');
var defaultClient = Id4iApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new Id4iApi.BillingApi();

var organizationId = "organizationId_example"; // String | The organization to compute the billing information for

var opts = { 
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Billing start date
  'toDate': new Date("2013-10-20T19:20:30+01:00") // Date | Billing end date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSumForOrganization(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| The organization to compute the billing information for | 
 **fromDate** | **Date**| Billing start date | [optional] 
 **toDate** | **Date**| Billing end date | [optional] 

### Return type

[**ServiceCosts**](ServiceCosts.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

