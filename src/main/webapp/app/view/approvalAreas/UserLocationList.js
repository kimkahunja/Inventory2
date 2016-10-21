Ext.define('InventoryApp.view.approvalAreas.UserLocationList',{
	extend:'Ext.grid.Panel',
	alias:'widget.approvalAreas.userlocationlist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'InventoryApp.store.location.UserLocations'	          
	       ],	
	title:'User Locations',
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.location.UserLocations');
       Ext.applyIf(me,{
    	   store: store,    	   
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
		                       dataIndex: 'locShtDesc'	                       
		                   }, 
		                   {
		                       text: 'Desc',
		                       dataIndex: 'locDescription'	                       
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
                                itemId: 'userLocationSave',
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