Ext.define('InventoryApp.view.reports.transfer.TransferMainView', {
    extend: 'Ext.container.Container',
    alias: 'widget.reports.transfer.transfermainview',

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