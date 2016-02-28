Ext.define('InventoryApp.view.reports.purchases.PurchaseDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.purchases.purchasedtlslist',		
	store: 'purchases.PurchasesDtls',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{          
           columns: {
               defaults: {
            	   menuDisabled:true,
            	   sortable:false
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
	                       text: 'Description',
	                       dataIndex: '_purdPdtCode',
	                      // autoSizeColumn : true,
	                       flex:1
	                       //menuDisabled:true,
	                       //sortable:false
		                   }, 	
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'purdPrice',
                       xtype:'numbercolumn',
                       editor: {
                           xtype: 'numberfield',
                      },
                      allowBlank: false,                      
                       menuDisabled:true,                     
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'purdQty',                    
                       field: {
                           xtype: 'numberfield',
                      },
                       xtype:'numbercolumn',
                       menuDisabled:true,
                       //sortable:false
                   }, 
                   {
                       xtype: 'numbercolumn',
                       summaryType: 'sum',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   
               ]
               
           },           
           features: [{
               ftype: 'summary'
           }], 
          /* viewConfig : {
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