Ext.define('InventoryApp.view.returns.SwapReturnView', {
    extend: 'Ext.container.Container',
    alias: 'widget.returns.swapreturnview',

    layout: 'fit',

   // northItems: null,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [                
            ]
        });

        me.callParent(arguments);
    }
});