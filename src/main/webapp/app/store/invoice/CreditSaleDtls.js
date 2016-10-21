Ext.define('InventoryApp.store.invoice.CreditSaleDtls',{
	extend:'Ext.data.Store',
	alias: 'store.invoice.creditsaledtls',
	requires:[
	          'InventoryApp.model.invoice.CreditSaleDtl'
	          ],
	model:'InventoryApp.model.invoice.CreditSaleDtl',  	
	storeId: 'CreditSaleDtls',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'sale/fetchCreditSaledtls.action',        
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});