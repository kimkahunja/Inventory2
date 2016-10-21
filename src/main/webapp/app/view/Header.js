Ext.define('InventoryApp.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',

    height: 30,
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',

    items: [
        {
            xtype: 'label',
            html: '<div id="titleHeader"><b>MIDAS Premier</b></div>'
        },
        {
            xtype: 'tbfill'
        },
        {
        	xtype:'displayfield',
        	name:'userName',	
        	labelAlign: 'right',
        	fieldLabel: 'User Name:',
        	value:InventoryApp.Utilities.userName
        },
        {
            xtype: 'tbseparator'
        },
        {
        	xtype:'displayfield',
        	name:'locationDescription',	
        	labelAlign: 'right',
        	fieldLabel: 'Location:',
        	value:InventoryApp.Utilities.locationDescription
        },
        {
            xtype: 'tbseparator'
        },
        {
        	xtype:'button',
        	text:'switch Location',	
        	itemId: 'AlterLoc',
            iconCls: 'edit'
        },
        {
            xtype: 'tbseparator'
        },
        {
        	xtype:'displayfield',
        	name:'lastLogin',	
        	labelAlign: 'right',
        	fieldLabel: 'Last Login:',
        	value:InventoryApp.Utilities.lastLogin
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