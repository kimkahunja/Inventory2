/*
 * Store for managing item Units
 */
Ext.define('InventoryApp.store.units.Units',{
	extend:'Ext.data.Store',
	alias: 'store.units.units',
	requires:[
	          'InventoryApp.model.units.Unit'
	          ],
	model:'InventoryApp.model.units.Unit',  
	//restPath: 'resources/categories',
	storeId: 'Units',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',       
        api: {
            create  : 'units/saveUnit.action',
            read    : 'units/fetchUnits.action',
            update  : 'units/saveUnit.action',
            destroy : 'units/deleteUnit.action'
        },
        reader: {
            type: 'json',           
            totalProperty: 'data.count',
            root: 'data.data',
            successProperty: 'success'
        },
    }
});
