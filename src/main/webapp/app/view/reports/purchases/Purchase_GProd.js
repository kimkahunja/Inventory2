Ext.define('InventoryApp.view.reports.purchases.Purchase_GProd',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.purchases.purchasegprod',		
	store: 'purchases.PurchaseRPTs',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{          
           columns: {
               defaults: {
            	  //menuDisabled:true,
            	   //sortable:true
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
		                       text: 'Supplier',
		                       dataIndex: '_purAccCode',                    
		                      // autoSizeColumn : true,
		                       flex:1
		                   }, 	
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'purdPrice',
                       xtype:'numbercolumn',                                           
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'purdQty'              
                       
                   }, 
                   {
                       xtype: 'numbercolumn',
                       summaryType: 'remote',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   {
                       text: 'Inv No.',
                       dataIndex: 'purInvono',		                      
	               },
                   {
                       text: 'Date',
                       dataIndex: 'purDate',
                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
                   },
                   
               ]
               
           },
           features: [{
               ftype: 'summary',
               remoteRoot: 'data.summary', // summary key in the server response
           }], 
           /*viewConfig : {
       	    listeners : {
       	     refresh : function (dataview) {
       	      Ext.each(dataview.panel.columns, function (column) {
       	       if (column.autoSizeColumn === true)
       	        column.autoSize();
       	      })
       	     }
       	    }
       	   },*/
           dockedItems: [                         
                         {
                             xtype: 'pagingtoolbar',
                             ui: 'footer',
                             defaultButtonUI: 'default',
                             dock: 'bottom',
                             displayInfo: true,
                             store: me.getStore()
                         }
                     ]
       });
       me.callParent( arguments );
   }        
});