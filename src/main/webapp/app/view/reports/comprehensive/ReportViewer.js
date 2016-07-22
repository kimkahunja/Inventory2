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
					    xtype: 'component',
					    autoEl: {
					        src: 'SummarySales.pdf',
					        tag: 'iframe',
					        style: 'height: 100%; width: 100%; border: none'
					    }
					}
            ]
        });

        me.callParent(arguments);
    }
});