/*
 * Store for managing Accounts
 */
Ext.define('InventoryApp.store.account.Accounts',{
	extend:'Ext.data.Store',
	alias: 'store.account.accounts',
	requires:[
	          'InventoryApp.model.account.Account'
	          ],
	model:'InventoryApp.model.account.Account',  
	//restPath: 'resources/categories',
	storeId: 'Accounts',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'AccountServlet',//'resources/categories.json',
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
