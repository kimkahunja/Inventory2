/**
 * Controller for all Product-related management functionality
 */
Ext.define('InventoryApp.controller.Products', {
    extend: 'InventoryApp.controller.Base',
    stores: [
        'product.Products'
    ],
    views: [
        'product.List',
        'product.edit.Form',
        'product.edit.Window'
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
        
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=product.list]': {
                	//edit: this.editProduct,
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    //itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=product.list] button#add': {
                    click: this.add
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
       
        this.syncData(values);
        // mask to prevent extra submits
      //  Ext.getBody().mask( 'Saving Product...' );
        
    },
  //Sync data with the server 
    syncData : function(values) {    	
        Ext.Ajax.request({
               url: 'product/saveProduct.action',
            params: {                   
                    data: Ext.encode(values)
            },
            
            scope:this,
            //method to call when the request is successful
            success: InventoryApp.Utilities.onSaveSuccess,
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
        this.getProductList().getStore().load();
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
     
    }
    
});