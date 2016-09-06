Ext.define('InventoryApp.controller.ItemDiscrepancies', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
   stores: [    	
            'discrepancies.ItemDiscrepancyDtls'
        ],
        views: [
        	 'discrepancies.ItemDiscrepancyList'        	
        ], 
    refs:[		
		{
            ref: 'DiscrepancyList',
            selector: '[xtype=discrepancies.itemdiscrepancylist]'
        }
       ],      
    init: function() {    	
    	this.listen({
            controller: {},
            component: {          	  
            	"combobox[name='discrepancySearch']":{
            		select:this.onProdSelect
            	},
            	'button#discrepancyRemove':{
            		click:this.remove
            	},
            	'button#discrepancySave':{
            		click:this.save
            	},
            	'grid[xtype=discrepancies.itemdiscrepancylist]': {            		
            		beforerender: this.loadRecords            		
            	},
            },
            global: {},
            store: {},             
        });
    },
    loadRecords: function( grid, eOpts ) {    	
    	var me = this,
    		store = grid.getStore();    	
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },
    onProdSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getDiscrepancyList(),
              store = grid.getStore();
           
              var model = {};              
              model["dscdPdtCode"] = records[0].get('pdtCode');
              model["dscdQty"]=1;           
              model["_dscdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	 // combo.focus(true);
    	  combo.clearValue();
      },
      remove: function( button, e, eOpts ){
      	  //console.log("Remove Invoice.....");
      	  var me = this,
          	grid = me.getDiscrepancyList(), 
          	record = grid.getSelectionModel().getSelection(),
          	
      		store = grid.getStore();
      	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
      	     if (grid.getSelectionModel().getCount()>0 ){
      	    	 store.remove(record[0]);
      	    	   grid.getView().refresh();
      	     } 
             
        },
    save: function( button, e, eOpts ){
  	  console.log("Save Discrepancy.....");
  	  var me = this,
      	grid = me.getDiscrepancyList(),
  		store = grid.getStore(),
  		date=Ext.ComponentQuery.query("datefield[name='dscDate']")[0].getValue(),  		
  		details = new Array(),
        records = store.getRange();
       
	  	for (var i = 0; i < records.length; i++) {
	   		 details.push(records[i].data);
	    };
  	  
	  	if(date==null){
			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
			 return;
		 }
	  	Ext.Ajax.request({
            url: 'item/saveDiscrepancy.action',
         params: {                 
                 date:date,       
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
});           