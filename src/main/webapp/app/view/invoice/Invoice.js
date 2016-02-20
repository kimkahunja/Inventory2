Ext.define('InventoryApp.view.invoice.Invoice',{
	extend: 'Ext.form.Panel',
    alias: 'widget.invoice.invoice',
    bodyPadding: 5,
    initComponent: function() {
    	  var me = this;  
    	  var store = Ext.create('InventoryApp.store.product.Stocks', {
    		    storeId: 'InvoiceStocks'
    		});
    		store.proxy.extraParams = { location: InventoryApp.Utilities.locationId };
    	 Ext.applyIf(me,{
    		 fieldDefaults: {
                 labelAlign: 'right',
                 labelWidth: 90,
                 flex: 1,
                 margins: 5
             },
    		 items:[
					
					{
						
					    xtype: 'container',
					    layout: 'hbox',					    
					    items: [			          
								{
									xtype: 'panel',								   
								    flex:1,
								    collapsible: true,
								    collapseDirection:'left',
								    collapsed:true,
								    //collapseFirst: false,
								    //collapseMode: "header",
								    animCollapse : false,
								    height:300,
								    maxHeight:300,
								    title:'Pending Transactions',
								    layout:'fit',
								    items:[
								          {
								        	  xtype:'invoice.invoicelist',
								        	  	  
								    	  }
								
								          ],
									
								},	  
					         
					        {
					        	xtype: 'container',
							    //layout: 'vbox',  
							    frame:true,
							    border:1,
							    flex:1, 
							    //collapsible: true,
							    
							    style: {
							        borderColor: '#E6E6E6',
							        borderStyle: 'solid'
							    },
							    items:[
							           {
							        	   xtype: 'container',
										   layout: 'hbox',	
										   items:[
												{
												    xtype: 'button',
												    text : 'New Transaction',
												    itemId:'newInvoice'	
												},									
																			          
												{
			                                     	   xtype: 'ux.form.field.remotecombobox',
			                                            name: 'searchInv',
			                                             fieldLabel: 'Product',
			                                             displayField: 'pdtDescription',
			                                             valueField: 'pdtCode',
			                                             //multiSelect: true,
			                                             /*store: {
			                                                 type: 'product.stocks'
			                                             },*/
			                                             store:Ext.data.StoreManager.lookup('InvoiceStocks'),
			                                             editable: true,
			                                             forceSelection: false,   
			                                             emptyText:'select product',
			                                             minChars: 0, 
			                                             queryMode:'remote',     
			                                            // triggerAction: "all", 
			                                            /* tpl: Ext.create('Ext.XTemplate', ['<tpl for=".">',
			      							                                             '<div style="margin: 4px;" class="x-boundlist-item">',
			      							                                             '<div><b>{pdtShtDesc} - {pdtDescription}</b></div>',			      							                                            
			      							                                             '<div style="font-size: xx-small; color: grey;">Qty : {pdtCurrentQty}</div>',
			      							                                             '<div style="font-size: xx-small; color: grey;">Date : {purchaseDate}</div>',
			      							                                             '<div style="font-size: xx-small; color: grey;">Reference : {prodReference}</div>',
			      							                                             //'<div style="color: {[values.SALARY < 5000 ? "red" : "black"]};">Salary : ${SALARY}</div>',
			      							                                             //'<div style="font-size: xx-small; color: grey;">(ID = {_pdtCatCode})</div>',
			      							                                             '</div>',
			      							                                             '</tpl>']),*/
			                                         },
										         ],
							           },
							          
							           
							          {
							        	  xtype: 'container',
							        	  layout:'fit',
							        	  maxHeight:300,
							        	  items:[
													{
														xtype:'invoice.invoicedtlslist' , 
													  },
							        	         ],
							          },
							          
							          {
		                                     xtype: 'toolbar',		                                   
		                                     items: [
		                 						{
		                 						    xtype:'tbspacer',
		                 						    flex:2
		                 						},
		                 						{
		                                            xtype: 'button',
		                                            itemId: 'invoiceRemove',
		                                            text: 'Remove',
		                                            iconCls: 'delete'
		                                        },
		                 						{
		                                            xtype: 'button',
		                                            itemId: 'invoiceSave',
		                                            text: 'Save',
		                                            iconCls: 'save'
		                                        },
		                                        {
		                                            xtype: 'button',
		                                            itemId: 'invoiceFinish',
		                                            text: 'Finish',
		                                            iconCls: 'accept'
		                                        },
		                                     ]
		                                 },
							          ],
					        },
					       {
					        	xtype: 'container',
							    //layout: 'vbox',  
							    frame:true,
							    border:1,
							    flex:1,
							    items:[
							          {
							        	  xtype:'invoice.invoiceparticulars'
							    	  }

							          ],
					        	
					       },
					    ]
					},
					
                   ],
                   dockedItems: [
                                 {
                                     xtype: 'toolbar',
                                     dock: 'top',
                                     defaultAlign:'right',
                                     ui: 'footer',
                                     items: [
                 						{
                 						    xtype:'tbspacer',
                 						    flex:2
                 						},                 						
                 						
                 						 {
            					            xtype: 'textfield',
            					            name: 'topSearch',
            					            fieldLabel: 'Search'					            
            					        },
                                     ]
                                 },
                                
                             ]
    	 });
         me.callParent( arguments );
    }
});