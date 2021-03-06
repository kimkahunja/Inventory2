Ext.define('InventoryApp.view.categories.List',{
	extend:'Ext.grid.Panel',
	alias:'widget.categories.list',
	requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging'
	       ],
	store: 'categories.Categories',	       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
           selType: 'rowmodel', 
           plugins: [
               {
                   ptype: 'rowediting',
                   clicksToEdit: 2
               }
           ],
           columns: {
               defaults: {},
               items: [
                   {
                       text: 'Abbreviation',
                       dataIndex: 'catShtDesc',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .2
                   },
                   {
                       text: 'Name',
                       dataIndex: 'catDescription',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .5
                   }
               ]
           },
           dockedItems: [
               {
                   xtype: 'toolbar',
                   dock: 'top',
                   ui: 'footer',
                   items: [
                       {
                           xtype: 'button',
                           itemId: 'add',
                           iconCls: 'add',
                           text: 'Add Item'
                       },
                       {
                           xtype: 'button',
                           itemId: 'delete',
                           iconCls: 'delete',
                           text: 'Delete'
                       }
                   ]
               },
               {
                   xtype: 'pagingtoolbar',
                   ui: 'footer',
                   defaultButtonUI: 'default',
                   dock: 'bottom',
                   displayInfo: true,
                   store: me.getStore()
               }
           ]
       });
       me.callParent( arguments );
   }        
});