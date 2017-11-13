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
    define(['ApiClient', 'model/AccountCredentials', 'model/AddGuidsToCollectionRequest', 'model/ApiError', 'model/AppInfoPresentation', 'model/CreateLabelledCollectionRequest', 'model/CreateLogisticCollectionRequest', 'model/CreateRoutingCollectionRequest', 'model/Organization', 'model/OrganizationAddress', 'model/PasswordResetRequest', 'model/PasswordResetVerificationRequest', 'model/RegisterObjectsRequest', 'model/RegistrationVerificationTokenPresentation', 'model/ResponseEntity', 'model/Route', 'model/RoutingFile', 'model/RoutingFileRequest', 'model/RoutingOptions', 'model/SimpleMessageResponse', 'model/UserPresentation', 'model/UserRegistrationRequest', 'model/UserRegistrationResponse', 'api/AccountcontrollerApi', 'api/AppinfocontrollerApi', 'api/CollectioncontrollerApi', 'api/DefaultApi', 'api/Id4ierrorcontrollerApi', 'api/LabelledcollectioncontrollerApi', 'api/LogisticcollectioncontrollerApi', 'api/OrganizationaddresscontrollerApi', 'api/OrganizationcontrollerApi', 'api/PublicimagecontrollerApi', 'api/RegisteredobjectcontrollerApi', 'api/RoutingcollectioncontrollerApi', 'api/RoutingcontrollerApi', 'api/UsercontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccountCredentials'), require('./model/AddGuidsToCollectionRequest'), require('./model/ApiError'), require('./model/AppInfoPresentation'), require('./model/CreateLabelledCollectionRequest'), require('./model/CreateLogisticCollectionRequest'), require('./model/CreateRoutingCollectionRequest'), require('./model/Organization'), require('./model/OrganizationAddress'), require('./model/PasswordResetRequest'), require('./model/PasswordResetVerificationRequest'), require('./model/RegisterObjectsRequest'), require('./model/RegistrationVerificationTokenPresentation'), require('./model/ResponseEntity'), require('./model/Route'), require('./model/RoutingFile'), require('./model/RoutingFileRequest'), require('./model/RoutingOptions'), require('./model/SimpleMessageResponse'), require('./model/UserPresentation'), require('./model/UserRegistrationRequest'), require('./model/UserRegistrationResponse'), require('./api/AccountcontrollerApi'), require('./api/AppinfocontrollerApi'), require('./api/CollectioncontrollerApi'), require('./api/DefaultApi'), require('./api/Id4ierrorcontrollerApi'), require('./api/LabelledcollectioncontrollerApi'), require('./api/LogisticcollectioncontrollerApi'), require('./api/OrganizationaddresscontrollerApi'), require('./api/OrganizationcontrollerApi'), require('./api/PublicimagecontrollerApi'), require('./api/RegisteredobjectcontrollerApi'), require('./api/RoutingcollectioncontrollerApi'), require('./api/RoutingcontrollerApi'), require('./api/UsercontrollerApi'));
  }
}(function(ApiClient, AccountCredentials, AddGuidsToCollectionRequest, ApiError, AppInfoPresentation, CreateLabelledCollectionRequest, CreateLogisticCollectionRequest, CreateRoutingCollectionRequest, Organization, OrganizationAddress, PasswordResetRequest, PasswordResetVerificationRequest, RegisterObjectsRequest, RegistrationVerificationTokenPresentation, ResponseEntity, Route, RoutingFile, RoutingFileRequest, RoutingOptions, SimpleMessageResponse, UserPresentation, UserRegistrationRequest, UserRegistrationResponse, AccountcontrollerApi, AppinfocontrollerApi, CollectioncontrollerApi, DefaultApi, Id4ierrorcontrollerApi, LabelledcollectioncontrollerApi, LogisticcollectioncontrollerApi, OrganizationaddresscontrollerApi, OrganizationcontrollerApi, PublicimagecontrollerApi, RegisteredobjectcontrollerApi, RoutingcollectioncontrollerApi, RoutingcontrollerApi, UsercontrollerApi) {
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
     * The AddGuidsToCollectionRequest model constructor.
     * @property {module:model/AddGuidsToCollectionRequest}
     */
    AddGuidsToCollectionRequest: AddGuidsToCollectionRequest,
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
     * The RegisterObjectsRequest model constructor.
     * @property {module:model/RegisterObjectsRequest}
     */
    RegisterObjectsRequest: RegisterObjectsRequest,
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
     * The Id4ierrorcontrollerApi service constructor.
     * @property {module:api/Id4ierrorcontrollerApi}
     */
    Id4ierrorcontrollerApi: Id4ierrorcontrollerApi,
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
     * The PublicimagecontrollerApi service constructor.
     * @property {module:api/PublicimagecontrollerApi}
     */
    PublicimagecontrollerApi: PublicimagecontrollerApi,
    /**
     * The RegisteredobjectcontrollerApi service constructor.
     * @property {module:api/RegisteredobjectcontrollerApi}
     */
    RegisteredobjectcontrollerApi: RegisteredobjectcontrollerApi,
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
     * The UsercontrollerApi service constructor.
     * @property {module:api/UsercontrollerApi}
     */
    UsercontrollerApi: UsercontrollerApi
  };

  return exports;
}));
