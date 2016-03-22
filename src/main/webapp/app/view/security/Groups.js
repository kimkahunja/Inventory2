Ext.define('InventoryApp.view.security.Groups', {
    extend: 'Ext.container.Container',
    alias: 'widget.groups',

    requires: [
        'InventoryApp.view.security.GroupsList',
        'InventoryApp.view.security.GroupPermissions',
        'InventoryApp.view.security.GroupsEdit'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'groupslist',
            flex: 1
        },
        {
            xtype: 'groupsedit',
            flex: 3
        }
    ]

});