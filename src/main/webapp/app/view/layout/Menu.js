Ext.define('InventoryApp.view.layout.Menu',{
	extend:'Ext.menu.Menu',
	alias:'widget.layout.menu',
	floating: false,
	initComponent:function(){
		var me=this;
		Ext.applyIf(me,{
			items:[
			       {
			    	   text:'Setups',
			    	   itemId:'options',
			    	   iconCls: 'icon_gear',
			    	   menu: [
		                        {
		                            text: 'Item Categories',
		                            itemId: 'option/category',
		                            iconCls: 'icon_category'
		                        },
		                        {
		                            text: 'Item Locations',
		                            itemId: 'option/location',
		                            iconCls: 'icon_color'
		                        },
		                        {
		                            text: 'Item Units',
		                            itemId: 'option/unit',
		                            iconCls: 'icon_feature'
		                        },
		                        {
		                            text: 'Staff Positions',
		                            itemId: 'option/position',
		                            iconCls: 'icon_position'
		                        },
		                        {
		                            text: 'Statuses',
		                            itemId: 'option/status',
		                            iconCls: 'icon_status'
		                        }
		                    ]
			       },
			       {
			    	   xtype: 'menuseparator'
			       },
			       
			       {
			    	   text:'Product',
			    	   itemId:'product',
			    	   iconCls: 'icon_user',
			       },
			       {
	                    xtype: 'menuseparator'
	                },
	                {
	                    text: 'Purchases',
	                    itemId: 'purchases',
	                    iconCls: 'icon_tag'
	                }
			      ]	
			
		});
		 me.callParent( arguments );
	}
});