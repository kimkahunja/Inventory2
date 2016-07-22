Ext.define('InventoryApp.controller.SystemAreas', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
    stores: [    	
    	'systemAreas.SystemAreas'    	
    ], 
    refs: [    	
	           {
	               ref: 'SystemAreaList',
	               selector: '[xtype=systemareas.list]'
	           },
           ],
    init: function() {    	
    	this.listen({
            controller: {},
            component: {
            	'grid[xtype=systemareas.list]': {            		
            		beforerender: this.loadRecords,            		
            	},
            	'button#saveSA':{
            		click:this.save
            	},
            	'button#cancelSA':{
            		click:this.cancel
            	},
            },
            global: {},
            store: {},             
        });
    },   
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel}
     * @param {Object}
     */
    loadRecords: function( grid, eOpts ) {    	
    	var me = this,
    		store = grid.getStore();    	
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    	 
    }, 
	save: function( button, e, eOpts ) {
	  var me=this,
	  grid = me.getSystemAreaList(),
      store = grid.getStore(),
      details = new Array(),
      records = store.getRange();
	  for (var i = 0; i < records.length; i++) {     	
     		 details.push(records[i].data);
      };
      Ext.Ajax.request({
          url: 'customizeArea/saveArea.action',
       params: {
               dataDetail:Ext.encode(details),                   
               userName:InventoryApp.Utilities.userName
       },
       
       scope:this,
       //method to call when the request is successful
       //success: InventoryApp.Utilities.onSaveSuccess,
       success:function(conn, response, options, eOpts){
       	var result = Ext.JSON.decode(conn.responseText, true); 
       	if (result.success){
       		 InventoryApp.util.Alert.msg('Success!', result.messages.message);
       		 store.load();       			 
       	}else{
       		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
       	}
       	
       	//this.onSaveSuccess;
       },
       //method to call when the request is a failure
       failure: InventoryApp.Utilities.onSaveFailure
   });
	},
	cancel: function( button, e, eOpts ) {
		  var me=this,
		  grid = me.getSystemAreaList(),
	      store = grid.getStore();
		  store.clearFilter( true );
		  store.load();
	}
});