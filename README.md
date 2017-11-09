# id4i_api

Id4iApi - JavaScript client for id4i_api
HTTP API Documentation for ID4i
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1-alpha
- Package version: 0.0.1-alpha
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://bluerain.de](http://bluerain.de)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install id4i_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your id4i_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('id4i_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Id4iApi = require('id4i_api');

var api = new Id4iApi.AccountcontrollerApi()

var userRegistration = new Id4iApi.UserRegistrationRequest(); // {UserRegistrationRequest} userRegistration

var opts = { 
  'authorization': "authorization_example", // {String} Authorization JWT Bearer Token as returned from /login
  'acceptLanguage': "acceptLanguage_example" // {String} Requested language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.registerUserUsingPOST(userRegistration, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Id4iApi.AccountcontrollerApi* | [**registerUserUsingPOST**](docs/AccountcontrollerApi.md#registerUserUsingPOST) | **POST** /account/registration | registerUser
*Id4iApi.AccountcontrollerApi* | [**requestPasswordResetUsingPOST**](docs/AccountcontrollerApi.md#requestPasswordResetUsingPOST) | **POST** /account/password | requestPasswordReset
*Id4iApi.AccountcontrollerApi* | [**verifyPasswordResetUsingPUT**](docs/AccountcontrollerApi.md#verifyPasswordResetUsingPUT) | **PUT** /account/password | verifyPasswordReset
*Id4iApi.AccountcontrollerApi* | [**verifyRegistrationUsingPOST**](docs/AccountcontrollerApi.md#verifyRegistrationUsingPOST) | **POST** /account/verification | verifyRegistration
*Id4iApi.AppinfocontrollerApi* | [**infoUsingGET**](docs/AppinfocontrollerApi.md#infoUsingGET) | **GET** /api/v1/info | info
*Id4iApi.CollectioncontrollerApi* | [**createUsingPUT**](docs/CollectioncontrollerApi.md#createUsingPUT) | **PUT** /api/v1/collection/elements | create
*Id4iApi.DefaultApi* | [**loginPOST**](docs/DefaultApi.md#loginPOST) | **POST** /login | 
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingDELETE**](docs/Id4ierrorcontrollerApi.md#errorUsingDELETE) | **DELETE** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingGET**](docs/Id4ierrorcontrollerApi.md#errorUsingGET) | **GET** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingHEAD**](docs/Id4ierrorcontrollerApi.md#errorUsingHEAD) | **HEAD** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingOPTIONS**](docs/Id4ierrorcontrollerApi.md#errorUsingOPTIONS) | **OPTIONS** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingPATCH**](docs/Id4ierrorcontrollerApi.md#errorUsingPATCH) | **PATCH** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingPOST**](docs/Id4ierrorcontrollerApi.md#errorUsingPOST) | **POST** /error | error
*Id4iApi.Id4ierrorcontrollerApi* | [**errorUsingPUT**](docs/Id4ierrorcontrollerApi.md#errorUsingPUT) | **PUT** /error | error
*Id4iApi.LabelledcollectioncontrollerApi* | [**createUsingPOST**](docs/LabelledcollectioncontrollerApi.md#createUsingPOST) | **POST** /api/v1/collection/labelled | create
*Id4iApi.LabelledcollectioncontrollerApi* | [**createUsingPUT1**](docs/LabelledcollectioncontrollerApi.md#createUsingPUT1) | **PUT** /api/v1/collection/labelled/elements | create
*Id4iApi.LogisticcollectioncontrollerApi* | [**createUsingPOST1**](docs/LogisticcollectioncontrollerApi.md#createUsingPOST1) | **POST** /api/v1/collection/logistic | create
*Id4iApi.LogisticcollectioncontrollerApi* | [**createUsingPUT2**](docs/LogisticcollectioncontrollerApi.md#createUsingPUT2) | **PUT** /api/v1/collection/logistic/elements | create
*Id4iApi.OrganizationaddresscontrollerApi* | [**getAddressUsingGET**](docs/OrganizationaddresscontrollerApi.md#getAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/default | getAddress
*Id4iApi.OrganizationaddresscontrollerApi* | [**getBillingAddressUsingGET**](docs/OrganizationaddresscontrollerApi.md#getBillingAddressUsingGET) | **GET** /api/v1/organization/{organizationId}/addresses/billing | getBillingAddress
*Id4iApi.OrganizationaddresscontrollerApi* | [**removeBillingAddressUsingDELETE**](docs/OrganizationaddresscontrollerApi.md#removeBillingAddressUsingDELETE) | **DELETE** /api/v1/organization/{organizationId}/addresses/billing | removeBillingAddress
*Id4iApi.OrganizationaddresscontrollerApi* | [**storeAddressUsingPOST**](docs/OrganizationaddresscontrollerApi.md#storeAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/default | storeAddress
*Id4iApi.OrganizationaddresscontrollerApi* | [**storeBillingAddressUsingPOST**](docs/OrganizationaddresscontrollerApi.md#storeBillingAddressUsingPOST) | **POST** /api/v1/organization/{organizationId}/addresses/billing | storeBillingAddress
*Id4iApi.OrganizationcontrollerApi* | [**createOrganzationUsingPOST**](docs/OrganizationcontrollerApi.md#createOrganzationUsingPOST) | **POST** /api/v1/organization | createOrganzation
*Id4iApi.OrganizationcontrollerApi* | [**deleteOrganizationUsingDELETE**](docs/OrganizationcontrollerApi.md#deleteOrganizationUsingDELETE) | **DELETE** /api/v1/organization/{organizationId} | deleteOrganization
*Id4iApi.OrganizationcontrollerApi* | [**getOrganizationUsingGET**](docs/OrganizationcontrollerApi.md#getOrganizationUsingGET) | **GET** /api/v1/organization/{organizationId} | getOrganization
*Id4iApi.OrganizationcontrollerApi* | [**updateOrganizationUsingPUT**](docs/OrganizationcontrollerApi.md#updateOrganizationUsingPUT) | **PUT** /api/v1/organization/{organizationId} | updateOrganization
*Id4iApi.RegisteredobjectcontrollerApi* | [**createUsingPOST2**](docs/RegisteredobjectcontrollerApi.md#createUsingPOST2) | **POST** /api/v1/registered-object | create
*Id4iApi.RoutingcollectioncontrollerApi* | [**createUsingPOST3**](docs/RoutingcollectioncontrollerApi.md#createUsingPOST3) | **POST** /api/v1/collection/routing | create
*Id4iApi.RoutingcollectioncontrollerApi* | [**createUsingPUT3**](docs/RoutingcollectioncontrollerApi.md#createUsingPUT3) | **PUT** /api/v1/collection/routing/elements | create
*Id4iApi.RoutingcontrollerApi* | [**retrieveCurrentParamsByTypeUsingGET**](docs/RoutingcontrollerApi.md#retrieveCurrentParamsByTypeUsingGET) | **GET** /api/v1/routing/get/{guid}/{type} | retrieveCurrentParamsByType
*Id4iApi.RoutingcontrollerApi* | [**retrieveRoutingFileUsingGET**](docs/RoutingcontrollerApi.md#retrieveRoutingFileUsingGET) | **GET** /api/v1/routing/file/{guid} | retrieveRoutingFile
*Id4iApi.RoutingcontrollerApi* | [**storeRoutingFileUsingPOST**](docs/RoutingcontrollerApi.md#storeRoutingFileUsingPOST) | **POST** /api/v1/routing/file | storeRoutingFile
*Id4iApi.UsercontrollerApi* | [**findUserByUsernameUsingGET**](docs/UsercontrollerApi.md#findUserByUsernameUsingGET) | **GET** /api/v1/users/{username} | findUserByUsername
*Id4iApi.UsercontrollerApi* | [**usersUsingGET**](docs/UsercontrollerApi.md#usersUsingGET) | **GET** /api/v1/users | users


## Documentation for Models

 - [Id4iApi.AccountCredentials](docs/AccountCredentials.md)
 - [Id4iApi.AddGuidsToCollectionRequest](docs/AddGuidsToCollectionRequest.md)
 - [Id4iApi.ApiError](docs/ApiError.md)
 - [Id4iApi.AppInfoPresentation](docs/AppInfoPresentation.md)
 - [Id4iApi.CreateLabelledCollectionRequest](docs/CreateLabelledCollectionRequest.md)
 - [Id4iApi.CreateLogisticCollectionRequest](docs/CreateLogisticCollectionRequest.md)
 - [Id4iApi.CreateRoutingCollectionRequest](docs/CreateRoutingCollectionRequest.md)
 - [Id4iApi.Organization](docs/Organization.md)
 - [Id4iApi.OrganizationAddress](docs/OrganizationAddress.md)
 - [Id4iApi.PasswordResetRequest](docs/PasswordResetRequest.md)
 - [Id4iApi.PasswordResetVerificationRequest](docs/PasswordResetVerificationRequest.md)
 - [Id4iApi.RegisterObjectsRequest](docs/RegisterObjectsRequest.md)
 - [Id4iApi.RegistrationVerificationTokenPresentation](docs/RegistrationVerificationTokenPresentation.md)
 - [Id4iApi.ResponseEntity](docs/ResponseEntity.md)
 - [Id4iApi.Route](docs/Route.md)
 - [Id4iApi.RoutingFile](docs/RoutingFile.md)
 - [Id4iApi.RoutingFileRequest](docs/RoutingFileRequest.md)
 - [Id4iApi.RoutingOptions](docs/RoutingOptions.md)
 - [Id4iApi.SimpleMessageResponse](docs/SimpleMessageResponse.md)
 - [Id4iApi.UserPresentation](docs/UserPresentation.md)
 - [Id4iApi.UserRegistrationRequest](docs/UserRegistrationRequest.md)
 - [Id4iApi.UserRegistrationResponse](docs/UserRegistrationResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

