Ext.define('InventoryApp.view.systemAreas.List',{
	extend:'Ext.grid.Panel',
	alias:'widget.systemareas.list',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	       ],	
	//store: 'systemAreas.SystemAreas',
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
	                       text: 'Show?',
	                       dataIndex: 'ctadIsvisible',
	                       xtype:'checkcolumn',
	                       stopSelection: false                     
	                       
	                   },
                   
                   
               ]
               
           }        
       });
       me.callParent( arguments );
   }        
});