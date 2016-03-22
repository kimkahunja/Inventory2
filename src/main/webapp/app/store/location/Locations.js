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
	autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        //url: 'resources/location.json',//'LocationServlet',
        api: {
            create  : 'locations/saveLocation.action',
            read    : 'locations/fetchLocations.action',
            update  : 'locations/saveLocation.action',
            destroy : 'locations/deleteLocation.action'
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
