Ext.define('InventoryApp.view.invoice.InvoiceList',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.invoicelist',
	store: 'invoice.Invoices',
  //  title:'Pending Invoices',
	initComponent: function() {
	       var me = this;
	       Ext.applyIf(me,{	   
	    	   
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
		                       text: 'Inv No.',
		                       dataIndex: 'invInvono',		                      
			                   }, 	
	                   
	                   {
	                       text: 'Date',
	                       dataIndex: 'invDate',
	                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
	                   },
	                   {
	                       text: 'Account',
	                       dataIndex: '_purAccCode',                    
	                       
	                   }                
	                   
	               ]
	               
	           },
	                  
	       });
	       me.callParent( arguments );
	   }   
});