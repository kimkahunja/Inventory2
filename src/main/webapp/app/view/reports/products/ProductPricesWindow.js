Ext.define('InventoryApp.view.reports.products.ProductPricesWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.reports.products.productpriceswindow',
    requires: [
        'InventoryApp.view.reports.products.ProductPricesList'
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
        	defaults: { 
                labelWidth: 200,
                margin: '5 5 5 5 '
             },
            items: [
                   {
                	   xtype:'container',
                	   items:[
                	          {
          						xtype: 'radiogroup',
          					   //labelAlign:'top',
          						 width:700, 
          					    //fieldLabel: 'Choose the Type of transaction',
          					    //arrange Radio Buttons into 2 columns
          					    columns: 2,
          					    itemId: 'rgProdPricesType',
          					    items: [
          						        {
          						            xtype: 'radiofield',
          						            boxLabel: 'Purchses Movement',
          						            name: 'prodPrices',
          						            checked: true,
          						            inputValue: 'PUR'
          						        },
          						        {
          						            xtype: 'radiofield',
          						            boxLabel: 'Sales Movement',
          						            name: 'prodPrices',
          						            inputValue: 'SAL'
          						        }					       
          						        
          						    ]
          					},    
                          {
                              xtype: 'reports.products.productpriceslist'
                          }
                	          ]
                   } 
               
            ]
        });
        me.callParent( arguments );
    }
});