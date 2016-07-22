Ext.define('InventoryApp.controller.reports.TransferRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [ 
             'transfer.Transfers',
             'transfer.TransferDtlRpt'
    ],
    views: [
    	'reports.transfer.Transfer',
    	'reports.transfer.TransferList',
    	'reports.transfer.TransferParameters',
    	'reports.transfer.TransferDList',
    	'reports.transfer.Transfer_GProd'
    ],
    refs: [    	
           
           {
               ref: 'TransferList',
               selector: '[xtype=reports.transfer.transferlist]'
           },
           {
               ref: 'TransferDList',
               selector: '[xtype=reports.transfer.transferdlist]'
           },
           {
        	   ref: 'TransferGProdList',
               selector: '[xtype=reports.transfer.transfergprod]' 
           }
       ],
       init: function() {    	   
    	   var body=Ext.getBody();
    	   //create the downloadframe at the init of your app
    	    this.downloadFrame = body.createChild({
    	                    tag: 'iframe'
    	                        , cls: 'x-hidden'
    	                        , id: 'iframe'
    	                        , name: 'iframe'
    	                });
    	    //create the downloadform at the init of your app


    	                this.downloadForm = body.createChild({
    	                    tag: 'form'
    	                        , cls: 'x-hidden'
    	                        , id: 'form'
    	                        , target: 'iframe'
    	                });
    	      
    	        var params = new Object();
    	        
    	  /*this.getPurchasesPurchaseRPTsStore().on({
    		  beforeload: this.beforeLoadPurchaseRPT,
    	        scope: this
    	    });*/
           this.listen({
        	   
               controller: {},
               component: {
               	'grid[xtype=reports.transfer.transferlist]': {               		
               		beforerender: this.loadRecords,               		
               		selectionchange: this.gridSelectionChange,
               		viewready: this.onViewReady,               		
               	}, 
               	'grid[xtype=reports.transfer.transferdlist]': {               		
               		beforerender: this.clearDtls,              		
               	},              
               	'button#tnsfsearch':{
               		click:this.searchTransfers 
               	}, 
               /*	'button#printPurchaseReport':{
               		click:this.printPurchases 
               	}, */
               	'container[xtype=reports.transfer.transferparameters]':{
               		afterrender : this.onContainerRendered
               	},
               	"radiogroup[itemId='rgTransferReport']":{
               		change:this.onRgChange
               	}
               },
               global: {}
               
           });
       }, 
       loadRecords: function( grid, eOpts ) {       
       	var me = this,
       		store = grid.getStore();      
	       	store.clearData();
	       	store.removeAll();
		   grid.getView().refresh();       	
       },
       clearDtls: function( grid, eOpts ) {       
          	var me = this,
          	store = grid.getStore();      
   	       	store.clearData();
   	       	store.removeAll();
   		   grid.getView().refresh();       	
          },
       onViewReady: function(grid) {
           grid.getSelectionModel().select(0);
       },
       gridSelectionChange: function(model, records) {
     	  var me = this,
     	  grid = me.getTransferDList(),
           store = grid.getStore();
     	
           if (records[0]) {               
                store.clearFilter( true );
          		store.load({
                  	params: {
                  		id: records[0].get('tnsfId')
                  	}
                  });
           }
       },  
       searchTransfers:function( button, e, eOpts ){   
    	   
    	   var status=Ext.ComponentQuery.query("combo[name='tnsfParamStatus']")[0].getValue(),
    	   dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='tnsfParamFrom']")[0].getValue()),//Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue(),
    	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='tnsfParamTo']")[0].getValue()),
    	   product=Ext.ComponentQuery.query("combo[name='tnsfdPdtCodeRpt']")[0].getValue();    	  
    	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgTransferReport']")[0].getChecked()[0],
     	    selection = reportGrp.getGroupValue();     	    
       	
   	  	 if (selection=='G_TRANS'){
   	  	 //console.log('selection33============ '+selection);
   	  		 var store=this.getTransferList().getStore();
   	  		 store.currentPage = 1;
   	  		 store.load({params: {
		        	status:status,
		        	dateFrom:dateFrom,
		        	dateTo:dateTo		        	
		   	  		}    	   
		   	  	});
   		   }else if(selection=='G_PROD'){
   			if(product==null){
   				Ext.Msg.show(
                        {                    
                           title : 'Product Validation',
                           msg : 'Product is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
   			   } 
   			var store=this.getTransferGProdList().getStore();
 	  		 store.currentPage = 1;  
 	  		store.load({params: { 
	        	status:status,
	        	dateFrom:dateFrom,
	        	dateTo:dateTo,	        	
	        	product:product
	   	  		}    	   
	   	  	});
   		   }
    	   
    	   
       },
       printPurchases:function( button, e, eOpts ){
    	   Ext.Ajax.request({
               url: 'reports/purchasesRpt.action', 
               form: this.downloadForm,
               isUpload: true,
            scope:this,
            //method to call when the request is successful
            //success: InventoryApp.Utilities.onSaveSuccess,
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
       },
       onContainerRendered : function() {
    	   // console.log('The container was rendered');
    	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgTransferReport']")[0].getChecked()[0];
    	   var selection = reportGrp.getGroupValue();
    	  // console.log('The container was rendered=== '+selection);
    	   if (selection=='G_TRANS'){
    		   Ext.ComponentQuery.query('[xtype=reports.transfer.transfermainview]')[0].add([
    		               	                                                    { xtype: 'reports.transfer.transfergtnsf'  },    	                                                    
    		               	                                                   ]);
    	   }
    	  },
     onRgChange:function( field, newValue, oldValue, eOpts ){
    	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgTransferReport']")[0].getChecked()[0],
  	     selection = reportGrp.getGroupValue(),
  	     container=Ext.ComponentQuery.query('[xtype=reports.transfer.transfermainview]')[0],  	    
  	     productCombo=Ext.ComponentQuery.query("combobox[name='tnsfdPdtCodeRpt']")[0];
    	 container.removeAll();
	  	 if (selection=='G_TRANS'){	  		 
	  		if(productCombo.isVisible){
	  			productCombo.hide();
	  		 }
	  		container.add([{ xtype: 'reports.transfer.transfergtnsf'  }]);
	  		var storeG_trans=this.getTransferList().getStore();
	  		storeG_trans.removeAll();
		   }else if(selection=='G_PROD'){			  
			   productCombo.show();
			   container.add([ { xtype: 'reports.transfer.transfergprod'  }]); 
			   var  storeG_PROD=this.getTransferGProdList().getStore();
				  storeG_PROD.removeAll();
		   }
	  	 
     },
   beforeLoadPurchaseRPT:function(myStore, operation, eOpts){
	   var accCode=Ext.ComponentQuery.query("combo[name='purAccCodeRpt']")[0].getValue(),
	   status=Ext.ComponentQuery.query("combo[name='purParamStatus']")[0].getValue(),
	   dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue()),//Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue(),
	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamTo']")[0].getValue()),
	   product=Ext.ComponentQuery.query("combo[name='purdPdtCodeRpt']")[0].getValue();    	  
	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0],
 	    selection = reportGrp.getGroupValue();
	   if(selection=='G_SUP'){
		   product=null;
	   }else if(selection=='G_PROD'){
		   accCode=null;
	   }
	   var proxy = myStore.getProxy();
	   proxy.setExtraParam('accCode', accCode);
	   proxy.setExtraParam('status', status);
	   proxy.setExtraParam('dateFrom', dateFrom);
	   proxy.setExtraParam('dateTo', dateTo);
	   proxy.setExtraParam('root', 'N');
	   proxy.setExtraParam('product', product);   
	  
   },
   onMainStoreLoad: function(me,records,success){
	   Ext.MessageBox.show({
           title   : 'Data Load Error',
           msg   : 'The data encountered a load error, please try again in a few minutes.'
                   });
	 /*  if(!success){
	        Ext.MessageBox.show({
	           title   : 'Data Load Error',
	           msg   : 'The data encountered a load error, please try again in a few minutes.'
	                   });
	               }*/
	       },

});