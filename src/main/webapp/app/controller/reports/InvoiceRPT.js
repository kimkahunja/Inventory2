/**
 * Generic controller for managing Invoice Reports
 */
Ext.define('InventoryApp.controller.reports.InvoiceRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'invoice.Invoices',
    	'invoice.InvoiceDtls',
    	'account.AccountsRpt',
    	'invoice.InvoiceRPTs'
    ],
    views: [
    	'reports.invoice.Invoice',
    	'reports.invoice.InvoiceDtlsList',
    	'reports.invoice.Invoice_GSup',
    	'reports.invoice.Invoice_GProd'
    ],
    refs: [    	
        {
            ref: 'InvoiceDtlsList',
           selector: '[xtype=reports.invoice.invoicedtlslist]'
        },
        {
            ref: 'InvoiceList',
            selector: '[xtype=reports.invoice.invoicelist]'
        },
        {
        	ref: 'InvoicegsupList',
            selector: '[xtype=reports.invoice.invoicegsup]'
        },
        {
        	ref: 'InvoicegProdList',
            selector: '[xtype=reports.invoice.invoicegprod]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {            	
            	'container[xtype=reports.invoice.invoiceparameters]':{
               		afterrender : this.onContainerRendered
               	},
               	'button#searchInvoices':{
               		click:this.searchInvoices 
               	},
               	'grid[xtype=reports.invoice.invoicelist]': {           		
               		selectionchange: this.gridSelectionChange,   
               		viewready: this.onViewReady,
               	},
               	"radiogroup[itemId='rgInvoiceReport']":{
               		change:this.onRgChange
               	}
            },
            global: {},
            store: {},
            //proxy: {} 
        });
    },
   
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel}
     * @param {Object}
     */
    loadRecords: function( grid, eOpts ) {
    	//console.log('lOAD RECORDS functionality is here...');
    	var me = this,
    		store = grid.getStore();
    	//console.log('STORE= '+store);
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },   
      gridSelectionChange: function(model, records) {
    	  var me = this,
    	  grid = me.getInvoiceDtlsList(),
          store = grid.getStore();
          if (records[0]) { 
               //InventoryApp.Utilities.inv_id= records[0].get('invId');
               store.clearFilter( true );
         		store.load({
                 	params: {
                 		id: records[0].get('invId')
                 	}
                 });
          }
      }, 
      onViewReady: function(grid) {
          grid.getSelectionModel().select(0);
      },
      onContainerRendered : function() {
   	   // console.log('The container was rendered');
   	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgInvoiceReport']")[0].getChecked()[0];
   	   var selection = reportGrp.getGroupValue();
   	  // console.log('The container was rendered=== '+selection);
   	   if (selection=='G_INV'){
   		   Ext.ComponentQuery.query('[xtype=reports.reportsmainview]')[0].add([
   		               	                                                    { xtype: 'reports.invoice.invoiceginv'  },    	                                                    
   		               	                                                   ]);
   	   }
   	  },
   	 searchInvoices:function( button, e, eOpts ){   
  	   
  	   
  	   var accCode=Ext.ComponentQuery.query("combo[name='invAccCodeRpt']")[0].getValue(),
  	   status=Ext.ComponentQuery.query("combo[name='invParamStatus']")[0].getValue(),
  	   dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='invParamFrom']")[0].getValue()),//Ext.ComponentQuery.query("datefield[name='purParamFrom']")[0].getValue(),
  	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='invParamTo']")[0].getValue()),
  	   product=Ext.ComponentQuery.query("combo[name='invdPdtCodeRpt']")[0].getValue();
  	   //console.log('AccCode=='+accCode+' status== '+status+' dateFrom== '+dateFrom+' dateTo == '+dateTo);
  	   var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgInvoiceReport']")[0].getChecked()[0],
   	    selection = reportGrp.getGroupValue();
  	    
 	  	 if (selection=='G_INV'){ 	
 	  		   var grid =this.getInvoiceList(); 
		   	  	this.getInvoiceList().getStore().load({params: {                   
		           	accCode: accCode, 
		        	status:status,
		        	dateFrom:dateFrom,
		        	dateTo:dateTo,
		        	root:'N'
		   	  		},
		   	  	callback: function(records, operation, success) {
            	        if (success == true) {            	        	
            	        	grid.getView().refresh();
            	        	grid.getSelectionModel().select(0);
            	        } else {
            	        	 console.log('Loading is not successful....');
            	        }
            	    }
		   	  	});
		   	
 		   }else if(selection=='G_SUP'){
 			  var grid =this.getInvoicegsupList(); 
 			   if(accCode==null){
 				Ext.Msg.show(
                      {                    
                         title : 'Customer Validation',
                         msg : 'Customer is required...',
                         icon : Ext.Msg.INFO,
                         buttons : Ext.Msg.OK
                      }
                      );
      		return;
 			   }
 			this.getInvoicegsupList().getStore().load({params: {                   
	           	accCode: accCode, 
	        	status:status,
	        	dateFrom:dateFrom,
	        	dateTo:dateTo,
	        	root:'N'
	   	  		} ,
	   	  	callback: function(records, operation, success) {
    	        if (success == true) {            	        	
    	        	grid.getView().refresh();
    	        	grid.getSelectionModel().select(0);
    	        } else {
    	        	 console.log('Loading is not successful....');
    	        }
    	    }
	   	  	});
 			
 		   }else if(selection=='G_PROD'){
 			  var grid =this.getInvoicegProdList();
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
 			this.getInvoicegProdList().getStore().load({params: {                   
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
     onRgChange:function( field, newValue, oldValue, eOpts ){
    	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgInvoiceReport']")[0].getChecked()[0],
  	     selection = reportGrp.getGroupValue(),
  	     container=Ext.ComponentQuery.query('[xtype=reports.reportsmainview]')[0],
  	     supplierCombo=Ext.ComponentQuery.query("combobox[name='invAccCodeRpt']")[0],
  	     productCombo=Ext.ComponentQuery.query("combobox[name='invdPdtCodeRpt']")[0];
    	 container.removeAll();
	  	 if (selection=='G_INV'){
	  		 if(supplierCombo.isVisible){
	  			supplierCombo.hide();
	  		 }
	  		if(productCombo.isVisible){
	  			productCombo.hide();
	  		 }
	  		container.add([{ xtype: 'reports.invoice.invoiceginv'  }]);
		   }else if(selection=='G_SUP'){
			  /* if(!supplierCombo.isVisible){
		  			supplierCombo.show();
		  		 }*/ 
			   productCombo.hide();
			   supplierCombo.show();
			   container.add([ { xtype: 'reports.invoice.invoicegsup'  }]);
		   }else if(selection=='G_PROD'){
			   supplierCombo.hide();
			   productCombo.show();
			   container.add([ { xtype: 'reports.invoice.invoicegprod'  }]); 
		   }
	  	 
     }
});
    