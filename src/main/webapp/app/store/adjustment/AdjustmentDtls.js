/*
 * Store for managing AdjustmentDtls
 */
Ext.define('InventoryApp.store.adjustment.AdjustmentDtls',{
	extend:'Ext.data.Store',
	alias: 'store.adjustment.adjustmentdtls',
	requires:[
	          'InventoryApp.model.adjustment.AdjustmentDtl'
	          ],
	model:'InventoryApp.model.adjustment.AdjustmentDtl',  
	//restPath: 'resources/categories',
	storeId: 'AdjustmentDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'adjustment/saveAdjustmentDtl.action',
            read    : 'transfer/fetchAdjustmentDtl.action',
            update  : 'transfer/saveAdjustmentDtl.action',
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
