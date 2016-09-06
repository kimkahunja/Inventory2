/*
 * Store for managing ApprovalAreaDtl
 */
Ext.define('InventoryApp.store.approvalAreas.ApprovalAreaDtls',{
	extend:'Ext.data.Store',
	alias: 'store.approvalAreas.approvalareadtls',
	requires:[
	          'InventoryApp.model.approvalAreas.ApprovalAreaDtl'
	          ],
	model:'InventoryApp.model.approvalAreas.ApprovalAreaDtl',  	
	storeId: 'ApprovalAreaDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'approvalArea/saveApprovalAreaDtl.action',
            read    : 'approvalArea/fetchApprovalAreas.action',
            update  : 'approvalArea/saveApprovalAreaDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
