/*
 * Store for managing Transfer products
 */
Ext.define('InventoryApp.store.product.TransferProducts',{
	extend:'Ext.data.Store',
	alias: 'store.product.transferproducts',
	requires:[
	          'InventoryApp.model.product.Product'
	          ],
	model:'InventoryApp.model.product.Product',  
	//restPath: 'resources/categories',
	storeId: 'Units',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {            
            read    : 'product/fetchTransferProducts.action'           
        },
        reader: {
            type: 'json',           
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
