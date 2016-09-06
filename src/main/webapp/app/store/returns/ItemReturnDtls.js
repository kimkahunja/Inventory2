/*
 * Store for managing Item Return Dtls
 */
Ext.define('InventoryApp.store.returns.ItemReturnDtls',{
	extend:'Ext.data.Store',
	alias: 'store.returns.itemreturndtls',
	requires:[
	          'InventoryApp.model.returns.ItemReturnDtl'
	          ],
	model:'InventoryApp.model.returns.ItemReturnDtl',  	
	storeId: 'ItemReturnDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'return/saveReturnDtl.action',
            read    : 'item/fetchReturns.action',
            update  : 'return/saveReturnDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
