Ext.define('InventoryApp.view.reports.purchases.PurchaseList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.purchases.purchaselist',
	store: 'purchases.Purchases',
  //  title:'Unauthorized Purchases',
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
		                       dataIndex: 'purInvono',		                      
			                   }, 	
	                   
	                   {
	                       text: 'Date',
	                       dataIndex: 'purDate',
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