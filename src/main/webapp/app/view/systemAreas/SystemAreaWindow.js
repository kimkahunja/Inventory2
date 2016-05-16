Ext.define('InventoryApp.view.systemAreas.SystemAreaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.systemAreas.systemareawindow',

    height: 260,
    width: 550,

    requires: ['InventoryApp.util.Util'],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Customize Product Columns',

    items: [
        {
           xtype:'systemareas.list'
           
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
				{
				    xtype: 'button',
				    text: 'Save',
				    itemId: 'save',
				    iconCls: 'save'
				},
                {
                    xtype: 'button',
                    text: 'Cancel',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                }
                
            ]
        }
    ]
});