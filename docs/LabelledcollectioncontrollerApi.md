# Id4iApi.LabelledcollectioncontrollerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addElementsToLabelledCollectionUsingPUT**](LabelledcollectioncontrollerApi.md#addElementsToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionGuid}/elements | addElementsToLabelledCollection
[**addSingleElementToLabelledCollectionUsingPUT**](LabelledcollectioncontrollerApi.md#addSingleElementToLabelledCollectionUsingPUT) | **PUT** /api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid} | addSingleElementToLabelledCollection
[**createLabelledCollectionUsingPOST**](LabelledcollectioncontrollerApi.md#createLabelledCollectionUsingPOST) | **POST** /api/v1/collections/labelled | createLabelledCollection
[**deleteLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#deleteLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{id4n} | deleteLabelledCollection
[**findById4nUsingGET1**](LabelledcollectioncontrollerApi.md#findById4nUsingGET1) | **GET** /api/v1/collections/labelled/{id4n} | findById4n
[**findByLabelUsingGET**](LabelledcollectioncontrollerApi.md#findByLabelUsingGET) | **GET** /api/v1/collections/labelled/{organizationId}/{label} | findByLabel
[**removeElementsFromLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#removeElementsFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionGuid}/elements | removeElementsFromLabelledCollection
[**removeSingleElementFromLabelledCollectionUsingDELETE**](LabelledcollectioncontrollerApi.md#removeSingleElementFromLabelledCollectionUsingDELETE) | **DELETE** /api/v1/collections/labelled/{collectionGuid}/elements/{elementGuid} | removeSingleElementFromLabelledCollection
[**renameUsingPUT**](LabelledcollectioncontrollerApi.md#renameUsingPUT) | **PUT** /api/v1/collections/labelled/{id4n} | rename


<a name="addElementsToLabelledCollectionUsingPUT"></a>
# **addElementsToLabelledCollectionUsingPUT**
> &#39;Number&#39; addElementsToLabelledCollectionUsingPUT(collectionGuid, listOfId4ns, opts)

addElementsToLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var listOfId4ns = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfId4ns

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
apiInstance.addElementsToLabelledCollectionUsingPUT(collectionGuid, listOfId4ns, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **listOfId4ns** | [**ListOfId4ns**](ListOfId4ns.md)| listOfId4ns | 
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
> Id4n createLabelledCollectionUsingPOST(createInfo, opts)

createLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var createInfo = new Id4iApi.CreateLabelledCollectionRequest(); // CreateLabelledCollectionRequest | createInfo

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
apiInstance.createLabelledCollectionUsingPOST(createInfo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInfo** | [**CreateLabelledCollectionRequest**](CreateLabelledCollectionRequest.md)| createInfo | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**Id4n**](Id4n.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="deleteLabelledCollectionUsingDELETE"></a>
# **deleteLabelledCollectionUsingDELETE**
> ResponseEntity deleteLabelledCollectionUsingDELETE(id4n, opts)

deleteLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.deleteLabelledCollectionUsingDELETE(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
 **authorization** | **String**| Authorization JWT Bearer Token as returned from /login | [optional] 
 **acceptLanguage** | **String**| Requested language | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json;charset=UTF-8
 - **Accept**: application/xml, application/json;charset=UTF-8

<a name="findById4nUsingGET1"></a>
# **findById4nUsingGET1**
> GuidCollection findById4nUsingGET1(id4n, opts)

findById4n

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.findById4nUsingGET1(id4n, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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
> &#39;Number&#39; removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, listOfGuids, opts)

removeElementsFromLabelledCollection

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var collectionGuid = "collectionGuid_example"; // String | collectionGuid

var listOfGuids = new Id4iApi.ListOfId4ns(); // ListOfId4ns | listOfGuids

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
apiInstance.removeElementsFromLabelledCollectionUsingDELETE(collectionGuid, listOfGuids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionGuid** | **String**| collectionGuid | 
 **listOfGuids** | [**ListOfId4ns**](ListOfId4ns.md)| listOfGuids | 
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
> ResponseEntity renameUsingPUT(id4n, request, opts)

rename

### Example
```javascript
var Id4iApi = require('id4i_api');

var apiInstance = new Id4iApi.LabelledcollectioncontrollerApi();

var id4n = "id4n_example"; // String | id4n

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
apiInstance.renameUsingPUT(id4n, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id4n** | **String**| id4n | 
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

