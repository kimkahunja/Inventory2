/**
 * Generic controller for managing Purchases
 */
Ext.define('InventoryApp.controller.PurchasesDtls', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'purchases.PurchasesDtls'
    ],
    views: [
        'purchases.PurchaseList',
    	'purchases.PurchaseDtlsList'
    ],
    refs: [
			{
			    ref: 'PurchaseList',
			    selector: '[xtype=purchases.purchaselist]'
			},   
    	{
            ref: 'PurchaseDtlsList',
            selector: '[xtype=purchases.purchasedtlslist]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=purchases.purchasedtlslist]': {
            		edit: this.editPurchaseItem,
            		canceledit: this.cancel,
            		beforerender: this.loadRecords,
            		itemcontextmenu: this.showContextMenu
            	},
            	'grid[xtype=purchases.purchasedtlslist] button#add': {
            		click: this.add
            	},
            	'grid[xtype=purchases.purchasedtlslist] #purdProductCombo': {
            		//click: this.add
            	},
            	'grid[xtype=purchases.purchasedtlslist] gridview': {
            		//itemadd: this.edit
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
                        text: 'Delete Item',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
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
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
    	var me = this,
    		grid = me.getPurchaseDtlsList(),
    		plugin = grid.editingPlugin,
    		store = grid.getStore();
    	// if we're already editing, don't allow new record insert
    	if( plugin.editing ) {
    		// show error message
    		Ext.Msg.alert( 'Attention', 'Please finish editing before inserting a new record' );
    		return false;
    	}
    	console.log('add functionality is here...');
    	store.insert( 0, {} );
    	
    },
    add1: function( button, e, eOpts ) {
    	var me = this,
    		grid = me.getPurchaseList(),    		
    		store = grid.getStore();
    	var record = grid.getSelectionModel().getSelection();
    	Ext.Msg.alert( 'Attention', record[0].get('purInvono'));
    	
    },
    editPurchaseItem : function(editor, obj) {
        //check if record is dirty 
        if(obj.record.dirty){        	
            //check if the record is valid            
            if(obj.record.validate().isValid()){
                //Make your Ajax request to sync data
                mode = (obj.record.get('purdId') === null) ? 'insert': 'update'; 
                var me = this,
        		grid = me.getPurchaseList(),    		
        		store = grid.getStore();        		
                var record = grid.getSelectionModel().getSelection();
                obj.record.set('purdPurchase', record[0].get('purId'));
                //Ext.Msg.alert( 'Attention', record[0].get('purId'));
            	//Ext.Msg.alert( 'kkkkkkk ', 'value== '+myfk);
                this.syncData(obj.rowIdx, mode,record[0].get('purId'));
                console.log('checking on fk..'+record[0].get('purId'));
                /*this.getPurchaseDtlsList().getStore().load({
                	params: {
                		id: record[0].get('purId')
                	}
                });*/
            }
        }
    },
  //Sync data with the server 
    syncData : function(rowIndex, mode,v_fkId) {    	
        Ext.Ajax.request({
               url: 'PurchaseDtlServlet',
            params: {
                    store_id: 1,
                    action: mode,
                    rowIndex: rowIndex,
                    recordInfo: Ext.encode(this.getPurchaseDtlsList().getStore().getAt(rowIndex).data)
            },
            
            scope:this,
            //method to call when the request is successful
            success: kahunja.Utilities.onSaveSuccess,
            //method to call when the request is a failure
            failure: kahunja.Utilities.onSaveFailure
        });
        console.log('checking on fk..'+v_fkId);
        this.getPurchaseDtlsList().getStore().load({
        	params: {
        		id: v_fkId
        	}
        });
    },
    /**
     * Cancels the edit of a record
     * @param {Ext.grid.plugin.Editing} editor
     * @param {Object} context
     * @param {Object} eOpts
     * @param {}
     * @param {}
     * @param {}
     */
    cancel: function( editor, context, eOpts ) {
    	// if the record is a phantom, remove from store and grid
    	if( context.record.phantom ) {
    		context.store.remove( context.record );
    	}
    },
    /**
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    remove: function( record ) {
    	var me = this,
    		store = record.store;
    	// show confirmation before continuing
    	Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this item? This action cannot be undone.', function( buttonId, text, opt ) {
    		if( buttonId=='yes' ) {
    			store.remove( record );
    			//store.getProxy().setParam('mode','delete');
    			/*store.getProxy().setExtraParams({
    				 'action': 'delete'   			   
    			    });*/
    			store.getProxy().setExtraParam('action', 'delete');
    			//store.getProxy().setExtraParam('name', 'kim');
    			store.sync({
    				/**
    				 * On failure, add record back to store at correct index
    				 * @param {Ext.data.Model[]} records
    				 * @param {Ext.data.Operation} operation
    				 */
    				failure: function( records, operation ) {
    					store.rejectChanges();
    				}
    			});
    		}
    	});
    },
});    
    