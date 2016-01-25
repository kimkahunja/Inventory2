/*
 * Store for managing Payments
 */
Ext.define('InventoryApp.store.payment.Payments',{
	extend:'Ext.data.Store',
	alias: 'store.payment.payments',
	requires:[
	          'InventoryApp.model.payment.Payment'
	          ],
	model:'InventoryApp.model.payment.Payment',  
	//restPath: 'resources/categories',
	storeId: 'Payments',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'payment/savePayment.action',
            read    : 'payment/fetchPayments.action',
            update  : 'payment/savePayment.action',
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
