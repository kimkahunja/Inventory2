Ext.define('InventoryApp.view.units.UnitList',{
	extend:'Ext.grid.Panel',
	alias:'widget.units.unitlist',
	requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging'
	       ],
	store:'units.Units',	
   // width:'80%',	       
	//autoWidth:true,       
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
                       dataIndex: 'untShtDesc',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .2
                   },
                   {
                       text: 'Name',
                       dataIndex: 'untDescription',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .3
                   },
                   {
                       text: 'Standard Precision',
                       dataIndex: 'untPrecision',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .1
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
                           text: 'Add Unit'
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