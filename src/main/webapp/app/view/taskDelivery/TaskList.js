Ext.define('InventoryApp.view.taskDelivery.TaskList',{
	extend:'Ext.grid.Panel',
	alias:'widget.taskDelivery.tasklist',	
	requires:[
	          	'InventoryApp.store.taskDelivery.TaskDeliveries'
	          ],
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.taskDelivery.TaskDeliveries');
	       Ext.applyIf(me,{	   
	    	   store: store,
	           columns: {	
	        	   defaults: {
	        		   autoSizeColumn : true
	               },
	               items: [
							Ext.create('Ext.grid.RowNumberer',
							        {
							        resizable: true,
							        resizeHandles:'all',
							        align: 'center',
							        minWidth: 35,
							        maxWidth:50
							        }),							        
	                   
							{
		                       text: 'Customer',
		                       dataIndex: '_tskAccCode',
		                       flex:1
			                }, 	
	                   
		                   {
		                       text: 'Date',
		                       dataIndex: 'tskDate',
		                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
		                   },
		                   {
		                       text: 'Description',
		                       dataIndex: 'tskDescription',                    
		                       flex:1
		                   },
		                   {
		                       text: 'Cost',
		                       dataIndex: 'tskCost',                    
		                       xtype:'numbercolumn',
		                       align:'right'
		                   },
		                   {
		                       text: 'Collection Date',
		                       dataIndex: 'tskCollectionDate',                    
		                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
		                   },
		                   {
		                	   text:'Assignee',
		                	   dataIndex:'_tskTssgId',
		                	   flex:1
		                   }
	                   
	               ]
	               
	           },
	           dockedItems: [	                         
	                         {
	                             xtype: 'pagingtoolbar',
	                             ui: 'footer',
	                             defaultButtonUI: 'default',
	                             dock: 'bottom',
	                             displayInfo: true,
	                             store:store
	                         }
	                     ]         
	       });
	       me.callParent( arguments );
	   }   
});