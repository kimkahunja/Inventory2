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
    	//'purchases.PurchaseList',
    	'purchases.PurchaseDtlsList'
    ],
    refs: [    	
        {
            ref: 'PurchaseDtlsList',
            selector: '[xtype=purchases.purchasedtlslist]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=purchases.purchaselist]': {
            		//edit: this.editLocation,
            		//canceledit: this.cancel,
            		//beforerender: this.loadRecords,
            		//itemcontextmenu: this.showContextMenu,
            		//selectionchange: this.onSelectionChange,
            		//cellclick:this.onSelectionChange,
            	},
            	'grid[xtype=purchases.purchaselist] button#add': {
            		//click: this.add
            	},
            	'grid[xtype=purchases.purchaselist] gridview': {
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
    						var grid = me.getPurchaseList(),
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
});    
    