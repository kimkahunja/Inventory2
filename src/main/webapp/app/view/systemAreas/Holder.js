Ext.define('InventoryApp.view.systemAreas.Holder',{
	extend:'Ext.container.Container',
	alias:'widget.systemAreas.holder',
	requires: [	
	           'InventoryApp.view.systemAreas.List',
	           'InventoryApp.view.systemAreas.SystemAreaList'
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
						xtype:'systemAreas.systemarealist',
						flex:1
					},
					{
						xtype:'systemareas.list',
						flex:3
					}
                 ], 
       });
	   me.callParent( arguments );
   }
});	       