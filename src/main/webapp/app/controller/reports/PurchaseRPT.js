Ext.define('InventoryApp.controller.reports.PurchaseRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.Purchases',
    	'purchases.PurchasesDtlsRpt',
    	'account.AccountsRpt',
    	'purchases.PurchaseRPTs'
    ],
    views: [
    	'reports.purchases.Purchase',
    	'reports.purchases.PurchaseDtlsList',
    	'reports.purchases.PurchaseParameters',
    	'reports.purchases.Purchase_GSup',
    	'reports.purchases.Purchase_GProd'
    ],
    refs: [    	
           {
               ref: 'PurchaseDtlsList',
               selector: '[xtype=reports.purchases.purchasedtlslist]'
           },
           {
               ref: 'PurchaseList',
               selector: '[xtype=reports.purchases.purchaselist]'
           },
           {
        	   ref: 'PurchasegsupList',
               selector: '[xtype=reports.purchases.purchasegsup]' 
           },
         {
        	   ref: 'PurchasegprodList',
               selector: '[xtype=reports.purchases.purchasegprod]'     
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
    	        
    	  this.getPurchasesPurchaseRPTsStore().on({
    		  beforeload: this.beforeLoadPurchaseRPT,
    	        scope: this
    	    });
           this.listen({
        	   
               controller: {},
               component: {
               	'grid[xtype=reports.purchases.purchaselist]': {               		
               		beforerender: this.loadRecords,               		
               		selectionchange: this.gridSelectionChange,
               		viewready: this.onViewReady,               		
               	}, 
               	'grid[xtype=reports.purchases.purchasedtlslist]': {               		
               		beforerender: this.clearDtls,              		
               	},
               	"combobox[name='purAccCodeRpt']":{
            		//beforequery:this.beforeComboQuery,
            	},
               	'button#searchPurchases':{
               		click:this.searchPurchases 
               	}, 
               	'button#printPurchaseReport':{
               		click:this.printPurchases 
               	}, 
               	'container[xtype=reports.purchases.purchaseparameters]':{
               		afterrender : this.onContainerRendered
               	},
               	"radiogroup[itemId='rgPurchaseReport']":{
               		change:this.onRgChange
               	}
               },
               global: {},
               /*store: {
            	   '#PurchaseRPT' : {
            		   beforeload : this.onMainStoreLoad
            	   }
               },*/
               //proxy: {} 
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
     	  grid = me.getPurchaseDtlsList(),
           store = grid.getStore();
     	// InventoryApp.Utilities.rpt_pur_id=records[0].get('purId');
           if (records[0]) {               
                store.clearFilter( true );
          		store.load({
                  	params: {
                  		id: records[0].get('purId')
                  	}
                  });
           }
       },  
       searchPurchases:function( button, e, eOpts ){   
    	   
    	   
    	   var accCode=Ext.ComponentQuery.query("combo[name='purAccCodeRpt']")[0].getValue(),
    	   status=Ext.ComponentQuery.query("combo[name='purParamStatus']")[0].getValue(),
    	   dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue()),//Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue(),
    	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamTo']")[0].getValue()),
    	   product=Ext.ComponentQuery.query("combo[name='purdPdtCodeRpt']")[0].getValue();    	  
    	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0],
     	    selection = reportGrp.getGroupValue();     	    
       	 
   	  	 if (selection=='G_PUR'){
   	  		 var store=this.getPurchaseList().getStore();
   	  		 store.currentPage = 1;
   	  		 store.load({params: {                   
		           	accCode: accCode, 
		        	status:status,
		        	dateFrom:dateFrom,
		        	dateTo:dateTo,
		        	root:'N'
		   	  		}    	   
		   	  	});
   		   }else if(selection=='G_SUP'){
   			   if(accCode==null){
   				Ext.Msg.show(
                        {                    
                           title : 'Supplier Validation',
                           msg : 'Supplier is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
   			   }
   			var store=this.getPurchasegsupList().getStore();
  	  		 store.currentPage = 1;  
  	  		 store.load({params: {                   
	           	accCode: accCode, 
	        	status:status,
	        	dateFrom:dateFrom,
	        	dateTo:dateTo,
	        	root:'N'
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
   			var store=this.getPurchasegprodList().getStore();
 	  		 store.currentPage = 1;  
 	  		store.load({params: {                   
	           	accCode: null, 
	        	status:status,
	        	dateFrom:dateFrom,
	        	dateTo:dateTo,
	        	root:'N',
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
    	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0];
    	   var selection = reportGrp.getGroupValue();
    	  // console.log('The container was rendered=== '+selection);
    	   if (selection=='G_PUR'){
    		   Ext.ComponentQuery.query('[xtype=reports.purchases.purchasemainview]')[0].add([
    		               	                                                    { xtype: 'reports.purchases.purchasegpur'  },    	                                                    
    		               	                                                   ]);
    	   }
    	  },
     onRgChange:function( field, newValue, oldValue, eOpts ){
    	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0],
  	     selection = reportGrp.getGroupValue(),
  	     container=Ext.ComponentQuery.query('[xtype=reports.purchases.purchasemainview]')[0],
  	     supplierCombo=Ext.ComponentQuery.query("combobox[name='purAccCodeRpt']")[0],
  	     productCombo=Ext.ComponentQuery.query("combobox[name='purdPdtCodeRpt']")[0];
    	 container.removeAll();
	  	 if (selection=='G_PUR'){
	  		 if(supplierCombo.isVisible){
	  			supplierCombo.hide();
	  		 }
	  		if(productCombo.isVisible){
	  			productCombo.hide();
	  		 }
	  		container.add([{ xtype: 'reports.purchases.purchasegpur'  }]);
	  		var storeG_INV=this.getPurchaseList().getStore();
			  storeG_INV.removeAll();
		   }else if(selection=='G_SUP'){
			  /* if(!supplierCombo.isVisible){
		  			supplierCombo.show();
		  		 }*/ 
			   productCombo.hide();
			   supplierCombo.show();
			   container.add([ { xtype: 'reports.purchases.purchasegsup'  }]);
			   var storeG_SUP=this.getPurchasegsupList().getStore();
				 storeG_SUP.removeAll(); 
		   }else if(selection=='G_PROD'){
			   supplierCombo.hide();
			   productCombo.show();
			   container.add([ { xtype: 'reports.purchases.purchasegprod'  }]); 
			   var  storeG_PROD=this.getPurchasegprodList().getStore();
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