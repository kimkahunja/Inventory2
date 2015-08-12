Ext.define('InventoryApp.view.login.WinLogin', {
    extend: 'Ext.window.Window',
    alias: 'widget.login.winlogin',
    requires: [
        'InventoryApp.view.login.Login'
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
                    xtype: 'login.login'
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