/*
 * Store for managing item categories
 */
Ext.define('InventoryApp.store.categories.Categories',{
	extend:'Ext.data.Store',
	alias: 'store.categories.categories',
	requires:[
	          'InventoryApp.model.categories.Category'
	          ],
	model:'InventoryApp.model.categories.Category',  
	//restPath: 'resources/categories',
	storeId: 'Categories',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'CategoryServlet',//'resources/categories.json',
        extraParams: {
            store_id: 1
        },
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});
