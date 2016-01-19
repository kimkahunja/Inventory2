Ext.define('InventoryApp.view.reports.purchases.PurchaseMainView', {
    extend: 'Ext.container.Container',
    alias: 'widget.reports.purchases.purchasemainview',

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