/*
 * Store for managing item Location Bins
 */
Ext.define('InventoryApp.store.location.Bins',{
	extend:'Ext.data.Store',
	alias: 'store.location.bins',
	requires:[
	          'InventoryApp.model.location.Bin'
	          ],
	model:'InventoryApp.model.location.Bin',  
	//restPath: 'resources/categories',
	storeId: 'Bins',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'resources/bin.json',
        extraParams: {
            store_id: 3
        },
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});
