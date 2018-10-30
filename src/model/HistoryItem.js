/**
 * ID4i API
 * ID4i HTTP API
 *
 * OpenAPI spec version: 0.9.3-SNAPSHOT
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
    define(['ApiClient', 'model/Visibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Visibility'));
  } else {
    // Browser globals (root is window)
    if (!root.Id4iApi) {
      root.Id4iApi = {};
    }
    root.Id4iApi.HistoryItem = factory(root.Id4iApi.ApiClient, root.Id4iApi.Visibility);
  }
}(this, function(ApiClient, Visibility) {
  'use strict';




  /**
   * The HistoryItem model module.
   * @module model/HistoryItem
   * @version 0.9.3-SNAPSHOT
   */

  /**
   * Constructs a new <code>HistoryItem</code>.
   * GUID history item
   * @alias module:model/HistoryItem
   * @class
   * @param organizationId {String} Originator of the history item
   * @param type {module:model/HistoryItem.TypeEnum} Type of the history item
   */
  var exports = function(organizationId, type) {
    var _this = this;


    _this['organizationId'] = organizationId;


    _this['type'] = type;

  };

  /**
   * Constructs a <code>HistoryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoryItem} obj Optional instance to populate.
   * @return {module:model/HistoryItem} The populated <code>HistoryItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalProperties')) {
        obj['additionalProperties'] = ApiClient.convertToType(data['additionalProperties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('sequenceId')) {
        obj['sequenceId'] = ApiClient.convertToType(data['sequenceId'], 'Number');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = Visibility.constructFromObject(data['visibility']);
      }
    }
    return obj;
  }

  /**
   * History items custom additional properties
   * @member {Object.<String, String>} additionalProperties
   */
  exports.prototype['additionalProperties'] = undefined;
  /**
   * Originator of the history item
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Forms the primary key of the history item together with the GUID and the organizationId
   * @member {Number} sequenceId
   */
  exports.prototype['sequenceId'] = undefined;
  /**
   * History item timestamp
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Type of the history item
   * @member {module:model/HistoryItem.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * History item visibility restrictions
   * @member {module:model/Visibility} visibility
   */
  exports.prototype['visibility'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",
    /**
     * value: "DESTROYED"
     * @const
     */
    "DESTROYED": "DESTROYED",
    /**
     * value: "RECYCLED"
     * @const
     */
    "RECYCLED": "RECYCLED",
    /**
     * value: "SHIPMENT_PREPARED"
     * @const
     */
    "SHIPMENT_PREPARED": "SHIPMENT_PREPARED",
    /**
     * value: "STORED"
     * @const
     */
    "STORED": "STORED",
    /**
     * value: "RETRIEVED_FROM_STORAGE"
     * @const
     */
    "RETRIEVED_FROM_STORAGE": "RETRIEVED_FROM_STORAGE",
    /**
     * value: "PACKAGED"
     * @const
     */
    "PACKAGED": "PACKAGED",
    /**
     * value: "DISPATCHED"
     * @const
     */
    "DISPATCHED": "DISPATCHED",
    /**
     * value: "RECEIVED"
     * @const
     */
    "RECEIVED": "RECEIVED",
    /**
     * value: "REPROCESSING_STARTED"
     * @const
     */
    "REPROCESSING_STARTED": "REPROCESSING_STARTED",
    /**
     * value: "REPROCESSING_STEP_STARTED"
     * @const
     */
    "REPROCESSING_STEP_STARTED": "REPROCESSING_STEP_STARTED",
    /**
     * value: "REPROCESSING_STEP_CANCELLED"
     * @const
     */
    "REPROCESSING_STEP_CANCELLED": "REPROCESSING_STEP_CANCELLED",
    /**
     * value: "REPROCESSING_STEP_FINISHED"
     * @const
     */
    "REPROCESSING_STEP_FINISHED": "REPROCESSING_STEP_FINISHED",
    /**
     * value: "REPROCESSING_CANCELLED"
     * @const
     */
    "REPROCESSING_CANCELLED": "REPROCESSING_CANCELLED",
    /**
     * value: "REPROCESSING_FINISHED"
     * @const
     */
    "REPROCESSING_FINISHED": "REPROCESSING_FINISHED",
    /**
     * value: "DISASSEMBLED"
     * @const
     */
    "DISASSEMBLED": "DISASSEMBLED",
    /**
     * value: "MAINTENANCE_STARTED"
     * @const
     */
    "MAINTENANCE_STARTED": "MAINTENANCE_STARTED",
    /**
     * value: "MAINTENANCE_STEP_STARTED"
     * @const
     */
    "MAINTENANCE_STEP_STARTED": "MAINTENANCE_STEP_STARTED",
    /**
     * value: "MAINTENANCE_STEP_CANCELLED"
     * @const
     */
    "MAINTENANCE_STEP_CANCELLED": "MAINTENANCE_STEP_CANCELLED",
    /**
     * value: "MAINTENANCE_STEP_FINISHED"
     * @const
     */
    "MAINTENANCE_STEP_FINISHED": "MAINTENANCE_STEP_FINISHED",
    /**
     * value: "MAINTENANCE_CANCELLED"
     * @const
     */
    "MAINTENANCE_CANCELLED": "MAINTENANCE_CANCELLED",
    /**
     * value: "MAINTENANCE_FINISHED"
     * @const
     */
    "MAINTENANCE_FINISHED": "MAINTENANCE_FINISHED",
    /**
     * value: "PRODUCTION_STARTED"
     * @const
     */
    "PRODUCTION_STARTED": "PRODUCTION_STARTED",
    /**
     * value: "PRODUCTION_CANCELLED"
     * @const
     */
    "PRODUCTION_CANCELLED": "PRODUCTION_CANCELLED",
    /**
     * value: "PRODUCTION_FINISHED"
     * @const
     */
    "PRODUCTION_FINISHED": "PRODUCTION_FINISHED",
    /**
     * value: "PRODUCTION_STEP_STARTED"
     * @const
     */
    "PRODUCTION_STEP_STARTED": "PRODUCTION_STEP_STARTED",
    /**
     * value: "PRODUCTION_STEP_CANCELLED"
     * @const
     */
    "PRODUCTION_STEP_CANCELLED": "PRODUCTION_STEP_CANCELLED",
    /**
     * value: "PRODUCTION_STEP_FINISHED"
     * @const
     */
    "PRODUCTION_STEP_FINISHED": "PRODUCTION_STEP_FINISHED",
    /**
     * value: "QUALITY_CHECK_PERFORMED"
     * @const
     */
    "QUALITY_CHECK_PERFORMED": "QUALITY_CHECK_PERFORMED"  };


  return exports;
}));


