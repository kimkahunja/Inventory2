Ext.define('InventoryApp.view.reports.returns.List',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.returns.list',
	requires:[
	          'InventoryApp.store.returns.ItemReturns'
	          ],
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.returns.ItemReturns');
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
	                       text: 'Date',
	                       dataIndex: 'rtnDate',
	                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
	                   },
	                   {
	                       text: 'Account',
	                       dataIndex: '_rtnAccCode',                    
	                       
	                   },
	                   {
	                       text: 'Status',
	                       dataIndex: 'rtnStatus',                    
	                       
	                   } 
	                   
	               ]
	               
	           },
	                  
	       });
	       me.callParent( arguments );
	   }   
});