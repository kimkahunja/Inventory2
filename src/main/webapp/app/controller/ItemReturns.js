Ext.define('InventoryApp.controller.ItemReturns', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
   stores: [    	
            'returns.ItemReturnDtls'
        ],
        views: [
        	 'returns.ReturnList'        	
        ], 
    refs:[		
		{
            ref: 'ReturnList',
            selector: '[xtype=returns.returnlist]'
        }
       ],      
    init: function() {    	
    	this.listen({
            controller: {},
            component: { 
            	'grid[xtype=returns.returnlist]': {
            		edit: this.editItems,
            		beforeedit:this.beforeEditItems
            	},
            	"combobox[name='returnProdSearch']":{
            		select:this.onProdSelect
            	},
            	'button#returnRemove':{
            		click:this.remove
            	},
            	'button#returnSave':{
            		click:this.saveReturn
            	},
            	"combobox[itemId='swpAccCode']":{
            		select:this.onCustomerSelect
            	},
            	'button#returnPost':{
            		click:this.post
            	},
            },
            global: {},
            store: {},             
        });
    },
    onProdSelect:function( combo, records, eOpts ){
    	var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
		accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue();
    	if(date==null){
    		combo.clearValue();
 			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
 			 return;
 		 }else if(accCode==null){
 			combo.clearValue();
 			InventoryApp.util.Util.showErrorMsg('Customer is required');
			 return;
 		 }
    	  if (records[0]) {
    		  var me = this,
              grid = me.getReturnList(),
              store = grid.getStore();
           
              var model = {};              
              model["rtndPdtCode"] = records[0].get('pdtCode');
              model["rtndQty"]=1;           
              model["_rtndPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
              var theSave=this.save();
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
          	grid = me.getReturnList(), 
          	record = grid.getSelectionModel().getSelection(),
          	
      		store = grid.getStore();
      	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
      	     if (grid.getSelectionModel().getCount()>0 ){
      	    	 store.remove(record[0]);
      	    	   grid.getView().refresh();
      	     } 
             
        },
    saveReturn: function( button, e, eOpts ){
    	var theSave=this.save();
    		
      }, 
   save:function(){
	   var me = this,
    	grid = me.getReturnList(),
		store = grid.getStore();
	   if(store.getCount()>0){
		   var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
			accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
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
              url: 'item/saveReturn.action',
           params: {                 
                   date:date,                 
                   accCode:accCode,                  
                   dataDetail:Ext.encode(details),                   
                   userName:InventoryApp.Utilities.userName,
                   location:InventoryApp.Utilities.locationId
           },
           
           scope:this,
           //method to call when the request is successful
           //success: InventoryApp.Utilities.onSaveSuccess,
           success:function(conn, response, options, eOpts){
           	var result = Ext.JSON.decode(conn.responseText, true); 
           	if (result.success){
           		// InventoryApp.util.Alert.msg('Success!', result.messages.message);
           		 store.load({
            			  params: {
          	           		accCode:accCode
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
	   }
		
  },     
  onCustomerSelect:function( combo, records, eOpts ){
	  var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReturnSwap']")[0].getChecked()[0],
          selection = reportGrp.getGroupValue();
	  if (selection=='RETURN'){
		  var me = this,
          grid = me.getReturnList(),
          store = grid.getStore();
		  store.load({
			  params: {
	           		accCode:records[0].get('accCode')
	           	}
		  });
		 
	  }  
  	
    },
 editItems:function(editor, e, eOpts){
 // console.log('cell editing');
  if(e.record.dirty){ 
	  if(e.record.validate().isValid()){
		 // console.log('record updated');
		  var theSave=this.save();
	  }
  }
  
 },
 beforeEditItems:function(editor, e, eOpts){
	 var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
		accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue();
 	if(date==null){ 		
			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
			 return;
		 }else if(accCode==null){			
			InventoryApp.util.Util.showErrorMsg('Customer is required');
			 return;
		 } 
 },
 post: function( button, e, eOpts ){
	 var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
		accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue();
	  if(date==null){ 		
			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
			 return;
		 }else if(accCode==null){			
			InventoryApp.util.Util.showErrorMsg('Customer is required');
			 return;
		 } 
	  
	  
	 var me = this,
 	grid = me.getReturnList(),
		store = grid.getStore();
	   if(store.getCount()>0){
		   var records = store.getRange(),
		      id= records[0].get('rtndRtnId');
		   if(id==null){
			   InventoryApp.util.Util.showErrorMsg('Transaction cannot be posted...');
				 return;
		   }else{
			   Ext.Ajax.request({
		              url: 'item/postReturns.action',
		           params: {                 
		                   id:id,                   
		                   userName:InventoryApp.Utilities.userName,
		                   location:InventoryApp.Utilities.locationId
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
		          	           		accCode:accCode
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
		   }
	   }
 		
   }
});           