Ext.define('InventoryApp.controller.Swap', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
   stores: [    	
            'swap.ItemSwapDtls'
        ],
        views: [
        	 'swap.SwapList',
        	 'swap.OriginList',
        	 'returns.ReturnList'
        ], 
    refs:[
		
		{
            ref: 'OriginList',
            selector: '[xtype=swap.originlist]'
        },
        {
            ref: 'SwapList',
            selector: '[xtype=swap.swaplist]'
        },
        {
            ref: 'ReturnList',
            selector: '[xtype=returns.returnlist]'
        }
       ],      
    init: function() {    	
    	this.listen({
            controller: {},
            component: {          	  
            	"combobox[name='originProdSearch']":{
            		select:this.onOriginProdSelect
            	},
            	"combobox[name='swapProdSearch']":{
            		select:this.onSwapProdSelect
            	},
            	'button#originRemove':{
            		click:this.removeOrigin
            	},
            	'button#swapRemove':{
            		click:this.removeSwap
            	},
            	'button#originSave':{
            		click:this.saveOrigin
            	},
            	'button#swapSave':{
            		click:this.saveSwap
            	},
            	'container[xtype=swap.swapheader]':{
               		afterrender : this.onContainerRendered
               	},
               	"radiogroup[itemId='rgReturnSwap']":{
               		change:this.onRgChange
               	},
               	"combobox[itemId='swpAccCode']":{
            		select:this.onCustomerSelect
            	},
            	'grid[xtype=swap.originlist]': {
            		edit: this.originEditItems,
            		beforeedit:this.beforeEditItems
            	},
            	'grid[xtype=swap.swaplist]': {
            		edit: this.swapEditItems,
            		beforeedit:this.beforeEditItems
            	},
            	'button#swapPost':{
            		click:this.post
            	},
            },
            global: {},
            store: {},             
        });
    },
    onOriginProdSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	var accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
    	date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue();
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
              grid = me.getOriginList(),
              store = grid.getStore();
           
              var model = {};              
              model["swpdPdtCode"] = records[0].get('pdtCode');
              model["swpdQty"]=1;           
              model["_swpdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
              var origin=this.originSave();
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	 // combo.focus(true);
    	  combo.clearValue();
      },
      onSwapProdSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	var accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
      	date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue();
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
              grid = me.getSwapList(),
              store = grid.getStore();
           
              var model = {};              
              model["swpdPdtCode"] = records[0].get('pdtCode');
              model["swpdQty"]=1;           
              model["_swpdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
              var swap=this.swapSave();
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	 // combo.focus(true);
    	  combo.clearValue();
      },
      removeOrigin: function( button, e, eOpts ){
      	  //console.log("Remove Invoice.....");
      	  var me = this,
          	grid = me.getOriginList(), 
          	record = grid.getSelectionModel().getSelection(),
          	
      		store = grid.getStore();
      	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
      	     if (grid.getSelectionModel().getCount()>0 ){
      	    	 store.remove(record[0]);
      	    	   grid.getView().refresh();
      	     } 
             
        },
        removeSwap: function( button, e, eOpts ){
        	  //console.log("Remove Invoice.....");
        	  var me = this,
            	grid = me.getSwapList(), 
            	record = grid.getSelectionModel().getSelection(),
            	
        		store = grid.getStore();
        	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
        	     if (grid.getSelectionModel().getCount()>0 ){
        	    	 store.remove(record[0]);
        	    	   grid.getView().refresh();
        	     } 
               
          },
  onContainerRendered : function() {
   // console.log('The container was rendered');
   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReturnSwap']")[0].getChecked()[0];
   var selection = reportGrp.getGroupValue();
  // console.log('The container was rendered=== '+selection);
   if (selection=='SWAP'){
	   Ext.ComponentQuery.query('[xtype=returns.swapreturnview]')[0].add([
	               	                                                    { xtype: 'swap.swapmaincontainer'  },    	                                                    
	               	                                                   ]);
   }
  },  
  onRgChange:function( field, newValue, oldValue, eOpts ){
 	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReturnSwap']")[0].getChecked()[0],
	     selection = reportGrp.getGroupValue(),
	     container=Ext.ComponentQuery.query('[xtype=returns.swapreturnview]')[0];
 	     container.removeAll();
	  	 if (selection=='SWAP'){	  		
	  		container.add([{ xtype: 'swap.swapmaincontainer'  }]);	 
	  		var me = this,
	  		 accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
            grid = me.getOriginList(),
            store = grid.getStore(),
            gridSwap=me.getSwapList(),
            storeSwap=gridSwap.getStore();
	  		if(accCode!=null){
	  			store.load({
					  params: {
			           		accCode:accCode
			           	}
				  }); 
		  		storeSwap.load({
					  params: {
			           		accCode:accCode
			           	}
				  });
	  		}
	  		
		   }else if(selection=='RETURN'){			  
			   container.add([ { xtype: 'returns.returnmaincontainer'  }]);
			   var me = this,
			      accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
	              grid = me.getReturnList(),
	              store = grid.getStore();
			   if(accCode!=null){
				   store.load({
						  params: {
				           		accCode:accCode
				           	}
					  }); 
			   }
	    		  
		   }  	 
  },
  saveOrigin: function( button, e, eOpts ){
  	  //console.log("Save Origin.....");
  	  var origin=this.originSave();
    },
    onCustomerSelect:function( combo, records, eOpts ){
    	var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReturnSwap']")[0].getChecked()[0],
         selection = reportGrp.getGroupValue();
	  if (selection=='SWAP'){
		  if (records[0]) {
	  		  var me = this,
	            grid = me.getOriginList(),
	            store = grid.getStore(),
	            gridSwap=me.getSwapList(),
	            storeSwap=gridSwap.getStore();
	  		     store.removeAll();
		  		store.load({
					  params: {
			           		accCode:records[0].get('accCode')
			           	}
				  }); 
		  		 grid.getView().refresh();
		  		storeSwap.removeAll();
		  		storeSwap.load({
					  params: {
			           		accCode:records[0].get('accCode')
			           	}
				  });
		  		gridSwap.getView().refresh();
	  	  }
	  }
  	 
  	
    }, 
    saveSwap: function( button, e, eOpts ){
    	  var swap=this.swapSave();
      },
swapSave:function(){
	var me = this,
	grid = me.getSwapList(),
	store = grid.getStore();
	 if(store.getCount()>0){
		 var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
 		accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
 		details = new Array(),
       records = store.getRange(),
       origSwap='SWAP';
	  	for (var i = 0; i < records.length; i++) {
	   		 details.push(records[i].data);
	    };
 	  
	  	if(date==null){
			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
			 return;
		 }
	  	Ext.Ajax.request({
           url: 'item/saveSwapItem.action',
        params: {                 
                date:date,                 
                accCode:accCode,
                origSwap:origSwap,
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
        		 //InventoryApp.util.Alert.msg('Success!', result.messages.message);
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
originSave:function(){
	var me = this,
  	grid = me.getOriginList(),
		store = grid.getStore();
	 if(store.getCount()>0){
		 var date=Ext.ComponentQuery.query("datefield[name='swpDate']")[0].getValue(),
			accCode=Ext.ComponentQuery.query("combo[name='swpAccCode']")[0].getValue(),
			details = new Array(),
	    records = store.getRange(),
	    origSwap='ORIG';
	  	for (var i = 0; i < records.length; i++) {
	   		 details.push(records[i].data);
	    };
		  
	  	if(date==null){
			 InventoryApp.util.Util.showErrorMsg('Transaction Date is required');
			 return;
		 }
	  	Ext.Ajax.request({
	        url: 'item/saveSwapItem.action',
	     params: {                 
	             date:date,                 
	             accCode:accCode,
	             origSwap:origSwap,
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
originEditItems:function(editor, e, eOpts){
	 // console.log('cell editing');
	  if(e.record.dirty){ 
		  if(e.record.validate().isValid()){
			 // console.log('record updated');
			  var origin=this.originSave();
		  }
	  }
	  
	 },
 swapEditItems:function(editor, e, eOpts){
	 // console.log('cell editing');
	  if(e.record.dirty){ 
		  if(e.record.validate().isValid()){
			 // console.log('record updated');
			  var swap=this.swapSave();
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
 	grid = me.getOriginList(),
		store = grid.getStore(),
		grid1 = me.getSwapList(),
		store1 = grid1.getStore();
	   if(store.getCount()>0){
		   var records = store.getRange(),
		      id= records[0].get('swpdSwpId');
		   if(id==null){
			   InventoryApp.util.Util.showErrorMsg('Transaction cannot be posted...');
				 return;
		   }else{
			   Ext.Ajax.request({
		              url: 'item/postSwap.action',
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
		           		store1.load({
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