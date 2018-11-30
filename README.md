# ID4i API Client Library - Javascript

This library allows developers to interact with the http://id4i.de HTTP API.
Typically you won't have to build it yourselves, you can just pull in the dependency from http://npmjs.org (soon, anyway).

Feel free to look at the sources and the documentation contained in this repository.

For additional information, please refer to

* http://id4i.de for high level information about the ID4i platform
* https://backend.id4i.de/docs/reference/en/reference.html for information about implementing your own solutions on top of ID4i
* https://backend.id4i.de/docs/reference/en/reference.html#_java for more about this library
* https://github.com/BlueRainSoftware/id4i-api_client-javascript for this libraries sources
* https://backend.id4i.de/docs/redoc/index.html for API documentation
* https://github.com/BlueRainSoftware/support for getting additional support

- API version: 0.9.5
- Package version: 0.9.5
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

You can install the javascript client library directly from the repository
```shell
npm install https://github.com/BlueRainSoftware/id4i-api_client-javascript#master --save
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
    rules: [ {
        parser: {
            amd: false
        }
    } ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Id4iApi = require('id4i_api');

        var defaultClient = Id4iApi.ApiClient.instance;
    
            // Configure API key authorization: Authorization
            var Authorization = defaultClient.authentications['Authorization'];
        Authorization.apiKey = "YOUR API KEY"
            // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
            //Authorization.apiKeyPrefix['Authorization'] = "Token"

    var api = new Id4iApi.AccountsApi()
    
            var organizationId = "organizationId_example"; // {String} The namespace of the organization
    
            var username = "username_example"; // {String} username
    
            var changeRoleRequest = new Id4iApi.ChangeRoleRequest(); // {ChangeRoleRequest} changeRoleRequest
    

        var callback = function(error, data, response) {
        if (error) {
        console.error(error);
        } else {
    console.log('API called successfully.');
        }
        };
        api.addUserRoles(organizationId, username, changeRoleRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://backend.id4i.de*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Id4iApi.AccountsApi* | [**addUserRoles**](docs/AccountsApi.md#addUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
*Id4iApi.AccountsApi* | [**completeRegistration**](docs/AccountsApi.md#completeRegistration) | **PUT** /account/registration | Complete registration
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
*Id4iApi.AccountsApi* | [**verifyPasswordReset**](docs/AccountsApi.md#verifyPasswordReset) | **PUT** /account/password | Verify password reset
*Id4iApi.AccountsApi* | [**verifyUserRegistration**](docs/AccountsApi.md#verifyUserRegistration) | **POST** /account/verification | Verify registration
*Id4iApi.AliasApi* | [**addGuidAlias**](docs/AliasApi.md#addGuidAlias) | **POST** /api/v1/id4ns/{id4n}/alias/{aliasType} | Add alias for GUID or Collection
*Id4iApi.AliasApi* | [**getGuidAliasTypes**](docs/AliasApi.md#getGuidAliasTypes) | **GET** /api/v1/search/guids/aliases/types | List all supported alias types
*Id4iApi.AliasApi* | [**getGuidAliases**](docs/AliasApi.md#getGuidAliases) | **GET** /api/v1/id4ns/{id4n}/alias | Get all aliases for the given GUID or Collection.
*Id4iApi.AliasApi* | [**removeGuidAlias**](docs/AliasApi.md#removeGuidAlias) | **DELETE** /api/v1/id4ns/{id4n}/alias/{aliasType} | Remove aliases from GUID or Collection
*Id4iApi.AliasApi* | [**searchByAlias**](docs/AliasApi.md#searchByAlias) | **GET** /api/v1/search/guids | Search for GUIDs by alias
*Id4iApi.ApiKeysApi* | [**addApiKeyPrivilege**](docs/ApiKeysApi.md#addApiKeyPrivilege) | **POST** /api/v1/apikeys/{key}/privileges | Add privilege
*Id4iApi.ApiKeysApi* | [**addApiKeyPrivilegeForId4ns**](docs/ApiKeysApi.md#addApiKeyPrivilegeForId4ns) | **POST** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | Add ID4ns of a privilege
*Id4iApi.ApiKeysApi* | [**createNewApiKey**](docs/ApiKeysApi.md#createNewApiKey) | **POST** /api/v1/apikeys | Create API key
*Id4iApi.ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteApiKey) | **DELETE** /api/v1/apikeys/{key} | Delete API key
*Id4iApi.ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getApiKey) | **GET** /api/v1/apikeys/{key} | Show API key
*Id4iApi.ApiKeysApi* | [**listAllApiKeyPrivileges**](docs/ApiKeysApi.md#listAllApiKeyPrivileges) | **GET** /api/v1/apikeys/privileges | List all privileges
*Id4iApi.ApiKeysApi* | [**listAllApiKeysOfOrganization**](docs/ApiKeysApi.md#listAllApiKeysOfOrganization) | **GET** /api/v1/apikeys | Find API key by organization
*Id4iApi.ApiKeysApi* | [**listApiKeyPrivileges**](docs/ApiKeysApi.md#listApiKeyPrivileges) | **GET** /api/v1/apikeys/{key}/privileges | List privileges
*Id4iApi.ApiKeysApi* | [**listId4ns**](docs/ApiKeysApi.md#listId4ns) | **GET** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | ID4ns of a privilege
*Id4iApi.ApiKeysApi* | [**removeApiKeyPrivilege**](docs/ApiKeysApi.md#removeApiKeyPrivilege) | **DELETE** /api/v1/apikeys/{key}/privileges | Remove privilege
*Id4iApi.ApiKeysApi* | [**removeApiKeyPrivilegeForId4ns**](docs/ApiKeysApi.md#removeApiKeyPrivilegeForId4ns) | **DELETE** /api/v1/apikeys/{key}/privileges/{privilege}/id4ns | Remove id4ns of a privilege
*Id4iApi.ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateApiKey) | **PUT** /api/v1/apikeys/{key} | Update API keys
*Id4iApi.AuditingApi* | [**listOrganizationChangeLog**](docs/AuditingApi.md#listOrganizationChangeLog) | **GET** /api/v1/changelog/organization/{organizationId}/ | List change log entries of an organization
*Id4iApi.BillingApi* | [**getPositionsForOrganization**](docs/BillingApi.md#getPositionsForOrganization) | **GET** /api/v1/billing/{organizationId}/positions | Get billing positions for a given organization
*Id4iApi.BillingApi* | [**getSumForOrganization**](docs/BillingApi.md#getSumForOrganization) | **GET** /api/v1/billing/{organizationId} | Get billing amount of services for a given organization
*Id4iApi.CollectionsApi* | [**addElementsToCollection**](docs/CollectionsApi.md#addElementsToCollection) | **POST** /api/v1/collections/{id4n}/elements | Add elements to collection
*Id4iApi.CollectionsApi* | [**createCollection**](docs/CollectionsApi.md#createCollection) | **POST** /api/v1/collections | Create collection
*Id4iApi.CollectionsApi* | [**deleteCollection**](docs/CollectionsApi.md#deleteCollection) | **DELETE** /api/v1/collections/{id4n} | Delete collection
*Id4iApi.CollectionsApi* | [**findCollection**](docs/CollectionsApi.md#findCollection) | **GET** /api/v1/collections/{id4n} | Find collection
*Id4iApi.CollectionsApi* | [**getAllCollectionsOfOrganization**](docs/CollectionsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
*Id4iApi.CollectionsApi* | [**listElementsOfCollection**](docs/CollectionsApi.md#listElementsOfCollection) | **GET** /api/v1/collections/{id4n}/elements | List contents of the collection
*Id4iApi.CollectionsApi* | [**removeElementsFromCollection**](docs/CollectionsApi.md#removeElementsFromCollection) | **DELETE** /api/v1/collections/{id4n}/elements | Remove elements from collection
*Id4iApi.CollectionsApi* | [**updateCollection**](docs/CollectionsApi.md#updateCollection) | **PATCH** /api/v1/collections/{id4n} | Update collection
*Id4iApi.GuidsApi* | [**addGuidAlias**](docs/GuidsApi.md#addGuidAlias) | **POST** /api/v1/id4ns/{id4n}/alias/{aliasType} | Add alias for GUID or Collection
*Id4iApi.GuidsApi* | [**createGuid**](docs/GuidsApi.md#createGuid) | **POST** /api/v1/guids | Create GUID(s)
*Id4iApi.GuidsApi* | [**getCollections**](docs/GuidsApi.md#getCollections) | **GET** /api/v1/id4ns/{id4n}/collections | Retrieve collections of an ID
*Id4iApi.GuidsApi* | [**getGuid**](docs/GuidsApi.md#getGuid) | **GET** /api/v1/guids/{id4n} | Retrieve GUID information
*Id4iApi.GuidsApi* | [**getGuidAliases**](docs/GuidsApi.md#getGuidAliases) | **GET** /api/v1/id4ns/{id4n}/alias | Get all aliases for the given GUID or Collection.
*Id4iApi.GuidsApi* | [**getGuidsWithoutCollection**](docs/GuidsApi.md#getGuidsWithoutCollection) | **GET** /api/v1/guids/withoutCollection | Retrieve GUIDs not in any collection
*Id4iApi.GuidsApi* | [**getId4n**](docs/GuidsApi.md#getId4n) | **GET** /api/v1/id4ns/{id4n} | Retrieve ID4n information
*Id4iApi.GuidsApi* | [**removeGuidAlias**](docs/GuidsApi.md#removeGuidAlias) | **DELETE** /api/v1/id4ns/{id4n}/alias/{aliasType} | Remove aliases from GUID or Collection
*Id4iApi.GuidsApi* | [**updateGuid**](docs/GuidsApi.md#updateGuid) | **PATCH** /api/v1/guids/{id4n} | Change GUID information.
*Id4iApi.HistoryApi* | [**addItem**](docs/HistoryApi.md#addItem) | **POST** /api/v1/history/{id4n} | Add history item
*Id4iApi.HistoryApi* | [**filteredList**](docs/HistoryApi.md#filteredList) | **GET** /api/v1/history/{id4n} | List history
*Id4iApi.HistoryApi* | [**list**](docs/HistoryApi.md#list) | **GET** /api/v1/history/{id4n}/{organizationId} | DEPRECATED - List history
*Id4iApi.HistoryApi* | [**retrieveItem**](docs/HistoryApi.md#retrieveItem) | **GET** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | Get history item
*Id4iApi.HistoryApi* | [**updateItem**](docs/HistoryApi.md#updateItem) | **PATCH** /api/v1/history/{id4n}/{organizationId}/{sequenceId} | Update history item
*Id4iApi.HistoryApi* | [**updateItemVisibility**](docs/HistoryApi.md#updateItemVisibility) | **PUT** /api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility | Set history item visibility
*Id4iApi.ImagesApi* | [**resolveImageUsingGET**](docs/ImagesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
*Id4iApi.MetaInformationApi* | [**applicationInfo**](docs/MetaInformationApi.md#applicationInfo) | **GET** /api/v1/info | Retrieve version information about ID4i
*Id4iApi.OrganizationsApi* | [**addPartnerOrganization**](docs/OrganizationsApi.md#addPartnerOrganization) | **PUT** /api/v1/organizations/{organizationId}/partner | Add partner
*Id4iApi.OrganizationsApi* | [**addUserRoles**](docs/OrganizationsApi.md#addUserRoles) | **POST** /api/v1/organizations/{organizationId}/users/{username}/roles | Add role(s) to user
*Id4iApi.OrganizationsApi* | [**createOrganization**](docs/OrganizationsApi.md#createOrganization) | **POST** /api/v1/organizations | Create organization
*Id4iApi.OrganizationsApi* | [**deleteOrganization**](docs/OrganizationsApi.md#deleteOrganization) | **DELETE** /api/v1/organizations/{organizationId} | Delete organization
*Id4iApi.OrganizationsApi* | [**deleteOrganizationBillingAddress**](docs/OrganizationsApi.md#deleteOrganizationBillingAddress) | **DELETE** /api/v1/organizations/{organizationId}/addresses/billing | Remove billing address
*Id4iApi.OrganizationsApi* | [**deleteOrganizationLogo**](docs/OrganizationsApi.md#deleteOrganizationLogo) | **DELETE** /api/v1/organizations/{organizationId}/logo | Delete organization logo
*Id4iApi.OrganizationsApi* | [**findOrganization**](docs/OrganizationsApi.md#findOrganization) | **GET** /api/v1/organizations/{organizationId} | Find organization by id/namespace
*Id4iApi.OrganizationsApi* | [**findOrganizationAddress**](docs/OrganizationsApi.md#findOrganizationAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/default | Retrieve address
*Id4iApi.OrganizationsApi* | [**findOrganizationBillingAddress**](docs/OrganizationsApi.md#findOrganizationBillingAddress) | **GET** /api/v1/organizations/{organizationId}/addresses/billing | Retrieve billing address
*Id4iApi.OrganizationsApi* | [**getAllCollectionsOfOrganization**](docs/OrganizationsApi.md#getAllCollectionsOfOrganization) | **GET** /api/v1/organizations/{organizationId}/collections | Get collections of organization
*Id4iApi.OrganizationsApi* | [**getAllOrganizationRoles**](docs/OrganizationsApi.md#getAllOrganizationRoles) | **GET** /api/v1/organizations/{organizationId}/roles | List users and their roles
*Id4iApi.OrganizationsApi* | [**getOrganizationPrivileges**](docs/OrganizationsApi.md#getOrganizationPrivileges) | **GET** /api/v1/organizations/{organizationId}/privileges | List my privileges
*Id4iApi.OrganizationsApi* | [**getOrganizationsOfUser**](docs/OrganizationsApi.md#getOrganizationsOfUser) | **GET** /api/v1/user/organizations | Retrieve organizations of user
*Id4iApi.OrganizationsApi* | [**getPartnerOrganizations**](docs/OrganizationsApi.md#getPartnerOrganizations) | **GET** /api/v1/organizations/{organizationId}/partner | Get partners of an organization
*Id4iApi.OrganizationsApi* | [**getUserRoles**](docs/OrganizationsApi.md#getUserRoles) | **GET** /api/v1/organizations/{organizationId}/users/{username}/roles | Get user roles by username
*Id4iApi.OrganizationsApi* | [**getUsersOfOrganization**](docs/OrganizationsApi.md#getUsersOfOrganization) | **GET** /api/v1/organizations/{organizationId}/users | Find users in organization
*Id4iApi.OrganizationsApi* | [**inviteUsers**](docs/OrganizationsApi.md#inviteUsers) | **POST** /api/v1/organizations/{organizationId}/users/invite | Invite Users
*Id4iApi.OrganizationsApi* | [**listCountries**](docs/OrganizationsApi.md#listCountries) | **GET** /api/v1/countries | List countries
*Id4iApi.OrganizationsApi* | [**removePartnerOrganization**](docs/OrganizationsApi.md#removePartnerOrganization) | **DELETE** /api/v1/organizations/{organizationId}/partner | Remove partner
*Id4iApi.OrganizationsApi* | [**removeUserRoles**](docs/OrganizationsApi.md#removeUserRoles) | **DELETE** /api/v1/organizations/{organizationId}/users/{username}/roles | Remove role(s) from user
*Id4iApi.OrganizationsApi* | [**setOrganizationLogo**](docs/OrganizationsApi.md#setOrganizationLogo) | **POST** /api/v1/organizations/{organizationId}/logo | Update organization logo
*Id4iApi.OrganizationsApi* | [**updateOrganization**](docs/OrganizationsApi.md#updateOrganization) | **PUT** /api/v1/organizations/{organizationId} | Update organization
*Id4iApi.OrganizationsApi* | [**updateOrganizationAddress**](docs/OrganizationsApi.md#updateOrganizationAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/default | Store address
*Id4iApi.OrganizationsApi* | [**updateOrganizationBillingAddress**](docs/OrganizationsApi.md#updateOrganizationBillingAddress) | **PUT** /api/v1/organizations/{organizationId}/addresses/billing | Store billing address
*Id4iApi.PublicServicesApi* | [**getPublicDocument**](docs/PublicServicesApi.md#getPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a public document (meta-data only, no content)
*Id4iApi.PublicServicesApi* | [**getRoutes**](docs/PublicServicesApi.md#getRoutes) | **GET** /api/v1/public/routes/{id4n} | Retrieve all public routes for a GUID
*Id4iApi.PublicServicesApi* | [**go**](docs/PublicServicesApi.md#go) | **GET** /go/{guid} | Forward
*Id4iApi.PublicServicesApi* | [**listAllPublicDocuments**](docs/PublicServicesApi.md#listAllPublicDocuments) | **GET** /api/v1/public/documents/{id4n} | List public documents
*Id4iApi.PublicServicesApi* | [**listPublicHistory**](docs/PublicServicesApi.md#listPublicHistory) | **GET** /api/v1/public/history/{id4n} | Shows the public history of the given GUID
*Id4iApi.PublicServicesApi* | [**readOrganizationInfo**](docs/PublicServicesApi.md#readOrganizationInfo) | **GET** /api/v1/public/organizations/{organizationId} | Read public organization information
*Id4iApi.PublicServicesApi* | [**readPublicDocument**](docs/PublicServicesApi.md#readPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName} | Read public document contents
*Id4iApi.PublicServicesApi* | [**resolveImageUsingGET**](docs/PublicServicesApi.md#resolveImageUsingGET) | **GET** /api/v1/public/image/{imageID} | Resolve image
*Id4iApi.PublicServicesApi* | [**resolveWhoIsEntry**](docs/PublicServicesApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n
*Id4iApi.RoutingApi* | [**getAllRoutes**](docs/RoutingApi.md#getAllRoutes) | **GET** /api/v1/routingfiles/{id4n}/routes/{type} | Retrieve all routes of a GUID (or ID4N)
*Id4iApi.RoutingApi* | [**getRoute**](docs/RoutingApi.md#getRoute) | **GET** /api/v1/routingfiles/{id4n}/route/{type} | Retrieve current route of a GUID (or ID4N)
*Id4iApi.RoutingApi* | [**getRoutingFile**](docs/RoutingApi.md#getRoutingFile) | **GET** /api/v1/routingfiles/{id4n} | Retrieve routing file
*Id4iApi.RoutingApi* | [**updateRoutingFile**](docs/RoutingApi.md#updateRoutingFile) | **PUT** /api/v1/routingfiles/{id4n} | Store routing file
*Id4iApi.StorageApi* | [**createDocument**](docs/StorageApi.md#createDocument) | **PUT** /api/v1/documents/{id4n}/{organizationId} | Create an empty document for an id4n
*Id4iApi.StorageApi* | [**deleteDocument**](docs/StorageApi.md#deleteDocument) | **DELETE** /api/v1/documents/{id4n}/{organizationId}/{fileName} | Delete a document
*Id4iApi.StorageApi* | [**getDocument**](docs/StorageApi.md#getDocument) | **GET** /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a document (meta-data only, no content)
*Id4iApi.StorageApi* | [**getPublicDocument**](docs/StorageApi.md#getPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata | Retrieve a public document (meta-data only, no content)
*Id4iApi.StorageApi* | [**listAllDocuments**](docs/StorageApi.md#listAllDocuments) | **GET** /api/v1/documents/{id4n} | List documents
*Id4iApi.StorageApi* | [**listAllPublicDocuments**](docs/StorageApi.md#listAllPublicDocuments) | **GET** /api/v1/public/documents/{id4n} | List public documents
*Id4iApi.StorageApi* | [**listDocuments**](docs/StorageApi.md#listDocuments) | **GET** /api/v1/documents/{id4n}/{organizationId} | List organization specific documents
*Id4iApi.StorageApi* | [**readDocument**](docs/StorageApi.md#readDocument) | **GET** /api/v1/documents/{id4n}/{organizationId}/{fileName} | Read document contents
*Id4iApi.StorageApi* | [**readFromMicrostorage**](docs/StorageApi.md#readFromMicrostorage) | **GET** /api/v1/microstorage/{id4n}/{organization} | Read data from microstorage
*Id4iApi.StorageApi* | [**readPublicDocument**](docs/StorageApi.md#readPublicDocument) | **GET** /api/v1/public/documents/{id4n}/{organizationId}/{fileName} | Read public document contents
*Id4iApi.StorageApi* | [**updateDocumentMetadata**](docs/StorageApi.md#updateDocumentMetadata) | **PATCH** /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata | Update a document
*Id4iApi.StorageApi* | [**writeToMicrostorage**](docs/StorageApi.md#writeToMicrostorage) | **PUT** /api/v1/microstorage/{id4n}/{organization} | Write data to microstorage
*Id4iApi.TransferApi* | [**getSendInfo**](docs/TransferApi.md#getSendInfo) | **GET** /api/v1/transfers/{id4n}/sendInfo | Show transfer preparation information
*Id4iApi.TransferApi* | [**prepare**](docs/TransferApi.md#prepare) | **PUT** /api/v1/transfers/{id4n}/sendInfo | Prepare an object for transfer
*Id4iApi.TransferApi* | [**receive**](docs/TransferApi.md#receive) | **PUT** /api/v1/transfers/{id4n}/receiveInfo | Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership
*Id4iApi.WhoIsApi* | [**resolveWhoIsEntry**](docs/WhoIsApi.md#resolveWhoIsEntry) | **GET** /whois/{id4n} | Resolve owner of id4n


## Documentation for Models

 - [Id4iApi.AccountCredentials](docs/AccountCredentials.md)
 - [Id4iApi.AddApiKeyPrivilegeRequest](docs/AddApiKeyPrivilegeRequest.md)
 - [Id4iApi.AddPartnerRequest](docs/AddPartnerRequest.md)
 - [Id4iApi.ApiError](docs/ApiError.md)
 - [Id4iApi.ApiKeyChangeRequest](docs/ApiKeyChangeRequest.md)
 - [Id4iApi.ApiKeyCreationRequest](docs/ApiKeyCreationRequest.md)
 - [Id4iApi.ApiKeyPresentation](docs/ApiKeyPresentation.md)
 - [Id4iApi.ApiKeyPrivilege](docs/ApiKeyPrivilege.md)
 - [Id4iApi.ApiKeyPrivilegeInfo](docs/ApiKeyPrivilegeInfo.md)
 - [Id4iApi.ApiKeyPrivilegeInfoResponse](docs/ApiKeyPrivilegeInfoResponse.md)
 - [Id4iApi.ApiKeyPrivilegePaginatedResponse](docs/ApiKeyPrivilegePaginatedResponse.md)
 - [Id4iApi.AppInfoPresentation](docs/AppInfoPresentation.md)
 - [Id4iApi.BillingPosition](docs/BillingPosition.md)
 - [Id4iApi.ChangeLogEntry](docs/ChangeLogEntry.md)
 - [Id4iApi.ChangeRoleRequest](docs/ChangeRoleRequest.md)
 - [Id4iApi.CompleteUserRegistrationRequest](docs/CompleteUserRegistrationRequest.md)
 - [Id4iApi.Country](docs/Country.md)
 - [Id4iApi.CreateCollectionRequest](docs/CreateCollectionRequest.md)
 - [Id4iApi.CreateGuidRequest](docs/CreateGuidRequest.md)
 - [Id4iApi.Document](docs/Document.md)
 - [Id4iApi.DocumentUpdate](docs/DocumentUpdate.md)
 - [Id4iApi.Guid](docs/Guid.md)
 - [Id4iApi.GuidAlias](docs/GuidAlias.md)
 - [Id4iApi.GuidCollection](docs/GuidCollection.md)
 - [Id4iApi.HistoryItem](docs/HistoryItem.md)
 - [Id4iApi.HistoryItemUpdate](docs/HistoryItemUpdate.md)
 - [Id4iApi.Id4n](docs/Id4n.md)
 - [Id4iApi.Id4nPresentation](docs/Id4nPresentation.md)
 - [Id4iApi.Id4nPresentationPaginatedResponse](docs/Id4nPresentationPaginatedResponse.md)
 - [Id4iApi.ListOfId4ns](docs/ListOfId4ns.md)
 - [Id4iApi.Organization](docs/Organization.md)
 - [Id4iApi.OrganizationAddress](docs/OrganizationAddress.md)
 - [Id4iApi.OrganizationUpdate](docs/OrganizationUpdate.md)
 - [Id4iApi.OrganizationUserInvitation](docs/OrganizationUserInvitation.md)
 - [Id4iApi.OrganizationUserInvitationListRequest](docs/OrganizationUserInvitationListRequest.md)
 - [Id4iApi.PaginatedApiKeyResponse](docs/PaginatedApiKeyResponse.md)
 - [Id4iApi.PaginatedChangeLogEntryResponse](docs/PaginatedChangeLogEntryResponse.md)
 - [Id4iApi.PaginatedCountryResponse](docs/PaginatedCountryResponse.md)
 - [Id4iApi.PaginatedDocumentResponse](docs/PaginatedDocumentResponse.md)
 - [Id4iApi.PaginatedGuidCollection](docs/PaginatedGuidCollection.md)
 - [Id4iApi.PaginatedGuidCollectionResponse](docs/PaginatedGuidCollectionResponse.md)
 - [Id4iApi.PaginatedGuidResponse](docs/PaginatedGuidResponse.md)
 - [Id4iApi.PaginatedHistoryItemResponse](docs/PaginatedHistoryItemResponse.md)
 - [Id4iApi.PaginatedOrganizationResponse](docs/PaginatedOrganizationResponse.md)
 - [Id4iApi.PaginatedResponseOfApiKeyPresentation](docs/PaginatedResponseOfApiKeyPresentation.md)
 - [Id4iApi.PaginatedResponseOfApiKeyPrivilege](docs/PaginatedResponseOfApiKeyPrivilege.md)
 - [Id4iApi.PaginatedResponseOfApiKeyPrivilegeInfo](docs/PaginatedResponseOfApiKeyPrivilegeInfo.md)
 - [Id4iApi.PaginatedResponseOfChangeLogEntry](docs/PaginatedResponseOfChangeLogEntry.md)
 - [Id4iApi.PaginatedResponseOfCountry](docs/PaginatedResponseOfCountry.md)
 - [Id4iApi.PaginatedResponseOfDocument](docs/PaginatedResponseOfDocument.md)
 - [Id4iApi.PaginatedResponseOfGuid](docs/PaginatedResponseOfGuid.md)
 - [Id4iApi.PaginatedResponseOfGuidCollection](docs/PaginatedResponseOfGuidCollection.md)
 - [Id4iApi.PaginatedResponseOfHistoryItem](docs/PaginatedResponseOfHistoryItem.md)
 - [Id4iApi.PaginatedResponseOfId4nPresentation](docs/PaginatedResponseOfId4nPresentation.md)
 - [Id4iApi.PaginatedResponseOfOrganization](docs/PaginatedResponseOfOrganization.md)
 - [Id4iApi.PaginatedResponseOfPartnerOrganization](docs/PaginatedResponseOfPartnerOrganization.md)
 - [Id4iApi.PaginatedResponseOfRole](docs/PaginatedResponseOfRole.md)
 - [Id4iApi.PaginatedResponseOfUserPresentation](docs/PaginatedResponseOfUserPresentation.md)
 - [Id4iApi.PaginatedResponseOfUserRoles](docs/PaginatedResponseOfUserRoles.md)
 - [Id4iApi.PaginatedResponseOfstring](docs/PaginatedResponseOfstring.md)
 - [Id4iApi.PaginatedStringResponse](docs/PaginatedStringResponse.md)
 - [Id4iApi.PaginatedUserPresentationResponse](docs/PaginatedUserPresentationResponse.md)
 - [Id4iApi.PaginatedUserRolesResponse](docs/PaginatedUserRolesResponse.md)
 - [Id4iApi.PartnerOrganization](docs/PartnerOrganization.md)
 - [Id4iApi.PasswordResetRequest](docs/PasswordResetRequest.md)
 - [Id4iApi.PasswordResetVerificationRequest](docs/PasswordResetVerificationRequest.md)
 - [Id4iApi.PublicImagePresentation](docs/PublicImagePresentation.md)
 - [Id4iApi.RegistrationVerificationTokenPresentation](docs/RegistrationVerificationTokenPresentation.md)
 - [Id4iApi.RemoveApiKeyPrivilegeRequest](docs/RemoveApiKeyPrivilegeRequest.md)
 - [Id4iApi.RemovePartnerRequest](docs/RemovePartnerRequest.md)
 - [Id4iApi.Role](docs/Role.md)
 - [Id4iApi.RoleResponse](docs/RoleResponse.md)
 - [Id4iApi.Route](docs/Route.md)
 - [Id4iApi.RoutingFile](docs/RoutingFile.md)
 - [Id4iApi.RoutingFileRequest](docs/RoutingFileRequest.md)
 - [Id4iApi.RoutingOptions](docs/RoutingOptions.md)
 - [Id4iApi.ServiceCosts](docs/ServiceCosts.md)
 - [Id4iApi.SimpleMessageResponse](docs/SimpleMessageResponse.md)
 - [Id4iApi.TransferReceiveInfo](docs/TransferReceiveInfo.md)
 - [Id4iApi.TransferSendInfo](docs/TransferSendInfo.md)
 - [Id4iApi.UserPresentation](docs/UserPresentation.md)
 - [Id4iApi.UserRegistrationRequest](docs/UserRegistrationRequest.md)
 - [Id4iApi.UserRegistrationResponse](docs/UserRegistrationResponse.md)
 - [Id4iApi.UserRoles](docs/UserRoles.md)
 - [Id4iApi.Visibility](docs/Visibility.md)
 - [Id4iApi.VisibilityUpdate](docs/VisibilityUpdate.md)
 - [Id4iApi.WhoIsResponse](docs/WhoIsResponse.md)


## Documentation for Authorization


### Authorization

- **Type**: API key
    - **API key parameter name**: Authorization
    - **Location**: HTTP header

