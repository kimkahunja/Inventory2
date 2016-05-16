Ext.define('InventoryApp.view.adjustment.AdjustmentDtls',{
	extend:'Ext.grid.Panel',
	alias:'widget.adjustment.adjustmentdtls',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	store: 'adjustment.AdjustmentDtls',
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
	                       dataIndex: '_madjdPdtCode',
	                       menuDisabled:true,
	                       flex:1
	                       //sortable:false
		                   },	                   
                   
		                   {
		                       text: 'Quantity',
		                       dataIndex: 'madjdQty',                    
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