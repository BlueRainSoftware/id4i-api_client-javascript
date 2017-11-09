# Id4iApi.OrganizationaddresscontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressUsingGET**](OrganizationaddresscontrollerApi.md#getAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/default | getAddress
[**getBillingAddressUsingGET**](OrganizationaddresscontrollerApi.md#getBillingAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/billing | getBillingAddress
[**removeBillingAddressUsingDELETE**](OrganizationaddresscontrollerApi.md#removeBillingAddressUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/addresses/billing | removeBillingAddress
[**storeAddressUsingPOST**](OrganizationaddresscontrollerApi.md#storeAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/default | storeAddress
[**storeBillingAddressUsingPOST**](OrganizationaddresscontrollerApi.md#storeBillingAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/billing | storeBillingAddress


<a name="getAddressUsingGET"></a>
# **getAddressUsingGET**
> OrganizationAddress getAddressUsingGET(organizationId, opts)

getAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationaddresscontrollerApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.getAddressUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="getBillingAddressUsingGET"></a>
# **getBillingAddressUsingGET**
> OrganizationAddress getBillingAddressUsingGET(organizationId, opts)

getBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationaddresscontrollerApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.getBillingAddressUsingGET(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**OrganizationAddress**](OrganizationAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeBillingAddressUsingDELETE"></a>
# **removeBillingAddressUsingDELETE**
> ResponseEntity removeBillingAddressUsingDELETE(organizationId, opts)

removeBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationaddresscontrollerApi();

var organizationId = 789; // Number | organizationId

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
apiInstance.removeBillingAddressUsingDELETE(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeAddressUsingPOST"></a>
# **storeAddressUsingPOST**
> ResponseEntity storeAddressUsingPOST(organizationId, addressResource, opts)

storeAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationaddresscontrollerApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

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
apiInstance.storeAddressUsingPOST(organizationId, addressResource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="storeBillingAddressUsingPOST"></a>
# **storeBillingAddressUsingPOST**
> ResponseEntity storeBillingAddressUsingPOST(organizationId, addressResource, opts)

storeBillingAddress

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.OrganizationaddresscontrollerApi();

var organizationId = 789; // Number | organizationId

var addressResource = new Id4iApi.OrganizationAddress(); // OrganizationAddress | addressResource

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
apiInstance.storeBillingAddressUsingPOST(organizationId, addressResource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **addressResource** | [**OrganizationAddress**](OrganizationAddress.md)| addressResource | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

