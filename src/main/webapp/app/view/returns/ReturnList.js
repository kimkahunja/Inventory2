Ext.define('InventoryApp.view.returns.ReturnList',{
	extend:'Ext.grid.Panel',
	alias:'widget.returns.returnlist',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	           'InventoryApp.store.returns.ItemReturnDtls'
	       ],
	initComponent: function() {
	       var me = this;
	       var store = Ext.create('InventoryApp.store.returns.ItemReturnDtls');
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
	      	                       dataIndex: '_rtndPdtCode',
	      	                       menuDisabled:true,
	      	                       flex:1
	      	                       //sortable:false
	      		                   },
	      		                   
	      		                  {
	      		                       text: 'Unit Price',
	      		                       dataIndex: 'rtndPrice',
	      		                       xtype:'numbercolumn',
	      		                       editor: {
	      		                           xtype: 'numberfield',
	      		                           selectOnFocus: true
	      		                      },
	      		                      allowBlank: false,                       
	      		                       menuDisabled:true,                     
	      		                       
	      		                   },
	      		                 {
	      		                       text: 'Quantity',
	      		                       dataIndex: 'rtndQty',                    
	      		                       field: {
	      		                           xtype: 'numberfield',
	      		                           selectOnFocus: true
	      		                      },
	      		                       xtype:'numbercolumn',                      
	      		                       menuDisabled:true,
	      		                       //sortable:false
	      		                   } ,  
	      		                 {
	      		                       xtype: 'numbercolumn',
	      		                       summaryType: 'sum',
	      		                       dataIndex: 'total',
	      		                       text: 'Total'
	      		                   },
	                     ]
	                     
	                 },
	                 features: [{
	                     ftype: 'summary'
	                 }], 
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
                                        itemId: 'returnRemove',
                                        text: 'Remove',
                                        iconCls: 'delete'
                                    },
             						{
                                        xtype: 'button',
                                        itemId: 'returnSave',
                                        text: 'Save',
                                        iconCls: 'save'
                                    }
                                 ]
                             }
	                     ]         
	       });
	       me.callParent( arguments );
	   }   
});