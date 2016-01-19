Ext.define('InventoryApp.store.standard.YesNo',{
	extend:'Ext.data.Store',
	alias: 'store.standard.yesno',
	fields: ['id','description'], 
    storeId: 'YesNo',
    autoload: true,
    proxy: {
        type: 'ajax',
        url: 'resources/yesNo.json',        
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});