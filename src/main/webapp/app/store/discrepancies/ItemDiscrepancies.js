/*
 * Store for managing Item Discrepancy
 */
Ext.define('InventoryApp.store.discrepancies.ItemDiscrepancies',{
	extend:'Ext.data.Store',
	alias: 'store.discrepancies.itemdiscrepancies',
	requires:[
	          'InventoryApp.model.discrepancies.ItemDiscrepancy'
	          ],
	model:'InventoryApp.model.discrepancies.ItemDiscrepancy',  	
	storeId: 'ItemDiscrepancies',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'discrepancies/saveDiscrepancies.action',
            read    : 'discrepancies/fetchDiscrepancies.action',
            update  : 'discrepancies/saveDiscrepancies.action',
           
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
