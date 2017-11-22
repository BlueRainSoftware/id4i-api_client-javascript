/**
 * ID4i API
 * HTTP API Documentation for ID4i
 *
 * OpenAPI spec version: 0.0.1-alpha
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
    define(['ApiClient', 'model/AccountCredentials', 'model/ApiError', 'model/AppInfoPresentation', 'model/ChangeRoleRequest', 'model/ChangeUserRoleRequest', 'model/CreateGuidRequest', 'model/CreateLabelledCollectionRequest', 'model/CreateLogisticCollectionRequest', 'model/CreateRoutingCollectionRequest', 'model/GuidCollection', 'model/Id4n', 'model/ListOfId4ns', 'model/Organization', 'model/OrganizationAddress', 'model/PaginatedResponseGuidCollection', 'model/PaginatedResponseOrganization', 'model/PaginatedResponseRole', 'model/PaginatedResponsestring', 'model/PaginatedUserPresentationResponse', 'model/PaginatedUserRolesResponse', 'model/PasswordResetRequest', 'model/PasswordResetVerificationRequest', 'model/RegistrationVerificationTokenPresentation', 'model/ResponseEntity', 'model/Role', 'model/RoleResponse', 'model/Route', 'model/RoutingFile', 'model/RoutingFileRequest', 'model/RoutingOptions', 'model/SimpleMessageResponse', 'model/UserPresentation', 'model/UserRegistrationRequest', 'model/UserRegistrationResponse', 'model/UserRoles', 'api/AccountcontrollerApi', 'api/AppinfocontrollerApi', 'api/CollectioncontrollerApi', 'api/DefaultApi', 'api/GocontrollerApi', 'api/GuidcontrollerApi', 'api/LabelledcollectioncontrollerApi', 'api/LogisticcollectioncontrollerApi', 'api/OrganizationaddresscontrollerApi', 'api/OrganizationcontrollerApi', 'api/OrganizationscollectioncontrollerApi', 'api/OrganizationusercontrollerApi', 'api/PublicimagecontrollerApi', 'api/RolecontrollerApi', 'api/RoutingcollectioncontrollerApi', 'api/RoutingcontrollerApi', 'api/UserorganizationscontrollerApi', 'api/UserscontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountCredentials'), require('./model/ApiError'), require('./model/AppInfoPresentation'), require('./model/ChangeRoleRequest'), require('./model/ChangeUserRoleRequest'), require('./model/CreateGuidRequest'), require('./model/CreateLabelledCollectionRequest'), require('./model/CreateLogisticCollectionRequest'), require('./model/CreateRoutingCollectionRequest'), require('./model/GuidCollection'), require('./model/Id4n'), require('./model/ListOfId4ns'), require('./model/Organization'), require('./model/OrganizationAddress'), require('./model/PaginatedResponseGuidCollection'), require('./model/PaginatedResponseOrganization'), require('./model/PaginatedResponseRole'), require('./model/PaginatedResponsestring'), require('./model/PaginatedUserPresentationResponse'), require('./model/PaginatedUserRolesResponse'), require('./model/PasswordResetRequest'), require('./model/PasswordResetVerificationRequest'), require('./model/RegistrationVerificationTokenPresentation'), require('./model/ResponseEntity'), require('./model/Role'), require('./model/RoleResponse'), require('./model/Route'), require('./model/RoutingFile'), require('./model/RoutingFileRequest'), require('./model/RoutingOptions'), require('./model/SimpleMessageResponse'), require('./model/UserPresentation'), require('./model/UserRegistrationRequest'), require('./model/UserRegistrationResponse'), require('./model/UserRoles'), require('./api/AccountcontrollerApi'), require('./api/AppinfocontrollerApi'), require('./api/CollectioncontrollerApi'), require('./api/DefaultApi'), require('./api/GocontrollerApi'), require('./api/GuidcontrollerApi'), require('./api/LabelledcollectioncontrollerApi'), require('./api/LogisticcollectioncontrollerApi'), require('./api/OrganizationaddresscontrollerApi'), require('./api/OrganizationcontrollerApi'), require('./api/OrganizationscollectioncontrollerApi'), require('./api/OrganizationusercontrollerApi'), require('./api/PublicimagecontrollerApi'), require('./api/RolecontrollerApi'), require('./api/RoutingcollectioncontrollerApi'), require('./api/RoutingcontrollerApi'), require('./api/UserorganizationscontrollerApi'), require('./api/UserscontrollerApi'));
  }
}(function(ApiClient, AccountCredentials, ApiError, AppInfoPresentation, ChangeRoleRequest, ChangeUserRoleRequest, CreateGuidRequest, CreateLabelledCollectionRequest, CreateLogisticCollectionRequest, CreateRoutingCollectionRequest, GuidCollection, Id4n, ListOfId4ns, Organization, OrganizationAddress, PaginatedResponseGuidCollection, PaginatedResponseOrganization, PaginatedResponseRole, PaginatedResponsestring, PaginatedUserPresentationResponse, PaginatedUserRolesResponse, PasswordResetRequest, PasswordResetVerificationRequest, RegistrationVerificationTokenPresentation, ResponseEntity, Role, RoleResponse, Route, RoutingFile, RoutingFileRequest, RoutingOptions, SimpleMessageResponse, UserPresentation, UserRegistrationRequest, UserRegistrationResponse, UserRoles, AccountcontrollerApi, AppinfocontrollerApi, CollectioncontrollerApi, DefaultApi, GocontrollerApi, GuidcontrollerApi, LabelledcollectioncontrollerApi, LogisticcollectioncontrollerApi, OrganizationaddresscontrollerApi, OrganizationcontrollerApi, OrganizationscollectioncontrollerApi, OrganizationusercontrollerApi, PublicimagecontrollerApi, RolecontrollerApi, RoutingcollectioncontrollerApi, RoutingcontrollerApi, UserorganizationscontrollerApi, UserscontrollerApi) {
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
   * @version 0.0.1-alpha
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
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError: ApiError,
    /**
     * The AppInfoPresentation model constructor.
     * @property {module:model/AppInfoPresentation}
     */
    AppInfoPresentation: AppInfoPresentation,
    /**
     * The ChangeRoleRequest model constructor.
     * @property {module:model/ChangeRoleRequest}
     */
    ChangeRoleRequest: ChangeRoleRequest,
    /**
     * The ChangeUserRoleRequest model constructor.
     * @property {module:model/ChangeUserRoleRequest}
     */
    ChangeUserRoleRequest: ChangeUserRoleRequest,
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
     * The PaginatedResponseGuidCollection model constructor.
     * @property {module:model/PaginatedResponseGuidCollection}
     */
    PaginatedResponseGuidCollection: PaginatedResponseGuidCollection,
    /**
     * The PaginatedResponseOrganization model constructor.
     * @property {module:model/PaginatedResponseOrganization}
     */
    PaginatedResponseOrganization: PaginatedResponseOrganization,
    /**
     * The PaginatedResponseRole model constructor.
     * @property {module:model/PaginatedResponseRole}
     */
    PaginatedResponseRole: PaginatedResponseRole,
    /**
     * The PaginatedResponsestring model constructor.
     * @property {module:model/PaginatedResponsestring}
     */
    PaginatedResponsestring: PaginatedResponsestring,
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
     * The RegistrationVerificationTokenPresentation model constructor.
     * @property {module:model/RegistrationVerificationTokenPresentation}
     */
    RegistrationVerificationTokenPresentation: RegistrationVerificationTokenPresentation,
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
     * The SimpleMessageResponse model constructor.
     * @property {module:model/SimpleMessageResponse}
     */
    SimpleMessageResponse: SimpleMessageResponse,
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
     * The AccountcontrollerApi service constructor.
     * @property {module:api/AccountcontrollerApi}
     */
    AccountcontrollerApi: AccountcontrollerApi,
    /**
     * The AppinfocontrollerApi service constructor.
     * @property {module:api/AppinfocontrollerApi}
     */
    AppinfocontrollerApi: AppinfocontrollerApi,
    /**
     * The CollectioncontrollerApi service constructor.
     * @property {module:api/CollectioncontrollerApi}
     */
    CollectioncontrollerApi: CollectioncontrollerApi,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi,
    /**
     * The GocontrollerApi service constructor.
     * @property {module:api/GocontrollerApi}
     */
    GocontrollerApi: GocontrollerApi,
    /**
     * The GuidcontrollerApi service constructor.
     * @property {module:api/GuidcontrollerApi}
     */
    GuidcontrollerApi: GuidcontrollerApi,
    /**
     * The LabelledcollectioncontrollerApi service constructor.
     * @property {module:api/LabelledcollectioncontrollerApi}
     */
    LabelledcollectioncontrollerApi: LabelledcollectioncontrollerApi,
    /**
     * The LogisticcollectioncontrollerApi service constructor.
     * @property {module:api/LogisticcollectioncontrollerApi}
     */
    LogisticcollectioncontrollerApi: LogisticcollectioncontrollerApi,
    /**
     * The OrganizationaddresscontrollerApi service constructor.
     * @property {module:api/OrganizationaddresscontrollerApi}
     */
    OrganizationaddresscontrollerApi: OrganizationaddresscontrollerApi,
    /**
     * The OrganizationcontrollerApi service constructor.
     * @property {module:api/OrganizationcontrollerApi}
     */
    OrganizationcontrollerApi: OrganizationcontrollerApi,
    /**
     * The OrganizationscollectioncontrollerApi service constructor.
     * @property {module:api/OrganizationscollectioncontrollerApi}
     */
    OrganizationscollectioncontrollerApi: OrganizationscollectioncontrollerApi,
    /**
     * The OrganizationusercontrollerApi service constructor.
     * @property {module:api/OrganizationusercontrollerApi}
     */
    OrganizationusercontrollerApi: OrganizationusercontrollerApi,
    /**
     * The PublicimagecontrollerApi service constructor.
     * @property {module:api/PublicimagecontrollerApi}
     */
    PublicimagecontrollerApi: PublicimagecontrollerApi,
    /**
     * The RolecontrollerApi service constructor.
     * @property {module:api/RolecontrollerApi}
     */
    RolecontrollerApi: RolecontrollerApi,
    /**
     * The RoutingcollectioncontrollerApi service constructor.
     * @property {module:api/RoutingcollectioncontrollerApi}
     */
    RoutingcollectioncontrollerApi: RoutingcollectioncontrollerApi,
    /**
     * The RoutingcontrollerApi service constructor.
     * @property {module:api/RoutingcontrollerApi}
     */
    RoutingcontrollerApi: RoutingcontrollerApi,
    /**
     * The UserorganizationscontrollerApi service constructor.
     * @property {module:api/UserorganizationscontrollerApi}
     */
    UserorganizationscontrollerApi: UserorganizationscontrollerApi,
    /**
     * The UserscontrollerApi service constructor.
     * @property {module:api/UserscontrollerApi}
     */
    UserscontrollerApi: UserscontrollerApi
  };

  return exports;
}));
