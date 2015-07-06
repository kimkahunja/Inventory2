/*
 * Store for managing item Units
 */
Ext.define('InventoryApp.store.product.Products',{
	extend:'Ext.data.Store',
	alias: 'store.product.products',
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
        //url: 'resources/location.json',//'LocationServlet',
        api: {
            create  : 'product/saveProduct.action',
            read    : 'product/fetchProducts.action',
            update  : 'product/saveProduct.action',
            destroy : 'product/deleteProduct.action'
        },
        reader: {
            type: 'json',
           // idProperty:'slocCode',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
