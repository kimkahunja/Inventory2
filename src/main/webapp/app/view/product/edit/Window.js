Ext.define('InventoryApp.view.product.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.product.edit.window',
    requires: [
        'InventoryApp.view.product.edit.Form'
    ],
    iconCls: 'icon_product',
    width: 700,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'product.edit.form'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    defaultAlign:'right',
                    ui: 'footer',
                    items: [
						{
						    xtype:'tbspacer',
						    flex:1
						},
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Save',
                            iconCls: 'save'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancel',
                            iconCls: 'cancel'
                        },
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});