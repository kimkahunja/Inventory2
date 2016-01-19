Ext.define('InventoryApp.view.reports.invoice.Invoice_GProd',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.invoice.invoicegprod',
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
	                       text: 'Supplier',
	                       dataIndex: '_purAccCode',
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
               ftype: 'summary'
           }],         
       });
       me.callParent( arguments );
   }        
});