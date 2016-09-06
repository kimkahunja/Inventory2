Ext.define('InventoryApp.view.approvalAreas.AreasList',{
	extend:'Ext.grid.Panel',
	alias:'widget.approvalAreas.areaslist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'InventoryApp.store.approvalAreas.ApprovalAreaDtls'
	          // 'Ext.grid.plugin.CellEditing',
	       ],
	//height:300,
	title:'Approval Areas',
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.approvalAreas.ApprovalAreaDtls');
       Ext.applyIf(me,{
    	   store: store,
    	   /*selType: 'cellmodel',
           plugins: [
                     {
                         ptype: 'cellediting',
                         clicksToEdit: 1
                     }
                 ],*/
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
		                       text: 'Code',
		                       dataIndex: 'appvShtDesc'	                       
		                   }, 
		                   {
		                       text: 'Desc',
		                       dataIndex: 'appvDescription'	                       
		                   },
                   
	                   {
		                   xtype:'checkcolumn',	   
	                       text: 'Eligible?',
	                       dataIndex: '_eligible',	
	                       width: 90,
	                      // stopSelection: false                     
	                       
	                   },
                   
                   
               ]
               
           },    
       dockedItems: [	                         
                     {
                         xtype: 'toolbar',
                         dock: 'bottom',
                         items: [
     						
     						{
                                xtype: 'button',
                                itemId: 'approvalAreasSave',
                                text: 'Save',
                                iconCls: 'accept'
                            }
                         ]
                     }
                 ] 
       });
       me.callParent( arguments );
   }        
});