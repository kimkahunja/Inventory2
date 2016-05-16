Ext.define('InventoryApp.store.product.ProductMovements',{
	extend:'Ext.data.Store',
	alias: 'store.product.productmovements',
	requires:[
	          'InventoryApp.model.product.ProductMovement'
	          ],
	model: 'InventoryApp.model.product.ProductMovement',  
	storeId: 'ProductMovements',
	remoteSort: true,
    remoteFilter: true,
    remoteGroup: true,
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',      
        api: {           
            read    : 'product/fetchProductMovement.action'           
        },       
        reader: {
            type: 'json',
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
     }
});