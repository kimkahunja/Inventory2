Ext.define('InventoryApp.view.Dashboard',{
	extend:'Ext.panel.Panel',
    alias: 'widget.dashboard',
    layout: 'border',
    initComponent: function() {
    	var me = this;
        Ext.applyIf(me, {
        	 items: [
	        	          // column 1
                {
                    xtype: 'container',
                    region: 'west',
                    width: '50%',
                    layout: 'anchor',
                    split: true,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Monthly Sales',
                            iconCls: 'menu_staticdata',
                            anchor: '100% 50%',
                            layout: 'fit',
                            items: [
                                {
                                   //xtype: 'purchases.purchaselist',
                                    /*store: {
                                        type: 'purchases.purchases',
                                        pageSize: 6,
                                    }*/
                                },                                
                            ]
                        } ,
                        {
                            xtype: 'panel',
                            dockedItems: false,
                            title: 'Monthly Purchases',
                            iconCls: 'menu_staticdata',
                            anchor: '100% 50%',
                            items:[
                                   ]
                            
                        }
                    ]
                }
        	         ]
        });
    	me.callParent( arguments );
    }
});