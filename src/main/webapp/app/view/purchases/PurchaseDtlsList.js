Ext.define('InventoryApp.view.purchases.PurchaseDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchasedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',	          
	       ],	
	//store: 'purchases.PurchasesDtls',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
           selType: 'rowmodel',        
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
       });
       me.callParent( arguments );
   }        
});