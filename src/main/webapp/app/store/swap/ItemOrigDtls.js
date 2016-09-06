/*
 * Store for managing Item swapping dtls
 */
Ext.define('InventoryApp.store.swap.ItemOrigDtls',{
	extend:'Ext.data.Store',
	alias: 'store.swap.itemorigdtls',
	requires:[
	          'InventoryApp.model.swap.ItemSwapDtl'
	          ],
	model:'InventoryApp.model.swap.ItemSwapDtl',  	
	storeId: 'ItemOrigDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'item/saveSwapDtl.action',
            read    : 'item/fetchSwapOriginal.action',
            update  : 'item/saveSwapDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
