/*
 * Store for managing TaskDeliveries
 */
Ext.define('InventoryApp.store.taskDelivery.TaskDeliveries',{
	extend:'Ext.data.Store',
	alias: 'store.taskDelivery.taskdeliveries',
	requires:[
	          'InventoryApp.model.taskDelivery.TaskDelivery'
	          ],
	model:'InventoryApp.model.taskDelivery.TaskDelivery',  	
	storeId: 'TaskDeliveries',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            //create  : 'item/saveSwapDtl.action',
            read    : 'task/fetchTasks.action'
           // update  : 'item/saveSwapDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
