Ext.define('InventoryApp.store.invoice.CreditSales',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.creditsales',
	requires:[
	          'InventoryApp.model.invoice.CreditSale'
	          ],
	model:'InventoryApp.model.invoice.CreditSale',  	
	storeId: 'CreditSales',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'sale/fetchCreditSales.action',        
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});