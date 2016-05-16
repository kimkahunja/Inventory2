/*
 * Store for managing Adjustments
 */
Ext.define('InventoryApp.store.adjustment.Adjustments',{
	extend:'Ext.data.Store',
	alias: 'store.adjustment.adjustments',
	requires:[
	          'InventoryApp.model.adjustment.Adjustment'
	          ],
	model:'InventoryApp.model.adjustment.Adjustment',  
	//restPath: 'resources/categories',
	storeId: 'Adjustments',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'adjustment/saveAdjustment.action',
            read    : 'transfer/fetchAdjustment.action',
            update  : 'transfer/saveAdjustment.action',
            //destroy : 'locations/deleteLocation.action'
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
