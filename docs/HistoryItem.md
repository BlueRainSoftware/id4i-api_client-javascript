# Id4iApi.HistoryItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalProperties** | **{String: String}** | History items custom additional properties | [optional] 
**organizationId** | **String** | Originator of the history item | 
**ownerOrganizationId** | **String** | Owner of the history item | [optional] 
**sequenceId** | **Number** | Forms the primary key of the history item together with the GUID and the organizationId | [optional] 
**timestamp** | **Number** | History item timestamp | [optional] 
**type** | **String** | Type of the history item | 
**visibility** | [**Visibility**](Visibility.md) | History item visibility restrictions | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `CREATED` (value: `"CREATED"`)

* `DESTROYED` (value: `"DESTROYED"`)

* `RECYCLED` (value: `"RECYCLED"`)

* `SHIPMENT_PREPARED` (value: `"SHIPMENT_PREPARED"`)

* `STORED` (value: `"STORED"`)

* `RETRIEVED_FROM_STORAGE` (value: `"RETRIEVED_FROM_STORAGE"`)

* `PACKAGED` (value: `"PACKAGED"`)

* `DISPATCHED` (value: `"DISPATCHED"`)

* `RECEIVED` (value: `"RECEIVED"`)

* `DELIVERY_REFUSED` (value: `"DELIVERY_REFUSED"`)

* `REPROCESSING_STARTED` (value: `"REPROCESSING_STARTED"`)

* `REPROCESSING_STEP_STARTED` (value: `"REPROCESSING_STEP_STARTED"`)

* `REPROCESSING_STEP_CANCELLED` (value: `"REPROCESSING_STEP_CANCELLED"`)

* `REPROCESSING_STEP_FINISHED` (value: `"REPROCESSING_STEP_FINISHED"`)

* `REPROCESSING_CANCELLED` (value: `"REPROCESSING_CANCELLED"`)

* `REPROCESSING_FINISHED` (value: `"REPROCESSING_FINISHED"`)

* `DISASSEMBLED` (value: `"DISASSEMBLED"`)

* `MAINTENANCE_STARTED` (value: `"MAINTENANCE_STARTED"`)

* `MAINTENANCE_STEP_STARTED` (value: `"MAINTENANCE_STEP_STARTED"`)

* `MAINTENANCE_STEP_CANCELLED` (value: `"MAINTENANCE_STEP_CANCELLED"`)

* `MAINTENANCE_STEP_FINISHED` (value: `"MAINTENANCE_STEP_FINISHED"`)

* `MAINTENANCE_CANCELLED` (value: `"MAINTENANCE_CANCELLED"`)

* `MAINTENANCE_FINISHED` (value: `"MAINTENANCE_FINISHED"`)

* `PRODUCTION_STARTED` (value: `"PRODUCTION_STARTED"`)

* `PRODUCTION_CANCELLED` (value: `"PRODUCTION_CANCELLED"`)

* `PRODUCTION_FINISHED` (value: `"PRODUCTION_FINISHED"`)

* `PRODUCTION_STEP_STARTED` (value: `"PRODUCTION_STEP_STARTED"`)

* `PRODUCTION_STEP_CANCELLED` (value: `"PRODUCTION_STEP_CANCELLED"`)

* `PRODUCTION_STEP_FINISHED` (value: `"PRODUCTION_STEP_FINISHED"`)

* `QUALITY_CHECK_PERFORMED` (value: `"QUALITY_CHECK_PERFORMED"`)




