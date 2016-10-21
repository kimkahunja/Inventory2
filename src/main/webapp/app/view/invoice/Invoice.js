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
						  xtype:'invoice.invoiceparticulars'
					},
					{
						
					    xtype: 'panel',
					    layout: 'hbox',					    
					    items: [			          
								{
									xtype: 'panel',								   
								    flex:1,
								    collapsible: true,
								    collapseDirection:'left',
								    //collapsed:true,
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
							    flex:2, 
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
			                                             maxWidth:500,
			                                             queryMode:'remote',     
			                                            // triggerAction: "all", 
			                                             tpl: Ext.create('Ext.XTemplate', ['<tpl for=".">',
				      							                                             '<div style="margin: 4px;" class="x-boundlist-item">{pdtShtDesc} - {pdtDescription}</div>',
				      							                                             '</tpl>'])
			                                         },
										         ],
							           },
							          
							           
							          {
							        	  xtype: 'panel',
							        	  //layout:'fit',
							        	  //autoScroll: 'true',
							        	  //overflowY: 'scroll',
							        	 // height:500,
							        	 // maxHeight:500,
							        	  items:[
													{
														xtype:'invoice.invoicedtlslist' , 
													  },
							        	         ],
							          }						          
							          
							          ]
					        }
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
										    xtype: 'fieldcontainer',
										    layout: 'hbox',                        
										    items: [
										        {
										            xtype: 'displayfield',
										            name: 'salParticulars',
										           fieldStyle:'font-weight:bold;color:#003168;font-size:16px;'
										            
										        },
										        {
										            xtype: 'displayfield',
										            name: 'salLoc',
										            fieldStyle:'font-weight:bold;color:#003168;font-size:16px;'
										            
										        }
										     
										    ]
										}
                                     ]
                                 },
                                
                             ]
    	 });
    	 //var newInvoiceButton=Ext.ComponentQuery.query('button#newInvoice')[0];
		  //console.log('button position==='+newInvoiceButton.getPosition()[1]);
		  //console.log('screen size=== '+Ext.getBody().getViewSize().height);
         me.callParent( arguments );
    }
});