Ext.define('InventoryApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'InventoryApp.view.layout.West',
        'InventoryApp.view.layout.Center'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'layout.west'       
    },
    {xtype: 'layout.center'}
    ]
});
