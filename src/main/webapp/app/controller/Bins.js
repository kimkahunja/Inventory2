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
            		//edit: this.editBin,
            		//canceledit: this.cancel,
            		beforerender: this.loadRecords,
            		//itemcontextmenu: this.showContextMenu
            	},
            	'grid[xtype=location.binlist] button#add': {
            		//click: this.add
            	},
            	'grid[xtype=location.binlist] gridview': {
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
    		store = grid.getStore();
    	console.log('STORE= '+store);
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },
});