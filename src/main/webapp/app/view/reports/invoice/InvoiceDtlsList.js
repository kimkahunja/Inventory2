Ext.define('InventoryApp.view.reports.invoice.InvoiceDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.invoice.invoicedtlslist',
	requires: [
	           'Ext.grid.RowNumberer'
	          ],	
	store: 'invoice.InvoiceDtls',
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
       });
       me.callParent( arguments );
   }        
});