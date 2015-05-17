/*
 * Location container
 */
Ext.define('InventoryApp.view.location.Locations',{
	extend:'Ext.container.Container',
	alias:'widget.location.locations',
	requires: [
	           	'InventoryApp.view.location.LocationList',
	           	'InventoryApp.view.location.BinList'
	           ],
   layout: {
       type: 'hbox',
       align: 'stretch'
   },
	initComponent:function(){
		var me=this;
		Ext.applyIf(me,{
			items:[
			       {			    	  
			    	   xtype: 'location.locationlist',
			            flex: 1
			       },
			       {			    	  
			    	   xtype: 'location.binlist',
			            flex: 2
			       }
			       ],
		});
	 me.callParent( arguments );
	}
});
