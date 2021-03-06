/**
 * Controller for all Product-related management functionality
 */
Ext.define('InventoryApp.controller.Products', {
    extend: 'InventoryApp.controller.Base',
    stores: [
        'product.Products',
        'product.Stocks'       
    ],
    views: [
        'product.List',
        'product.edit.Form',
        'product.edit.Window',
       // 'report.products.ProductMovementWindow'
    ],
    refs: [
        {
            ref: 'ProductList',
            selector: '[xtype=product.list]'
        },
        {
            ref: 'ProductEditWindow',
            selector: '[xtype=product.edit.window]'
        },
        {
            ref: 'ProductEditForm',
            selector: '[xtype=product.edit.form]'
        },
        {
            ref: 'SecLocCombo',
            selector: "window[xtype=product.edit.window] combobox[name='pdtSlocCode']"
        },
        {
            ref: 'UnitCombo',
            selector: "window[xtype=product.edit.window] combobox[name='pdtSlocCode']"
        },
        {
            ref: 'ProductMovementWindow',
            selector: '[xtype=report.products.productmovementwindow]'
        },
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=product.list]': {
                	//edit: this.editProduct,
                    afterrender: this.loadRecords,
                    itemdblclick: this.edit,
                    beforeclose:this.beforeClose,
                    itemcontextmenu: this.showContextMenu,
                    selectionchange: this.gridSelectionChange,
                },
                'grid[xtype=product.list] button#add': {
                    click: this.add
                },'grid[xtype=product.list] button#customize': {
                    click: this.customize
                },
                'grid[xtype=product.list] button#deleteProduct': {
                    click: this.removeB
                },
                'window[xtype=product.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=product.edit.window] button#cancel': {
                    click: this.close
                },
                "window[xtype=product.edit.window] combobox[name='pdtLocCode']": {
                    select: this.comboChange
                },
                "window[xtype=product.edit.window] combobox[name='pdtSlocCode']": {
                    //change: this.comboChange
                	//beforerender:this.beforeRender
                },
            },
            global: {},
            store: {},
           // proxy: {} 
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
    					text: 'Product Movement Analysis',
    					iconCls: 'filter',
    					handler: function( item, e ) {
    						me.showProductMovementWindow(record);
    					}
    				}
    		             ]
    		 });
    		 rowMenu.showAt(e.getXY());
    	}
    	
    },
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel} grid
     * @param {Object} eOpts
     */
    loadRecords: function( grid, eOpts ) {
        var me = this,
            store = grid.getStore();
        // clear any fliters that have been applied
        store.clearFilter( true );
        // load the store
        store.load();
       
    },
    /**
     * Handles request to edit
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    edit: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // show window
        me.showEditWindow( record );
    },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'InventoryApp.model.product.Product' );
        // show window
        me.showEditWindow( record );
    },
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    close: function( button, e, eOpts ) {
        var me = this,
            win = button.up( 'window' );
        // close the window
        win.close();
    },
    /**
     * Displays common editing form for add/edit operations
     * @param {Ext.data.Model} record
     */
    showEditWindow: function( record ) {
        var me = this,
            win = me.getProductEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'product.edit.window', {
                title: isNew ? 'Add Product' : 'Edit Product'
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    },
    editProduct : function(editor, obj) {
        //check if record is dirty 
        if(obj.record.dirty){        	
            //check if the record is valid   
            console.log('Product  '+ obj.record.validate());
            if(obj.record.validate().isValid()){
                //Make your Ajax request to sync data
                mode = (obj.record.get('catCode') === null) ? 'insert': 'update';
                console.log('kim Editing222= '+ obj.record.get('catCode')+ 'mode= '+mode);
                this.syncData(obj.rowIdx, mode);
            }
        }
    },
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getProductList(),
            store = grid.getStore(),
            win = button.up( 'window' ),
            form = win.down( 'form' ),
            record = form.getRecord(),
            values = form.getValues();
		     // set values of record from form
		        record.set( values );          
               
        // set values of record from form
		        if (form.getForm().isValid()) {
		        	 this.syncData(values,win);
		        }
       
        // mask to prevent extra submits
      //  Ext.getBody().mask( 'Saving Product...' );
        
    },
  //Sync data with the server 
    syncData : function(values,win) {    	
        Ext.Ajax.request({
               url: 'product/saveProduct.action',
            params: {                   
                    data: Ext.encode(values)
            },
            
            scope:this,
            //method to call when the request is successful
            success: function(conn, response, options, eOpts){
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
            		 InventoryApp.util.Alert.msg('Success!', result.messages.message);
            		 this.getProductList().getStore().load();            		      
                     win.close();            
                 }
            	 else
                 {
            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);                   
                 }
            },
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
        //this.getProductList().getStore().load();
    },
    comboChange: function( combo, records, eOpts ) {
    	if(combo.isValid()){ 
    		var secLocCbx = this.getSecLocCombo(),
            secLocStore = secLocCbx.getStore();  
    		secLocCbx.clearValue();
    		secLocStore.clearFilter();
    		secLocStore.load({
  			  params: {
  	           		id: records[0].get('locCode')
  	           	}
  		  });
    		secLocCbx.enable();  
    	}
     
    },
    beforeClose:function(panel,eOpts){
    	var me = this,
        grid = me.getProductList();
    	//grid.clearFilters();
    },
    removeB: function( button, e, eOpts ) {
      	var me = this,
      		grid = me.getProductList(),
      		plugin = grid.editingPlugin,
      		store = grid.getStore(),
      	    record = grid.getSelectionModel().getSelection();          	
      	Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Product? This action cannot be undone.', function( buttonId, text, opt ) {
   		if( buttonId=='yes' ) {
   			
   			Ext.Ajax.request({
   	               url: 'product/deleteProduct.action',
   	            params: {
   	                    data: Ext.encode(record[0].data)
   	            },
   	            
   	            scope:this,
   	            //method to call when the request is successful
   	            success: function(conn, response, options, eOpts){
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
   	            		 InventoryApp.util.Alert.msg('Success!', result.messages.message);
   	            		store.load();  	            		       
   	                                     
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
   	})
},
showProductMovementWindow: function( record ) {
    var me = this,
        win = me.getProductMovementWindow();    
 // if window exists, show it; otherwise, create new instance
    if( !win ) {
        win = Ext.widget( 'report.products.productmovementwindow', {
            title:'Product Movement Analysis'
        });
    }
    // show window
    win.show();   
  	},
customize: function( button, e, eOpts ) {
	var win = Ext.create('InventoryApp.view.systemAreas.SystemAreaWindow');
    win.setTitle('Customize Product Columns');
    win.show();
}, 
gridSelectionChange: function(model, records) {
	  var me = this;
    if (records[0]) {         
         InventoryApp.Utilities.pdtCode= records[0].get('pdtCode');
         //console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    }
	//console.log('lkkkdkdkdkdkdk');
},
});