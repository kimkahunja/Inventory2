/*
 * Store for managing stocks
 */
Ext.define('InventoryApp.store.product.StockRPT',{
	extend:'Ext.data.Store',
	alias: 'store.product.stockrpt',
	requires:[
	          'InventoryApp.model.product.Stock'
	          ],
	model: 'InventoryApp.model.product.Stock',  
	storeId: 'Stocks',
	//remoteSort: true,
    //remoteFilter: true,
    //remoteGroup: true,
    //groupField: 'pdtCode',
   // groupDir: 'ASC',
	//autoLoad: true,
   // pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {
            create  : 'product/saveInvoice.action',
            read    : 'product/fetchStocks.action',
            update  : 'product/saveInvoice.action',
            //destroy : 'locations/deleteLocation.action'
        },
        /*extraParams: {
            location: InventoryApp.Utilities.locationId
        },*/
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     },
     listeners: {
         load: function (store, records) {
        	 store.getProxy().setExtraParam('location', InventoryApp.Utilities.locationId);
         }
      }
});
