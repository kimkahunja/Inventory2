Ext.define('InventoryApp.store.purchases.PurchaseRPTs',{
	extend:'Ext.data.Store',
	alias: 'store.purchases.purchaserpts',
	requires:[
	          'InventoryApp.model.purchases.PurchaseRPT'
	          ],
	model:'InventoryApp.model.purchases.PurchaseRPT',  
	//restPath: 'resources/categories',
	storeId: 'PurchaseRPT',
	//remoteSort: true,
   // remoteFilter: true,
    //remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {           
            read    : 'purchase/fetchRptPurchases.action'            
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});