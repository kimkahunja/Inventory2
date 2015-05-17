/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'InventoryApp',
    extend: 'InventoryApp.Application',
    views: [
            'Viewport',
            'categories.List',
            'location.Locations',
            'location.LocationList',
            'units.UnitList',
            'product.List',
            'purchases.PurchaseLanding',
            'purchases.PurchaseList',
            'purchases.PurchaseDtlsList'
        ],
    controllers: [
        'App',
        'Categories',
        'Locations',
        'Units',
        'Products',
        'Purchases',
        'PurchasesDtls'
    ],
    requires: [
        'Ext.util.History',
        'overrides.grid.RowEditor',
        'Ext.util.Point',
        'Ext.ux.form.field.ClearButton',
        'Ext.ux.grid.FilterBar',
        'InventoryApp.Utilities'
       // 'kahunja.domain.Proxy',
       // 'ux/form/field/OperatorButton',
       // 'ux/grid/column/ActionPro',       
      //  'ux/grid/AutoResizer'
    ],
    autoCreateViewport: true,
    /**
     * launch is called immediately upon availability of our app
     */
    launch: function( args ) {
        // "this" = Ext.app.Application
        var me = this;
        // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        Ext.util.History.init(function(){
            var hash = document.location.hash;
            me.getAppController().fireEvent( 'tokenchange', hash.replace( '#', '' ) );
        })
        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
        Ext.util.History.on( 'change', function( token ){
            me.getAppController().fireEvent( 'tokenchange', token );
        });
    }
});
