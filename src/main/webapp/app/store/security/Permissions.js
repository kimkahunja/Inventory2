Ext.define('InventoryApp.store.security.Permissions', {
    extend: 'Ext.data.TreeStore',

    clearOnLoad: true,

    proxy: {
        type: 'ajax',
        url: 'user/fetchPermissions.action'
    }
});