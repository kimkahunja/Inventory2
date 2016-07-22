Ext.define('InventoryApp.view.purchases.PurchaseList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchaselist',
	//store:'purchases.Purchases',
  //  title:'Unauthorized Purchases',
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.purchases.Purchases');
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