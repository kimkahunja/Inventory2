Ext.define('InventoryApp.view.purchases.PurchaseDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchasedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	store: 'purchases.PurchasesDtls',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
           selType: 'cellmodel',
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
	                       //sortable:false
		                   }, 
		                   {
		                	 text:'Product Reference',
		                	 dataIndex: 'purdSerialNo',
		                	 editor: {
		                           xtype: 'textfield',
		                      },
		                      allowBlank: true,
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
                       text: 'Quantity',
                       dataIndex: 'purdQty',                    
                       field: {
                           xtype: 'numberfield',
                           selectOnFocus: true
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