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

var api = new Id4iApi.AccountsApi()

var completeRegistration = new Id4iApi.CompleteUserRegistrationRequest(); // {CompleteUserRegistrationRequest} Contains the verification token, the username and the initial password.

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
api.completeRegistration(completeRegistration, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://backend.id4i.de*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Id4iApi.AccountsApi* | [**completeRegistration**](docs/AccountsApi.md#completeRegistration) | **POST** /account/completeRegistration | Complete registration
*Id4iApi.AccountsApi* | [**findUserByUsername**](docs/AccountsApi.md#findUserByUsername) | **GET** /api/v1/users/{username} | Find by username
*Id4iApi.AccountsApi* | [**findUsers**](docs/AccountsApi.md#findUsers) | **GET** /api/v1/users | Find users
*Id4iApi.AccountsApi* | [**getAllOrganizationRoles**](docs/AccountsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
*Id4iApi.AccountsApi* | [**getOrganizationsOfUser**](docs/AccountsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
*Id4iApi.AccountsApi* | [**getUserRoles**](docs/AccountsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
*Id4iApi.AccountsApi* | [**getUsersOfOrganization**](docs/AccountsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
*Id4iApi.AccountsApi* | [**inviteUsers**](docs/AccountsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
*Id4iApi.AccountsApi* | [**listAllRoles**](docs/AccountsApi.md#listAllRoles) | **GET** /api/v1/roles | List roles
*Id4iApi.AccountsApi* | [**login**](docs/AccountsApi.md#login) | **POST** /login | 
*Id4iApi.AccountsApi* | [**registerUser**](docs/AccountsApi.md#registerUser) | **POST** /account/registration | Register user
*Id4iApi.AccountsApi* | [**removeUserRoles**](docs/AccountsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
*Id4iApi.AccountsApi* | [**requestPasswordReset**](docs/AccountsApi.md#requestPasswordReset) | **POST** /account/password | Request password reset
*Id4iApi.AccountsApi* | [**updateUserRoles**](docs/AccountsApi.md#updateUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
*Id4iApi.AccountsApi* | [**verifyPasswordReset**](docs/AccountsApi.md#verifyPasswordReset) | **PUT** /account/password | Verify password reset
*Id4iApi.AccountsApi* | [**verifyUserRegistration**](docs/AccountsApi.md#verifyUserRegistration) | **POST** /account/verification | Verify registration
*Id4iApi.AliasApi* | [**addGuidAlias**](docs/AliasApi.md#addGuidAlias) | **POST** /api/v1/guids/{id4n}/alias/{aliasType} | Add alias for GUIDs
*Id4iApi.AliasApi* | [**addGuidAlias1**](docs/AliasApi.md#addGuidAlias1) | **DELETE** /api/v1/guids/{id4n}/alias/{aliasType} | Remove aliases from GUIDs
*Id4iApi.ApiKeysApi* | [**createNewApiKey**](docs/ApiKeysApi.md#createNewApiKey) | **POST** /api/v1/apikeys | Create API key
*Id4iApi.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteApiKey) | **DELETE** /api/v1/apikeys/{key} | Delete API key
*Id4iApi.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getApiKey) | **GET** /api/v1/apikeys/{key} | Show API key
*Id4iApi.ApiKeysApi* | [**listAllApiKeysOfOrganization**](docs/ApiKeysApi.md#listAllApiKeysOfOrganization) | **GET** /api/v1/apikeys | Find API key by organization
*Id4iApi.ApiKeysApi* | [**listApiKeyPrivileges**](docs/ApiKeysApi.md#listApiKeyPrivileges) | **GET** /api/v1/apikeys/privileges | List API key privileges
*Id4iApi.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateApiKey) | **PUT** /api/v1/apikeys/{key} | Update API keys
*Id4iApi.CollectionsApi* | [**addElementToCollection**](docs/CollectionsApi.md#addElementToCollection) | **PUT** /api/v1/collections/{id4n}/elements/{elementGuid} | Add element to collection
*Id4iApi.CollectionsApi* | [**addElementToLabelledCollection**](docs/CollectionsApi.md#addElementToLabelledCollection) | **PUT** /api/v1/collections/labelled/{collectionId4n}/elements/{elementGuid} | Add element to labelled collection
*Id4iApi.CollectionsApi* | [**addElementToLogisticCollection**](docs/CollectionsApi.md#addElementToLogisticCollection) | **PUT** /api/v1/collections/logistic/{collectionId4n}/elements/{guid} | Add element to logistic collection
*Id4iApi.CollectionsApi* | [**addElementToRoutingCollection**](docs/CollectionsApi.md#addElementToRoutingCollection) | **PUT** /api/v1/collections/routing/{collectionId4n}/elements/{guid} | Add element to routing collection
*Id4iApi.CollectionsApi* | [**addElementsToCollection**](docs/CollectionsApi.md#addElementsToCollection) | **PUT** /api/v1/collections/{id4n}/elements | Add elements to collection
*Id4iApi.CollectionsApi* | [**addElementsToLabelledCollection**](docs/CollectionsApi.md#addElementsToLabelledCollection) | **PUT** /api/v1/collections/labelled/{collectionId4n}/elements | Add elements to labelled collection
*Id4iApi.CollectionsApi* | [**addElementsToLogisticCollection**](docs/CollectionsApi.md#addElementsToLogisticCollection) | **PUT** /api/v1/collections/logistic/{collectionId4n}/elements | Add elements to logistic collection
*Id4iApi.CollectionsApi* | [**addElementsToRoutingCollection**](docs/CollectionsApi.md#addElementsToRoutingCollection) | **PUT** /api/v1/collections/routing/{collectionId4n}/elements | Add element to routing collection
*Id4iApi.CollectionsApi* | [**createLabelledCollection**](docs/CollectionsApi.md#createLabelledCollection) | **POST** /api/v1/collections/labelled | Create labelled collection
*Id4iApi.CollectionsApi* | [**createLogisticCollection**](docs/CollectionsApi.md#createLogisticCollection) | **POST** /api/v1/collections/logistic | Create logistic collection
*Id4iApi.CollectionsApi* | [**createRoutingCollection**](docs/CollectionsApi.md#createRoutingCollection) | **POST** /api/v1/collections/routing | Create routing collecton
*Id4iApi.CollectionsApi* | [**deleteCollection**](docs/CollectionsApi.md#deleteCollection) | **DELETE** /api/v1/collections/{id4n} | Delete collection
*Id4iApi.CollectionsApi* | [**deleteLabelledCollection**](docs/CollectionsApi.md#deleteLabelledCollection) | **DELETE** /api/v1/collections/labelled/{id4n} | Delete labelled collection
*Id4iApi.CollectionsApi* | [**deleteLogisticCollection**](docs/CollectionsApi.md#deleteLogisticCollection) | **DELETE** /api/v1/collections/logistic/{id4n} | Delete logistic collection
*Id4iApi.CollectionsApi* | [**deleteRoutingCollection**](docs/CollectionsApi.md#deleteRoutingCollection) | **DELETE** /api/v1/collections/routing/{id4n} | Delete routing collection
*Id4iApi.CollectionsApi* | [**findCollection**](docs/CollectionsApi.md#findCollection) | **GET** /api/v1/collections/{id4n} | Find collection
*Id4iApi.CollectionsApi* | [**findLabelledCollection**](docs/CollectionsApi.md#findLabelledCollection) | **GET** /api/v1/collections/labelled/{id4n} | Find labelled collection
*Id4iApi.CollectionsApi* | [**findLogisticCollection**](docs/CollectionsApi.md#findLogisticCollection) | **GET** /api/v1/collections/logistic/{id4n} | Find logistic collection
*Id4iApi.CollectionsApi* | [**findRoutingCollection**](docs/CollectionsApi.md#findRoutingCollection) | **GET** /api/v1/collections/routing/{id4n} | Find routing collection
*Id4iApi.CollectionsApi* | [**getAllCollectionsOfOrganization**](docs/CollectionsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
*Id4iApi.CollectionsApi* | [**listElementsOfCollection**](docs/CollectionsApi.md#listElementsOfCollection) | **GET** /api/v1/collections/{id4n}/elements | List contents of the collection
*Id4iApi.CollectionsApi* | [**listElementsOfLabelledCollection**](docs/CollectionsApi.md#listElementsOfLabelledCollection) | **GET** /api/v1/collections/labelled/{id4n}/elements | List contents of the collection
*Id4iApi.CollectionsApi* | [**listElementsOfLogisticCollection**](docs/CollectionsApi.md#listElementsOfLogisticCollection) | **GET** /api/v1/collections/logistic/{id4n}/elements | List contents of the collection
*Id4iApi.CollectionsApi* | [**listElementsOfRoutingCollection**](docs/CollectionsApi.md#listElementsOfRoutingCollection) | **GET** /api/v1/collections/routing/{id4n}/elements | List contents of the collection
*Id4iApi.CollectionsApi* | [**removeElementFromCollection**](docs/CollectionsApi.md#removeElementFromCollection) | **DELETE** /api/v1/collections/{id4n}/elements/{elementGuid} | Remove element from collection
*Id4iApi.CollectionsApi* | [**removeElementFromLabelledCollection**](docs/CollectionsApi.md#removeElementFromLabelledCollection) | **DELETE** /api/v1/collections/labelled/{collectionId4n}/elements/{elementGuid} | Remove element from labelled collection
*Id4iApi.CollectionsApi* | [**removeElementFromLogisticCollection**](docs/CollectionsApi.md#removeElementFromLogisticCollection) | **DELETE** /api/v1/collections/logistic/{collectionId4n}/elements/{elementId4n} | Remove element from logistic collection
*Id4iApi.CollectionsApi* | [**removeElementFromRoutingCollection**](docs/CollectionsApi.md#removeElementFromRoutingCollection) | **DELETE** /api/v1/collections/routing/{collectionId4n}/elements/{guid} | Remove element from routing collection
*Id4iApi.CollectionsApi* | [**removeElementsFromCollection**](docs/CollectionsApi.md#removeElementsFromCollection) | **DELETE** /api/v1/collections/{id4n}/elements | Remove elements from collection
*Id4iApi.CollectionsApi* | [**removeElementsFromLabelledCollection**](docs/CollectionsApi.md#removeElementsFromLabelledCollection) | **DELETE** /api/v1/collections/labelled/{collectionId4n}/elements | Remove elements from labelled collection
*Id4iApi.CollectionsApi* | [**removeElementsFromLogisticCollection**](docs/CollectionsApi.md#removeElementsFromLogisticCollection) | **DELETE** /api/v1/collections/logistic/{collectionId4n}/elements | Remove elements from logistic collection
*Id4iApi.CollectionsApi* | [**removeElementsFromRoutingCollection**](docs/CollectionsApi.md#removeElementsFromRoutingCollection) | **DELETE** /api/v1/collections/routing/{collectionId4n}/elements | Remove elements from routing collection
*Id4iApi.CollectionsApi* | [**updateCollection**](docs/CollectionsApi.md#updateCollection) | **PUT** /api/v1/collections/{id4n} | Alter collection
*Id4iApi.CollectionsApi* | [**updateLabelledCollection**](docs/CollectionsApi.md#updateLabelledCollection) | **PUT** /api/v1/collections/labelled/{id4n} | Rename labelled collection
*Id4iApi.CollectionsApi* | [**updateLogisticCollection**](docs/CollectionsApi.md#updateLogisticCollection) | **PUT** /api/v1/collections/logistic/{id4n} | Update logistic collection
*Id4iApi.CollectionsApi* | [**updateRoutingCollection**](docs/CollectionsApi.md#updateRoutingCollection) | **PUT** /api/v1/collections/routing/{id4n} | Update routing collection
*Id4iApi.GUIDsApi* | [**addGuidAlias**](docs/GUIDsApi.md#addGuidAlias) | **POST** /api/v1/guids/{id4n}/alias/{aliasType} | Add alias for GUIDs
*Id4iApi.GUIDsApi* | [**addGuidAlias1**](docs/GUIDsApi.md#addGuidAlias1) | **DELETE** /api/v1/guids/{id4n}/alias/{aliasType} | Remove aliases from GUIDs
*Id4iApi.GUIDsApi* | [**createGuid**](docs/GUIDsApi.md#createGuid) | **POST** /api/v1/guids | Create GUID(s)
*Id4iApi.GUIDsApi* | [**getGuid**](docs/GUIDsApi.md#getGuid) | **GET** /api/v1/guids/{id4n} | Retrieve GUID information
*Id4iApi.GUIDsApi* | [**getGuidsWithoutCollection**](docs/GUIDsApi.md#getGuidsWithoutCollection) | **GET** /api/v1/guids/withoutCollection | Retrieve GUIDs not in any collection
*Id4iApi.GUIDsApi* | [**updateGuid**](docs/GUIDsApi.md#updateGuid) | **PUT** /api/v1/guids/{id4n} | Change GUID information.
*Id4iApi.ImagesApi* | [**resolveImageUsingGET**](docs/ImagesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
*Id4iApi.MetaInformationApi* | [**applicationInfo**](docs/MetaInformationApi.md#applicationInfo) | **GET** /api/v1/info | Retrieve version information about ID4i
*Id4iApi.OrganizationsApi* | [**createOrganization**](docs/OrganizationsApi.md#createOrganization) | **POST** /api/v1/organizations | Create organization
*Id4iApi.OrganizationsApi* | [**deleteOrganization**](docs/OrganizationsApi.md#deleteOrganization) | **DELETE** /api/v1/organizations/{organizationId} | Delete organization
*Id4iApi.OrganizationsApi* | [**deleteOrganizationBillingAddress**](docs/OrganizationsApi.md#deleteOrganizationBillingAddress) | **DELETE** /api/v1/organizations/{organizationId}/addresses/billing | Remove billing address
*Id4iApi.OrganizationsApi* | [**deleteOrganizationLogo**](docs/OrganizationsApi.md#deleteOrganizationLogo) | **DELETE** /api/v1/organizations/{organizationId}/logo | Delete organization logo
*Id4iApi.OrganizationsApi* | [**findOrganization**](docs/OrganizationsApi.md#findOrganization) | **GET** /api/v1/organizations/{organizationId} | Find organization by id
*Id4iApi.OrganizationsApi* | [**findOrganizationAddress**](docs/OrganizationsApi.md#findOrganizationAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/default | Retrieve address
*Id4iApi.OrganizationsApi* | [**findOrganizationBillingAddress**](docs/OrganizationsApi.md#findOrganizationBillingAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/billing | Retrieve billing address
*Id4iApi.OrganizationsApi* | [**getAllCollectionsOfOrganization**](docs/OrganizationsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
*Id4iApi.OrganizationsApi* | [**getAllOrganizationRoles**](docs/OrganizationsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
*Id4iApi.OrganizationsApi* | [**getOrganizationsOfUser**](docs/OrganizationsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
*Id4iApi.OrganizationsApi* | [**getUserRoles**](docs/OrganizationsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
*Id4iApi.OrganizationsApi* | [**getUsersOfOrganization**](docs/OrganizationsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
*Id4iApi.OrganizationsApi* | [**inviteUsers**](docs/OrganizationsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
*Id4iApi.OrganizationsApi* | [**removeUserRoles**](docs/OrganizationsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
*Id4iApi.OrganizationsApi* | [**updateOrganization**](docs/OrganizationsApi.md#updateOrganization) | **PUT** /api/v1/organizations/{organizationId} | Update organization
*Id4iApi.OrganizationsApi* | [**updateOrganizationAddress**](docs/OrganizationsApi.md#updateOrganizationAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/default | Store address
*Id4iApi.OrganizationsApi* | [**updateOrganizationBillingAddress**](docs/OrganizationsApi.md#updateOrganizationBillingAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/billing | Store billing address
*Id4iApi.OrganizationsApi* | [**updateOrganizationLogo**](docs/OrganizationsApi.md#updateOrganizationLogo) | **POST** /api/v1/organizations/{organizationId}/logo | Update organization logo
*Id4iApi.OrganizationsApi* | [**updateUserRoles**](docs/OrganizationsApi.md#updateUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
*Id4iApi.PublicServicesApi* | [**go**](docs/PublicServicesApi.md#go) | **GET** /go/{guid} | Forward
*Id4iApi.PublicServicesApi* | [**resolveImageUsingGET**](docs/PublicServicesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
*Id4iApi.PublicServicesApi* | [**resolveWhoIsEntry**](docs/PublicServicesApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n
*Id4iApi.RoutingApi* | [**getRoute**](docs/RoutingApi.md#getRoute) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | Retrieve current route of a GUID (or ID4N)
*Id4iApi.RoutingApi* | [**getRoutingFile**](docs/RoutingApi.md#getRoutingFile) | **GET** /api/v1/routingfiles/{id4n} | Retrieve routing file
*Id4iApi.RoutingApi* | [**updateRoutingFile**](docs/RoutingApi.md#updateRoutingFile) | **PUT** /api/v1/routingfiles/{id4n} | Store routing file
*Id4iApi.SearchApi* | [**searchByAlias**](docs/SearchApi.md#searchByAlias) | **GET** /api/v1/search/guids | Search for GUIDs by alias
*Id4iApi.WhoIsApi* | [**resolveWhoIsEntry**](docs/WhoIsApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n


## Documentation for Models

 - [Id4iApi.AccountCredentials](docs/AccountCredentials.md)
 - [Id4iApi.ApiError](docs/ApiError.md)
 - [Id4iApi.ApiKeyChangeRequest](docs/ApiKeyChangeRequest.md)
 - [Id4iApi.ApiKeyCreationRequest](docs/ApiKeyCreationRequest.md)
 - [Id4iApi.ApiKeyPresentation](docs/ApiKeyPresentation.md)
 - [Id4iApi.ApiKeyPrivilegeInfo](docs/ApiKeyPrivilegeInfo.md)
 - [Id4iApi.ApiKeyPrivilegeResponse](docs/ApiKeyPrivilegeResponse.md)
 - [Id4iApi.AppInfoPresentation](docs/AppInfoPresentation.md)
 - [Id4iApi.ChangeRoleRequest](docs/ChangeRoleRequest.md)
 - [Id4iApi.CompleteUserRegistrationRequest](docs/CompleteUserRegistrationRequest.md)
 - [Id4iApi.CreateGuidRequest](docs/CreateGuidRequest.md)
 - [Id4iApi.CreateLabelledCollectionRequest](docs/CreateLabelledCollectionRequest.md)
 - [Id4iApi.CreateLogisticCollectionRequest](docs/CreateLogisticCollectionRequest.md)
 - [Id4iApi.CreateRoutingCollectionRequest](docs/CreateRoutingCollectionRequest.md)
 - [Id4iApi.Guid](docs/Guid.md)
 - [Id4iApi.GuidAlias](docs/GuidAlias.md)
 - [Id4iApi.GuidCollection](docs/GuidCollection.md)
 - [Id4iApi.Id4n](docs/Id4n.md)
 - [Id4iApi.ListOfId4ns](docs/ListOfId4ns.md)
 - [Id4iApi.Organization](docs/Organization.md)
 - [Id4iApi.OrganizationAddress](docs/OrganizationAddress.md)
 - [Id4iApi.OrganizationUserInvitation](docs/OrganizationUserInvitation.md)
 - [Id4iApi.OrganizationUserInvitationListRequest](docs/OrganizationUserInvitationListRequest.md)
 - [Id4iApi.PaginatedApiKeyResponse](docs/PaginatedApiKeyResponse.md)
 - [Id4iApi.PaginatedGuidCollection](docs/PaginatedGuidCollection.md)
 - [Id4iApi.PaginatedGuidResponse](docs/PaginatedGuidResponse.md)
 - [Id4iApi.PaginatedOrganizationResponse](docs/PaginatedOrganizationResponse.md)
 - [Id4iApi.PaginatedResponseApiKeyPresentation](docs/PaginatedResponseApiKeyPresentation.md)
 - [Id4iApi.PaginatedResponseApiKeyPrivilegeInfo](docs/PaginatedResponseApiKeyPrivilegeInfo.md)
 - [Id4iApi.PaginatedResponseGuid](docs/PaginatedResponseGuid.md)
 - [Id4iApi.PaginatedResponseGuidCollection](docs/PaginatedResponseGuidCollection.md)
 - [Id4iApi.PaginatedResponseOrganization](docs/PaginatedResponseOrganization.md)
 - [Id4iApi.PaginatedResponseRole](docs/PaginatedResponseRole.md)
 - [Id4iApi.PaginatedResponseUserPresentation](docs/PaginatedResponseUserPresentation.md)
 - [Id4iApi.PaginatedResponseUserRoles](docs/PaginatedResponseUserRoles.md)
 - [Id4iApi.PaginatedResponsestring](docs/PaginatedResponsestring.md)
 - [Id4iApi.PaginatedStringResponse](docs/PaginatedStringResponse.md)
 - [Id4iApi.PaginatedUserPresentationResponse](docs/PaginatedUserPresentationResponse.md)
 - [Id4iApi.PaginatedUserRolesResponse](docs/PaginatedUserRolesResponse.md)
 - [Id4iApi.PasswordResetRequest](docs/PasswordResetRequest.md)
 - [Id4iApi.PasswordResetVerificationRequest](docs/PasswordResetVerificationRequest.md)
 - [Id4iApi.RegistrationVerificationTokenPresentation](docs/RegistrationVerificationTokenPresentation.md)
 - [Id4iApi.Role](docs/Role.md)
 - [Id4iApi.RoleResponse](docs/RoleResponse.md)
 - [Id4iApi.Route](docs/Route.md)
 - [Id4iApi.RoutingFile](docs/RoutingFile.md)
 - [Id4iApi.RoutingFileRequest](docs/RoutingFileRequest.md)
 - [Id4iApi.RoutingOptions](docs/RoutingOptions.md)
 - [Id4iApi.SimpleMessageResponse](docs/SimpleMessageResponse.md)
 - [Id4iApi.Timestamp](docs/Timestamp.md)
 - [Id4iApi.UserPresentation](docs/UserPresentation.md)
 - [Id4iApi.UserRegistrationRequest](docs/UserRegistrationRequest.md)
 - [Id4iApi.UserRegistrationResponse](docs/UserRegistrationResponse.md)
 - [Id4iApi.UserRoles](docs/UserRoles.md)
 - [Id4iApi.WhoIsResponse](docs/WhoIsResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

