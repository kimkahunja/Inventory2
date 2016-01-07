Ext.define('InventoryApp.controller.reports.PurchaseRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.Purchases',
    	'purchases.PurchasesDtls',
    	'account.AccountsRpt'
    ],
    views: [
    	'reports.purchases.Purchase',
    	'reports.purchases.PurchaseDtlsList'
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
    	   
    	   Ext.ComponentQuery.query('[xtype=reports.reportsmainview]')[0].add([
    	                                                    { xtype: 'reports.purchases.purchasegpur'  },    	                                                    
    	                                                   ]);
    	   var accCode=Ext.ComponentQuery.query("combo[name='purAccCodeRpt']")[0].getValue(),
    	   status=Ext.ComponentQuery.query("combo[name='purParamStatus']")[0].getValue(),
    	   dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue()),//Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue(),
    	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='purParamTo']")[0].getValue());
    	   console.log('AccCode=='+accCode+' status== '+status+' dateFrom== '+dateFrom+' dateTo == '+dateTo);
    	   
    	  /* Ext.Ajax.request({
               url: 'purchase/fetchPurchases.action',
            params: {                   
            	accCode: accCode, 
            	status:status,
            	dateFrom:dateFrom,
            	dateTo:dateTo,
            	root:'N'
            },
            
            scope:this,
            //method to call when the request is successful
            //success: InventoryApp.Utilities.onSaveSuccess,
            //method to call when the request is a failure
           // failure: InventoryApp.Utilities.onSaveFailure
        }); */
    	   this.getPurchaseList().getStore().load({params: {                   
											           	accCode: accCode, 
											        	status:status,
											        	dateFrom:dateFrom,
											        	dateTo:dateTo,
											        	root:'N'
											        }    	   
    	   });
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
       }
       
});