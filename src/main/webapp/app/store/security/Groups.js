Ext.define('InventoryApp.store.security.Groups', {
    extend: 'Ext.data.Store',

    requires: [
        'InventoryApp.model.security.Group'
    ],

    model: 'InventoryApp.model.security.Group',

    storeId: 'groups',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'php/security/group.php',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});