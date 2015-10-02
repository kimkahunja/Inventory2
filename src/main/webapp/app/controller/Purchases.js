/**
 * Generic controller for managing Purchases
 */
Ext.define('InventoryApp.controller.Purchases', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.Purchases',
    	'purchases.PurchasesDtls',
    	'account.Accounts'
    ],
    views: [
    	'purchases.Purchase',
    	'purchases.PurchaseDtlsList'
    ],
    refs: [    	
        {
            ref: 'PurchaseDtlsList',
            selector: '[xtype=purchases.purchasedtlslist]'
        },
        {
            ref: 'PurchaseList',
            selector: '[xtype=purchases.purchaselist]'
        },
        {
            ref: 'PurchaseForm',
            selector: '[xtype=purchases.purchaseparticulars]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=purchases.purchaselist]': {
            		//edit: this.editLocation,
            		//canceledit: this.cancel,
            		beforerender: this.loadRecords,
            		itemcontextmenu: this.showContextMenu,
            		selectionchange: this.gridSelectionChange,
            		viewready: this.onViewReady,
            		//celldblclick:this.onCellClick,
            		//itemdblclick: this.edit,
            	},
            	'grid[xtype=purchases.purchaselist] button#add': {
            		//click: this.add
            	},
            	'grid[xtype=purchases.purchaselist] gridview': {
            		//itemadd: this.edit
            	},
            	"textfield[name='search']":{
            		specialkey:this.specialKey
            	},
            	'button#purchaseSave':{
            		click:this.savePurchases
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
                        text: 'Post this Purchase',
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
         grid = me.getPurchaseDtlsList(),
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
                 grid = me.getPurchaseDtlsList(),
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
    savePurchases: function( button, e, eOpts ) {
    	 var me = this,
         grid = me.getPurchaseDtlsList(),
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
    		var purInvono=Ext.ComponentQuery.query("textfield[name='purInvono']")[0].getValue(),
    		purRefNo=Ext.ComponentQuery.query("textfield[name='purRefNo']")[0].getValue(),
    		//purDate=Ext.Date.format(Ext.ComponentQuery.query("datefield[name='purDate']")[0].getValue(),'d/m/Y'),
    		purDate=Ext.ComponentQuery.query("datefield[name='purDate']")[0].getValue(),
    		purAccCode=Ext.ComponentQuery.query("combo[name='purAccCode']")[0].getValue();
    		//console.log('purInvono '+purInvono);
    		if (purInvono.trim().length==0){
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Invoice Number is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}else if(purDate==null) {
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Purchase Date is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}else if(purAccCode==null){
    			Ext.Msg.show(
                        {                    
                           title : 'Validation',
                           msg : 'Supplier is required...',
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );
        		return;
    		}
    			
    		
    		 var model = {};
    		 model["purInvono"]=purInvono;
    		 model["purRefno"]=purRefNo;
    		 model["purDate"]=purDate;
    		 model["purAccCode"]=purAccCode;
    		 //-----------------------------------------
    		 var details = new Array();
             var records = store.getRange();
             for (var i = 0; i < records.length; i++) {
            	 details.push(records[i].data);
             };
             
    		Ext.Ajax.request({
                url: 'purchase/savePurchase.action',
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
    		this.getPurchaseList().getStore().load();
    	}
    	
    },
    onCellClick: function ( sm, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
      	 var me = this,
           grid = me.getPurchaseDtlsList(),
           store = grid.getStore();
      	 //console.log('am inside selection change....');      	
      		//Ext.Msg.alert( 'Attention', 'Am here...'+ records[0].get('locCode') ); 
      		// clear any fliters that have been applied
          	store.clearFilter( true );
      		store.load({
              	params: {
              		id: this.getPurchaseList().getStore().getAt(rowIndex).get('purId')
              	}
              });
         
      },
      edit: function( view, record, item, index, e, eOpts ) {
          var me = this;
          console.log('side edit...');
          var myform =Ext.ComponentQuery.query('form[xtype="purchases.purchaseparticulars"]');
          myform.getForm().loadRecord(record);
      },
      onViewReady: function(grid) {
          grid.getSelectionModel().select(0);
      },
      gridSelectionChange: function(model, records) {
    	  var me = this,
    	  grid = me.getPurchaseDtlsList(),
          store = grid.getStore();
          if (records[0]) {
               this.getPurchaseForm().getForm().loadRecord(records[0]);
               store.clearFilter( true );
         		store.load({
                 	params: {
                 		id: records[0].get('purId')
                 	}
                 });
          }
      },
      postPurchase: function( record ) {
      	var me = this,
      	grid = me.getPurchaseList(),    		
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
      	            success:function(response) {
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
      	            },
      	            //method to call when the request is a failure
      	            failure: InventoryApp.Utilities.onSaveFailure
      	        });
      			
                   
      		}
      	})
        
      },
});    
    