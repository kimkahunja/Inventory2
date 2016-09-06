/*
 * Store for managing Item Discrepancy dtls
 */
Ext.define('InventoryApp.store.discrepancies.ItemDiscrepancyDtls',{
	extend:'Ext.data.Store',
	alias: 'store.discrepancies.itemdiscrepancydtls',
	requires:[
	          'InventoryApp.model.discrepancies.ItemDiscrepancyDtl'
	          ],
	model:'InventoryApp.model.discrepancies.ItemDiscrepancyDtl',  	
	storeId: 'ItemDiscrepancyDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'discrepancies/saveDiscrepancyDtl.action',
            read    : 'item/fetchDiscrepancies.action',
            update  : 'discrepancies/saveDiscrepancyDtl.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
