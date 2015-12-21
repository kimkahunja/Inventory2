Ext.define('InventoryApp.model.security.User', {
    extend: 'InventoryApp.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id' },
        { name: 'name' },
        { name: 'userName' },
        { name: 'email' },
        { name: 'picture' },
        { name: 'Group_id' }
    ]
});