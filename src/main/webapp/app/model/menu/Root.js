Ext.define('InventoryApp.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'InventoryApp.model.menu.Item'
    ],

    idProperty: 'id',

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconcls'
        },
        {
            name: 'id'
        }
    ],

    hasMany: {
        model: 'InventoryApp.model.menu.Item',
        foreignKey: 'parentId',
        name: 'items'
    }
});