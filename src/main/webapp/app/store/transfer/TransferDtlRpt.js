/*
 * Store for managing TransferDtlRpt
 */
Ext.define('InventoryApp.store.transfer.TransferDtlRpt',{
	extend:'Ext.data.Store',
	alias: 'store.transfer.transferdtlrpt',
	requires:[
	          'InventoryApp.model.transfer.TransferDtl'
	          ],
	model:'InventoryApp.model.transfer.TransferRPT',  
	//restPath: 'resources/categories',
	storeId: 'TransferDtlRpt',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            //create  : 'transfer/saveTransferDtl.action',
            read    : 'transfer/fetchRptTransfers.action'
           // update  : 'transfer/saveTransferDtl.action',
            //destroy : 'locations/deleteLocation.action'
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
