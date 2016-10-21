Ext.define('InventoryApp.controller.CreditSales', {
	extend: 'InventoryApp.controller.Base',
	stores: [
	         'invoice.CreditSaleDtls'
	         ],
	views: ['invoice.CreditSales',
	        'invoice.CreditSaleDtls'
	        ],
    refs: [    	
           {
               ref: 'CreditSaleDtl',
               selector: '[xtype=invoice.creditsaledtls]'
           },
           {
               ref: 'CreditSaleForm',
               selector: '[xtype=invoice.creditsales]'
           },
           {
               ref: 'PayModeCombo',
               selector: "combobox[name='crsPaymode']"
           },
      ], 
      init: function() {
          this.listen({
              controller: {},
              component: {
            	  "combobox[name='crsAccCode']":{
              		select:this.onComboSelect
              	},
              	'button#processCreditSale':{
            		click:this.processPayment
            	},
            	'button#crsAuto':{
            		click:this.autoAllocate
            	}
              },
              global: {},
              store: {},             
          });
      }, 
      onComboSelect:function( combo, records, eOpts ){
    	 // console.log('selected....' +records[0].get('accName'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getCreditSaleDtl(),
              store = grid.getStore();
    		  store.load({
      			  params: {
    	           		accCode:records[0].get('accCode')
    	           	}
    		  });
    	  }
      },
      
      processPayment: function( button, e, eOpts ) {
    	  var me=this,
    	  payModeCbx = me.getPayModeCombo(),
    	  value = payModeCbx.getValue(),
    	    record = payModeCbx.findRecordByValue(value),
    	    paymentMemo=Ext.ComponentQuery.query("textfield[name='crsPaymemo']")[0].getValue(),
    	    memoRequired=record.get('memoRequired'),
    	    date=Ext.ComponentQuery.query("datefield[name='crsDate']")[0].getValue(),
    	    amount=Ext.ComponentQuery.query("numberfield[name='crsAmount']")[0].getValue(),
    	    accCode=Ext.ComponentQuery.query("combo[name='crsAccCode']")[0].getValue(),
    	    remarks=Ext.ComponentQuery.query("textfield[name='crsRemarks']")[0].getValue(),
    	    form = button.up( 'form' );
    	    //console.log('memoRequired==' +memoRequired+' ..paymentMemo== '+paymentMemo);
    	 if(accCode==null){
    		 InventoryApp.util.Util.showErrorMsg('Customer Paying is required');
    		 return;
    	 }
    	 if((memoRequired=='Y')&(paymentMemo.trim().length==0)){
    		InventoryApp.util.Util.showErrorMsg('Payment Memo is required for payment mode '+value);
    		 return;
    	 }
    	 if(date==null){
    		 InventoryApp.util.Util.showErrorMsg('Payment Date is required');
    		 return;
    	 }
    	 if((amount==0)||(amount==null)){
    		 InventoryApp.util.Util.showErrorMsg('Total Amount Paid is required');
    		 return;
    	 }
    	 var  grid = me.getCreditSaleDtl(),
         store = grid.getStore(),
         details = new Array(),
         records = store.getRange(),
         allocTotal=0;
         for (var i = 0; i < records.length; i++) {
        	 if(records[i].get('crsdAmount')>0){
        		 details.push(records[i].data);
             	// console.log('amounts=== '+records[i].get('pymtdAmount'));
             	 allocTotal=allocTotal+records[i].get('crsdAmount')
        	 }
        	
         };
         if(amount!=allocTotal){
        	 InventoryApp.util.Util.showErrorMsg('Total Amount Paid ('+amount+') must equal the total allocation ('+allocTotal +')');
    		 return; 
         }
         Ext.Ajax.request({
               url: 'sale/processPayment.action',
            params: {
                    payMode: value,
                    paymentMemo:paymentMemo,
                    date:date,
                    amount:amount,
                    accCode:accCode,
                    remarks:remarks,
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
            		 form.getForm().reset();	
            		 store.clearData();
         	         store.removeAll();
         	         grid.getView().refresh();
            		/* store.load({
             			  params: {
           	           		accCode:accCode
           	           	}
           		  });*/
            		 
            	}else{
            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
            	}
            	
            	//this.onSaveSuccess;
            },
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
      },
 autoAllocate: function( button, e, eOpts ) {
	 var amount=Ext.ComponentQuery.query("numberfield[name='crsAmount']")[0].getValue(),
	    accCode=Ext.ComponentQuery.query("combo[name='crsAccCode']")[0].getValue();
	 if(accCode==null){
		 InventoryApp.util.Util.showErrorMsg('Customer Paying is required');
		 return;
	 }
	 if((amount==0)||(amount==null)){
		 InventoryApp.util.Util.showErrorMsg('Total Amount Paid is required');
		 return;
	 }
	 var  grid = this.getCreditSaleDtl(),
     store = grid.getStore(),
     details = new Array(),
     records = store.getRange();
	 if(records.length){
		 var mainBalance=amount;
		 for (var i = 0; i < records.length; i++) {
			 if(mainBalance>0){
				 var allocated=(mainBalance>records[i].get('_balance'))?records[i].get('_balance'):mainBalance;
				 records[i].set('crsdAmount',allocated);
				 mainBalance=mainBalance-allocated;
			 }
			 
		 }
	 }
  }
})