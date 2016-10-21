Ext.define('InventoryApp.view.approvalAreas.UserList',{
	extend:'Ext.grid.Panel',
	alias:'widget.approvalAreas.userlist',
	requires:[
	          'InventoryApp.store.security.Users'
	          ],
	title:'Users',
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.security.Users');
	       Ext.applyIf(me,{	   
	    	   store: store,
	           columns: {	
	        	   defaults: {
	        		   autoSizeColumn : true
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
		                       text: 'User Name',
		                       dataIndex: 'username',		                      
			                },
		                   {
		                       text: 'Name',
		                       dataIndex: 'name',                    
		                       
		                   }                
	                   
	               ]
	               
	           }       
	       });
	       me.callParent( arguments );
	   }   
});