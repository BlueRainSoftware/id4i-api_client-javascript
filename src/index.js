/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.2.2
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountCredentials', 'model/AddApiKeyPrivilegeRequest', 'model/ApiError', 'model/ApiKeyChangeRequest', 'model/ApiKeyCreationRequest', 'model/ApiKeyPresentation', 'model/ApiKeyPrivilege', 'model/ApiKeyPrivilegeInfo', 'model/ApiKeyPrivilegeInfoResponse', 'model/ApiKeyPrivilegePaginatedResponse', 'model/AppInfoPresentation', 'model/BillingPosition', 'model/ChangeRoleRequest', 'model/CompleteUserRegistrationRequest', 'model/Country', 'model/CreateGuidRequest', 'model/CreateLabelledCollectionRequest', 'model/CreateLogisticCollectionRequest', 'model/CreateRoutingCollectionRequest', 'model/Document', 'model/DocumentUpdate', 'model/File', 'model/Guid', 'model/GuidAlias', 'model/GuidCollection', 'model/Id4n', 'model/Id4nPresentation', 'model/Id4nPresentationPaginatedResponse', 'model/InputStream', 'model/InputStreamResource', 'model/ListOfId4ns', 'model/Organization', 'model/OrganizationAddress', 'model/OrganizationUserInvitation', 'model/OrganizationUserInvitationListRequest', 'model/OwnedDocument', 'model/PaginatedApiKeyResponse', 'model/PaginatedCountryResponse', 'model/PaginatedDocumentResponse', 'model/PaginatedGuidCollection', 'model/PaginatedGuidResponse', 'model/PaginatedOrganizationResponse', 'model/PaginatedOwnedDocumentResponse', 'model/PaginatedResponseApiKeyPresentation', 'model/PaginatedResponseApiKeyPrivilege', 'model/PaginatedResponseApiKeyPrivilegeInfo', 'model/PaginatedResponseCountry', 'model/PaginatedResponseDocument', 'model/PaginatedResponseGuid', 'model/PaginatedResponseGuidCollection', 'model/PaginatedResponseId4nPresentation', 'model/PaginatedResponseOrganization', 'model/PaginatedResponseOwnedDocument', 'model/PaginatedResponseRole', 'model/PaginatedResponseUserPresentation', 'model/PaginatedResponseUserRoles', 'model/PaginatedResponsestring', 'model/PaginatedStringResponse', 'model/PaginatedUserPresentationResponse', 'model/PaginatedUserRolesResponse', 'model/PasswordResetRequest', 'model/PasswordResetVerificationRequest', 'model/PublicImagePresentation', 'model/RegistrationVerificationTokenPresentation', 'model/RemoveApiKeyPrivilegeRequest', 'model/ResponseEntity', 'model/Role', 'model/RoleResponse', 'model/Route', 'model/RoutingFile', 'model/RoutingFileRequest', 'model/RoutingOptions', 'model/ServiceCosts', 'model/SimpleMessageResponse', 'model/Timestamp', 'model/URI', 'model/URL', 'model/UserPresentation', 'model/UserRegistrationRequest', 'model/UserRegistrationResponse', 'model/UserRoles', 'model/Visibility', 'model/VisibilityUpdate', 'model/WhoIsResponse', 'api/AccountsApi', 'api/AliasApi', 'api/ApiKeysApi', 'api/BillingApi', 'api/CollectionsApi', 'api/GUIDsApi', 'api/ImagesApi', 'api/MetaInformationApi', 'api/OrganizationsApi', 'api/PublicServicesApi', 'api/RoutingApi', 'api/StorageApi', 'api/WhoIsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountCredentials'), require('./model/AddApiKeyPrivilegeRequest'), require('./model/ApiError'), require('./model/ApiKeyChangeRequest'), require('./model/ApiKeyCreationRequest'), require('./model/ApiKeyPresentation'), require('./model/ApiKeyPrivilege'), require('./model/ApiKeyPrivilegeInfo'), require('./model/ApiKeyPrivilegeInfoResponse'), require('./model/ApiKeyPrivilegePaginatedResponse'), require('./model/AppInfoPresentation'), require('./model/BillingPosition'), require('./model/ChangeRoleRequest'), require('./model/CompleteUserRegistrationRequest'), require('./model/Country'), require('./model/CreateGuidRequest'), require('./model/CreateLabelledCollectionRequest'), require('./model/CreateLogisticCollectionRequest'), require('./model/CreateRoutingCollectionRequest'), require('./model/Document'), require('./model/DocumentUpdate'), require('./model/File'), require('./model/Guid'), require('./model/GuidAlias'), require('./model/GuidCollection'), require('./model/Id4n'), require('./model/Id4nPresentation'), require('./model/Id4nPresentationPaginatedResponse'), require('./model/InputStream'), require('./model/InputStreamResource'), require('./model/ListOfId4ns'), require('./model/Organization'), require('./model/OrganizationAddress'), require('./model/OrganizationUserInvitation'), require('./model/OrganizationUserInvitationListRequest'), require('./model/OwnedDocument'), require('./model/PaginatedApiKeyResponse'), require('./model/PaginatedCountryResponse'), require('./model/PaginatedDocumentResponse'), require('./model/PaginatedGuidCollection'), require('./model/PaginatedGuidResponse'), require('./model/PaginatedOrganizationResponse'), require('./model/PaginatedOwnedDocumentResponse'), require('./model/PaginatedResponseApiKeyPresentation'), require('./model/PaginatedResponseApiKeyPrivilege'), require('./model/PaginatedResponseApiKeyPrivilegeInfo'), require('./model/PaginatedResponseCountry'), require('./model/PaginatedResponseDocument'), require('./model/PaginatedResponseGuid'), require('./model/PaginatedResponseGuidCollection'), require('./model/PaginatedResponseId4nPresentation'), require('./model/PaginatedResponseOrganization'), require('./model/PaginatedResponseOwnedDocument'), require('./model/PaginatedResponseRole'), require('./model/PaginatedResponseUserPresentation'), require('./model/PaginatedResponseUserRoles'), require('./model/PaginatedResponsestring'), require('./model/PaginatedStringResponse'), require('./model/PaginatedUserPresentationResponse'), require('./model/PaginatedUserRolesResponse'), require('./model/PasswordResetRequest'), require('./model/PasswordResetVerificationRequest'), require('./model/PublicImagePresentation'), require('./model/RegistrationVerificationTokenPresentation'), require('./model/RemoveApiKeyPrivilegeRequest'), require('./model/ResponseEntity'), require('./model/Role'), require('./model/RoleResponse'), require('./model/Route'), require('./model/RoutingFile'), require('./model/RoutingFileRequest'), require('./model/RoutingOptions'), require('./model/ServiceCosts'), require('./model/SimpleMessageResponse'), require('./model/Timestamp'), require('./model/URI'), require('./model/URL'), require('./model/UserPresentation'), require('./model/UserRegistrationRequest'), require('./model/UserRegistrationResponse'), require('./model/UserRoles'), require('./model/Visibility'), require('./model/VisibilityUpdate'), require('./model/WhoIsResponse'), require('./api/AccountsApi'), require('./api/AliasApi'), require('./api/ApiKeysApi'), require('./api/BillingApi'), require('./api/CollectionsApi'), require('./api/GUIDsApi'), require('./api/ImagesApi'), require('./api/MetaInformationApi'), require('./api/OrganizationsApi'), require('./api/PublicServicesApi'), require('./api/RoutingApi'), require('./api/StorageApi'), require('./api/WhoIsApi'));
  }
}(function(ApiClient, AccountCredentials, AddApiKeyPrivilegeRequest, ApiError, ApiKeyChangeRequest, ApiKeyCreationRequest, ApiKeyPresentation, ApiKeyPrivilege, ApiKeyPrivilegeInfo, ApiKeyPrivilegeInfoResponse, ApiKeyPrivilegePaginatedResponse, AppInfoPresentation, BillingPosition, ChangeRoleRequest, CompleteUserRegistrationRequest, Country, CreateGuidRequest, CreateLabelledCollectionRequest, CreateLogisticCollectionRequest, CreateRoutingCollectionRequest, Document, DocumentUpdate, File, Guid, GuidAlias, GuidCollection, Id4n, Id4nPresentation, Id4nPresentationPaginatedResponse, InputStream, InputStreamResource, ListOfId4ns, Organization, OrganizationAddress, OrganizationUserInvitation, OrganizationUserInvitationListRequest, OwnedDocument, PaginatedApiKeyResponse, PaginatedCountryResponse, PaginatedDocumentResponse, PaginatedGuidCollection, PaginatedGuidResponse, PaginatedOrganizationResponse, PaginatedOwnedDocumentResponse, PaginatedResponseApiKeyPresentation, PaginatedResponseApiKeyPrivilege, PaginatedResponseApiKeyPrivilegeInfo, PaginatedResponseCountry, PaginatedResponseDocument, PaginatedResponseGuid, PaginatedResponseGuidCollection, PaginatedResponseId4nPresentation, PaginatedResponseOrganization, PaginatedResponseOwnedDocument, PaginatedResponseRole, PaginatedResponseUserPresentation, PaginatedResponseUserRoles, PaginatedResponsestring, PaginatedStringResponse, PaginatedUserPresentationResponse, PaginatedUserRolesResponse, PasswordResetRequest, PasswordResetVerificationRequest, PublicImagePresentation, RegistrationVerificationTokenPresentation, RemoveApiKeyPrivilegeRequest, ResponseEntity, Role, RoleResponse, Route, RoutingFile, RoutingFileRequest, RoutingOptions, ServiceCosts, SimpleMessageResponse, Timestamp, URI, URL, UserPresentation, UserRegistrationRequest, UserRegistrationResponse, UserRoles, Visibility, VisibilityUpdate, WhoIsResponse, AccountsApi, AliasApi, ApiKeysApi, BillingApi, CollectionsApi, GUIDsApi, ImagesApi, MetaInformationApi, OrganizationsApi, PublicServicesApi, RoutingApi, StorageApi, WhoIsApi) {
  'use strict';

  /**
   * HTTP_API_Documentation_for_ID4i.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Id4iApi = require('index'); // See note below*.
   * var xxxSvc = new Id4iApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Id4iApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Id4iApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Id4iApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.2.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountCredentials model constructor.
     * @property {module:model/AccountCredentials}
     */
    AccountCredentials: AccountCredentials,
    /**
     * The AddApiKeyPrivilegeRequest model constructor.
     * @property {module:model/AddApiKeyPrivilegeRequest}
     */
    AddApiKeyPrivilegeRequest: AddApiKeyPrivilegeRequest,
    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError: ApiError,
    /**
     * The ApiKeyChangeRequest model constructor.
     * @property {module:model/ApiKeyChangeRequest}
     */
    ApiKeyChangeRequest: ApiKeyChangeRequest,
    /**
     * The ApiKeyCreationRequest model constructor.
     * @property {module:model/ApiKeyCreationRequest}
     */
    ApiKeyCreationRequest: ApiKeyCreationRequest,
    /**
     * The ApiKeyPresentation model constructor.
     * @property {module:model/ApiKeyPresentation}
     */
    ApiKeyPresentation: ApiKeyPresentation,
    /**
     * The ApiKeyPrivilege model constructor.
     * @property {module:model/ApiKeyPrivilege}
     */
    ApiKeyPrivilege: ApiKeyPrivilege,
    /**
     * The ApiKeyPrivilegeInfo model constructor.
     * @property {module:model/ApiKeyPrivilegeInfo}
     */
    ApiKeyPrivilegeInfo: ApiKeyPrivilegeInfo,
    /**
     * The ApiKeyPrivilegeInfoResponse model constructor.
     * @property {module:model/ApiKeyPrivilegeInfoResponse}
     */
    ApiKeyPrivilegeInfoResponse: ApiKeyPrivilegeInfoResponse,
    /**
     * The ApiKeyPrivilegePaginatedResponse model constructor.
     * @property {module:model/ApiKeyPrivilegePaginatedResponse}
     */
    ApiKeyPrivilegePaginatedResponse: ApiKeyPrivilegePaginatedResponse,
    /**
     * The AppInfoPresentation model constructor.
     * @property {module:model/AppInfoPresentation}
     */
    AppInfoPresentation: AppInfoPresentation,
    /**
     * The BillingPosition model constructor.
     * @property {module:model/BillingPosition}
     */
    BillingPosition: BillingPosition,
    /**
     * The ChangeRoleRequest model constructor.
     * @property {module:model/ChangeRoleRequest}
     */
    ChangeRoleRequest: ChangeRoleRequest,
    /**
     * The CompleteUserRegistrationRequest model constructor.
     * @property {module:model/CompleteUserRegistrationRequest}
     */
    CompleteUserRegistrationRequest: CompleteUserRegistrationRequest,
    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country: Country,
    /**
     * The CreateGuidRequest model constructor.
     * @property {module:model/CreateGuidRequest}
     */
    CreateGuidRequest: CreateGuidRequest,
    /**
     * The CreateLabelledCollectionRequest model constructor.
     * @property {module:model/CreateLabelledCollectionRequest}
     */
    CreateLabelledCollectionRequest: CreateLabelledCollectionRequest,
    /**
     * The CreateLogisticCollectionRequest model constructor.
     * @property {module:model/CreateLogisticCollectionRequest}
     */
    CreateLogisticCollectionRequest: CreateLogisticCollectionRequest,
    /**
     * The CreateRoutingCollectionRequest model constructor.
     * @property {module:model/CreateRoutingCollectionRequest}
     */
    CreateRoutingCollectionRequest: CreateRoutingCollectionRequest,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The DocumentUpdate model constructor.
     * @property {module:model/DocumentUpdate}
     */
    DocumentUpdate: DocumentUpdate,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The Guid model constructor.
     * @property {module:model/Guid}
     */
    Guid: Guid,
    /**
     * The GuidAlias model constructor.
     * @property {module:model/GuidAlias}
     */
    GuidAlias: GuidAlias,
    /**
     * The GuidCollection model constructor.
     * @property {module:model/GuidCollection}
     */
    GuidCollection: GuidCollection,
    /**
     * The Id4n model constructor.
     * @property {module:model/Id4n}
     */
    Id4n: Id4n,
    /**
     * The Id4nPresentation model constructor.
     * @property {module:model/Id4nPresentation}
     */
    Id4nPresentation: Id4nPresentation,
    /**
     * The Id4nPresentationPaginatedResponse model constructor.
     * @property {module:model/Id4nPresentationPaginatedResponse}
     */
    Id4nPresentationPaginatedResponse: Id4nPresentationPaginatedResponse,
    /**
     * The InputStream model constructor.
     * @property {module:model/InputStream}
     */
    InputStream: InputStream,
    /**
     * The InputStreamResource model constructor.
     * @property {module:model/InputStreamResource}
     */
    InputStreamResource: InputStreamResource,
    /**
     * The ListOfId4ns model constructor.
     * @property {module:model/ListOfId4ns}
     */
    ListOfId4ns: ListOfId4ns,
    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization: Organization,
    /**
     * The OrganizationAddress model constructor.
     * @property {module:model/OrganizationAddress}
     */
    OrganizationAddress: OrganizationAddress,
    /**
     * The OrganizationUserInvitation model constructor.
     * @property {module:model/OrganizationUserInvitation}
     */
    OrganizationUserInvitation: OrganizationUserInvitation,
    /**
     * The OrganizationUserInvitationListRequest model constructor.
     * @property {module:model/OrganizationUserInvitationListRequest}
     */
    OrganizationUserInvitationListRequest: OrganizationUserInvitationListRequest,
    /**
     * The OwnedDocument model constructor.
     * @property {module:model/OwnedDocument}
     */
    OwnedDocument: OwnedDocument,
    /**
     * The PaginatedApiKeyResponse model constructor.
     * @property {module:model/PaginatedApiKeyResponse}
     */
    PaginatedApiKeyResponse: PaginatedApiKeyResponse,
    /**
     * The PaginatedCountryResponse model constructor.
     * @property {module:model/PaginatedCountryResponse}
     */
    PaginatedCountryResponse: PaginatedCountryResponse,
    /**
     * The PaginatedDocumentResponse model constructor.
     * @property {module:model/PaginatedDocumentResponse}
     */
    PaginatedDocumentResponse: PaginatedDocumentResponse,
    /**
     * The PaginatedGuidCollection model constructor.
     * @property {module:model/PaginatedGuidCollection}
     */
    PaginatedGuidCollection: PaginatedGuidCollection,
    /**
     * The PaginatedGuidResponse model constructor.
     * @property {module:model/PaginatedGuidResponse}
     */
    PaginatedGuidResponse: PaginatedGuidResponse,
    /**
     * The PaginatedOrganizationResponse model constructor.
     * @property {module:model/PaginatedOrganizationResponse}
     */
    PaginatedOrganizationResponse: PaginatedOrganizationResponse,
    /**
     * The PaginatedOwnedDocumentResponse model constructor.
     * @property {module:model/PaginatedOwnedDocumentResponse}
     */
    PaginatedOwnedDocumentResponse: PaginatedOwnedDocumentResponse,
    /**
     * The PaginatedResponseApiKeyPresentation model constructor.
     * @property {module:model/PaginatedResponseApiKeyPresentation}
     */
    PaginatedResponseApiKeyPresentation: PaginatedResponseApiKeyPresentation,
    /**
     * The PaginatedResponseApiKeyPrivilege model constructor.
     * @property {module:model/PaginatedResponseApiKeyPrivilege}
     */
    PaginatedResponseApiKeyPrivilege: PaginatedResponseApiKeyPrivilege,
    /**
     * The PaginatedResponseApiKeyPrivilegeInfo model constructor.
     * @property {module:model/PaginatedResponseApiKeyPrivilegeInfo}
     */
    PaginatedResponseApiKeyPrivilegeInfo: PaginatedResponseApiKeyPrivilegeInfo,
    /**
     * The PaginatedResponseCountry model constructor.
     * @property {module:model/PaginatedResponseCountry}
     */
    PaginatedResponseCountry: PaginatedResponseCountry,
    /**
     * The PaginatedResponseDocument model constructor.
     * @property {module:model/PaginatedResponseDocument}
     */
    PaginatedResponseDocument: PaginatedResponseDocument,
    /**
     * The PaginatedResponseGuid model constructor.
     * @property {module:model/PaginatedResponseGuid}
     */
    PaginatedResponseGuid: PaginatedResponseGuid,
    /**
     * The PaginatedResponseGuidCollection model constructor.
     * @property {module:model/PaginatedResponseGuidCollection}
     */
    PaginatedResponseGuidCollection: PaginatedResponseGuidCollection,
    /**
     * The PaginatedResponseId4nPresentation model constructor.
     * @property {module:model/PaginatedResponseId4nPresentation}
     */
    PaginatedResponseId4nPresentation: PaginatedResponseId4nPresentation,
    /**
     * The PaginatedResponseOrganization model constructor.
     * @property {module:model/PaginatedResponseOrganization}
     */
    PaginatedResponseOrganization: PaginatedResponseOrganization,
    /**
     * The PaginatedResponseOwnedDocument model constructor.
     * @property {module:model/PaginatedResponseOwnedDocument}
     */
    PaginatedResponseOwnedDocument: PaginatedResponseOwnedDocument,
    /**
     * The PaginatedResponseRole model constructor.
     * @property {module:model/PaginatedResponseRole}
     */
    PaginatedResponseRole: PaginatedResponseRole,
    /**
     * The PaginatedResponseUserPresentation model constructor.
     * @property {module:model/PaginatedResponseUserPresentation}
     */
    PaginatedResponseUserPresentation: PaginatedResponseUserPresentation,
    /**
     * The PaginatedResponseUserRoles model constructor.
     * @property {module:model/PaginatedResponseUserRoles}
     */
    PaginatedResponseUserRoles: PaginatedResponseUserRoles,
    /**
     * The PaginatedResponsestring model constructor.
     * @property {module:model/PaginatedResponsestring}
     */
    PaginatedResponsestring: PaginatedResponsestring,
    /**
     * The PaginatedStringResponse model constructor.
     * @property {module:model/PaginatedStringResponse}
     */
    PaginatedStringResponse: PaginatedStringResponse,
    /**
     * The PaginatedUserPresentationResponse model constructor.
     * @property {module:model/PaginatedUserPresentationResponse}
     */
    PaginatedUserPresentationResponse: PaginatedUserPresentationResponse,
    /**
     * The PaginatedUserRolesResponse model constructor.
     * @property {module:model/PaginatedUserRolesResponse}
     */
    PaginatedUserRolesResponse: PaginatedUserRolesResponse,
    /**
     * The PasswordResetRequest model constructor.
     * @property {module:model/PasswordResetRequest}
     */
    PasswordResetRequest: PasswordResetRequest,
    /**
     * The PasswordResetVerificationRequest model constructor.
     * @property {module:model/PasswordResetVerificationRequest}
     */
    PasswordResetVerificationRequest: PasswordResetVerificationRequest,
    /**
     * The PublicImagePresentation model constructor.
     * @property {module:model/PublicImagePresentation}
     */
    PublicImagePresentation: PublicImagePresentation,
    /**
     * The RegistrationVerificationTokenPresentation model constructor.
     * @property {module:model/RegistrationVerificationTokenPresentation}
     */
    RegistrationVerificationTokenPresentation: RegistrationVerificationTokenPresentation,
    /**
     * The RemoveApiKeyPrivilegeRequest model constructor.
     * @property {module:model/RemoveApiKeyPrivilegeRequest}
     */
    RemoveApiKeyPrivilegeRequest: RemoveApiKeyPrivilegeRequest,
    /**
     * The ResponseEntity model constructor.
     * @property {module:model/ResponseEntity}
     */
    ResponseEntity: ResponseEntity,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The RoleResponse model constructor.
     * @property {module:model/RoleResponse}
     */
    RoleResponse: RoleResponse,
    /**
     * The Route model constructor.
     * @property {module:model/Route}
     */
    Route: Route,
    /**
     * The RoutingFile model constructor.
     * @property {module:model/RoutingFile}
     */
    RoutingFile: RoutingFile,
    /**
     * The RoutingFileRequest model constructor.
     * @property {module:model/RoutingFileRequest}
     */
    RoutingFileRequest: RoutingFileRequest,
    /**
     * The RoutingOptions model constructor.
     * @property {module:model/RoutingOptions}
     */
    RoutingOptions: RoutingOptions,
    /**
     * The ServiceCosts model constructor.
     * @property {module:model/ServiceCosts}
     */
    ServiceCosts: ServiceCosts,
    /**
     * The SimpleMessageResponse model constructor.
     * @property {module:model/SimpleMessageResponse}
     */
    SimpleMessageResponse: SimpleMessageResponse,
    /**
     * The Timestamp model constructor.
     * @property {module:model/Timestamp}
     */
    Timestamp: Timestamp,
    /**
     * The URI model constructor.
     * @property {module:model/URI}
     */
    URI: URI,
    /**
     * The URL model constructor.
     * @property {module:model/URL}
     */
    URL: URL,
    /**
     * The UserPresentation model constructor.
     * @property {module:model/UserPresentation}
     */
    UserPresentation: UserPresentation,
    /**
     * The UserRegistrationRequest model constructor.
     * @property {module:model/UserRegistrationRequest}
     */
    UserRegistrationRequest: UserRegistrationRequest,
    /**
     * The UserRegistrationResponse model constructor.
     * @property {module:model/UserRegistrationResponse}
     */
    UserRegistrationResponse: UserRegistrationResponse,
    /**
     * The UserRoles model constructor.
     * @property {module:model/UserRoles}
     */
    UserRoles: UserRoles,
    /**
     * The Visibility model constructor.
     * @property {module:model/Visibility}
     */
    Visibility: Visibility,
    /**
     * The VisibilityUpdate model constructor.
     * @property {module:model/VisibilityUpdate}
     */
    VisibilityUpdate: VisibilityUpdate,
    /**
     * The WhoIsResponse model constructor.
     * @property {module:model/WhoIsResponse}
     */
    WhoIsResponse: WhoIsResponse,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AliasApi service constructor.
     * @property {module:api/AliasApi}
     */
    AliasApi: AliasApi,
    /**
     * The ApiKeysApi service constructor.
     * @property {module:api/ApiKeysApi}
     */
    ApiKeysApi: ApiKeysApi,
    /**
     * The BillingApi service constructor.
     * @property {module:api/BillingApi}
     */
    BillingApi: BillingApi,
    /**
     * The CollectionsApi service constructor.
     * @property {module:api/CollectionsApi}
     */
    CollectionsApi: CollectionsApi,
    /**
     * The GUIDsApi service constructor.
     * @property {module:api/GUIDsApi}
     */
    GUIDsApi: GUIDsApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The MetaInformationApi service constructor.
     * @property {module:api/MetaInformationApi}
     */
    MetaInformationApi: MetaInformationApi,
    /**
     * The OrganizationsApi service constructor.
     * @property {module:api/OrganizationsApi}
     */
    OrganizationsApi: OrganizationsApi,
    /**
     * The PublicServicesApi service constructor.
     * @property {module:api/PublicServicesApi}
     */
    PublicServicesApi: PublicServicesApi,
    /**
     * The RoutingApi service constructor.
     * @property {module:api/RoutingApi}
     */
    RoutingApi: RoutingApi,
    /**
     * The StorageApi service constructor.
     * @property {module:api/StorageApi}
     */
    StorageApi: StorageApi,
    /**
     * The WhoIsApi service constructor.
     * @property {module:api/WhoIsApi}
     */
    WhoIsApi: WhoIsApi
  };

  return exports;
}));
