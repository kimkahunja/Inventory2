Ext.define('InventoryApp.view.reports.transfer.TransferList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.transfer.transferlist',
	//store: 'transfer.Transfers',  
	initComponent: function() {
	       var me = this;
	        store = Ext.create('InventoryApp.store.transfer.Transfers');
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
			                       text: 'Transfer Type',
			                       dataIndex: 'tnsfType',		                      
				                   },
								  {
			                       text: 'Source Location',
			                       dataIndex: '_tnsfFromLocCode',		                      
				                   }, 	
	                   
				                   {
				                       text: 'Date',
				                       dataIndex: 'tnsfDate',
				                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
				                   }
	                   
	               ]
	               
	           },
	                  
	       });
	       me.callParent( arguments );
	   }   
});