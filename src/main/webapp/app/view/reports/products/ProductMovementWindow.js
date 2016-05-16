Ext.define('InventoryApp.view.report.products.ProductMovementWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.report.products.productmovementwindow',
    requires: [
        //'InventoryApp.view.reports.products.ProductMovementList'
    ],
    iconCls: 'icon_product',
    width: 700,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    //xtype: 'reports.products.productmovementlist'
                }
            ]
        });
        me.callParent( arguments );
    }
});