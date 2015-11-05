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
            	'button#newinvoice':{
            		click:this.newPurchases
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
    	console.log('lOAD RECORDS functionality is here...');
    	var me = this,
    		store = grid.getStore();
    	console.log('STORE= '+store);
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
        // record = grid.getSelectionModel().getSelection();
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
    		invAccCode=Ext.ComponentQuery.query("combo[name='invAccCode']")[0].getValue();
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
    		}
    			
    		
    		 var model = {};    		
    		 model["invRefno"]=invRefNo;
    		 model["invDate"]=invDate;
    		 model["invAccCode"]=invAccCode;
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
                     dataDetail:Ext.encode(details)
             },
             
             scope:this,
             //method to call when the request is successful
             success: InventoryApp.Utilities.onSaveSuccess,
             //method to call when the request is a failure
             failure: InventoryApp.Utilities.onSaveFailure
         });
    		this.getInvoiceList().getStore().load();
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
          console.log('side edit...');
          var myform =Ext.ComponentQuery.query('form[xtype="invoice.invoiceparticulars"]');
          myform.getForm().loadRecord(record);
      },
      onViewReady: function(grid) {
          grid.getSelectionModel().select(0);
      },
      gridSelectionChange: function(model, records) {
    	  var me = this,
    	  grid = me.getInvoiceDtlsList(),
          store = grid.getStore();
          if (records[0]) {
               this.getInvoiceForm().getForm().loadRecord(records[0]);
               store.clearFilter( true );
         		store.load({
                 	params: {
                 		id: records[0].get('invId')
                 	}
                 });
          }
      },
      postPurchase: function( record ) {
      	var me = this,
      	grid = me.getInvoiceList(),    		
  		store = grid.getStore();        		
          var record = grid.getSelectionModel().getSelection();
         // var rowindex=0;
      	console.log('Posting purchase record... '+record[0].get('purInvono'));
      	// show confirmation before continuing
      	Ext.Msg.confirm( 'Attention', 'Are you sure you want to Post this transaction? This action cannot be undone.', function( buttonId, text, opt ) {
      		if( buttonId=='yes' ) {
      			
      			Ext.Ajax.request({
      	               url: 'purchase/postPurchase.action',
      	            params: {
      	                    data: Ext.encode(record[0].data)
      	            },
      	            
      	            scope:this,
      	            //method to call when the request is successful
      	            //success: InventoryApp.Utilities.onSaveSuccess,
      	            success:function(conn, response, options, eOpts){
      	            	store.load({
      	             	   callback: function(records, operation, success) {
      	             	        if (success == true) {
      	             	            console.log('Loading is successful....');
      	             	            //store.sync();
      	             	            grid.getView().refresh();
      	             	           grid.getSelectionModel().select(0);
      	             	        } else {
      	             	        	 console.log('Loading is not successful....');
      	             	        }
      	             	    }
      	                });
      	            	//this.onSaveSuccess;
      	            },
      	            //method to call when the request is a failure
      	            failure: InventoryApp.Utilities.onSaveFailure
      	        });
      			
                   
      		}
      	})
        
      },
      
      newPurchases: function( button, e, eOpts ){
    	  var me = this,
        	grid = me.getInvoiceDtlsList(),    		
    		store = grid.getStore();
	    	  store.clearData();
	    	  store.removeAll();
    	   grid.getView().refresh();
    	   this.getInvoiceForm().getForm().reset();
           
      },
      onComboSelect:function( combo, records, eOpts ){
    	  console.log('selected....' +records[0].get('pdtShtDesc'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getInvoiceDtlsList(),
              store = grid.getStore();
           
              var model = {};              
              model["invdPdtCode"] = records[0].get('pdtCode');
              model["invdQty"]=1;
              model["invdPrice"]=records[0].get('pdtBp');
              model["_purdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	  combo.focus(true);
      }
});    
    