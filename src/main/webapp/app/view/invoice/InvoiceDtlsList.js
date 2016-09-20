Ext.define('InventoryApp.view.invoice.InvoiceDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.invoicedtlslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],
	autoScroll:'auto',       
	//store: 'invoice.InvoiceDtls',
	//height:500,
	selType: 'checkboxmodel',
    selModel : 
    {
        mode : 'MULTI'
    },   
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.invoice.InvoiceDtls');
       Ext.applyIf(me,{
    	   store: store,
    	   maxHeight:Ext.getBody().getViewSize().height-200,
          // selType: 'cellmodel',
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
           dockedItems: [	                         
                         {
                             xtype: 'toolbar',
                             dock: 'bottom',
                             items: [
         						{
         						    xtype:'tbspacer',
         						    flex:2
         						},
         						{
                                    xtype: 'button',
                                    itemId: 'invoiceRemove',
                                    text: 'Remove',
                                    iconCls: 'delete'
                                },
         						{
                                    xtype: 'button',
                                    itemId: 'invoiceSave',
                                    text: 'Save',
                                    iconCls: 'save'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'invoiceFinish',
                                    text: 'Finish',
                                    iconCls: 'accept'
                                },
                             ]
                         }
                     ] 
       });
       me.callParent( arguments );
   }        
});