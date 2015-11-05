Ext.define('InventoryApp.store.standard.Status',{
	extend:'Ext.data.Store',
	alias: 'store.standard.status',
	fields: ['id','description'], 
    storeId: 'Status',
    autoload: true,
    proxy: {
        type: 'ajax',
        url: 'resources/status.json',        
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});