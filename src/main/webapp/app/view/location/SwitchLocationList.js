Ext.define('InventoryApp.view.location.SwitchLocationList',{
	extend:'Ext.grid.Panel',
	alias:'widget.location.switchlocationlist',	
	requires:[
	          	'InventoryApp.store.location.UserLocations'
	          ],
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.location.UserLocations');
	       //store.proxy.extraParams = { location: InventoryApp.Utilities.locationId };
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
		                       text: 'Code',
		                       dataIndex: 'locShtDesc',
		                       flex:1
			                },
		                   {
		                       text: 'Description',
		                       dataIndex: 'locDescription',                    
		                       flex:2
		                   }	                   
	                   
	               ]
	               
	           }      
	       });
	       me.callParent( arguments );
	   }   
});