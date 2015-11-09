Ext.define('InventoryApp.controller.reports.PurchaseRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.Purchases',
    	'purchases.PurchasesDtls',
    	'account.Accounts'
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
               	'button#purchaseSave':{
               		//click:this.savePurchases
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
});