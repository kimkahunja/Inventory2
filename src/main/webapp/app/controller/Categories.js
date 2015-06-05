/**
 * Generic controller for managing Categories
 */
Ext.define('InventoryApp.controller.Categories', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'categories.Categories'
    ],
    views: [
    	'categories.List'
    ],
    refs: [
    	{
            ref: 'CategoryList',
            selector: '[xtype=categories.list]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=categories.list]': {
            		edit: this.editCategory,
            		canceledit: this.cancel,
            		viewready: this.loadRecords,//beforerender: this.loadRecords,
            		itemcontextmenu: this.showContextMenu
            	},
            	'grid[xtype=categories.list] button#add': {
            		click: this.add
            	},
            	'grid[xtype=categories.list] gridview': {
            		itemadd: this.edit
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
    					text: 'Edit Item',
    					iconCls: 'icon_edit',
    					handler: function( item, e ) {
    						var grid = me.getCategoryList(),
    							plugin = grid.editingPlugin;
    						// start row edit
    						plugin.startEdit( record, 0 );
    					}
    				},
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
    	//console.log('lOAD RECORDS functionality is here...');
    	var me = this,
    		store = grid.getStore();
    	//console.log('STORE= '+store);
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load({
    		callback:InventoryApp.Utilities.onLoadResponse
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
     * Begins edit of selected record
     * @param {Ext.data.Model[]} records
     * @param {Number} index
     * @param {Object} node
     * @param {Object} eOpts
     */
    edit: function( records, index, node, eOpts ) {
    	var me = this,
    		grid = me.getCategoryList(),
    		plugin = grid.editingPlugin;
    	// start edit of row
    	plugin.startEdit( records[ 0 ], 0 );
    },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
    	var me = this,
    		grid = me.getCategoryList(),
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
    /**
     * Displays context menu 
     * @param {Ext.grid.plugin.Editing} editor
     * @param {Object} context
     * @param {Object} eOpts
     */
    save: function( editor, context, eOpts ) {
    	var me = this,
    		store = context.record.store;
    	// save
    	console.log('save functionality is here...');
    	store.save();
    },
    
    editCategory : function(editor, obj) {
    	var me = this,
		store = this.getCategoryList().getStore();
        //check if record is dirty 
        if(obj.record.dirty){        	
            //check if the record is valid               
            if(obj.record.validate().isValid()){
                //Make your Ajax request to sync data               
                this.syncData(obj.rowIdx,'save'); 
                store.load();
             
            }
        }
    },
    /**
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    remove: function( record ) {
    	var me = this,
    	grid = me.getCategoryList(),    		
		store = grid.getStore();        		
        var record = grid.getSelectionModel().getSelection();
       // var rowindex=0;
    	//console.log('remove button is here... '+record[0].get('catDescription'));
    	// show confirmation before continuing
    	Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this item? This action cannot be undone.', function( buttonId, text, opt ) {
    		if( buttonId=='yes' ) {
    			
    			Ext.Ajax.request({
    	               url: 'Categories/deleteCategory.action',
    	            params: {
    	                    data: Ext.encode(record[0].data)
    	            },
    	            
    	            scope:this,
    	            //method to call when the request is successful
    	            success: InventoryApp.Utilities.onSaveSuccess,
    	            //method to call when the request is a failure
    	            failure: InventoryApp.Utilities.onSaveFailure
    	        });
    			
                 store.load();
    		}
    	})
    },
    //Sync data with the server 
    syncData : function(rowIndex,action) { 
    	var url='Categories/saveCategory.action';
    	//var url='menu/fetchMenu.action';
    	if(action=='delete'){
    		url = 'Categories/deleteCategory.action';    		
    		}
    			
    	//console.log('rowIndex '+rowIndex);
        Ext.Ajax.request({
               url:url,
            params: {
                    data: Ext.encode(this.getCategoryList().getStore().getAt(rowIndex).data)
            },
            
            scope:this,
            //method to call when the request is successful
            success: InventoryApp.Utilities.onSaveSuccess,
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
       // this.getCategoryList().getStore().load();
    },
});