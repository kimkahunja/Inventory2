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
        api: {
            create  : 'purchase/savePurchase.action',
            read    : 'purchase/fetchPurchases.action',
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
