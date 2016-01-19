Ext.define('InventoryApp.view.reports.ReportsMainView', {
    extend: 'Ext.container.Container',
    alias: 'widget.reports.reportsmainview',

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