/*
 * Store for managing Purchases
 */
Ext.define('InventoryApp.store.invoice.InvoiceDtls',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.invoicedtls',
	requires:[
	          'InventoryApp.model.invoice.InvoiceDtls'
	          ],
	model:'InventoryApp.model.invoice.InvoiceDtls',  
//	restPath: 'PurchaseDtlServlet',
	storeId: 'InvoiceDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'invoice/saveInvoice.action',
            read    : 'invoice/fetchInvoiceDtls.action',
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
