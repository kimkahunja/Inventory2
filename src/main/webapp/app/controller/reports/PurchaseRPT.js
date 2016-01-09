Ext.define('InventoryApp.controller.reports.PurchaseRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.Purchases',
    	'purchases.PurchasesDtls',
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
               store: {},
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
    	   //console.log('AccCode=='+accCode+' status== '+status+' dateFrom== '+dateFrom+' dateTo == '+dateTo);
    	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0],
     	    selection = reportGrp.getGroupValue();     	    
       	 
   	  	 if (selection=='G_PUR'){
		   	  	this.getPurchaseList().getStore().load({params: {                   
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
   			this.getPurchasegsupList().getStore().load({params: {                   
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
   			this.getPurchasegprodList().getStore().load({params: {                   
	           	accCode: accCode, 
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
    		   Ext.ComponentQuery.query('[xtype=reports.reportsmainview]')[0].add([
    		               	                                                    { xtype: 'reports.purchases.purchasegpur'  },    	                                                    
    		               	                                                   ]);
    	   }
    	  },
     onRgChange:function( field, newValue, oldValue, eOpts ){
    	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgPurchaseReport']")[0].getChecked()[0],
  	     selection = reportGrp.getGroupValue(),
  	     container=Ext.ComponentQuery.query('[xtype=reports.reportsmainview]')[0],
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
		   }else if(selection=='G_SUP'){
			  /* if(!supplierCombo.isVisible){
		  			supplierCombo.show();
		  		 }*/ 
			   productCombo.hide();
			   supplierCombo.show();
			   container.add([ { xtype: 'reports.purchases.purchasegsup'  }]);
		   }else if(selection=='G_PROD'){
			   supplierCombo.hide();
			   productCombo.show();
			   container.add([ { xtype: 'reports.purchases.purchasegprod'  }]); 
		   }
	  	 
     }
});