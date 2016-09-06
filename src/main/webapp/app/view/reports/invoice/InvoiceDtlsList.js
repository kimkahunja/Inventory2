Ext.define('InventoryApp.view.reports.invoice.InvoiceDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.invoice.invoicedtlslist',
	requires: [
	           'Ext.grid.RowNumberer'
	          ],	
	//store: 'invoice.InvoiceDtls',
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.invoice.InvoiceDtls');
       Ext.applyIf(me,{  
    	   store: store,
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
	                      // autoSizeColumn : true,
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
                       summaryType: 'sum',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   
               ]
               
           },
           features: [{
               ftype: 'summary'
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
       });
       me.callParent( arguments );
   }        
});