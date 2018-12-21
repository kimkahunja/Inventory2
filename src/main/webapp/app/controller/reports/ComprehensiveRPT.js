Ext.define('InventoryApp.controller.reports.ComprehensiveRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    ],
    views: [
            'InventoryApp.view.reports.comprehensive.Parameters',
            'InventoryApp.view.reports.comprehensive.Reports'
    ],
    refs: [    	
          
       ],
       init: function() {    	 
           this.listen({
        	   
               controller: {},
               component: {               
               	'button#printComprehensiveReport':{
               		click:this.print
               	},
               "radiogroup[itemId='rgReport']":{
              		change:this.onRgChange,
              		afterrender:this.afterRgRender	
              	}
               } 
           });
       }, 
      
       print:function( button, e, eOpts ){
    	   var dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='compParamFrom']")[0].getValue()),
    	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='compParamTo']")[0].getValue()),
    	   asAt=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='asAt']")[0].getValue()),
    	   reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReport']")[0].getChecked()[0],
    	    selection = reportGrp.getGroupValue();  
    	   //console.log('selection=== '+selection);
    	   //Summary sales report
    	   if(selection=='R_S_sales'){
    		   Ext.create('Ext.form.Panel', {
                  // renderTo: Ext.getBody(),
                   standardSubmit: true,
                   url: 'reports/main.action'
               }).submit({
            	   params: {
            		   dateFrom: dateFrom, 
            		   dateTo : dateTo,
            		   reportName:'summarySales'
            		   }
               			});   
    	   }else if(selection=='R_S_items'){
    		   Ext.create('Ext.form.Panel', {
                   // renderTo: Ext.getBody(),
                    standardSubmit: true,
                    url: 'reports/main.action'
                }).submit({
             	   params: {
             		   dateFrom: dateFrom, 
             		   dateTo: dateTo,
             		   reportName:'SalesByItems'
             		   }
                });   
     	   }else if(selection=='R_Customer_balances'){
     		  Ext.create('Ext.form.Panel', {
                  // renderTo: Ext.getBody(),
                   standardSubmit: true,
                   url: 'reports/main.action'
               }).submit({
            	   params: {
            		   asAt: asAt,             		  
            		   reportName:'CustomerBalances'
            		   }
               });  
     	   }else if(selection=='R_Product_profits'){
    		   Ext.create('Ext.form.Panel', {
                   // renderTo: Ext.getBody(),
                    standardSubmit: true,
                    url: 'reports/main.action'
                }).submit({
             	   params: {
             		   dateFrom: dateFrom, 
             		   dateTo: dateTo,
             		   reportName:'ProductProfit'
             		   }
                }); 
    	   
     	   }
       },
       onRgChange:function( field, newValue, oldValue, eOpts ){    	   
      	 var reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReport']")[0].getChecked()[0],
    	     selection = reportGrp.getGroupValue(),
    	     supplier=Ext.ComponentQuery.query("combobox[name='compAccCodeRpt']")[0],
    	     product=Ext.ComponentQuery.query("combobox[name='compPdtCodeRpt']")[0],
    	     status=Ext.ComponentQuery.query("combobox[name='compParamStatus']")[0],
    	     toDate=Ext.ComponentQuery.query("datefield[name='compParamTo']")[0],
    	     fromDate=Ext.ComponentQuery.query("datefield[name='compParamFrom']")[0],
    	     asAt=Ext.ComponentQuery.query("datefield[name='asAt']")[0];
      	 	supplier.hide();
      	 	product.hide();
      	 	status.hide();
      	 	toDate.hide();
      	 	fromDate.hide();
      	 	asAt.hide();
      	console.log('selection=== '+selection);
      	if(selection=='R_S_sales'){
      		toDate.show();
      	 	fromDate.show();
      	}else if(selection=='R_S_items'){
      		toDate.show();
      	 	fromDate.show();
      	}else if(selection=='R_Customer_balances'){
      		asAt.show();
      	}else if(selection=='R_Product_profits'){
      		toDate.show();
      	 	fromDate.show();
      	}
       } ,
  afterRgRender:function(field,eOpts)  {
	  var productProfits = Ext.ComponentQuery.query("radiofield[itemId='productProfits']")[0];
	  var isEligible=InventoryApp.Utilities.isEligible(InventoryApp.Utilities.userName,'RPT_PROFIT');
	  if(isEligible=='N'){
		  productProfits.disable(false);
	  }
	 
	 
  }   

});