Ext.define('InventoryApp.store.invoice.InvoiceRPTs',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.invoicerpts',
	requires:[
	          'InventoryApp.model.invoice.InvoiceRPT'
	          ],
	model:'InventoryApp.model.invoice.InvoiceRPT',  	
	storeId: 'InvoiceRPTs',
	//remoteSort: true,
   // remoteFilter: true,
    //remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {           
            read    : 'invoice/fetchRptInvoices.action'            
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});