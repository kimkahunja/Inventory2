Ext.define('InventoryApp.controller.Transfers', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
    stores: [
    	'location.TransferLocations',
    	'product.TransferProducts',
    	'transfer.TransferDtls'
    ],
    views: [
    	 'transfer.TransferDtls'
    ],
    refs:[
			{
			    ref: 'DestinationCombo',
			    selector: "combobox[name='tnsfToLocCode']"
			},
			{
			    ref: 'SourceCombo',
			    selector: "combobox[name='tnsfFromLocCode']"
			},
			{
			    ref: 'ProductCombo',
			    selector: "combobox[name='transferSearch']"
			},
			{
	            ref: 'TransferDtlsList',
	            selector: '[xtype=transfer.transferdtls]'
	        },
         ],
    init: function() {
    	//console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk');
    	/*this.getProductTransferProductsStore().on({
  		  beforeload: this.beforeLoadTransferProducts,
  	        scope: this
  	    });*/
    	this.listen({
            controller: {},
            component: {
          	  "combobox[name='tnsfType']":{
            		select:this.comboChange
            	},
            	"combobox[name='transferSearch']":{
            		select:this.onComboSelect
            	},
            	'button#transferRemove':{
            		click:this.removeTransfer
            	},
            	'button#transferSave':{
            		click:this.processTransfer
            	},
            	
            },
            global: {},
            store: {},             
        });
    },
    comboChange: function( combo, records, eOpts ) {
    	
    	if(combo.isValid()){ 
    		var transferType=records[0].get('id'),
    		sourceCombo=this.getSourceCombo(),
    		destinationCombo=this.getDestinationCombo(),
    		productCombo=this.getProductCombo(),
    		productComboStore=productCombo.getStore();
    		productComboStore.proxy.extraParams = { transferType: transferType };
    		sourceCombo.clearValue();
    		destinationCombo.clearValue();
    		if(transferType=='IN'){
    			//console.log('transferType== '+transferType);
    			destinationCombo.disable();
    			productCombo.clearValue();
    			productComboStore.clearFilter();
    			productComboStore.load({
    	  			  params: {
    	  	           		location: InventoryApp.Utilities.locationId,
    	  	           		transferType:transferType
    	  	           	}
    	  		  });
    			productCombo.enable();
    		}else{
    			//console.log('transferType2222== '+transferType);
    			destinationCombo.enable(); 
    		}
    		if(transferType=='OUT'){	
    			sourceCombo.disable();
    			productCombo.clearValue();
    			productComboStore.clearFilter();
    			productComboStore.load({
    	  			  params: {
    	  	           		location: InventoryApp.Utilities.locationId,
    	  	           		transferType:transferType
    	  	           	}
    	  		  });
    			productCombo.enable();
    		}else{
    			sourceCombo.enable();
    		}
    			
    	}
     
    },
    beforeLoadTransferProducts:function(myStore, operation, eOpts){
    	var transferType=Ext.ComponentQuery.query("combo[name='tnsfType']")[0].getValue();
    	console.log('transferType====== '+transferType);
		storeTranferType.proxy.extraParams = { location: InventoryApp.Utilities.locationId,
											tranferType:transferType
											};
 	   var proxy = myStore.getProxy();
 	   proxy.setExtraParam('location', InventoryApp.Utilities.locationId);
 	   proxy.setExtraParam('tranferType', transferType);	      
 	  
    },
    onComboSelect:function( combo, records, eOpts ){
  	  //console.log('selected....' +records[0].get('pdtShtDesc'));
  	  if (records[0]) {
  		  var me = this,
            grid = me.getTransferDtlsList(),
            store = grid.getStore();
         
            var model = {};              
            model["tnsfdPdtCode"] = records[0].get('pdtCode');
            model["tnsfdQty"]=1;           
            model["_tnsfdPdtCode"]=records[0].get('pdtDescription');
          
            store.add(model);
           // store.sync();
           // console.log('ffffffffffkim '+store.getCount());
            grid.getSelectionModel().select(store.data.length-1);  
  	  }
  	 // combo.focus(true);
  	  combo.clearValue();
    },
    removeTransfer: function( button, e, eOpts ){
  	  //console.log("Remove Invoice.....");
  	  var me = this,
      	grid = me.getTransferDtlsList(), 
      	record = grid.getSelectionModel().getSelection(),
      	
  		store = grid.getStore();
  	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
  	     if (grid.getSelectionModel().getCount()>0 ){
  	    	 store.remove(record[0]);
  	    	   grid.getView().refresh();
  	     }	    	 
  	  // this.getInvoiceForm().getForm().reset();
         
    },
    processTransfer: function( button, e, eOpts ) {
  	  var me=this,
  	      transferType=Ext.ComponentQuery.query("combo[name='tnsfType']")[0].getValue()
  	      date=Ext.ComponentQuery.query("datefield[name='tnsfDate']")[0].getValue(),
  	      form = button.up( 'form' );
		  	if(transferType=='IN'){
		  		var sourceLoc=Ext.ComponentQuery.query("combo[name='tnsfFromLocCode']")[0].getValue(),
		  		    destinationLoc=InventoryApp.Utilities.locationId;
		  	}else if(transferType=='OUT'){
		  		var sourceLoc=InventoryApp.Utilities.locationId,
	  		    destinationLoc=Ext.ComponentQuery.query("combo[name='tnsfToLocCode']")[0].getValue();
		  	}  	  
  	 
		  	 if(date==null){
		  		 InventoryApp.util.Util.showErrorMsg('Transfer Date is required');
		  		 return;
		  	 }
		  	if(transferType==null){
		  		 InventoryApp.util.Util.showErrorMsg('Transfer Type is required');
		  		 return;
		  	 }
		  	if(sourceLoc==null){
		  		 InventoryApp.util.Util.showErrorMsg('Source Location is required');
		  		 return;
		  	 }
		  	if(destinationLoc==null){
		  		 InventoryApp.util.Util.showErrorMsg('Destination Location is required');
		  		 return;
		  	 }
		  	 var  grid = me.getTransferDtlsList(),
		       store = grid.getStore(),
		       details = new Array(),
		       records = store.getRange();
		  	if(store.getCount()==0){
		  		InventoryApp.util.Util.showErrorMsg('No Product is specified for Transfer...');
	    		return;
		  	}
		       for (var i = 0; i < records.length; i++) {		      	 
		      		 details.push(records[i].data);
		       };
      
	       Ext.Ajax.request({
	             url: 'product/processTransfer.action',
	          params: {
	                  transferType: transferType,	                  
	                  date:date,	                 
	                  sourceLoc:sourceLoc,
	                  destinationLoc:destinationLoc,
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
	          		 var grid = me.getTransferDtlsList(),    		
	             		store = grid.getStore();
        	        	store.clearData();
        	        	store.removeAll();
        	        	grid.getView().refresh();
	          		 form.getForm().reset();	 
	          	}else{
	          		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
	          	}
	          	
	          	//this.onSaveSuccess;
	          },
	          //method to call when the request is a failure
	          failure: InventoryApp.Utilities.onSaveFailure
	      });
    }
});