Ext.define('InventoryApp.view.reports.purchases.Purchase_GSup',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.purchases.purchasegsup',		
	store: 'purchases.PurchaseRPTs',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{          
           columns: {
               defaults: {
            	  // menuDisabled:true,
            	   //sortable:false
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
	                       //menuDisabled:true,
	                       //sortable:false
		                   }, 	
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'purdPrice'                                           
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'purdQty'                   
                       
                   }, 
                   {
                       xtype: 'numbercolumn',
                       summaryType: 'sum',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   {
                       text: 'Inv No.',
                       dataIndex: 'purInvono',		                      
	               },
                   {
                       text: 'Date',
                       dataIndex: 'purDate',
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