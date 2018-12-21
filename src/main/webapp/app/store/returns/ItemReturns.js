/*
 * Store for managing Item Returns
 */
Ext.define('InventoryApp.store.returns.ItemReturns',{
	extend:'Ext.data.Store',
	alias: 'store.returns.itemreturns',
	requires:[
	          'InventoryApp.model.returns.ItemReturn'
	          ],
	model:'InventoryApp.model.returns.ItemReturn',  	
	storeId: 'ItemReturns',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'return/saveReturn.action',
            read    : 'item/fetchReturnM.action',
            update  : 'return/saveReturn.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
