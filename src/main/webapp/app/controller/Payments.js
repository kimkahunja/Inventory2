Ext.define('InventoryApp.controller.Payments', {
	extend: 'InventoryApp.controller.Base',
	stores: [
	        // 'payment.Payments',
	         'payment.PaymentDtls1'
	         ],
	views: ['payment.PaymentDtl',
	        'payment.Payment'
	        ],
    refs: [    	
           {
               ref: 'PaymentDtl',
               selector: '[xtype=payment.paymentdtl]'
           },
           {
               ref: 'PaymentForm',
               selector: '[xtype=payment.payment]'
           },
           {
               ref: 'PayModeCombo',
               selector: "combobox[name='pymtPaymode']"
           },
      ], 
      init: function() {
          this.listen({
              controller: {},
              component: {
            	  "combobox[name='pymtAccCode']":{
              		select:this.onComboSelect
              	},
              	'button#processPayment':{
            		click:this.processPayment
            	},
              },
              global: {},
              store: {},             
          });
      }, 
      onComboSelect:function( combo, records, eOpts ){
    	 // console.log('selected....' +records[0].get('accName'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getPaymentDtl(),
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
    	    paymentMemo=Ext.ComponentQuery.query("textfield[name='pymtPaymemo']")[0].getValue(),
    	    memoRequired=record.get('memoRequired'),
    	    date=Ext.ComponentQuery.query("datefield[name='pymtDate']")[0].getValue(),
    	    amount=Ext.ComponentQuery.query("numberfield[name='pymtAmount']")[0].getValue(),
    	    accCode=Ext.ComponentQuery.query("combo[name='pymtAccCode']")[0].getValue(),
    	    remarks=Ext.ComponentQuery.query("textfield[name='pymtRemarks']")[0].getValue(),
    	    form = button.up( 'form' );
    	    //console.log('memoRequired==' +memoRequired+' ..paymentMemo== '+paymentMemo);
    	 if(accCode==null){
    		 InventoryApp.util.Util.showErrorMsg('Supplier to be paid is required');
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
    	 var  grid = me.getPaymentDtl(),
         store = grid.getStore(),
         details = new Array(),
         records = store.getRange(),
         allocTotal=0;
         for (var i = 0; i < records.length; i++) {
        	 if(records[i].get('pymtdAmount')>0){
        		 details.push(records[i].data);
             	// console.log('amounts=== '+records[i].get('pymtdAmount'));
             	 allocTotal=allocTotal+records[i].get('pymtdAmount')
        	 }
        	
         };
         if(amount!=allocTotal){
        	 InventoryApp.util.Util.showErrorMsg('Total Amount Paid ('+amount+') must equal the total allocation ('+allocTotal +')');
    		 return; 
         }
         Ext.Ajax.request({
               url: 'payment/processPayment.action',
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
            		 store.load({
             			  params: {
           	           		accCode:accCode
           	           	}
           		  });
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
})