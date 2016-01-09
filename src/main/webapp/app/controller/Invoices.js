/**
 * Generic controller for managing Invoices
 */
Ext.define('InventoryApp.controller.Invoices', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'invoice.Invoices',
    	'invoice.InvoiceDtls',
    	'account.Accounts'
    ],
    views: [
    	'invoice.Invoice',
    	'invoice.InvoiceDtlsList'
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
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=invoice.invoicelist]': {
            		//edit: this.editLocation,
            		//canceledit: this.cancel,
            		beforerender: this.loadRecords,
            		itemcontextmenu: this.showContextMenu,
            		selectionchange: this.gridSelectionChange,
            		viewready: this.onViewReady,
            		//celldblclick:this.onCellClick,
            		//itemdblclick: this.edit,
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
            	"combobox[name='invAccCode']":{
            		 boxready:this.boxReady
            		
            	},
            	'panel[xtype=invoice.invoice]':{
            		 boxready:this.boxReadyInvoice
            	},
            	'button#invoiceFinish':{
            		click:this.postInvoice
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
                        text: 'Post this Invoice',
                        iconCls: 'accept',
                        handler: function( item, e ) {
                            me.postPurchase( record );
                        	//console.log('inside the post area....');
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
    		invInvono=Ext.ComponentQuery.query("displayfield[name='invInvono']")[0].getValue(),
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
    		}else if(invAccCode==null){
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
    			
    		
    		//console.log('pur id check...>>> '+ record[0].get('invId'));
    		///console.log('mydata check...>>> '+ mydata);
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
            		 Ext.Msg.show(
                             {                    
                                title : 'Success!',
                                msg : result.messages.message,
                                icon : Ext.Msg.INFO,
                                buttons : Ext.Msg.OK
                             }
                             );          
                                     
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
    	  var store = grid.getStore();
    	     
    	  store.load();
          grid.getSelectionModel().select(0);
          var record = grid.getSelectionModel().getSelection();
          InventoryApp.Utilities.inv_id= record[0].get('invId');
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
      	var me = this,
      	grid = me.getInvoiceList(),    		
  		store = grid.getStore();        		
          var record = grid.getSelectionModel().getSelection();
         var  gridDtls = me.getInvoiceDtlsList(),
         storeDtls = gridDtls.getStore(),
         details = new Array(),
         recordsDtls = storeDtls.getRange();
         for (var i = 0; i < recordsDtls.length; i++) {
        	 details.push(recordsDtls[i].data);
         };
;
      	// show confirmation before continuing
      	Ext.Msg.confirm( 'Attention', 'Are you sure you want to Post this transaction? This action cannot be undone.', function( buttonId, text, opt ) {
      		if( buttonId=='yes' ) {
      			
      			Ext.Ajax.request({
      	               url: 'invoice/postInvoice.action',
      	            params: {
      	                    data: Ext.encode(record[0].data),
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
           	             	            //console.log('Loading is successful....');
           	             	            //store.sync();
           	             	            grid.getView().refresh();
           	             	           grid.getSelectionModel().select(0);
           	             	        } else {
           	             	        	 console.log('Loading is not successful....');
           	             	        }
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
      	})
        
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
    	   
    	   // get the next invoice number
    	   Ext.Ajax.request({
               url: 'invoice/fetchInvoiceNumber.action',
            params: {                   
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
                 	if(result.data.count==0){
                 		Ext.Msg.show(
                                 {                    
                                    title : 'No Record!',
                                    msg : 'Next Invoice Number cannot be retrieved...',
                                    icon : Ext.Msg.INFO,
                                    buttons : Ext.Msg.OK
                                 }
                                 );
                 		return;
                 	}else
                 		{
                 		 var me = this,
                 		  field=me.getInvoiceNoField(),
                 		  mydata=result.data.data,
                 		  invoiceNumber=mydata.invoiceNumber,                 		
                       	 // grid = me.getInvoiceList(),    		
                   		 // store = grid.getStore();
                 		  storeInvoice =Ext.StoreMgr.lookup('invoice.Invoices');
                 		 
                 		var storeCombo = Ext.create('InventoryApp.store.account.Accounts', {
                		    storeId: 'InvoiceAccounts'
                		});
                 		storeCombo.proxy.extraParams = { type: 'D' };
                 		 
                 		   storeCombo =Ext.data.StoreManager.lookup('InvoiceAccounts');
                 		 
                 		  var accCode=null; 
                 	    if(storeCombo.getCount()>0){
                 	    	accCode=storeCombo.getAt('0').get('accCode');
                 	    }
                 		 
                        //console.log('storeCombo=== '+ storeCombo.getCount());
                 		 var model = {}, 
                 		 currentDate = new Date();
                 		 
                 		// console.log('mydata.invoiceNumber '+mydata);
                         model["invId"] =null;
                         model["invInvono"]=mydata;
                         model["invDate"]=currentDate;
                         model["invAccCode"]=accCode;
                         model["invRefno"]=null;
                         storeInvoice.removeAll(true);
                         storeInvoice.clearFilter();
                         
                         storeInvoice.add(model);
                         this.getInvoiceForm().getForm().reset();
                         var records = storeInvoice.getRange();                         
                         this.getInvoiceForm().getForm().loadRecord(records[0]);
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
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
           
      },
      onComboSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getInvoiceDtlsList(),
              store = grid.getStore();
           
              var model = {};              
              model["invdPdtCode"] = records[0].get('pdtCode');
              model["invdQty"]=1;
              model["invdPrice"]=records[0].get('pdtBp');
              model["_purdPdtCode"]=records[0].get('pdtDescription');
              model["invdStkId"]=records[0].get('stkId');
              store.add(model);
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	  combo.clearValue();
    	  combo.focus(true);
    	  
      },
      removeInvoice: function( button, e, eOpts ){
    	  //console.log("Remove Invoice.....");
    	  var me = this,
        	grid = me.getInvoiceDtlsList(), 
        	record = grid.getSelectionModel().getSelection(),
        	
    		store = grid.getStore();
    	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
    	     if (grid.getSelectionModel().getCount()>0 ){
    	    	 store.remove(record[0]);
    	    	   grid.getView().refresh();
    	     }	    	 
    	  // this.getInvoiceForm().getForm().reset();
           
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
		}

});
    