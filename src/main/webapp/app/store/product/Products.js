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
        url:'ProductServlet',// 'resources/product.json',
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
