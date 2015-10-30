Ext.define('InventoryApp.view.invoice.InvoiceDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.invoicedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	store: 'invoice.InvoiceDtls',
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
                       text: 'Unit Price',
                       dataIndex: 'invdPrice',
                       xtype:'numbercolumn',
                       editor: {
                           xtype: 'numberfield',
                      },
                      allowBlank: false,                      
                       menuDisabled:true,                     
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'invdQty',                    
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