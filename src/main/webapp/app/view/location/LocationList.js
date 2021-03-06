Ext.define('InventoryApp.view.location.LocationList',{
	extend:'Ext.grid.Panel',
	alias:'widget.location.locationlist',
	requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging'
	       ],
	
	store: 'location.Locations',       
	title:'Item Location',
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
                       dataIndex: 'locShtDesc',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       flex: .2
                   },
                   {
                       text: 'Name',
                       dataIndex: 'locDescription',
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
                                     text: 'Add Location'
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