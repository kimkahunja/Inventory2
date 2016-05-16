Ext.define('InventoryApp.controller.Adjustments', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
    stores: [    	
    	'product.Products',
    	'transfer.TransferDtls',
    	'adjustment.AdjustmentDtls'
    ],
    views: [
    	 'adjustment.AdjustmentDtls'
    ],
    refs:[
			
			{
	            ref: 'AdjustmentDtlsList',
	            selector: '[xtype=adjustment.adjustmentdtls]'
	        },
         ],
    init: function() {    	
    	this.listen({
            controller: {},
            component: {          	  
            	"combobox[name='adjustmentSearch']":{
            		select:this.onComboSelect
            	},
            	'button#adjustmentRemove':{
            		click:this.removeAdjustment
            	},
            	'button#adjustmentSave':{
            		click:this.processAdjustment
            	},
            	
            },
            global: {},
            store: {},             
        });
    },
   
    onComboSelect:function( combo, records, eOpts ){
  	  //console.log('selected....' +records[0].get('pdtShtDesc'));
  	  if (records[0]) {
  		  var me = this,
            grid = me.getAdjustmentDtlsList(),
            store = grid.getStore();
         
            var model = {};              
            model["madjdPdtCode"] = records[0].get('pdtCode');
            model["madjdQty"]=1;           
            model["_madjdPdtCode"]=records[0].get('pdtDescription');
          
            store.add(model);
           // store.sync();
           // console.log('ffffffffffkim '+store.getCount());
            grid.getSelectionModel().select(store.data.length-1);  
  	  }
  	 // combo.focus(true);
  	  combo.clearValue();
    },
    removeAdjustment: function( button, e, eOpts ){
  	  //console.log("Remove Invoice.....");
  	  var me = this,
      	grid = me.getAdjustmentDtlsList(), 
      	record = grid.getSelectionModel().getSelection(),
      	
  		store = grid.getStore();
  	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
  	     if (grid.getSelectionModel().getCount()>0 ){
  	    	 store.remove(record[0]);
  	    	   grid.getView().refresh();
  	     }	    	 
  	  // this.getInvoiceForm().getForm().reset();
         
    },
    processAdjustment: function( button, e, eOpts ) {
  	  var me=this,  	     
  	      date=Ext.ComponentQuery.query("datefield[name='madjDate']")[0].getValue(),
  	      remarks=Ext.ComponentQuery.query("textareafield[name='madjRemarks']")[0].getValue(),
  	      form = button.up( 'form' );
		  	  
  	      // console.log(' date=='+date+'remarks=='+remarks);
		  	 if(date==null){
		  		 InventoryApp.util.Util.showErrorMsg('Adjustment Date is required');
		  		 return;
		  	 }
		  	if(remarks.trim().length==0){
		  		 InventoryApp.util.Util.showErrorMsg('Remarks is required');
		  		 return;
		  	 }
		  	
		  	 var  grid = me.getAdjustmentDtlsList(),
		       store = grid.getStore(),
		       details = new Array(),
		       records = store.getRange();
		  	if(store.getCount()==0){
		  		InventoryApp.util.Util.showErrorMsg('No Product is specified for Adjustment...');
	    		return;
		  	}
		       for (var i = 0; i < records.length; i++) {		      	 
		      		 details.push(records[i].data);
		       };
      
	       Ext.Ajax.request({
	             url: 'adjustment/processAdjustment.action',
	          params: {	                  	                  
	                  date:date,	                 
	                  remarks:remarks,
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
	          		 InventoryApp.util.Alert.msg('Success!', result.messages.message);
	          		 var grid = me.getAdjustmentDtlsList(),    		
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