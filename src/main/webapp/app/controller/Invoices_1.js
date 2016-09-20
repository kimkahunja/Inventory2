/**
 * Generic controller for managing Invoices
 */
Ext.define('InventoryApp.controller.Invoices1', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'invoice.Invoices',
    	'invoice.InvoiceDtls',
    	'account.Accounts'
    ],
    views: [
    	'invoice.Invoice',
    	'invoice.InvoiceDtlsList',
    	'reports.products.ProductPricesWindow',
    	'invoice.Cash'
    ],
    refs: [    	
        {
            ref: 'InvoiceDtlsList',
            selector: '[xtype=invoice.invoicedtlslist]'
        },
        {
            ref: 'InvoiceList',
            selector: '[xtype=invoice.invoicelist]'
        },
        {
            ref: 'InvoiceForm',
            selector: '[xtype=invoice.invoiceparticulars]'
        },
        {
            ref: 'AcctCombo',
            selector: "combobox[name='invAccCode']"
        },
        {
            ref: 'InvoiceNoField',
            selector: "displayfield[name='invInvono']"
        },
        {
            ref: 'ProductPricesWindow',
            selector: '[xtype=reports.products.productpriceswindow]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=invoice.invoicelist]': {
            		//edit: this.editLocation,
            		//canceledit: this.cancel,
            		beforerender: this.loadRecords,
            		//itemcontextmenu: this.showContextMenu,
            		selectionchange: this.gridSelectionChange,
            		viewready: this.onViewReady,
            		//celldblclick:this.onCellClick,
            		//itemdblclick: this.edit,
            	},
            	'grid[xtype=invoice.invoicedtlslist]': {            		
            		itemcontextmenu: this.showContextMenu            		
            	},
            	'grid[xtype=invoice.invoicelist] button#add': {
            		//click: this.add
            	},
            	'grid[xtype=invoice.invoicelist] gridview': {
            		//itemadd: this.edit
            	},
            	/*"textfield[name='search']":{
            		specialkey:this.specialKey
            	},*/
            	"combobox[name='searchInv']":{
            		select:this.onComboSelect
            	},
            	'button#invoiceSave':{
            		click:this.saveInvoices
            	},
            	'button#newInvoice':{
            		click:this.newInvoice
            	},'button#invoiceRemove':{
            		click:this.removeInvoice
            	},            
            	'panel[xtype=invoice.invoice]':{
            		 boxready:this.boxReadyInvoice
            	},
            	'button#invoiceFinish':{
            		click:this.postInvoice
            	},
            	'grid[xtype=reports.products.productpriceslist]': {            		
            		beforerender: this.loadPrices            		
            	},
            	'window[xtype=invoice.cash]': {
            		beforerender: this.beforeRenderCash
                },
                "combobox[name='spymtPaymethod']":{
            		change:this.onPaymentMethodChange
            	},
            	"numberfield[name='spymtAmountGiven']":{
            		change:this.onAmtGivenChange
            	},
            	'window[xtype=invoice.cash] button#saveCash': {
                    click: this.saveCash
                },
                'window[xtype=invoice.cash] button#cancelCash': {
                    click: this.cancelCash
                }
            },
            global: {},
            store: {},
            //proxy: {} 
        });
    },
    /**
     * Displays context menu 
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    showContextMenu: function( view, record, item, index, e, eOpts ) {
    	var me = this;
    	// stop event so browser's normal right-click action doesn't continue
    	e.stopEvent();    	
    	// if a menu doesn't already exist, create one
    	if( !item.contextMenu ) {
    		
    		var rowMenu = Ext.create('Ext.menu.Menu', {
    		     //height: 58,
    		    // width: 140,
    		     items: [
    		             	
                    {
    					text: 'Product Prices',
    					iconCls: 'filter',
    					handler: function( item, e ) {
    						me.showProductPricesWindow(record);
    					}
    				}
    		             ]
    		 });
    		 rowMenu.showAt(e.getXY());
    	}
    	
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
    loadPrices:function( grid, eOpts ) {    	
    	var me = this,
    		store = grid.getStore(), 
    	gridProd = me.getInvoiceDtlsList(), 
    	recordProd = gridProd.getSelectionModel().getSelection();
	     if (gridProd.getSelectionModel().getCount()>0 ){
	    	 var pdtCode=recordProd[0].get('invdPdtCode');	    	 
	     }	 
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load({
        	params: {
        		pdtCode:pdtCode,
        		type:'PUR'
        	}
        });
    },
    onSelectionChange: function (sm, records, options) {
    	 var me = this,
         grid = me.getInvoiceDtlsList(),
         store = grid.getStore();
    	if (records[0]) {
    		//Ext.Msg.alert( 'Attention', 'Am here...'+ records[0].get('purInvono') ); 
    		// clear any fliters that have been applied
        	store.clearFilter( true );
    		store.load({
            	params: {
            		id: records[0].get('purId')
            	}
            });
    		//var myfk=Ext.ComponentQuery.query('grid[xtype=purchases.purchasedtlslist] hiddenfield#fk_id');
    		//var win = Ext.widget('purchases.purchasedtlslist');
    		//win.down('hidden#fk_id').setValue(3);
        }
    },
    specialKey: function(field, e){
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (e.getKey() == e.ENTER) {
        	Ext.Ajax.request({
                url: 'product/fetchTransProduct.action',
             params: {                   
            	 searchData: Ext.encode(field.getValue())
             },
             
             scope:this,
             //method to call when the request is successful
             success: this.onSaveSuccess,
             //method to call when the request is a failure
             failure: InventoryApp.Utilities.onSaveFailure
         });
      // console.log('enteer kkkkkkkk '+field.getValue()); 	
        }
    },
    onSaveSuccess: function(conn, response, options, eOpts){
    	var result = Ext.JSON.decode(conn.responseText, true);              
        if ( ! result)
        {
           
           result =
           {
           }
           ;
           result.success = false;
           result.messages.message = conn.responseText;
        }
        if (result.success)
        {
        	if(result.data.count==0){
        		Ext.Msg.show(
                        {                    
                           title : 'No Record!',
                           msg : 'No product Matches your search...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        	}else
        		{
        		 var me = this,
                 grid = me.getInvoiceDtlsList(),
                 store = grid.getStore();
                // model=store.getProxy().getModel();
        		 //model.set('purdPdtCode',1);
        		// console.log('ffffffffffkim '+result.data.data[0].pdtCode); 
                 var model = {}, 
                 mydata=result.data.data[0];
                 model["purdPdtCode"] = mydata.pdtCode;
                 model["purdQty"]=1;
                 model["purdPrice"]=mydata.pdtBp;
                 model["_purdPdtCode"]=mydata.pdtDescription;
               
                 store.add(model);
                // store.sync();
                // console.log('ffffffffffkim '+store.getCount());
                 grid.getSelectionModel().select(store.data.length-1);
        		}
        	                
                            
        }
        else
        {
           Ext.Msg.show(
           {                    
              title : 'Fail!',
              msg : result.messages.message,
              icon : Ext.Msg.ERROR,
              buttons : Ext.Msg.OK
           }
           );
        }
    },
    saveRecord:function(){
    	 var me = this,
         grid = me.getInvoiceDtlsList(),
         store = grid.getStore();
    	 store2 =Ext.StoreMgr.lookup('invoice.Invoices');
    	 var record = store2.getRange();
    	 if(store.getCount()>0){
    		 var invRefNo=Ext.ComponentQuery.query("textfield[name='invRefno']")[0].getValue(),    		
     		invDate=Ext.ComponentQuery.query("datefield[name='invDate']")[0].getValue(),
     		invAccCode=Ext.ComponentQuery.query("combo[name='invAccCode']")[0].getValue(),
     		invInvono='x',//Ext.ComponentQuery.query("displayfield[name='invInvono']")[0].getValue(),
     		mydata=null; 
    		 if(invDate==null) {
     			Ext.Msg.show(
                         {                    
                            title : 'Validation',
                            msg : 'Transaction Date is required...',
                            icon : Ext.Msg.INFO,
                            buttons : Ext.Msg.OK
                         }
                         );
         		return;
     		}else if(invAccCode==null||invAccCode==0){
     			Ext.Msg.show(
                         {                    
                            title : 'Validation',
                            msg : 'Customer is required...',
                            icon : Ext.Msg.INFO,
                            buttons : Ext.Msg.OK
                         }
                         );
         		return;
     		}else if(invInvono.trim().length==0){
     			Ext.Msg.show(
                         {                    
                            title : 'Validation',
                            msg : 'Invoice Number not set...',
                            icon : Ext.Msg.INFO,
                            buttons : Ext.Msg.OK
                         }
                         );
         		return;
     		}
    		 var model = {};   
    		 model["invId"]=InventoryApp.Utilities.inv_id;
    		 model["invRefno"]=invRefNo;
    		 model["invDate"]=invDate;
    		 model["invAccCode"]=invAccCode;
    		 model["invInvono"]=invInvono;
    		 model["invUser"]=InventoryApp.Utilities.userName;
    		 //-----------------------------------------
    		 var details = new Array();
             var records = store.getRange();
             for (var i = 0; i < records.length; i++) {
            	 details.push(records[i].data);
             };
             
    		Ext.Ajax.request({
                url: 'invoice/saveInvoice.action',
             params: {                   
                     data: Ext.encode(model),
                     dataDetail:Ext.encode(details),
                     location:InventoryApp.Utilities.locationId
             },
             
             scope:this,
             //method to call when the request is successful
             success:function(conn, response, options, eOpts){
            	var result = Ext.JSON.decode(conn.responseText, true);    
            	if ( ! result)
                {
                   
                   result =
                   {
                   }
                   ;
                   result.success = false;
                   result.messages.message = conn.responseText;
                }
            	 if (result.success)
                 {
            		  mydata=result.data.data;
            		  InventoryApp.Utilities.inv_id=mydata;
            		  ///console.log('mydata=== '+result.data.data);
            		  this.getInvoiceList().getStore().load({
              			params: {
                        		id: mydata
                        	}
              		});    
                                     
                 }
            	 else
                 {
            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
                 }
            },
             //method to call when the request is a failure
             failure: InventoryApp.Utilities.onSaveFailure
         });
    	 }
    },
    saveInvoices: function( button, e, eOpts ) {
    	 var me = this,
         grid = me.getInvoiceDtlsList(),
         store = grid.getStore();
    	 store2 =Ext.StoreMgr.lookup('invoice.Invoices');
    	 var record = store2.getRange();
         //record = grid.getSelectionModel().getSelection();
    	//console.log('save button clicked....'+store.getCount()); 
    	if(store.getCount()==0){
    		Ext.Msg.show(
                    {                    
                       title : 'No Record!',
                       msg : 'No items to Save...',
                       icon : Ext.Msg.INFO,
                       buttons : Ext.Msg.OK
                    }
                    );
    		return;
    	}else{
    		var invRefNo=Ext.ComponentQuery.query("textfield[name='invRefno']")[0].getValue(),    		
    		invDate=Ext.ComponentQuery.query("datefield[name='invDate']")[0].getValue(),
    		invAccCode=Ext.ComponentQuery.query("combo[name='invAccCode']")[0].getValue(),
    		invInvono='x',//Ext.ComponentQuery.query("displayfield[name='invInvono']")[0].getValue(),
    		mydata=null;
    		if(invDate==null) {
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Transaction Date is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}else if(invAccCode==null||invAccCode==0){
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Customer is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}else if(invInvono.trim().length==0){
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Invoice Number not set...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}
    			
    		
    		console.log('InventoryApp.Utilities.inv_id=== '+InventoryApp.Utilities.inv_id);
    		 var model = {};   
    		 model["invId"]=InventoryApp.Utilities.inv_id;
    		 model["invRefno"]=invRefNo;
    		 model["invDate"]=invDate;
    		 model["invAccCode"]=invAccCode;
    		 model["invInvono"]=invInvono;
    		 model["invUser"]=InventoryApp.Utilities.userName;
    		 //-----------------------------------------
    		 var details = new Array();
             var records = store.getRange();
             for (var i = 0; i < records.length; i++) {
            	 details.push(records[i].data);
             };
             
    		Ext.Ajax.request({
                url: 'invoice/saveInvoice.action',
             params: {                   
                     data: Ext.encode(model),
                     dataDetail:Ext.encode(details),
                     location:InventoryApp.Utilities.locationId
             },
             
             scope:this,
             //method to call when the request is successful
             success:function(conn, response, options, eOpts){
            	var result = Ext.JSON.decode(conn.responseText, true);    
            	if ( ! result)
                {
                   
                   result =
                   {
                   }
                   ;
                   result.success = false;
                   result.messages.message = conn.responseText;
                }
            	 if (result.success)
                 {
            		  mydata=result.data.data;
            		  InventoryApp.Utilities.inv_id=mydata;
            		  ///console.log('mydata=== '+result.data.data);
            		  this.getInvoiceList().getStore().load({
              			params: {
                        		id: mydata
                        	}
              		}); 
            		  InventoryApp.util.Alert.msg('Success!', result.messages.message); 
            		 /*Ext.Msg.show(
                             {                    
                                title : 'Success!',
                                msg : result.messages.message,
                                icon : Ext.Msg.INFO,
                                buttons : Ext.Msg.OK
                             }
                             );  */        
                                     
                 }
            	 else
                 {
            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
                    /*Ext.Msg.show(
                    {                    
                       title : 'Fail!',
                       msg : result.messages.message,
                       icon : Ext.Msg.ERROR,
                       buttons : Ext.Msg.OK
                    }
                    );*/
                 }
            },
             //method to call when the request is a failure
             failure: InventoryApp.Utilities.onSaveFailure
         });
    		
    	}
    	
    },
    onCellClick: function ( sm, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
      	 var me = this,
           grid = me.getInvoiceDtlsList(),
           store = grid.getStore();
      	 //console.log('am inside selection change....');      	
      		//Ext.Msg.alert( 'Attention', 'Am here...'+ records[0].get('locCode') ); 
      		// clear any fliters that have been applied
          	store.clearFilter( true );
      		store.load({
              	params: {
              		id: this.getInvoiceList().getStore().getAt(rowIndex).get('purId')
              	}
              });
         
      },
      edit: function( view, record, item, index, e, eOpts ) {
          var me = this;
          //console.log('side edit...');
          var myform =Ext.ComponentQuery.query('form[xtype="invoice.invoiceparticulars"]');
          myform.getForm().loadRecord(record);
      },
      onViewReady: function(grid) {
    	 // console.log('onViewReady');
    	  //var store = grid.getStore();
    	     
    	  //store.load();
          grid.getSelectionModel().select(0);
          var record = grid.getSelectionModel().getSelection();
          if (record[0]) {
        	  InventoryApp.Utilities.inv_id= record[0].get('invId');
          }
         
      },
      gridSelectionChange: function(model, records) {
    	  var me = this,
    	  grid = me.getInvoiceDtlsList(),
          store = grid.getStore();
          if (records[0]) {
               this.getInvoiceForm().getForm().loadRecord(records[0]);
               //console.log('inv no=== '+records[0].get('invInvono'));
               InventoryApp.Utilities.inv_id= records[0].get('invId');
               store.clearFilter( true );
         		store.load({
                 	params: {
                 		id: records[0].get('invId')
                 	}
                 });
          }
      },
      postInvoice: function( button, e, eOpts ){
    	  var isEligible=InventoryApp.Utilities.isEligible(InventoryApp.Utilities.userName,'POSTSAL');
    	  if(isEligible=='N'){
    		  Ext.Msg.show(
                      {                    
                         title : 'Eligibility!',
                         msg : 'You are not eligible to Post...',
                         icon : Ext.Msg.INFO,
                         buttons : Ext.Msg.OK
                      }
                      );
      		return;
    	  }else{
    		  var me = this,
    	      	grid = me.getInvoiceList(),    		
    	  		store = grid.getStore();
    	      	 var record=store.findRecord('invId',InventoryApp.Utilities.inv_id);
    	          //var record = grid.getSelectionModel().getSelection();
    	         var  gridDtls = me.getInvoiceDtlsList(),
    	         storeDtls = gridDtls.getStore(),
    	         details = new Array(),
    	         recordsDtls = storeDtls.getRange();
    	         for (var i = 0; i < recordsDtls.length; i++) {
    	        	 details.push(recordsDtls[i].data);
    	         };
    	         if (record !=null) {
    		        	// show confirmation before continuing
    		           	Ext.Msg.confirm( 'Attention', 'Are you sure you want to Post this transaction? This action cannot be undone.', function( buttonId, text, opt ) {
    		           		if( buttonId=='yes' ) {
    		           			
    		           			Ext.Ajax.request({
    		           	               url: 'invoice/postInvoice.action',
    		           	            params: {
    		           	                    data: Ext.encode(record.data),
    		           	                    dataDetail:Ext.encode(details),
    		           	                    location:InventoryApp.Utilities.locationId,
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
    		                	             	   callback: function(records, operation, success) {
    		                	             	        if (success == true) {
    		                	             	        	InventoryApp.Utilities.inv_id=null;
    		                	             	        	storeDtls.clearData();
    		                	             	        	storeDtls.removeAll();
    		                   	             	            gridDtls.getView().refresh();
    		                	             	            grid.getView().refresh();    		                	             	           
    		                	             	           grid.getSelectionModel().select(0);
    		                	             	        } else {
    		                	             	        	 console.log('Loading is not successful....');
    		                	             	        }
    		                	             	    }
    		                	                });
    		           	            		var storeStock = Ext.create('InventoryApp.store.product.Stocks', {
    		           	         		    storeId: 'InvoiceStocks'
    		           	         		});
    		           	            		//storeStock.proxy.extraParams = { location: InventoryApp.Utilities.locationId };
    		           	            		storeStock.load({
    		           	                  	params: {
    		           	                  			location: InventoryApp.Utilities.locationId 
    		           	                        	}
    		           	                         });
    		           	            	}else{
    		           	            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
    		           	            	}
    		           	            	
    		           	            	//this.onSaveSuccess;
    		           	            },
    		           	            //method to call when the request is a failure
    		           	            failure: InventoryApp.Utilities.onSaveFailure
    		           	        });
    		           			
    		                        
    		           		}
    		           	});
    	      	 }else{
    	      		 InventoryApp.util.Util.showErrorMsg('One or more products should be saved before Posting can be done...');
    	      	 }
    	  }
      	
      	
      	
      },
      
      newInvoice: function( button, e, eOpts ){
    	  //console.log("New Invoice.....");
    	  InventoryApp.Utilities.inv_id=null;
    	  var me = this,
        	grid = me.getInvoiceDtlsList(),    		
    		store = grid.getStore();
	    	  store.clearData();
	    	  store.removeAll();
    	   grid.getView().refresh();
    	   this.getInvoiceForm().getForm().reset();
    	   //set the supplier combo with the default value
    	   var combo = this.getAcctCombo(),
           storeAccounts = combo.getStore();
     	  
	     	  combo.clearValue();
	     	 storeAccounts.clearFilter();
	     	storeAccounts.load({
	   			  params: {
	 	           		type:'D'
	 	           	}
	 		  });
	     	storeAccounts.on('load',function(storeAccounts) {
	     	  combo.setValue(storeAccounts.getAt('0').get('accCode'));
	           });
    	   /*
    	   var me = this,
  		  //field=me.getInvoiceNoField(),
  		  mydata=null,
  		  invoiceNumber=null,                 		
        	 // grid = me.getInvoiceList(),    		
    		 // store = grid.getStore();
  		  storeInvoice =Ext.StoreMgr.lookup('invoice.Invoices');
  		 
  		
  		 var model = {}, 
  		 currentDate = new Date();
  		 
  		// console.log('mydata.invoiceNumber '+mydata);
          model["invId"] =null;
          model["invInvono"]=null;
          model["invDate"]=currentDate;
         // model["invAccCode"]=accCode;
          model["invRefno"]=null;
          storeInvoice.removeAll(true);
          storeInvoice.clearFilter();
          
          storeInvoice.add(model);
          
          var records = storeInvoice.getRange();                         
          this.getInvoiceForm().getForm().loadRecord(records[0]);*/
    	   
    	   
           
      },
      onComboSelect:function( combo, records, eOpts ){
    	  var invRefNo=Ext.ComponentQuery.query("textfield[name='invRefno']")[0].getValue(),    		
		   		invDate=Ext.ComponentQuery.query("datefield[name='invDate']")[0].getValue(),
		   		invAccCode=Ext.ComponentQuery.query("combo[name='invAccCode']")[0].getValue(),
		   		invInvono='x',//Ext.ComponentQuery.query("displayfield[name='invInvono']")[0].getValue(),
		   		mydata=null; 
		  		 if(invDate==null) {
		   			Ext.Msg.show(
		                       {                    
		                          title : 'Validation',
		                          msg : 'Transaction Date is required...',
		                          icon : Ext.Msg.INFO,
		                          buttons : Ext.Msg.OK
		                       }
		                       );
		       		return;
		   		}else if(invAccCode==null||invAccCode==0){
		   			Ext.Msg.show(
		                       {                    
		                          title : 'Validation',
		                          msg : 'Customer is required...',
		                          icon : Ext.Msg.INFO,
		                          buttons : Ext.Msg.OK
		                       }
		                       );
		       		return;
		   		}else if(invInvono.trim().length==0){
		   			Ext.Msg.show(
		                       {                    
		                          title : 'Validation',
		                          msg : 'Invoice Number not set...',
		                          icon : Ext.Msg.INFO,
		                          buttons : Ext.Msg.OK
		                       }
		                       );
		       		return;
		   		}
    	  if (records[0]) {
    		  var me = this,
              grid = me.getInvoiceDtlsList(),
              store = grid.getStore();
           
              var model = {};              
              model["invdPdtCode"] = records[0].get('pdtCode');
              model["invdQty"]=1;
              model["invdPrice"]=records[0].get('pdtBp');
              model["_purdPdtCode"]=records[0].get('pdtShtDesc')+' - '+records[0].get('pdtDescription');
              model["invdStkId"]=records[0].get('stkId');
              store.add(model);
              var theSave=this.saveRecord();
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	  combo.clearValue();
    	  //combo.focus(true);
    	  
      },
      removeInvoice: function( button, e, eOpts ){
    	  //console.log("Remove Invoice.....");
    	  var me = this,
        	grid = me.getInvoiceDtlsList(), 
        	record = grid.getSelectionModel().getSelection(),
        	
    		store = grid.getStore();
    	    
    	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
    	     if (grid.getSelectionModel().getCount()>0 ){
    	    	 var invdId=record[0].get('invdId');
    	    	 store.remove(record[0]);
    	    	   grid.getView().refresh();
    	     }	    	 
    	   // remove from db
    	     Ext.Ajax.request({
                 url: 'invoice/removeItem.action',
              params: {                   
            	  	  invdId:invdId,                      
                      location:InventoryApp.Utilities.locationId
              },
              
              scope:this,
              //method to call when the request is successful
              success:function(conn, response, options, eOpts){
             	var result = Ext.JSON.decode(conn.responseText, true);    
             	if ( ! result)
                 {
                    
                    result =
                    {
                    }
                    ;
                    result.success = false;
                    result.messages.message = conn.responseText;
                 }
             	 if (result.success)
                  {
             		   
                                      
                  }
             	 else
                  {
             		 InventoryApp.util.Util.showErrorMsg(result.messages.message);
                  }
             },
              //method to call when the request is a failure
              failure: InventoryApp.Utilities.onSaveFailure
          });
           
      },
      boxReady:function( combo, width, height, eOpts ){
    	  //console.log('combo.getStore().getAt(0).get(combo.valueField) '+combo.getStore().getAt(0).get(combo.valueField));
    	  //combo.setValue(combo.getStore().getAt(0).get(combo.valueField),true);
    	  // fire the select event ( Event in extjs )
    	 // combo.fireEvent('select',combo);
    	  
    	  var combo = this.getAcctCombo(),
          store = combo.getStore();
    	  
    	  combo.clearValue();
    	  store.clearFilter();
    	  store.load({
  			  params: {
	           		type:'D'
	           	}
		  });
    	  if(store.getCount()>0){
    		  store.on('load',function(store) {
        		  combo.setValue(store.getAt('0').get('accCode'));
              }); 
    	  }
    	 
      },
		boxReadyInvoice:function( combo, width, height, eOpts ){
			//console.log('boxReadyInvoice');
			this.newInvoice(null, null, eOpts);
		},
showProductPricesWindow: function( record ) {
    var me = this,
        win = me.getProductPricesWindow();    
 // if window exists, show it; otherwise, create new instance
    if( !win ) {
        win = Ext.widget( 'reports.products.productpriceswindow', {
            title:'Product Prices'
        });
    }
    // show window
    win.show();   
  	},		
 postInvoice1: function( button, e, eOpts ){
	 var win = Ext.create('InventoryApp.view.invoice.Cash');
     win.setTitle('Receive Payment');
     win.setPosition(button.getPosition()[0]-380,button.getPosition()[1]+25);
    // console.log('positon===x '+button.getPosition()[0]);
     //console.log('positon===y '+button.getPosition()[1]);
     win.show();
 },
 beforeRenderCash:function(component, eOpts) {
		 var me = this,
	     grid = me.getInvoiceDtlsList(),
	     store = grid.getStore(),
	     totalAmt = store.getAt(0).data.total;
		 console.log('totalAmt=== '+totalAmt);
		 Ext.ComponentQuery.query("displayfield[name='spymtTotal']")[0].setValue(totalAmt);
	   // component.getForm().findField('spymtTotal').setValue(totalAmt);
	},
onPaymentMethodChange:function(combo, newValue, oldValue, eOpts ){
		var txtRef=Ext.ComponentQuery.query("textfield[name='spymtReference']")[0];
		console.log('paymentMethod=== '+newValue);
		if (newValue=='CASH'){
			txtRef.setValue('CASH');	
			txtRef.setDisabled(true);					
		}else{
			txtRef.setDisabled(false);
			txtRef.setValue(null);
		}
	},	
onAmtGivenChange:function(field, newValue, oldValue, eOpts ){
	var changeField=Ext.ComponentQuery.query("displayfield[name='spymtChange']")[0],
	    total=Ext.ComponentQuery.query("displayfield[name='spymtTotal']")[0].getValue();
	changeField.setValue(newValue-total);
},
saveCash: function(button, e, options) {
    
    var win = button.up('window'),
    formPanel = win.down('form');

    if (formPanel.getForm().isValid()) {
    	Ext.ComponentQuery.query("hiddenfield[name='spymtInvId']")[0].setValue(InventoryApp.Utilities.inv_id);	
    		
    	 Ext.Ajax.request({
            url: 'invoice/savePayment.action',
            params:{ 
            		data:Ext.encode(formPanel.getForm().getValues()),
            		total:Ext.ComponentQuery.query("displayfield[name='spymtTotal']")[0].getValue(),
            		userName:InventoryApp.Utilities.userName
            		},
            success: function(conn, response, options, eOpts){

            	var result = Ext.JSON.decode(conn.responseText, true);   

              //  console.log(result);

                if (result.success) {

                	InventoryApp.util.Alert.msg('Success!', result.messages.message);                       
                    win.close();                      
                } else {
                	 InventoryApp.util.Util.showErrorMsg(result.messages.message);  
                }
            },
            failure: function(form, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert('Failure', 'Ajax communication failed');
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert('Failure', action.result.msg);
               }
            }
        });
    } 
},
cancelCash: function(button, e, options) {
    button.up('window').close();
},

});
    