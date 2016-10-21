Ext.define('InventoryApp.view.purchases.PurchaseDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchasedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	//store: 'purchases.PurchasesDtls',
	autoScroll:'auto',       
	selType: 'checkboxmodel',
    selModel : 
    {
        mode : 'MULTI'
    }, 
   // maxWidth:900,
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.purchases.PurchasesDtls');
      // console.log('width=== '+Ext.getBody().getViewSize().width);
       Ext.applyIf(me,{
    	   store: store,
    	   maxHeight:Ext.getBody().getViewSize().height-300 , 
    	   
           plugins: [
                     {
                         ptype: 'cellediting',
                         clicksToEdit: 1
                     }
                 ],
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
	                       menuDisabled:true,
	                       maxWidth:500,
	                       flex:2
	                       //sortable:false
		                   }, 
		                   {
		                	 text:'Product Reference',
		                	 dataIndex: 'purdSerialNo',
		                	 editor: {
		                           xtype: 'textfield',
		                      },
		                      allowBlank: true,
		                      hidden:true
		                   },
		                   {
		                       text: 'Quantity',
		                       dataIndex: 'purdQty',   
		                       summaryType: 'sum',
		                       field: {
		                           xtype: 'numberfield',
		                           selectOnFocus: true
		                      },
		                       xtype:'numbercolumn',                      
		                       menuDisabled:true,
		                       //sortable:false
		                   },        
                   
		                   {
		                       text: 'Unit Price',
		                       dataIndex: 'purdPrice',
		                       xtype:'numbercolumn',
		                       editor: {
		                           xtype: 'numberfield',
		                           selectOnFocus: true
		                      },
		                      allowBlank: false,                       
		                       menuDisabled:true,                     
		                       
		                   },
		                    
		                   {
		                       xtype: 'numbercolumn',
		                       summaryType: 'sum',
		                       dataIndex: 'total',
		                       text: 'Total'
		                   },
		                   {
		                       xtype: 'numbercolumn',
		                       summaryType: 'sum',
		                       dataIndex: 'purdVatAmt',
		                       text: 'Vat Amt',
		                       hidden:true
		                   },
		                   {
			                   xtype:'checkcolumn',	   
		                       text: 'Vat Inclusive?',
		                       dataIndex: 'purdVatInclusive',
		                       hidden:true
		                       //width: 90	                                           
		                       
		                   }
               ]
               
           },
           features: [{
               ftype: 'summary'
           }], 
           dockedItems: [	                         
                         {
                             xtype: 'toolbar',
                             dock: 'bottom',
                             maxWidth:1000,
                             items: [
              						{
              						    xtype:'tbspacer',
              						    flex:2
              						},
              						{
                                         xtype: 'button',
                                         itemId: 'purchaseRemove',
                                         text: 'Remove',
                                         iconCls: 'delete'
                                     },
              						{
                                         xtype: 'button',
                                         itemId: 'purchaseSave',
                                         text: 'Save',
                                         iconCls: 'save'
                                     },
                                     {
                                         xtype: 'button',
                                         itemId: 'purchaseCancel',
                                         text: 'Cancel',
                                         iconCls: 'cancel'
                                     },
                                  ]
                         }
                     ]    
       });
       me.callParent( arguments );
   }        
});