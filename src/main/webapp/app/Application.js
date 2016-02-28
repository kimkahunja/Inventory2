/*Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //Ext: '.',
        'Ext.ux': 'ux'
    }
});*/
//Ext.Loader.setPath('overrides.grid', '../grid/');
Ext.define('InventoryApp.Application', {
    name: 'InventoryApp',

    extend: 'Ext.app.Application',
    requires: [
               'Ext.util.History',
               'overrides.grid.RowEditor',
               'overrides.grid.feature.RemoteSummary',
               'Ext.util.Point',
               'Ext.ux.form.field.ClearButton',
               'Ext.ux.grid.FilterBar',
               'Ext.grid.column.Number',
               'Ext.grid.feature.Summary',
               'Ext.menu.Menu',
               'Ext.form.Panel',
               'Ext.layout.container.Accordion',
               'Ext.form.Label',
               'Ext.data.proxy.Ajax',
               'Ext.form.FieldSet',
               'Ext.form.field.Hidden',
               'Ext.form.field.ComboBox',
               'Ext.form.field.File',
               'Ext.grid.plugin.CellEditing',
               'Ext.ux.grid.FiltersFeature',
               'Ext.grid.column.Date',
               'Ext.grid.column.Action',
               'Ext.toolbar.Spacer',
               'Ext.form.RadioGroup',
               'InventoryApp.Utilities',
               'InventoryApp.util.Util',
               'InventoryApp.model.menu.Root',
               'InventoryApp.model.menu.Item',
              // 'InventoryApp.store.security.Permissions'
              // 'kahunja.domain.Proxy',
              // 'ux/form/field/OperatorButton',
              // 'ux/grid/column/ActionPro',       
             //  'ux/grid/AutoResizer'
           ],
    stores: [
          	'standard.Status', 
          	'standard.YesNo', 
          	'security.Permissions',
          	'standard.PaymentMode',
          	'standard.TransferTypes'
          ],
     
    views: [
            'Viewport',
            'categories.List',
            'location.Locations',
            'location.LocationList',
            'location.BinList',
            'units.UnitList',
            'product.List',
            //'purchases.PurchaseLanding',
            'purchases.PurchaseParticulars',
            'purchases.PurchaseDtlsList',            
            'purchases.Purchase',
            'purchases.PurchaseList',
            'invoice.InvoiceParticulars',
            'invoice.InvoiceDtlsList',            
            'invoice.Invoice',
            'invoice.InvoiceList',
            'InventoryApp.view.reports.purchases.Purchase',
            'InventoryApp.view.reports.purchases.PurchaseList',
            'InventoryApp.view.reports.purchases.PurchaseDtlsList',
            'InventoryApp.view.reports.purchases.PurchaseParameters',
            'security.Users',
            'InventoryApp.view.security.Groups',
            'InventoryApp.view.security.GroupPermissions',
            'InventoryApp.view.reports.products.ProductParameters',
            'InventoryApp.view.reports.products.List',
            'InventoryApp.view.reports.ReportsMainView',
            'InventoryApp.view.reports.purchases.Purchase_GPur',
            'reports.purchases.Purchase_GSup',
            'reports.purchases.Purchase_GProd',
            'reports.invoice.Invoice',
            'reports.invoice.InvoiceParameters',
            'reports.invoice.Invoice_GInv',
            'reports.invoice.InvoiceList',
            'reports.invoice.InvoiceDtlsList',
            'reports.invoice.Invoice_GSup',
            'reports.invoice.Invoice_GProd',
            'reports.purchases.PurchaseMainView',
            'InventoryApp.view.payment.Payment',
           // 'InventoryApp.view.payment.PaymentLanding',
            'InventoryApp.view.payment.PaymentDtl',
            'security.PasswordManagement'
        ],
    controllers: [
       // 'App',
        'Menu',
        'Categories',
        'Locations',
        'Units',
        'Products',
        'Purchases',
        //'PurchasesDtls',
       // 'GridToGrid',
        'Bins',
        'Invoices',
        'reports.PurchaseRPT',
        'Login',
        'InventoryApp.controller.security.Groups',
        'security.Users',
        'reports.ProductRPT',
        'reports.InvoiceRPT',
        'Payments',
        'security.PasswordManagement'
    ],
    
    //autoCreateViewport: true,
    /**
     * launch is called immediately upon availability of our app
     */
   /* launch: function( args ) {
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
    }*/
    
    /*launch: function() {

        Ext.tip.QuickTipManager.init();

       
     //Ext.widget('mainviewport');
    // Ext.create('InventoryApp.view.MyViewport');
    }*/
    splashscreen: {},


    //autoCreateViewport: true,

    init: function() {

        // Start the mask on the body and get a reference to the mask
         splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
         splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        //console.log('init');
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();
        InventoryApp.Utilities.locationId=null;
        InventoryApp.Utilities.locationDescription=null;
        InventoryApp.Utilities.userName=null;
        InventoryApp.Utilities.lastLogin=null;
        
        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
                        Ext.widget('login');
                    }
                }
            });

           // Ext.widget('mainviewport');
           //Ext.widget('login');

            //console.log('launch');
       });

       task.delay(2000);

    }
});
