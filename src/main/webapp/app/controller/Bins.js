Ext.define('InventoryApp.controller.Bins', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'location.Locations',
    	'location.Bins'
    ],
    views: [
    	'location.LocationList',
    	'location.BinList'
    ],
    refs: [
    	{
            ref: 'LocationList',
            selector: '[xtype=location.locationlist]'
        },
        {
            ref: 'BinList',
            selector: '[xtype=location.binlist]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=location.binlist]': {
            		edit: this.editBin,
            		canceledit: this.cancel,
            		//viewready: this.loadRecords,
            		//itemcontextmenu: this.showContextMenu
            	},
            	'grid[xtype=location.binlist] button#add': {
            		click:this.add
            	},
            	'grid[xtype=location.binlist] gridview': {
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
    						var grid = me.getLocationList(),
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
    	
    	var me = this,
    		store = grid.getStore(),
    	gridLoc = me.getLocationList();		       		
        var record = gridLoc.getSelectionModel().getSelection();
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load({
        	params: { 
        		id: this.getLocationList().getStore().getAt(0).get('locCode')
        	}
        });
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
    		grid = me.getBinList(),
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
    		grid = me.getBinList(),
    		plugin = grid.editingPlugin,
    		store = grid.getStore();
    	// if we're already editing, don't allow new record insert
    	if( plugin.editing ) {
    		// show error message
    		Ext.Msg.alert( 'Attention', 'Please finish editing before inserting a new record' );
    		return false;
    	}
    	//console.log('add functionality is here...');
    	store.insert( 0, {} );
    },
    editBin : function(editor, obj) {
    	var me = this,
		store = this.getBinList().getStore(),    	
    	grid = me.getLocationList();
		//storeLoc = grid.getStore();        		
        var record = grid.getSelectionModel().getSelection();
        //console.log('check whether dirty '+obj.record.dirty);
        //check if record is dirty 
        if(obj.record.dirty){  
        	//console.log('edit bin test11');
            //check if the record is valid               
            if(obj.record.validate().isValid()){
                obj.record.set('slocLocCode', record[0].get('locCode'));
                //Make your Ajax request to sync data               
                this.syncData(obj.rowIdx,'save'); 
                store.load({
                	params: { 
                		id: record[0].get('locCode')
                	}});
             
            }
        }
    },
  //Sync data with the server 
    syncData : function(rowIndex,action) { 
    	var url='subLocations/saveSubLocation.action';
    	//var url='menu/fetchMenu.action';
    	if(action=='delete'){
    		//url = 'locations/deleteLocation.action';    		
    		}
    			
    	//console.log('rowIndex '+rowIndex);
        Ext.Ajax.request({
               url:url,
            params: {
                    data: Ext.encode(this.getBinList().getStore().getAt(rowIndex).data)
            },
            
            scope:this,
            //method to call when the request is successful
            success: InventoryApp.Utilities.onSaveSuccess,
            //method to call when the request is a failure
            failure: InventoryApp.Utilities.onSaveFailure
        });
        //this.getLocationList().getStore().load();
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
});