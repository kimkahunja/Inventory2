/**
 * Generic controller for managing Units
 */
Ext.define('InventoryApp.controller.Units', {
    extend: 'InventoryApp.controller.Base',
    stores: [
    	'units.Units'
    ],
    views: [
    	'units.UnitList'
    ],
    refs: [
    	{
            ref: 'UnitList',
            selector: '[xtype=units.unitlist]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
            	'grid[xtype=units.unitlist]': {
            		edit: this.editUnit,
            		canceledit: this.cancel,
            		viewready: this.loadRecords,
            		itemcontextmenu: this.showContextMenu
            	},
            	'grid[xtype=units.unitlist] button#add': {
            		click: this.add
            	},            	
            	'grid[xtype=units.unitlist] button#delete': {
            		click: this.remove
            	},
            	'grid[xtype=units.unitlist] gridview': {
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
    						var grid = me.getUnitList(),
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
    		grid = me.getUnitList(),
    		plugin = grid.editingPlugin,
    		store = grid.getStore();
    	// if we're already editing, don't allow new record insert
    	if( plugin.editing ) {
    		// show error message
    		Ext.Msg.alert( 'Attention', 'Please finish editing before inserting a new record' );
    		return false;
    	}
    	
    	store.insert( 0, {} );
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
    		grid = me.getUnitList(),
    		plugin = grid.editingPlugin;
    	// start edit of row
    	plugin.startEdit( records[ 0 ], 0 );
    },
    editUnit : function(editor, obj) {
       	var me = this,
   		store = this.getUnitList().getStore();    	
       	
           //check if record is dirty 
           if(obj.record.dirty){  
           	//console.log('edit bin test11');
               //check if the record is valid               
               if(obj.record.validate().isValid()){                  
                   //Make your Ajax request to sync data               
                   this.syncData(obj.rowIdx,'save');                                    
               }
           }
       },
     //Sync data with the server 
       syncData : function(rowIndex,action) { 
       	var url='units/saveUnit.action';
       	//var url='menu/fetchMenu.action';
       	if(action=='delete'){
       		//url = 'locations/deleteLocation.action';    		
       		}
       			
       	//console.log('rowIndex '+rowIndex);
           Ext.Ajax.request({
                  url:url,
               params: {
                       data: Ext.encode(this.getUnitList().getStore().getAt(rowIndex).data)
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
            		 InventoryApp.util.Alert.msg('Success!', result.messages.message);
            		 this.getUnitList().getStore().load();            		      
                                     
                 }
            	 else
                 {
            		 InventoryApp.util.Util.showErrorMsg(result.messages.message);                   
                 }
            },
               //method to call when the request is a failure
               failure: InventoryApp.Utilities.onSaveFailure
           });
           //this.getLocationList().getStore().load();
       },
       remove: function( button, e, eOpts ) {
          	var me = this,
          		grid = me.getUnitList(),
          		plugin = grid.editingPlugin,
          		store = grid.getStore(),
          	    record = grid.getSelectionModel().getSelection();          	
          	Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this item? This action cannot be undone.', function( buttonId, text, opt ) {
       		if( buttonId=='yes' ) {
       			
       			Ext.Ajax.request({
       	               url: 'units/deleteUnit.action',
       	            params: {
       	                    data: Ext.encode(record[0].data)
       	            },
       	            
       	            scope:this,
       	            //method to call when the request is successful
       	            success:  function(conn, response, options, eOpts){
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
});    
    