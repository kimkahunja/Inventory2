Ext.define('InventoryApp.view.purchases.PurchaseList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchaselist',
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