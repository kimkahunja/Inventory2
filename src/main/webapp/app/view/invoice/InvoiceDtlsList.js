Ext.define('InventoryApp.view.invoice.InvoiceDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.invoicedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],
	autoScroll:'auto',       
	//store: 'invoice.InvoiceDtls',
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.invoice.InvoiceDtls');
       Ext.applyIf(me,{
    	   store: store,
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
	                       flex:2
	                       //sortable:false
		                   }, 	
		                   {
		                       text: 'Quantity',
		                       dataIndex: 'invdQty',                    
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
		                       dataIndex: 'invdPrice',
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
		                	   text: 'Postable',
		                	   dataIndex: '_postable',
		                	  // hidden:true,
		                	   renderer: function (val, metadata, record) {
		                           if (record.get('_postable') == 'N') {
		                               metadata.style = 'background-color: #FFFFCC !important;cursor: pointer;'
		                           }
		                           return val;
		                       }
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