# Id4iApi.LabelledcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToLabelledCollectionUsingPUT**](LabelledcollectioncontrollerApi.md#addElementsToLabelledCollectionUsingPUT) | **PUT** /api/v1/collection/labelled/{collectionGuid}/elements | addElementsToLabelledCollection
[**addSingleElementToLabelledCollectionUsingPUT**](LabelledcollectioncontrollerApi.md#addSingleElementToLabelledCollectionUsingPUT) | **PUT** /api/v1/collection/labelled/{collectionGuid}/elements/{elementGuid} | addSingleElementToLabelledCollection
[**createLabelledCollectionUsingPOST**](LabelledcollectioncontrollerApi.md#createLabelledCollectionUsingPOST) | **POST** /api/v1/collection/labelled | createLabelledCollection
[**deleteLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#deleteLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collection/labelled/{guid} | deleteLabelledCollection
[**findByGuidUsingGET**](LabelledcollectioncontrollerApi.md#findByGuidUsingGET) | **GET** /api/v1/collection/labelled/{guid} | findByGuid
[**findByLabelUsingGET**](LabelledcollectioncontrollerApi.md#findByLabelUsingGET) | **GET** /api/v1/collection/labelled/{organizationId}/{label} | findByLabel
[**removeElementsFromLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#removeElementsFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collection/labelled/{collectionGuid}/elements | removeElementsFromLabelledCollection
[**removeSingleElementFromLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#removeSingleElementFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collection/labelled/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromLabelledCollection
[**renameUsingPUT**](LabelledcollectioncontrollerApi.md#renameUsingPUT) | **PUT** /api/v1/collection/labelled/{guid} | rename


<a name="addElementsToLabelledCollectionUsingPUT"></a>
# **addElementsToLabelledCollectionUsingPUT**
> &#39;Number&#39; addElementsToLabelledCollectionUsingPUT(collectionGuid, guids, opts)

addElementsToLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var guids = new Id4iApi.ListOfGuids(); // ListOfGuids | guids

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
apiInstance.addElementsToLabelledCollectionUsingPUT(collectionGuid, guids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **guids** | [**ListOfGuids**](ListOfGuids.md)| guids | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="addSingleElementToLabelledCollectionUsingPUT"></a>
# **addSingleElementToLabelledCollectionUsingPUT**
> &#39;Number&#39; addSingleElementToLabelledCollectionUsingPUT(collectionGuid, elementGuid, opts)

addSingleElementToLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementGuid = "elementGuid_example"; // String | elementGuid

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
apiInstance.addSingleElementToLabelledCollectionUsingPUT(collectionGuid, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementGuid** | **String**| elementGuid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="createLabelledCollectionUsingPOST"></a>
# **createLabelledCollectionUsingPOST**
> &#39;String&#39; createLabelledCollectionUsingPOST(createGUIDInfo, opts)

createLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var createGUIDInfo = new Id4iApi.CreateLabelledCollectionRequest(); // CreateLabelledCollectionRequest | createGUIDInfo

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
apiInstance.createLabelledCollectionUsingPOST(createGUIDInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGUIDInfo** | [**CreateLabelledCollectionRequest**](CreateLabelledCollectionRequest.md)| createGUIDInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteLabelledCollectionUsingDELETE"></a>
# **deleteLabelledCollectionUsingDELETE**
> ResponseEntity deleteLabelledCollectionUsingDELETE(guid, opts)

deleteLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var guid = "guid_example"; // String | guid

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
apiInstance.deleteLabelledCollectionUsingDELETE(guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findByGuidUsingGET"></a>
# **findByGuidUsingGET**
> GuidCollection findByGuidUsingGET(guid, opts)

findByGuid

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var guid = "guid_example"; // String | guid

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
apiInstance.findByGuidUsingGET(guid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**GuidCollection**](GuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findByLabelUsingGET"></a>
# **findByLabelUsingGET**
> GuidCollection findByLabelUsingGET(organizationId, label, opts)

findByLabel

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var organizationId = 56; // Number | organizationId

var label = "label_example"; // String | label

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
apiInstance.findByLabelUsingGET(organizationId, label, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **Number**| organizationId | 
 **label** | **String**| label | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**GuidCollection**](GuidCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeElementsFromLabelledCollectionUsingDELETE"></a>
# **removeElementsFromLabelledCollectionUsingDELETE**
> &#39;Number&#39; removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, guids, opts)

removeElementsFromLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var guids = new Id4iApi.ListOfGuids(); // ListOfGuids | guids

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
apiInstance.removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, guids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **guids** | [**ListOfGuids**](ListOfGuids.md)| guids | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="removeSingleElementFromLabelledCollectionUsingDELETE"></a>
# **removeSingleElementFromLabelledCollectionUsingDELETE**
> &#39;Number&#39; removeSingleElementFromLabelledCollectionUsingDELETE(collectionGuid, elementGuid, opts)

removeSingleElementFromLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var elementGuid = "elementGuid_example"; // String | elementGuid

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
apiInstance.removeSingleElementFromLabelledCollectionUsingDELETE(collectionGuid, elementGuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **elementGuid** | **String**| elementGuid | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="renameUsingPUT"></a>
# **renameUsingPUT**
> ResponseEntity renameUsingPUT(guid, request, opts)

rename

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var guid = "guid_example"; // String | guid

var request = new Id4iApi.GuidCollection(); // GuidCollection | request

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
apiInstance.renameUsingPUT(guid, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| guid | 
 **request** | [**GuidCollection**](GuidCollection.md)| request | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

