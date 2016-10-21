Ext.define('InventoryApp.view.reports.returns.ListHolder',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.returns.listholder',
	requires: [	 
	           'InventoryApp.view.reports.returns.List',
	           'InventoryApp.view.reports.returns.ItemList'
	       ],
 bodyPadding: 5,	       
   initComponent: function() {
	   var me = this;
	   Ext.applyIf(me,{ 		    
    	   items:[
    	      	{
	           		xtype: 'panel',
	           	    layout: 'hbox',	
	           	    
					 items:[					        
					        {
					        	xtype:'reports.returns.list',
					        	flex:1,
					        	margin:'0 10 0 0'
					        },
					        
					        {
					        	xtype:'reports.returns.itemlist',
					            flex:2
					        }
					        ]
	           	}
	           	
	           	
    	         ]
	   });
	   me.callParent( arguments );
   }
});	       