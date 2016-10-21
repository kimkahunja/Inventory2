Ext.define('InventoryApp.store.location.UserLocations',{
	extend:'Ext.data.Store',
	alias: 'store.location.userlocations',
	requires:[
	          'InventoryApp.model.location.UserLocation'
	          ],
	model:'InventoryApp.model.location.UserLocation',  	
	storeId: 'UserLocations',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'userLocation/fetchUserLocations.action',        
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});