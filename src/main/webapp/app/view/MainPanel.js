Ext.define('InventoryApp.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    requires: [
        'Ext.ux.IFrame'
    ],

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: 'Home',
            layout: 'fit',
             items: [ /*{
                 xtype: 'component',
                 autoEl: {
                     src: 'https://www.subway.com/menu/PDFS/MenuPDF/USA_Menu.pdf',
                     tag: 'iframe',
                     style: 'height: 100%; width: 100%; border: none'
                 }
             }*/
              {
            	xtype:'dashboard.portal'  
              }        
                     ]
        }
    ]
});