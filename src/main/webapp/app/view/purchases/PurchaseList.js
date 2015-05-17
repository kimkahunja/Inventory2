Ext.define('InventoryApp.view.purchases.PurchaseList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchaselist',
	requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging',
	           'Ext.grid.RowNumberer',
	           'InventoryApp.store.purchases.Purchases',
	           'InventoryApp.store.account.Accounts'
	       ],
	//store: Ext.create('kahunja.store.purchases.Purchases'),	
	store: 'purchases.Purchases', 
	//width:300,
	title:'Purchases...',
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
               defaults: {
            	   menuDisabled:true
               },
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
                       text: 'Purchase No.',
                       dataIndex: 'purRefNo',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: false
                       },
                       //flex: .2
                   },
                   {
                       text: 'Invoice No',
                       dataIndex: 'purInvono',
                       editor: {
                           xtype: 'textfield',
                           allowBlank: true
                       },
                       //flex: .2
                   },
                 
                   {
                       header: 'Purchase Date',
                       dataIndex: 'purDate',
                       width: 120,                     
                       renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                           field:{ xtype:'datefield',
                                   autoSync:true,
                                   allowBlank:false,
                                   editor: new Ext.form.DateField(
                                           {format: 'd/m/Y'})  }
                       },
                     {
                       header: 'Supplier',
                       dataIndex: '_purAcc',
                       editor:{   
                    	   	   xtype: 'combobox',
	                    	   	store: {
	                                type: 'account.accounts'
	                            },
                               displayField: 'accName',
                               valueField: 'accCode'
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
                                     iconCls: 'icon_add',
                                     text: 'Add Purchase'
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