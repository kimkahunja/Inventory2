/**
 * Main controller for all top-level application functionality
 */
Ext.define('InventoryApp.controller.App', {
    extend: 'InventoryApp.controller.Base',
    views: [
        'layout.Menu',
        'layout.Center',
        'layout.Landing'
    ],
    refs: [
        {
            ref: 'Menu',
            selector: '[xtype=layout.menu]'
        },
        {
            ref: 'CenterRegion',
            selector: '[xtype=layout.center]'
        }
    ],
    init: function() {
        this.listen({
            controller: {
                '#App': {
                    tokenchange: this.dispatch
                }
            },
            component: {
                'menu[xtype=layout.menu] menuitem': {
                    click: this.addHistory
                } 
            },
            global: {},
            store: {},            
        });
    },
    /**
     * Add history token to Ext.util.History
     * @param {Ext.menu.Item} item
     * @param {Object} e
     * @param {Object} opts
     */
    addHistory: function( item, e, opts ) {
        var me = this,
            token = item.itemId;
        Ext.util.History.add( token );
        me.fireEvent( 'tokenchange', token );
    },
    /**
     * Handles token change and directs creation of content in center region
     * @param {String} token
     */
    dispatch: function( token ) {
        var me = this,
            config;
        // switch on token to determine which content to create
        switch( token ) {
            case 'product':
                config = {
                    xtype: 'product.list',
                    title: 'Products',
                    store: Ext.create( 'InventoryApp.store.product.Products', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/category':
            	config = {
                    xtype: 'categories.list',
                    title: 'Manage Item Categories',
                    iconCls: 'icon_color',
                    store: Ext.create( 'InventoryApp.store.categories.Categories', {
                        pageSize: 30
                    })
                };
            	 break;
            case 'option/location':
            	config = {
                    xtype: 'location.locations',
                    title: 'Manage Item Locations',
                    iconCls: 'icon_color',
                    store: Ext.create( 'InventoryApp.store.location.Locations', {
                        pageSize: 30
                    })
                };
                break;
            case 'option/unit':
            	config = {
                    xtype: 'units.unitlist',
                    title: 'Manage Item Units',
                    iconCls: 'icon_color',
                    store: Ext.create( 'InventoryApp.store.units.Units', {
                        pageSize: 30
                    })
                };
            	 break;    
            case 'purchases':
                config = {
                    xtype: 'purchases.purchaselanding',
                    title: 'Purchases',
                    store: Ext.create( 'InventoryApp.store.purchases.Purchases', {
                        pageSize: 30
                    })
                };
                break;
            default: 
                config = {
                    xtype: 'layout.landing'
                };
                break;
        }
        me.updateCenterRegion( config );
    },
    /**
     * Updates center region of app with passed configuration
     * @param {Object} config
     * @private
     */
    updateCenterRegion: function( config ) {
        var me = this,
            center = me.getCenterRegion();
        
        // remove all existing content
        center.removeAll( true );
        // add new content
        center.add( config );
    },
    /**
     * After a REST response is completed, this method will marshall the response data and inform other methods with relevant data
     * @param {Object} request
     * @param {Boolean} success The actual success of the AJAX request. For success of {@link Ext.data.Operation}, see success property of request.operation
     */
    handleRESTResponse: function( request, success ) {
    	// in all cases, let's hide the body mask
        Ext.getBody().unmask();
        console.log(' success '+success);
        // if proxy success
        if( success ) {
            // if operation success
            if( request.operation.wasSuccessful() ) {
            	Ext.Msg.show(
         	           {                    
         	              title : 'Faileeeeee!',
         	              msg : request.proxy.reader.msg,
         	              icon : Ext.Msg.ERROR,
         	              buttons : Ext.Msg.OK
         	           }
         	           );	
            }
            // if operation failure
            else {
            	Ext.Msg.show(
            	           {                    
            	              title : 'Fail!',
            	              msg : request.proxy.reader.msg,
            	              icon : Ext.Msg.ERROR,
            	              buttons : Ext.Msg.OK
            	           }
            	           );
            }
        }
        // otherwise, major failure...
        else {
        	Ext.Msg.show(
     	           {                    
     	              title : 'Fail22222222222!',
     	              msg : request.proxy.reader.msg,
     	              icon : Ext.Msg.ERROR,
     	              buttons : Ext.Msg.OK
     	           }
     	           );
        }
    },
});