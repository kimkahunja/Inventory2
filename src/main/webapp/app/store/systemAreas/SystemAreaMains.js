Ext.define('InventoryApp.store.systemAreas.SystemAreaMains',{
	extend:'Ext.data.Store',
	alias: 'store.systemAreas.systemareamains',
	requires:[
	          'InventoryApp.model.systemAreas.SystemAreaMain'
	          ],
	model:'InventoryApp.model.systemAreas.SystemAreaMain',  
	//restPath: 'resources/categories',
	storeId: 'SystemAreaMains',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {           
            read    : 'customizeArea/fetchMainAreas.action'                     
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});