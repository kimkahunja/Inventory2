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
        extraParams: {
            store_id: 3
        },
       // url:'Categories/fetchCategories.action',//'resources/categories.json'
        api: {
            create  : 'Categories/saveCategory.action',
            read    : 'Categories/fetchCategories.action',
            update  : 'Categories/saveCategory.action',
            destroy : 'Categories/deleteCategory.action'
        },
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});
