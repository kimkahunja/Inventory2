Ext.define('InventoryApp.store.security.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'InventoryApp.model.security.User'
    ],

    model: 'InventoryApp.model.security.User',

    proxy: {
        type: 'ajax',
        url: 'user/fetchUsers.action',
        
        reader: {
            type: 'json',
            root: 'data.data'
        }
    }
});