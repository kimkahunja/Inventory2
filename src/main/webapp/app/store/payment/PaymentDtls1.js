/*
 * Store for managing PaymentDtls
 */
Ext.define('InventoryApp.store.payment.PaymentDtls1',{
	extend:'Ext.data.Store',
	alias: 'store.payment.paymentdtls',
	requires:[
	          'InventoryApp.model.payment.PaymentDtl'
	          ],
	model:'InventoryApp.model.payment.PaymentDtl',  
	//restPath: 'resources/categories',
	storeId: 'PaymentDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'payment/savePaymentDtl.action',
            read    : 'payment/fetchPaymentDtls.action',
            update  : 'payment/savePaymentDtl.action',
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
