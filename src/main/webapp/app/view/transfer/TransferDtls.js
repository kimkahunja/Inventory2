Ext.define('InventoryApp.view.transfer.TransferDtls',{
	extend:'Ext.grid.Panel',
	alias:'widget.transfer.transferdtls',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	store: 'transfer.TransferDtls',
	
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