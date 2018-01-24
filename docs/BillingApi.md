# Id4iApi.BillingApi

All URIs are relative to *https://backend.id4i.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSumForOrganization**](BillingApi.md#getSumForOrganization) | **GET** /api/v1/billing/{organizationId} | Get billing amount of services for a given organization


<a name="getSumForOrganization"></a>
# **getSumForOrganization**
> ServiceCosts getSumForOrganization(organizationId, opts)

Get billing amount of services for a given organization

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.BillingApi();

var organizationId = 789; // Number | The organization to compute the billing information for

var opts = { 
  'authorization': "authorization_example", // String | Authorization JWT Bearer Token
  'acceptLanguage': "acceptLanguage_example" // String | Requested language
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
 **organizationId** | **Number**| The organization to compute the billing information for | 
 **authorization** | **String**| Authorization JWT Bearer Token | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ServiceCosts**](ServiceCosts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

