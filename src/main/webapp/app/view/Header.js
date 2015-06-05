Ext.define('InventoryApp.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',

    height: 30,
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',

    items: [
        {
            xtype: 'label',
            html: '<div id="titleHeader"><b>Store Manager</b></div>'
        },
        {
            xtype: 'tbfill'
        },
        
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'logout',
            itemId: 'logout',
            iconCls: 'logout'
        }
    ]
});