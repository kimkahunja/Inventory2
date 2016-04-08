/*
 * Store for managing Transfer Locations
 */
Ext.define('InventoryApp.store.location.TransferLocations',{
	extend:'Ext.data.Store',
	alias: 'store.location.transferlocations',
	requires:[
	          'InventoryApp.model.location.Location'
	          ],
	model:'InventoryApp.model.location.Location',  
	//restPath: 'resources/categories',
	storeId: 'TransferLocations',
	autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        //url: 'resources/location.json',//'LocationServlet',
        api: {            
            read    : 'locations/fetchTransferLocations.action'            
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
