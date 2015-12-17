/*
 * Store for managing Purchases
 */
Ext.define('InventoryApp.store.invoice.InvoiceNumbers',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.invoicenumbers',
	requires:[
	          'InventoryApp.model.invoice.Invoice'
	          ],
	model:'InventoryApp.model.invoice.InvoiceNumber',  
	//restPath: 'resources/categories',
	
	storeId: 'InvoiceNumbers',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
           // create  : 'invoice/saveInvoice.action',
            read    : 'invoice/fetchInvoiceNumber.action',
            //update  : 'invoice/saveInvoice.action',
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
