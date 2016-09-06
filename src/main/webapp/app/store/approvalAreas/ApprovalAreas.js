/*
 * Store for managing ApprovalAreas
 */
Ext.define('InventoryApp.store.approvalAreas.ApprovalAreas',{
	extend:'Ext.data.Store',
	alias: 'store.approvalAreas.approvalareas',
	requires:[
	          'InventoryApp.model.approvalAreas.ApprovalArea'
	          ],
	model:'InventoryApp.model.approvalAreas.ApprovalArea',  	
	storeId: 'ApprovalAreas',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'approvalArea/saveApprovalArea.action',
            read    : 'approvalArea/fetchApprovalAreas.action',
            update  : 'approvalArea/saveApprovalArea.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
