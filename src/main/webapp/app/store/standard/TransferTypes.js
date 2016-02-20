Ext.define('InventoryApp.store.standard.TransferTypes',{
	extend:'Ext.data.Store',
	alias: 'store.standard.transfertypes',
	fields: ['id','description'], 
    storeId: 'TransferTypes',
    autoload: true,
    proxy: {
        type: 'ajax',
        url: 'resources/transferTypes.json',        
        reader: {
            type: 'json',
            totalProperty: 'count',
            root: 'data',
            successProperty: 'success'
        },
     }
});