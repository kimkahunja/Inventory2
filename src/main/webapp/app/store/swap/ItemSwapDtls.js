/*
 * Store for managing Item swapping dtls
 */
Ext.define('InventoryApp.store.swap.ItemSwapDtls',{
	extend:'Ext.data.Store',
	alias: 'store.swap.itemswapdtls',
	requires:[
	          'InventoryApp.model.swap.ItemSwapDtl'
	          ],
	model:'InventoryApp.model.swap.ItemSwapDtl',  	
	storeId: 'ItemSwapDtl',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'swap/saveSwapDtl.action',
            read    : 'swap/fetchSwapDtl.action',
            update  : 'swap/saveSwapDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
