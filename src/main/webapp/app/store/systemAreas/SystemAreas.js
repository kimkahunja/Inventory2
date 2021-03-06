/*
 * Store for managing SystemAreas dtls
 */
Ext.define('InventoryApp.store.systemAreas.SystemAreas',{
	extend:'Ext.data.Store',
	alias: 'store.systemAreas.systemareas',
	requires:[
	          'InventoryApp.model.systemAreas.SystemArea'
	          ],
	model:'InventoryApp.model.systemAreas.SystemArea',  
	//restPath: 'resources/categories',
	storeId: 'SystemAreas',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {           
            read    : 'customizeArea/fetchAreas.action',
            update  : 'customizeArea/saveArea.action'           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
