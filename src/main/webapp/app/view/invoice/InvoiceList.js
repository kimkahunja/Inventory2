Ext.define('InventoryApp.view.invoice.InvoiceList',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.invoicelist',
	//store: 'invoice.Invoices',
  //  title:'Pending Invoices',
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.invoice.Invoices');
	       store.proxy.extraParams = { location: InventoryApp.Utilities.locationId };
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