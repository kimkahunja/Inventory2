/*
 * Store for managing TransferDtls
 */
Ext.define('InventoryApp.store.transfer.TransferDtls',{
	extend:'Ext.data.Store',
	alias: 'store.transfer.transferdtls',
	requires:[
	          'InventoryApp.model.transfer.TransferDtl'
	          ],
	model:'InventoryApp.model.transfer.TransferDtl',  
	//restPath: 'resources/categories',
	storeId: 'TransferDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'transfer/saveTransferDtl.action',
            read    : 'transfer/fetchTransferDtls.action',
            update  : 'transfer/saveTransferDtl.action',
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
