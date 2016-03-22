Ext.define('InventoryApp.view.security.GroupsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.groupslist',

    title: 'Groups',
    frame: true,

    store: 'security.Groups',
    requires: [
	           'Ext.grid.plugin.RowEditing'	          
	       ],
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
           columns: [
                     {
                         //xtype: 'gridcolumn',
                         dataIndex: 'name',
                         flex: 1,
                         text: 'Name',
                         editor: {
                             xtype: 'textfield',
                             allowBlank: false
                         }
                     }
                 ],
                 dockedItems: [
                     {
                         xtype: 'toolbar',
                         dock: 'top',
                         items: [
                             {
                                 xtype: 'button',
                                 itemId: 'add',
                                 iconCls: 'add',
                                 text: 'Add'
                             },
                             {
                                 xtype: 'button',
                                 itemId: 'delete',
                                 iconCls: 'delete',
                                 text: 'Delete'
                             }
                         ]
                     }
                 ]
       });
	   me.callParent( arguments );
   }        
    
});