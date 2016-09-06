/*
 * Store for managing TaskAssignees
 */
Ext.define('InventoryApp.store.taskDelivery.TaskAssignees',{
	extend:'Ext.data.Store',
	alias: 'store.taskDelivery.taskassignees',
	requires:[
	          'InventoryApp.model.taskDelivery.TaskAssignee'
	          ],
	model:'InventoryApp.model.taskDelivery.TaskAssignee',  	
	storeId: 'TaskAssignees',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            //create  : 'item/saveSwapDtl.action',
            read    : 'task/fetchAssignees.action'
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
