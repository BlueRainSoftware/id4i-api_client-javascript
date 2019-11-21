/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.7
 * Contact: info@bluerain.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountCredentials', 'model/AddApiKeyPrivilegeRequest', 'model/AddPartnerRequest', 'model/ApiError', 'model/ApiKeyChangeRequest', 'model/ApiKeyCreationRequest', 'model/ApiKeyPresentation', 'model/ApiKeyPrivilege', 'model/ApiKeyPrivilegeInfo', 'model/AppInfoPresentation', 'model/BillingPosition', 'model/ChangeLogEntry', 'model/ChangeRoleRequest', 'model/CompleteUserRegistrationRequest', 'model/Country', 'model/CreateCollectionRequest', 'model/CreateGuidRequest', 'model/Document', 'model/DocumentUpdate', 'model/Guid', 'model/GuidAlias', 'model/GuidCollection', 'model/HistoryItem', 'model/HistoryItemUpdate', 'model/Id4n', 'model/Id4nPresentation', 'model/ImportGS1CodesRequest', 'model/ListOfGS1s', 'model/ListOfId4ns', 'model/Organization', 'model/OrganizationAddress', 'model/OrganizationUpdate', 'model/OrganizationUserInvitation', 'model/OrganizationUserInvitationListRequest', 'model/PaginatedResponseOfApiKeyPresentation', 'model/PaginatedResponseOfApiKeyPrivilege', 'model/PaginatedResponseOfApiKeyPrivilegeInfo', 'model/PaginatedResponseOfChangeLogEntry', 'model/PaginatedResponseOfCountry', 'model/PaginatedResponseOfDocument', 'model/PaginatedResponseOfGuid', 'model/PaginatedResponseOfGuidCollection', 'model/PaginatedResponseOfHistoryItem', 'model/PaginatedResponseOfId4nPresentation', 'model/PaginatedResponseOfOrganization', 'model/PaginatedResponseOfPartnerOrganization', 'model/PaginatedResponseOfRole', 'model/PaginatedResponseOfUserPresentation', 'model/PaginatedResponseOfUserRoles', 'model/PaginatedResponseOfstring', 'model/PartnerOrganization', 'model/PasswordResetRequest', 'model/PasswordResetVerificationRequest', 'model/PublicImagePresentation', 'model/QueuePresentation', 'model/QueueUpdateRequest', 'model/RegistrationVerificationTokenPresentation', 'model/RemoveApiKeyPrivilegeRequest', 'model/RemovePartnerRequest', 'model/Role', 'model/Route', 'model/RoutingFile', 'model/RoutingFileRequest', 'model/RoutingOptions', 'model/ServiceCosts', 'model/SimpleMessageResponse', 'model/TransferReceiveInfo', 'model/TransferSendInfo', 'model/UserPresentation', 'model/UserRegistrationRequest', 'model/UserRegistrationResponse', 'model/UserRoles', 'model/Visibility', 'model/VisibilityUpdate', 'model/WhoIsResponse', 'api/AccountsApi', 'api/AliasApi', 'api/ApiKeysApi', 'api/AuditingApi', 'api/BillingApi', 'api/CollectionsApi', 'api/GuidsApi', 'api/HistoryApi', 'api/ImagesApi', 'api/MessagingApi', 'api/MetaInformationApi', 'api/OrganizationsApi', 'api/PublicServicesApi', 'api/RoutingApi', 'api/StorageApi', 'api/TransferApi', 'api/WhoIsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountCredentials'), require('./model/AddApiKeyPrivilegeRequest'), require('./model/AddPartnerRequest'), require('./model/ApiError'), require('./model/ApiKeyChangeRequest'), require('./model/ApiKeyCreationRequest'), require('./model/ApiKeyPresentation'), require('./model/ApiKeyPrivilege'), require('./model/ApiKeyPrivilegeInfo'), require('./model/AppInfoPresentation'), require('./model/BillingPosition'), require('./model/ChangeLogEntry'), require('./model/ChangeRoleRequest'), require('./model/CompleteUserRegistrationRequest'), require('./model/Country'), require('./model/CreateCollectionRequest'), require('./model/CreateGuidRequest'), require('./model/Document'), require('./model/DocumentUpdate'), require('./model/Guid'), require('./model/GuidAlias'), require('./model/GuidCollection'), require('./model/HistoryItem'), require('./model/HistoryItemUpdate'), require('./model/Id4n'), require('./model/Id4nPresentation'), require('./model/ImportGS1CodesRequest'), require('./model/ListOfGS1s'), require('./model/ListOfId4ns'), require('./model/Organization'), require('./model/OrganizationAddress'), require('./model/OrganizationUpdate'), require('./model/OrganizationUserInvitation'), require('./model/OrganizationUserInvitationListRequest'), require('./model/PaginatedResponseOfApiKeyPresentation'), require('./model/PaginatedResponseOfApiKeyPrivilege'), require('./model/PaginatedResponseOfApiKeyPrivilegeInfo'), require('./model/PaginatedResponseOfChangeLogEntry'), require('./model/PaginatedResponseOfCountry'), require('./model/PaginatedResponseOfDocument'), require('./model/PaginatedResponseOfGuid'), require('./model/PaginatedResponseOfGuidCollection'), require('./model/PaginatedResponseOfHistoryItem'), require('./model/PaginatedResponseOfId4nPresentation'), require('./model/PaginatedResponseOfOrganization'), require('./model/PaginatedResponseOfPartnerOrganization'), require('./model/PaginatedResponseOfRole'), require('./model/PaginatedResponseOfUserPresentation'), require('./model/PaginatedResponseOfUserRoles'), require('./model/PaginatedResponseOfstring'), require('./model/PartnerOrganization'), require('./model/PasswordResetRequest'), require('./model/PasswordResetVerificationRequest'), require('./model/PublicImagePresentation'), require('./model/QueuePresentation'), require('./model/QueueUpdateRequest'), require('./model/RegistrationVerificationTokenPresentation'), require('./model/RemoveApiKeyPrivilegeRequest'), require('./model/RemovePartnerRequest'), require('./model/Role'), require('./model/Route'), require('./model/RoutingFile'), require('./model/RoutingFileRequest'), require('./model/RoutingOptions'), require('./model/ServiceCosts'), require('./model/SimpleMessageResponse'), require('./model/TransferReceiveInfo'), require('./model/TransferSendInfo'), require('./model/UserPresentation'), require('./model/UserRegistrationRequest'), require('./model/UserRegistrationResponse'), require('./model/UserRoles'), require('./model/Visibility'), require('./model/VisibilityUpdate'), require('./model/WhoIsResponse'), require('./api/AccountsApi'), require('./api/AliasApi'), require('./api/ApiKeysApi'), require('./api/AuditingApi'), require('./api/BillingApi'), require('./api/CollectionsApi'), require('./api/GuidsApi'), require('./api/HistoryApi'), require('./api/ImagesApi'), require('./api/MessagingApi'), require('./api/MetaInformationApi'), require('./api/OrganizationsApi'), require('./api/PublicServicesApi'), require('./api/RoutingApi'), require('./api/StorageApi'), require('./api/TransferApi'), require('./api/WhoIsApi'));
  }
}(function(ApiClient, AccountCredentials, AddApiKeyPrivilegeRequest, AddPartnerRequest, ApiError, ApiKeyChangeRequest, ApiKeyCreationRequest, ApiKeyPresentation, ApiKeyPrivilege, ApiKeyPrivilegeInfo, AppInfoPresentation, BillingPosition, ChangeLogEntry, ChangeRoleRequest, CompleteUserRegistrationRequest, Country, CreateCollectionRequest, CreateGuidRequest, Document, DocumentUpdate, Guid, GuidAlias, GuidCollection, HistoryItem, HistoryItemUpdate, Id4n, Id4nPresentation, ImportGS1CodesRequest, ListOfGS1s, ListOfId4ns, Organization, OrganizationAddress, OrganizationUpdate, OrganizationUserInvitation, OrganizationUserInvitationListRequest, PaginatedResponseOfApiKeyPresentation, PaginatedResponseOfApiKeyPrivilege, PaginatedResponseOfApiKeyPrivilegeInfo, PaginatedResponseOfChangeLogEntry, PaginatedResponseOfCountry, PaginatedResponseOfDocument, PaginatedResponseOfGuid, PaginatedResponseOfGuidCollection, PaginatedResponseOfHistoryItem, PaginatedResponseOfId4nPresentation, PaginatedResponseOfOrganization, PaginatedResponseOfPartnerOrganization, PaginatedResponseOfRole, PaginatedResponseOfUserPresentation, PaginatedResponseOfUserRoles, PaginatedResponseOfstring, PartnerOrganization, PasswordResetRequest, PasswordResetVerificationRequest, PublicImagePresentation, QueuePresentation, QueueUpdateRequest, RegistrationVerificationTokenPresentation, RemoveApiKeyPrivilegeRequest, RemovePartnerRequest, Role, Route, RoutingFile, RoutingFileRequest, RoutingOptions, ServiceCosts, SimpleMessageResponse, TransferReceiveInfo, TransferSendInfo, UserPresentation, UserRegistrationRequest, UserRegistrationResponse, UserRoles, Visibility, VisibilityUpdate, WhoIsResponse, AccountsApi, AliasApi, ApiKeysApi, AuditingApi, BillingApi, CollectionsApi, GuidsApi, HistoryApi, ImagesApi, MessagingApi, MetaInformationApi, OrganizationsApi, PublicServicesApi, RoutingApi, StorageApi, TransferApi, WhoIsApi) {
  'use strict';

  /**
   * ID4i_HTTP_API.<br>
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
   * @version 0.9.7
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
     * The AddPartnerRequest model constructor.
     * @property {module:model/AddPartnerRequest}
     */
    AddPartnerRequest: AddPartnerRequest,
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
     * The ChangeLogEntry model constructor.
     * @property {module:model/ChangeLogEntry}
     */
    ChangeLogEntry: ChangeLogEntry,
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
     * The CreateCollectionRequest model constructor.
     * @property {module:model/CreateCollectionRequest}
     */
    CreateCollectionRequest: CreateCollectionRequest,
    /**
     * The CreateGuidRequest model constructor.
     * @property {module:model/CreateGuidRequest}
     */
    CreateGuidRequest: CreateGuidRequest,
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
     * The HistoryItem model constructor.
     * @property {module:model/HistoryItem}
     */
    HistoryItem: HistoryItem,
    /**
     * The HistoryItemUpdate model constructor.
     * @property {module:model/HistoryItemUpdate}
     */
    HistoryItemUpdate: HistoryItemUpdate,
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
     * The ImportGS1CodesRequest model constructor.
     * @property {module:model/ImportGS1CodesRequest}
     */
    ImportGS1CodesRequest: ImportGS1CodesRequest,
    /**
     * The ListOfGS1s model constructor.
     * @property {module:model/ListOfGS1s}
     */
    ListOfGS1s: ListOfGS1s,
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
     * The OrganizationUpdate model constructor.
     * @property {module:model/OrganizationUpdate}
     */
    OrganizationUpdate: OrganizationUpdate,
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
     * The PaginatedResponseOfApiKeyPresentation model constructor.
     * @property {module:model/PaginatedResponseOfApiKeyPresentation}
     */
    PaginatedResponseOfApiKeyPresentation: PaginatedResponseOfApiKeyPresentation,
    /**
     * The PaginatedResponseOfApiKeyPrivilege model constructor.
     * @property {module:model/PaginatedResponseOfApiKeyPrivilege}
     */
    PaginatedResponseOfApiKeyPrivilege: PaginatedResponseOfApiKeyPrivilege,
    /**
     * The PaginatedResponseOfApiKeyPrivilegeInfo model constructor.
     * @property {module:model/PaginatedResponseOfApiKeyPrivilegeInfo}
     */
    PaginatedResponseOfApiKeyPrivilegeInfo: PaginatedResponseOfApiKeyPrivilegeInfo,
    /**
     * The PaginatedResponseOfChangeLogEntry model constructor.
     * @property {module:model/PaginatedResponseOfChangeLogEntry}
     */
    PaginatedResponseOfChangeLogEntry: PaginatedResponseOfChangeLogEntry,
    /**
     * The PaginatedResponseOfCountry model constructor.
     * @property {module:model/PaginatedResponseOfCountry}
     */
    PaginatedResponseOfCountry: PaginatedResponseOfCountry,
    /**
     * The PaginatedResponseOfDocument model constructor.
     * @property {module:model/PaginatedResponseOfDocument}
     */
    PaginatedResponseOfDocument: PaginatedResponseOfDocument,
    /**
     * The PaginatedResponseOfGuid model constructor.
     * @property {module:model/PaginatedResponseOfGuid}
     */
    PaginatedResponseOfGuid: PaginatedResponseOfGuid,
    /**
     * The PaginatedResponseOfGuidCollection model constructor.
     * @property {module:model/PaginatedResponseOfGuidCollection}
     */
    PaginatedResponseOfGuidCollection: PaginatedResponseOfGuidCollection,
    /**
     * The PaginatedResponseOfHistoryItem model constructor.
     * @property {module:model/PaginatedResponseOfHistoryItem}
     */
    PaginatedResponseOfHistoryItem: PaginatedResponseOfHistoryItem,
    /**
     * The PaginatedResponseOfId4nPresentation model constructor.
     * @property {module:model/PaginatedResponseOfId4nPresentation}
     */
    PaginatedResponseOfId4nPresentation: PaginatedResponseOfId4nPresentation,
    /**
     * The PaginatedResponseOfOrganization model constructor.
     * @property {module:model/PaginatedResponseOfOrganization}
     */
    PaginatedResponseOfOrganization: PaginatedResponseOfOrganization,
    /**
     * The PaginatedResponseOfPartnerOrganization model constructor.
     * @property {module:model/PaginatedResponseOfPartnerOrganization}
     */
    PaginatedResponseOfPartnerOrganization: PaginatedResponseOfPartnerOrganization,
    /**
     * The PaginatedResponseOfRole model constructor.
     * @property {module:model/PaginatedResponseOfRole}
     */
    PaginatedResponseOfRole: PaginatedResponseOfRole,
    /**
     * The PaginatedResponseOfUserPresentation model constructor.
     * @property {module:model/PaginatedResponseOfUserPresentation}
     */
    PaginatedResponseOfUserPresentation: PaginatedResponseOfUserPresentation,
    /**
     * The PaginatedResponseOfUserRoles model constructor.
     * @property {module:model/PaginatedResponseOfUserRoles}
     */
    PaginatedResponseOfUserRoles: PaginatedResponseOfUserRoles,
    /**
     * The PaginatedResponseOfstring model constructor.
     * @property {module:model/PaginatedResponseOfstring}
     */
    PaginatedResponseOfstring: PaginatedResponseOfstring,
    /**
     * The PartnerOrganization model constructor.
     * @property {module:model/PartnerOrganization}
     */
    PartnerOrganization: PartnerOrganization,
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
     * The QueuePresentation model constructor.
     * @property {module:model/QueuePresentation}
     */
    QueuePresentation: QueuePresentation,
    /**
     * The QueueUpdateRequest model constructor.
     * @property {module:model/QueueUpdateRequest}
     */
    QueueUpdateRequest: QueueUpdateRequest,
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
     * The RemovePartnerRequest model constructor.
     * @property {module:model/RemovePartnerRequest}
     */
    RemovePartnerRequest: RemovePartnerRequest,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
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
     * The TransferReceiveInfo model constructor.
     * @property {module:model/TransferReceiveInfo}
     */
    TransferReceiveInfo: TransferReceiveInfo,
    /**
     * The TransferSendInfo model constructor.
     * @property {module:model/TransferSendInfo}
     */
    TransferSendInfo: TransferSendInfo,
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
     * The AuditingApi service constructor.
     * @property {module:api/AuditingApi}
     */
    AuditingApi: AuditingApi,
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
     * The GuidsApi service constructor.
     * @property {module:api/GuidsApi}
     */
    GuidsApi: GuidsApi,
    /**
     * The HistoryApi service constructor.
     * @property {module:api/HistoryApi}
     */
    HistoryApi: HistoryApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The MessagingApi service constructor.
     * @property {module:api/MessagingApi}
     */
    MessagingApi: MessagingApi,
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
     * The TransferApi service constructor.
     * @property {module:api/TransferApi}
     */
    TransferApi: TransferApi,
    /**
     * The WhoIsApi service constructor.
     * @property {module:api/WhoIsApi}
     */
    WhoIsApi: WhoIsApi
  };

  return exports;
}));
