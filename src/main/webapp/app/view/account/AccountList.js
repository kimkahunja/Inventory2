Ext.define('InventoryApp.view.account.AccountList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.account.accountlist',
    requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging',
	           'InventoryApp.store.account.Accounts'
	       ],
    initComponent: function() {
    	var me = this, 
    	 store = Ext.create('InventoryApp.store.account.Accounts');
    	 Ext.applyIf(me,{
    		 store:store,
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
						Ext.create('Ext.grid.RowNumberer',
						        {
						        resizable: true,
						        resizeHandles:'all',
						        align: 'center',
						        minWidth: 35,
						        maxWidth:50
						        }),	
                        {
	                         text: 'Name',
	                         dataIndex: 'accName',
	                         editor: {
	                             xtype: 'textfield',
	                             allowBlank: false
	                         },
	                         flex:2
                       },
                       
                       {
                           header: 'Acc Type', 
                           dataIndex: 'accType', 
                           flex: 1, 
                           editor: {
                               xtype: 'combobox', 
                               store:  Ext.create('Ext.data.Store', {
                            	   fields : ['id','description'],
                                   data: [ {id:'D',description:'Customer'},
                                           {id:'C',description:'Supplier'} 
                                   		]
                               }), 
                               queryMode: 'local', 
                               displayField: 'description', 
                               valueField: 'id',
                               listeners: {
                                   select: function(combo, recs, opts){
                                       combo.fireEvent('blur');
                                   }
                               },
                       			allowBlank: false
                           },
                           renderer: function(value, metaData, record ){
                        	   if(value=='D'){
                        		   return 'Customer';
                        	   }else
                        		   return 'Supplier';
                           }
                       },
                     {
                         text: 'Address',
                         dataIndex: 'accAddress',
                         editor: {
                             xtype: 'textfield'
                         },
                         
                     },
                     {
                         text: 'Location',
                         dataIndex: 'accLocation',
                         editor: {
                             xtype: 'textfield'
                         }
                     },
                     {
                         text: 'Email',
                         dataIndex: 'accEmail',
                         editor: {
                             xtype: 'textfield'
                         }
                     },
                     {
                         text: 'Tel No.',
                         dataIndex: 'accTelNo',
                         editor: {
                             xtype: 'textfield'
                         }
                     },
                     {
                         text: 'Mobile No.',
                         dataIndex: 'accMobileNo',
                         editor: {
                             xtype: 'textfield'
                         }
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
                                       itemId: 'addAccount',
                                       iconCls: 'add',
                                       text: 'Add Account'
                                   },
                                   {
                                       xtype: 'button',
                                       itemId: 'deleteAccount',
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