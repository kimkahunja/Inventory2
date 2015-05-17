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
        url: 'PurchaseDtlServlet',//'resources/purchases.json',
        extraParams: {
            store_id: 4
        },
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});
