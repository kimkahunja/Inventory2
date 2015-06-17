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
        //url: 'resources/location.json',//'LocationServlet',
        api: {
            create  : 'subLocations/saveSubLocation.action',
            read    : 'subLocations/fetchSubLocations.action',
            update  : 'subLocations/saveSubLocation.action',
            destroy : 'subLocations/deleteSubLocation.action'
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
