Ext.define('InventoryApp.model.menu.Item', {
    extend: 'Ext.data.Model',

    uses: [
        'InventoryApp.model.menu.Root'
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
            name: 'className'
        },
        {
            name: 'id'
        },
        {
            name: 'parentId'
        }
    ],

    belongsTo: {
        model: 'InventoryApp.model.menu.Root',
        foreignKey: 'parentId'
    }
});