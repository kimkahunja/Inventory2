Ext.define('InventoryApp.view.reports.comprehensive.ReportViewer', {
    extend: 'Ext.container.Container',
    alias: 'widget.reports.comprehensive.reportviewer',

    layout: 'fit',

   // northItems: null,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [ 
					{
					   
					}
            ]
        });

        me.callParent(arguments);
    }
});