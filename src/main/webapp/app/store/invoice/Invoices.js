/*
 * Store for managing Purchases
 */
Ext.define('InventoryApp.store.invoice.Invoices',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.invoices',
	requires:[
	          'InventoryApp.model.invoice.Invoice'
	          ],
	model:'InventoryApp.model.invoice.Invoice',  
	//restPath: 'resources/categories',
	
	storeId: 'Invoices',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'invoice/saveInvoice.action',
            read    : 'invoice/fetchInvoices.action',
            update  : 'invoice/saveInvoice.action',
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
