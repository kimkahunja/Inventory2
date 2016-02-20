/*
 * Store for managing Transfers
 */
Ext.define('InventoryApp.store.transfer.Transfers',{
	extend:'Ext.data.Store',
	alias: 'store.transfer.transfers',
	requires:[
	          'InventoryApp.model.transfer.Transfer'
	          ],
	model:'InventoryApp.model.transfer.Transfer',  
	//restPath: 'resources/categories',
	storeId: 'Transfers',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'transfer/saveTransfer.action',
            read    : 'transfer/fetchTransfers.action',
            update  : 'transfer/saveTransfer.action',
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
