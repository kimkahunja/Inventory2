/*
 * Store for managing stocks
 */
Ext.define('InventoryApp.store.product.Stocks',{
	extend:'Ext.data.Store',
	alias: 'store.product.stocks',
	requires:[
	          'InventoryApp.model.product.Stock'
	          ],
	model: 'InventoryApp.model.product.Stock',  
	storeId: 'Stocks',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'product/saveInvoice.action',
            read    : 'product/fetchStocks.action',
            update  : 'product/saveInvoice.action',
            //destroy : 'locations/deleteLocation.action'
        },
       /* extraParams: {
            location:1// InventoryApp.Utilities.locationId
        },*/
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
