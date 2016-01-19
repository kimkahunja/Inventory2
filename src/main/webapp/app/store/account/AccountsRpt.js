/*
 * Store for managing Accounts
 */
Ext.define('InventoryApp.store.account.AccountsRpt',{
	extend:'Ext.data.Store',
	alias: 'store.account.accountsrpt',
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
        api: {
            create  : 'account/saveAccount.action',
            read    : 'account/fetchAccountsRPT.action',
            update  : 'account/saveAccount.action',
            destroy : 'account/deleteAccount.action'
        },
        extraParams: {
            type: 'D'
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
