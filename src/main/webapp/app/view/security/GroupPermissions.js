Ext.define('InventoryApp.view.security.GroupPermissions', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.grouppermissions',

    //requires: ['InventoryApp.store.security.Permissions'],

    title: 'Group Permissions',
    rootVisible: false,
    useArrows: true,
    frame: false,
    viewConfig: {
	    markDirty: false
	},

    store: 'security.Permissions'//Ext.create('InventoryApp.store.security.Permissions')

});