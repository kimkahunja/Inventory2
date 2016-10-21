Ext.define('InventoryApp.controller.UserLocations', {
    extend: 'InventoryApp.controller.Base',
    stores: [
             'security.Users'
    	    ],
    views: [
    	
    ],
    refs: [
			{
			    ref: 'LocationList',
			    selector: '[xtype=approvalAreas.userlocationlist]'
			},
			{
			    ref: 'UserList',
			    selector: '[xtype=approvalAreas.userlist]'
			},
			{
			    ref: 'SwitchLocationList',
			    selector: '[xtype=location.switchlocationlist]'
			},
			{
	            ref: 'mainPanel',
	            selector: 'mainpanel'
	        }
    ],
    init: function() {
    	this.getSecurityUsersStore().on({
  		  beforeload: this.beforeLoadUsers,
  	        scope: this
  	    });
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=approvalAreas.userlist]': {            		
            		viewready: this.loadRecords,
            		selectionchange: this.gridSelectionChange,
            	},
            	'grid[xtype=location.switchlocationlist]': {            		
            		viewready: this.loadSwitchLoc,
            		itemdblclick:this.switchLocDb
            	},
            	'button#userLocationSave':{
            		click:this.save
            	}
            },
            global: {},
            store: {},
            //proxy: {} 
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
    	store.load({
        	params: { 
        		status: 'A'
        	}
        });
    },
    loadSwitchLoc: function( grid, eOpts ) {
    	var me = this,
		store = grid.getStore();    	
		// clear any fliters that have been applied
		store.clearFilter( true );		
		// load the store
		store.load({
	    	params: { 
	    		location: InventoryApp.Utilities.locationId,
	    		userName:InventoryApp.Utilities.userName
	    	}
	    });
    },
    gridSelectionChange: function(model, records) {
    	//console.log(' id==== '+records[0].get('id'));
  	  var me = this,
  	  grid = me.getLocationList(),
        store = grid.getStore();
        if (records[0]) {             
             store.clearFilter( true );
       		store.load({
               	params: {
               		user: records[0].get('id')
               	}
               });
        }
    },
    beforeLoadUsers:function(myStore, operation, eOpts){
    	//console.log('beforeLoadUsers');
    	var proxy = myStore.getProxy();
 	   proxy.setExtraParam('status', 'A');
    },
    save: function( button, e, eOpts ){
  	  
  	  var me = this,
      	grid = me.getLocationList(),
  		store = grid.getStore(),  		
  		details = new Array(),
        records = store.getRange(),
         user=null;
       
	  	for (var i = 0; i < records.length; i++) {
	  		if(records[i].get('_eligible')){
	  			 details.push(records[i].data);
	  		}
	   		
	    };
  	  //get  the user code of the record selected
	    var gridUser=this.getUserList(),
	        //storeUser = gridUser.getStore();
	        record = gridUser.getSelectionModel().getSelection();
	    if (record[0]) {
	    	user=record[0].get('id');
	    }
	  	if(user==null){
			 InventoryApp.util.Util.showErrorMsg('Select User to assign to...');
			 return;
		 }
	  	Ext.Ajax.request({
            url: 'userLocation/saveUserLocation.action',
         params: {                 
                 user:user,       
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
         		 store.load({
          			  params: {
        	           		user:user
        	           	}
        		  });
         		 	 
         	}else{
         		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
         	}
         	
         	//this.onSaveSuccess;
         },
         //method to call when the request is a failure
         failure: InventoryApp.Utilities.onSaveFailure
     });
    }, 
    switchLocDb:function(view){
    	var grid = this.getSwitchLocationList(),
        record = grid.getSelectionModel().getSelection(); 
    	
    	if(record.length){
    		var window = grid.up('window');
    		var mainPanel = this.getMainPanel();
    		//set the global variables
    		//console.log("record[0].get('uslocLocCode')==="+record[0].get('uslocLocCode'));
    		InventoryApp.Utilities.locationId=record[0].get('uslocLocCode');
    		InventoryApp.Utilities.locationDescription=record[0].get('locDescription');
    		Ext.ComponentQuery.query("displayfield[name='locationDescription']")[0].setValue(record[0].get('locDescription'));
    		mainPanel.items.each(function(c){
    			//mainPanel.remove(c);
    			if(c.title!='Home'){
    				//console.log(c.title);
    				mainPanel.remove(c)
    			}
    			
    		});
    		//console.log("InventoryApp.Utilities.locationId==="+InventoryApp.Utilities.locationId);
    		window.close();
    	}
    }
        
});