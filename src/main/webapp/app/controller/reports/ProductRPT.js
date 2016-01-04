/**
 * Controller for all Product-related management functionality
 */
Ext.define('InventoryApp.controller.reports.ProductRPT', {
    extend: 'InventoryApp.controller.Base',
    stores: [
        //'product.Products',
        'product.StockRPT'
    ],
    views: [
        'reports.products.List',        
    ],
    refs: [
        {
            ref: 'ProductList',
            selector: '[xtype=reports.products.list]'
        },     
        
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=reports.products.list]': {
                	//edit: this.editProduct,
                    beforerender: this.loadRecords,               
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
        store.load({
        	   params:{location: InventoryApp.Utilities.locationId}
        }); 
    },
 
});