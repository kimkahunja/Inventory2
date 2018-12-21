Ext.define('InventoryApp.view.reports.returns.MainView', {
    extend: 'Ext.container.Container',
    alias: 'widget.reports.returns.mainview',
    requires: [	 
	           'InventoryApp.view.reports.returns.ListHolder'
	       ],
    layout: 'fit',

   // northItems: null,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [ 
                   /* {
                    	xtype:'reports.returns.listholder'
                    }*/
            ]
        });

        me.callParent(arguments);
    }
});