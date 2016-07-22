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
              		change:this.onRgChange
              	}
               } 
           });
       }, 
      
       print:function( button, e, eOpts ){
    	   var dateFrom=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='compParamFrom']")[0].getValue()),
    	   dateTo=InventoryApp.Utilities.convertDate(Ext.ComponentQuery.query("datefield[name='compParamTo']")[0].getValue()),  	  
    	   reportGrp = Ext.ComponentQuery.query("radiogroup[itemId='rgReport']")[0].getChecked()[0],
    	    selection = reportGrp.getGroupValue();  
    	   //console.log('selection=== '+selection);
    	   //Summary sales report
    	   if(selection=='R_S_sales'){
    		   Ext.create('Ext.form.Panel', {
                   renderTo: Ext.getBody(),
                   standardSubmit: true,
                   url: 'reports/summarySales.action'
               }).submit({
            	   params: {
            		   'dateFrom': dateFrom, 
            		   'dateTo': dateTo}
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
    	     fromDate=Ext.ComponentQuery.query("datefield[name='compParamFrom']")[0];
      	 	supplier.hide();
      	 	product.hide();
      	 	status.hide();
      	 	toDate.hide();
      	 	fromDate.hide();
      	console.log('selection=== '+selection);
      	if(selection=='R_S_sales'){
      		toDate.show();
      	 	fromDate.show();
      	}
       }     

});