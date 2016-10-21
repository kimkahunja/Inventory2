Ext.define('InventoryApp.view.approvalAreas.ListHolder',{
	extend:'Ext.container.Container',
	alias:'widget.approvalAreas.listholder',
	requires: [		           
	           'InventoryApp.view.approvalAreas.AreasList',
	           'InventoryApp.view.approvalAreas.UserLocationList'
	       ],
   padding:'5' , 
   
   initComponent: function() {
	   var me = this; 
	   Ext.applyIf(me,{
		   items:[
					{
			       		xtype:'approvalAreas.areaslist',
			       		flex:2,
			       		margin:'10 0 20 0'
			       	},
			       	{
					    xtype:'tbspacer',
					    flex:2
					},
					{
						xtype:'approvalAreas.userlocationlist',
						flex:1
					}
				]	
	   });
	   me.callParent( arguments );
   }
	    	       
});