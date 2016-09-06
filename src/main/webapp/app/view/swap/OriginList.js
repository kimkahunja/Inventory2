Ext.define('InventoryApp.view.swap.OriginList',{
	extend:'Ext.grid.Panel',
	alias:'widget.swap.originlist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	           'InventoryApp.store.swap.ItemOrigDtls'
	       ],
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.swap.ItemOrigDtls');
	       Ext.applyIf(me,{	   
	    	   store: store,
	    	   selType: 'cellmodel',
	           plugins: [
	                     {
	                         ptype: 'cellediting',
	                         clicksToEdit: 1
	                     }
	                 ],
	                 columns: {
	                     defaults: {
	                  	   menuDisabled:true,
	                  	   sortable:false
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
	      	                       text: 'Description',
	      	                       dataIndex: '_swpdPdtCode',
	      	                       menuDisabled:true,
	      	                       flex:1
	      	                       //sortable:false
	      		                   },	                   
	                         
	      		                   {
	      		                       text: 'Quantity',
	      		                       dataIndex: 'swpdQty',                    
	      		                       field: {
	      		                           xtype: 'numberfield',
	      		                           selectOnFocus: true
	      		                      },
	      		                       xtype:'numbercolumn',                      
	      		                       menuDisabled:true,
	      		                       //sortable:false
	      		                   }                   
	                     ]
	                     
	                 },
	           dockedItems: [	                         
	                         {
                                 xtype: 'toolbar',
                                 dock: 'bottom',
                                 items: [
             						{
             						    xtype:'tbspacer',
             						    flex:2
             						},
             						{
                                        xtype: 'button',
                                        itemId: 'originRemove',
                                        text: 'Remove',
                                        iconCls: 'delete'
                                    },
             						{
                                        xtype: 'button',
                                        itemId: 'originSave',
                                        text: 'Save',
                                        iconCls: 'save'
                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'originCancel',
                                        text: 'Cancel',
                                        iconCls: 'cancel'
                                    },
                                 ]
                             }
	                     ]         
	       });
	       me.callParent( arguments );
	   }   
});