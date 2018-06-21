/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.8.0
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiError'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.ApiError = factory(root.Id4iApi.ApiClient, root.Id4iApi.ApiError);
  }
}(this, function(ApiClient, ApiError) {
  'use strict';




  /**
   * The ApiError model module.
   * @module model/ApiError
   * @version 0.8.0
   */

  /**
   * Constructs a new <code>ApiError</code>.
   * @alias module:model/ApiError
   * @class
   * @param code {module:model/ApiError.CodeEnum} 
   * @param errorList {Array.<module:model/ApiError>} 
   * @param message {String} 
   * @param errorId {String} 
   */
  var exports = function(code, errorList, message, errorId) {
    var _this = this;

    _this['code'] = code;
    _this['errorList'] = errorList;
    _this['message'] = message;
    _this['errorId'] = errorId;
  };

  /**
   * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiError} obj Optional instance to populate.
   * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('errorList')) {
        obj['errorList'] = ApiClient.convertToType(data['errorList'], [ApiError]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('errorId')) {
        obj['errorId'] = ApiClient.convertToType(data['errorId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ApiError.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Array.<module:model/ApiError>} errorList
   */
  exports.prototype['errorList'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} errorId
   */
  exports.prototype['errorId'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "ERR_REGISTRATION_VERIFICATION_NO_TOKEN"
     * @const
     */
    "REGISTRATION_VERIFICATION_NO_TOKEN": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
    /**
     * value: "ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN"
     * @const
     */
    "REGISTRATION_VERIFICATION_INVALID_TOKEN": "ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN",
    /**
     * value: "ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN"
     * @const
     */
    "REGISTRATION_VERIFICATION_EXPIRED_TOKEN": "ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN",
    /**
     * value: "ERR_AUTHENTICATION_NO_TOKEN"
     * @const
     */
    "AUTHENTICATION_NO_TOKEN": "ERR_AUTHENTICATION_NO_TOKEN",
    /**
     * value: "ERR_AUTHENTICATION_INVALID_TOKEN"
     * @const
     */
    "AUTHENTICATION_INVALID_TOKEN": "ERR_AUTHENTICATION_INVALID_TOKEN",
    /**
     * value: "ERR_AUTHENTICATION_EXPIRED_TOKEN"
     * @const
     */
    "AUTHENTICATION_EXPIRED_TOKEN": "ERR_AUTHENTICATION_EXPIRED_TOKEN",
    /**
     * value: "ERR_AUTHENTICATION_FAILED"
     * @const
     */
    "AUTHENTICATION_FAILED": "ERR_AUTHENTICATION_FAILED",
    /**
     * value: "ERR_AUTHORIZATION_MISSING_PRIVILEGES"
     * @const
     */
    "AUTHORIZATION_MISSING_PRIVILEGES": "ERR_AUTHORIZATION_MISSING_PRIVILEGES",
    /**
     * value: "ERR_AUTHORIZATION_FORBIDDEN"
     * @const
     */
    "AUTHORIZATION_FORBIDDEN": "ERR_AUTHORIZATION_FORBIDDEN",
    /**
     * value: "ERR_AUTHORIZATION_REQUIRE_USER"
     * @const
     */
    "AUTHORIZATION_REQUIRE_USER": "ERR_AUTHORIZATION_REQUIRE_USER",
    /**
     * value: "ERR_INPUT_VALIDATION_FAILED"
     * @const
     */
    "INPUT_VALIDATION_FAILED": "ERR_INPUT_VALIDATION_FAILED",
    /**
     * value: "ERR_FIELD_INPUT_VALIDATION_FAILED"
     * @const
     */
    "FIELD_INPUT_VALIDATION_FAILED": "ERR_FIELD_INPUT_VALIDATION_FAILED",
    /**
     * value: "ERR_VALIDATION_CONSTRAINT_FAILED"
     * @const
     */
    "VALIDATION_CONSTRAINT_FAILED": "ERR_VALIDATION_CONSTRAINT_FAILED",
    /**
     * value: "ERR_INPUT_NOT_READABLE"
     * @const
     */
    "INPUT_NOT_READABLE": "ERR_INPUT_NOT_READABLE",
    /**
     * value: "ERR_INVALID_INPUT_PARAMETER"
     * @const
     */
    "INVALID_INPUT_PARAMETER": "ERR_INVALID_INPUT_PARAMETER",
    /**
     * value: "ERR_GUID_CREATION"
     * @const
     */
    "GUID_CREATION": "ERR_GUID_CREATION",
    /**
     * value: "ERR_INVALID_ID4N_OBJECT_TYPE"
     * @const
     */
    "INVALID_ID4N_OBJECT_TYPE": "ERR_INVALID_ID4N_OBJECT_TYPE",
    /**
     * value: "ERR_MISSING_BILLING_INFORMATION"
     * @const
     */
    "MISSING_BILLING_INFORMATION": "ERR_MISSING_BILLING_INFORMATION",
    /**
     * value: "ERR_COLLECTION_UPDATE_DENIED"
     * @const
     */
    "COLLECTION_UPDATE_DENIED": "ERR_COLLECTION_UPDATE_DENIED",
    /**
     * value: "ERR_ENTITY_NOT_FOUND"
     * @const
     */
    "ENTITY_NOT_FOUND": "ERR_ENTITY_NOT_FOUND",
    /**
     * value: "ERR_ENTITY_TOO_BIG"
     * @const
     */
    "ENTITY_TOO_BIG": "ERR_ENTITY_TOO_BIG",
    /**
     * value: "ERR_DUPLICATE"
     * @const
     */
    "DUPLICATE": "ERR_DUPLICATE",
    /**
     * value: "ERR_INTERNAL"
     * @const
     */
    "INTERNAL": "ERR_INTERNAL",
    /**
     * value: "ERR_UNKNOWN"
     * @const
     */
    "UNKNOWN": "ERR_UNKNOWN",
    /**
     * value: "ERR_INVALID_ORGANIZATION_USERROLE"
     * @const
     */
    "INVALID_ORGANIZATION_USERROLE": "ERR_INVALID_ORGANIZATION_USERROLE",
    /**
     * value: "ERR_ORGANIZATION_ROLE_INCONSISTENCY"
     * @const
     */
    "ORGANIZATION_ROLE_INCONSISTENCY": "ERR_ORGANIZATION_ROLE_INCONSISTENCY",
    /**
     * value: "ERR_ORGANIZATION_NOT_DELETABLE"
     * @const
     */
    "ORGANIZATION_NOT_DELETABLE": "ERR_ORGANIZATION_NOT_DELETABLE",
    /**
     * value: "ERR_USER_ALREADY_IN_ORGANIZATION"
     * @const
     */
    "USER_ALREADY_IN_ORGANIZATION": "ERR_USER_ALREADY_IN_ORGANIZATION",
    /**
     * value: "ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE"
     * @const
     */
    "USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE": "ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE",
    /**
     * value: "ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME"
     * @const
     */
    "USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME": "ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME",
    /**
     * value: "ERR_USER_DEACTIVATED"
     * @const
     */
    "USER_DEACTIVATED": "ERR_USER_DEACTIVATED",
    /**
     * value: "ERR_LANGUAGE_NOT_SUPPORTED"
     * @const
     */
    "LANGUAGE_NOT_SUPPORTED": "ERR_LANGUAGE_NOT_SUPPORTED",
    /**
     * value: "ERR_EMAIL_MISSING_TEMPLATE_PARAM"
     * @const
     */
    "EMAIL_MISSING_TEMPLATE_PARAM": "ERR_EMAIL_MISSING_TEMPLATE_PARAM",
    /**
     * value: "ERR_EMAIL_TEMPLATE_NOT_AVAILABLE"
     * @const
     */
    "EMAIL_TEMPLATE_NOT_AVAILABLE": "ERR_EMAIL_TEMPLATE_NOT_AVAILABLE",
    /**
     * value: "ERR_EMAIL_PREPARATION_FAILED"
     * @const
     */
    "EMAIL_PREPARATION_FAILED": "ERR_EMAIL_PREPARATION_FAILED",
    /**
     * value: "ERR_IMAGE_CONVERSION"
     * @const
     */
    "IMAGE_CONVERSION": "ERR_IMAGE_CONVERSION",
    /**
     * value: "ERR_UPLOAD_TOO_LARGE"
     * @const
     */
    "UPLOAD_TOO_LARGE": "ERR_UPLOAD_TOO_LARGE",
    /**
     * value: "ERR_INVALID_ALIAS_TYPE"
     * @const
     */
    "INVALID_ALIAS_TYPE": "ERR_INVALID_ALIAS_TYPE",
    /**
     * value: "ERR_INVALID_URI_TEMPLATE"
     * @const
     */
    "INVALID_URI_TEMPLATE": "ERR_INVALID_URI_TEMPLATE",
    /**
     * value: "ERR_INVALID_URI_TEMPLATE_VARIABLE"
     * @const
     */
    "INVALID_URI_TEMPLATE_VARIABLE": "ERR_INVALID_URI_TEMPLATE_VARIABLE",
    /**
     * value: "ERR_INVALID_NAMESPACE"
     * @const
     */
    "INVALID_NAMESPACE": "ERR_INVALID_NAMESPACE",
    /**
     * value: "ERR_NAMESPACE_ALREADY_EXISTS"
     * @const
     */
    "NAMESPACE_ALREADY_EXISTS": "ERR_NAMESPACE_ALREADY_EXISTS",
    /**
     * value: "ERR_INSECURE_PASSWORD"
     * @const
     */
    "INSECURE_PASSWORD": "ERR_INSECURE_PASSWORD",
    /**
     * value: "ERR_TRANSFER_DENIED"
     * @const
     */
    "TRANSFER_DENIED": "ERR_TRANSFER_DENIED",
    /**
     * value: "ERR_INVALID_PHYSICAL_STATE"
     * @const
     */
    "INVALID_PHYSICAL_STATE": "ERR_INVALID_PHYSICAL_STATE",
    /**
     * value: "ERR_INVALID_HISTORY_PROPERTY_NAMESPACE"
     * @const
     */
    "INVALID_HISTORY_PROPERTY_NAMESPACE": "ERR_INVALID_HISTORY_PROPERTY_NAMESPACE"  };


  return exports;
}));


