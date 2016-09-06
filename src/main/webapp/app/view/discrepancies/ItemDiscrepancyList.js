Ext.define('InventoryApp.view.discrepancies.ItemDiscrepancyList',{
	extend:'Ext.grid.Panel',
	alias:'widget.discrepancies.itemdiscrepancylist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	           'InventoryApp.store.discrepancies.ItemDiscrepancyDtls'
	       ],	
	
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.discrepancies.ItemDiscrepancyDtls');
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
	                       dataIndex: '_dscdPdtCode',
	                       menuDisabled:true,
	                       flex:1
	                       //sortable:false
		                   },	                   
                   
		                   {
		                       text: 'Quantity',
		                       dataIndex: 'dscdQty',                    
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