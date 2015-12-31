Ext.define('InventoryApp.model.security.User', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id' },
        { name: 'name' },
        { name: 'username' },
        { name: 'email' },
        { name: 'picture' },
        { name: 'groupId' }
    ]
});