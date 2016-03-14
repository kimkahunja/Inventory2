Ext.define('InventoryApp.view.reports.invoice.Invoice_GSup',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.invoice.invoicegsup',
	requires: [
	           'Ext.grid.RowNumberer'
	          ],	
	store: 'invoice.InvoiceRPTs',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{          
           columns: {
               defaults: {
            	   //menuDisabled:true,
            	  // sortable:false
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
	                       //autoSizeColumn : true,
	                       flex:1
	                      // menuDisabled:true,
	                       //sortable:false
		                   }, 	
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'invdPrice'                                           
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'invdQty'
                   }, 
                   {
                       xtype: 'numbercolumn',
                       summaryType: 'remote',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   {
                       text: 'Inv No.',
                       dataIndex: 'invInvono',		                      
	               },
                   {
                       text: 'Date',
                       dataIndex: 'invDate',
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