Ext.define('InventoryApp.view.approvalAreas.ApprovalAreaHolder',{
	extend:'Ext.container.Container',
	alias:'widget.approvalAreas.approvalareaholder',
	requires: [	
	           'InventoryApp.view.approvalAreas.UserList',
	           'InventoryApp.view.approvalAreas.AreasList'
	       ],
   layout: {
       type: 'hbox',
       align: 'stretch'
   },	       
   initComponent: function() {
	   var me = this;  
		
	   Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: false,
    		   margins: 5,
    		   flex: 1,
    	   },
    	   items:[
					{
						xtype:'approvalAreas.userlist',
						flex:1
					},
					{
						xtype:'approvalAreas.areaslist',
						flex:3
					}
                 ], 
       });
	   me.callParent( arguments );
   }
});	       