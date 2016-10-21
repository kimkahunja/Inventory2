Ext.define('InventoryApp.view.systemAreas.List',{
	extend:'Ext.grid.Panel',
	alias:'widget.systemareas.list',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],
	//height:300,	       
	store: 'systemAreas.SystemAreas',
	title:'Customize Items',
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
		                       text: 'Code',
		                       dataIndex: 'ctadColumn'	                       
		                   }, 
		                   {
		                       text: 'Name',
		                       dataIndex: 'ctadColumnDesc'	                       
		                   },
                   
	                   {
		                   xtype:'checkcolumn',	   
	                       text: 'Show?',
	                       dataIndex: '_ctadIsvisible',	
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
                                    itemId: 'saveSA',
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