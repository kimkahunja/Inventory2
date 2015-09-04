/*
 * Store for managing Purchases
 */
Ext.define('InventoryApp.store.purchases.PurchasesDtls',{
	extend:'Ext.data.Store',
	alias: 'store.purchases.purchasesdtls',
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
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'purchase/savePurchase.action',
            read    : 'purchase/fetchPurchaseDtls.action',
            update  : 'purchase/savePurchase.action',
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
