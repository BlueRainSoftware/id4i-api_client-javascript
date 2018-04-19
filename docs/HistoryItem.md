# Id4iApi.HistoryItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **Number** | Originator of the history item | 
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

* `REPROCESSING_STARTED` (value: `"REPROCESSING_STARTED"`)

* `REPROCESSING_FINISHED` (value: `"REPROCESSING_FINISHED"`)

* `DISASSEMBLED` (value: `"DISASSEMBLED"`)

* `MAINTENANCE_STARTED` (value: `"MAINTENANCE_STARTED"`)

* `MAINTENANCE_FINISHED` (value: `"MAINTENANCE_FINISHED"`)




