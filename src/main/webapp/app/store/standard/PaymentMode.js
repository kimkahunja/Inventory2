Ext.define('InventoryApp.store.standard.PaymentMode',{
	extend:'Ext.data.Store',
	alias: 'store.standard.paymentmode',
	fields: ['id','description','memoRequired'], 
    storeId: 'PaymentMode',
    autoload: true,
    proxy: {
        type: 'ajax',
        url: 'resources/paymentMode.json',        
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});