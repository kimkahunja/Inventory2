Ext.define('InventoryApp.controller.ApprovalAreas', {
    extend: 'InventoryApp.controller.Base',
    stores: [
             'security.Users'
    	    ],
    views: [
    	
    ],
    refs: [
			{
			    ref: 'AreaList',
			    selector: '[xtype=approvalAreas.areaslist]'
			},
			{
			    ref: 'UserList',
			    selector: '[xtype=approvalAreas.userlist]'
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
            	'button#approvalAreasSave':{
            		click:this.saveApproval
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
    gridSelectionChange: function(model, records) {
    	//console.log(' id==== '+records[0].get('id'));
  	  var me = this,
  	  grid = me.getAreaList(),
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
    	console.log('beforeLoadUsers');
    	var proxy = myStore.getProxy();
 	   proxy.setExtraParam('status', 'A');
    },
    saveApproval: function( button, e, eOpts ){
  	  
  	  var me = this,
      	grid = me.getAreaList(),
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
            url: 'approvalArea/saveApprovalAreaDtl.action',
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
      
});