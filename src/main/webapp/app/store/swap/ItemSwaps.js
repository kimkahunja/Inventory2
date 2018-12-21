/*
 * Store for managing Item swapping
 */
Ext.define('InventoryApp.store.swap.ItemSwaps',{
	extend:'Ext.data.Store',
	alias: 'store.swap.itemswaps',
	requires:[
	          'InventoryApp.model.swap.ItemSwap'
	          ],
	model:'InventoryApp.model.swap.ItemSwap',  	
	storeId: 'ItemSwaps',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'swap/saveSwap.action',
            read    : 'item/fetchSwapM.action',
            update  : 'swap/saveSwap.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
