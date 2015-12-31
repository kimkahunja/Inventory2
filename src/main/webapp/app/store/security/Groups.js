Ext.define('InventoryApp.store.security.Groups', {
    extend: 'Ext.data.Store',
    alias: 'store.security.groups',
    requires: [
        'InventoryApp.model.security.Group'
    ],

    model: 'InventoryApp.model.security.Group',

    storeId: 'groups',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'user/fetchGroups.action',
        
        reader: {
            type: 'json',
            root: 'data.data'
        }
    }
});