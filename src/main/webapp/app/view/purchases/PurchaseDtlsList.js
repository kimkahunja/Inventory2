Ext.define('InventoryApp.view.purchases.PurchaseDtlsList',{
	extend:'Ext.grid.Panel',
	alias:'widget.purchases.purchasedtlslist',
	requires: [
	           'Ext.grid.plugin.RowEditing',
	           'Ext.toolbar.Paging',
	           'Ext.grid.RowNumberer',
	           'InventoryApp.store.purchases.PurchasesDtls',	
	           'InventoryApp.store.product.Products'
	       ],
	//store: Ext.create('kahunja.store.purchases.Purchases'),	
	store: 'purchases.PurchasesDtls',
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
				       /* {
		                       header: 'Product',
		                       dataIndex: 'purdProduct',
		                       renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
		                            return  record.get( '_purdProduct' );
		                        },
		                       editor:{   
		                    	   	   xtype: 'combobox',
			                    	   	store: {
			                                type: 'product.products'
			                            },
		                               displayField: 'pdtDescription',
		                               valueField: 'pdtCode',
		                               id: 'purdProductCombo',
		                               forceSelection:true,
		                               listeners: {
		                            	    'change': function (combo, newValue) {
		                            	        if (newValue === null)
		                            	            combo.reset();
		                            	        }
		                            	    }
		                           },
		                           minWidth: 200,
		                           menuDisabled:true,
		                           //sortable:false
		                   },*/
						        {
				                       header: 'Product',
				                       dataIndex: 'purdProduct',
				                       renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
				                            return  record.get( '_purdProduct' );
				                        },
				                       editor:{   
				                    	   	   xtype: 'gridpicker',
					                    	   	store: {
					                                type: 'product.products'
					                            },
				                               displayField: 'pdtDescription',
				                               valueField: 'pdtCode',
				                               minChars: 0,
				                               gridConfig: {
					                            	columns: [
					                            	          {
					                            	        	  xtype: 'rownumberer'
					                            	          },
					                            	          {
					                            					dataIndex: 'pdtDescription',
					                            					flex: 1
					                            				},
					                            				{
					                            					dataIndex: 'pdtBarCode',flex: 1
					                            				}
					                            	          ],
					                    	      	// Filtering logic
					                    			listeners: {
					                    					single: true
					                    					,afterrender: function() {
					                    						var grid = this,
					                    							store = this.getStore(),
					                    							filters = {};
					                    						grid.query('button').forEach(function(button) {
					                    							button.on('toggle', function(button, pressed) {
					                    								filters[button.text] = pressed;
					                    								store.filter(function(record) {
					                    									return filters[record.get('pdtDescription').substr(0, 3)] !== false;
					                    								});
					                    								grid.doLayout(); // update grid height
					                    							});
					                    						});
					                    					}
					                    				}     	          
					                            	        
					                            }
				                           },
				                           minWidth: 300,
				                           menuDisabled:true,
				                           //sortable:false
				                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'purdQty',
                       //css:'background-color: #EEFFAA;border-style:solid;border-color:#0000ff;',
                       /*editor: {
                           xtype: 'textfield',
                           allowBlank: false,
                          
                       },*/
                       field: {
                           xtype: 'numberfield',
                      },
                       xtype:'numbercolumn',
                       menuDisabled:true,
                       //sortable:false
                   }, 
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'purdPrice',
                       xtype:'numbercolumn',
                       editor: {
                           xtype: 'numberfield',
                      },
                      allowBlank: false,
                       /*editor: {
                           //xtype: 'textfield',
                           allowBlank: false,
                           
                       },*/
                       menuDisabled:true,
                       //sortable:false
                       
                   },
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
                             dock: 'top',
                             ui: 'footer',
                             items: [
                                 {
                                     xtype: 'button',
                                     itemId: 'add',
                                     iconCls: 'icon_add',
                                     text: 'Add Item'
                                 },                                
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