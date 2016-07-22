Ext.define('InventoryApp.view.reports.transfer.TransferDList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.transfer.transferdlist',
	requires: [
	           'Ext.grid.RowNumberer'	           
	       ],	
	
    initComponent: function() {
       var me = this,
       store = Ext.create('InventoryApp.store.transfer.TransferDtlRpt');
       Ext.applyIf(me,{
    	   store:store,         
          
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
	                       dataIndex: '_tnsfdPdtCode',
	                       menuDisabled:true,
	                       flex:1
	                       //sortable:false
		                   },	                   
                   
		                   {
		                       text: 'Quantity',
		                       dataIndex: 'tnsfdQty',                    
		                       field: {
		                           xtype: 'numberfield',
		                           selectOnFocus: true
		                      },
		                       xtype:'numbercolumn',                      
		                       menuDisabled:true,
		                       //sortable:false
		                   } 
		                   
               ]
               
           },
                  
       });
       me.callParent( arguments );
   }        
});