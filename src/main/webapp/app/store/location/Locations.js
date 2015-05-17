/*
 * Store for managing item Locations
 */
Ext.define('InventoryApp.store.location.Locations',{
	extend:'Ext.data.Store',
	alias: 'store.location.locations',
	requires:[
	          'InventoryApp.model.location.Location'
	          ],
	model:'InventoryApp.model.location.Location',  
	//restPath: 'resources/categories',
	storeId: 'Locations',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'resources/location.json',//'LocationServlet',
        extraParams: {
            store_id: 2
        },
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});
