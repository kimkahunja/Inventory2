Ext.define('InventoryApp.view.systemAreas.SystemAreaList',{
	extend:'Ext.grid.Panel',
	alias:'widget.systemAreas.systemarealist',
	requires:[
	          'InventoryApp.store.systemAreas.SystemAreaMains'
	          ],
	title:'Areas',
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.systemAreas.SystemAreaMains');	      
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
		                       text: 'Name',
		                       dataIndex: 'ctaName',                    
		                       flex:2
		                   }                
	                   
	               ]
	               
	           }       
	       });
	       me.callParent( arguments );
	   }   
});