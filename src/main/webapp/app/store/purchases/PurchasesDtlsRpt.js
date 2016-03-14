/*
 * Store for managing Purchases dtls reports
 */
Ext.define('InventoryApp.store.purchases.PurchasesDtlsRpt',{
	extend:'Ext.data.Store',
	alias: 'store.purchases.purchasesdtlsrpt',
	requires:[
	          'InventoryApp.model.purchases.PurchaseDtls'
	          ],
	model:'InventoryApp.model.purchases.PurchaseDtls',  
//	restPath: 'PurchaseDtlServlet',
	storeId: 'PurchasesDtls',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',      
        api: {
           // create  : 'purchase/savePurchase.action',
            read    : 'purchase/fetchPurchaseDtls.action'
           // update  : 'purchase/savePurchase.action',
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
