/*
 * Store for managing Purchases
 */
Ext.define('InventoryApp.store.purchases.Purchases',{
	extend:'Ext.data.Store',
	alias: 'store.purchases.purchases',
	requires:[
	          'InventoryApp.model.purchases.Purchase'
	          ],
	model:'InventoryApp.model.purchases.Purchase',  
	//restPath: 'resources/categories',
	storeId: 'Purchases',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'PurchaseServlet',//'resources/purchases.json',
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
