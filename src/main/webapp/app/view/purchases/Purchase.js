Ext.define('InventoryApp.view.purchases.Purchase',{
	extend: 'Ext.form.Panel',
    alias: 'widget.purchases.purchase',
    bodyPadding: 5,
    initComponent: function() {
    	  var me = this;
    	 Ext.applyIf(me,{
    		 fieldDefaults: {
                 labelAlign: 'right',
                 labelWidth: 90,
                 flex: 1,
                 margins: 5
             },
    		 items:[
					{
					    xtype: 'fieldcontainer',
					    layout: 'hbox',                        
					    items: [
					        {
					            xtype: 'displayfield',
					            name: 'topSearch',
					            fieldLabel: 'Search',
					            hideLabel: 'true',
					            
					        },
					     
					    ]
					},
					{
						
					    xtype: 'container',
					    layout: 'hbox',					    
					    items: [			          
								{
									xtype: 'panel',								   
								    flex:1,
								    collapsible: true,
								    collapseDirection:'left',
								    //collapsed:true,
								    title:'Unauthorized Purchases',
								    layout:'fit',
								    items:[
								          {
								        	  xtype:'purchases.purchaselist',
								        	  	  
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
												    text : 'New Purchase',
												    itemId:'newPurchase'	
												},
												/*{
		                 						    xtype:'tbspacer',
		                 						    flex:1
		                 						},*/
												{
													  xtype: 'textfield',
												    name: 'search',							            
												    fieldLabel: 'Product'
												},							          
												
										         ],
							           },
							          
							          
							          {
							        	  xtype: 'container',
							        	  layout:'fit',
							        	  maxHeight:300,
							        	  items:[
													{
														xtype:'purchases.purchasedtlslist' , 
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
		                                            itemId: 'purchaseSave',
		                                            text: 'Save',
		                                            iconCls: 'save'
		                                        },
		                                        {
		                                            xtype: 'button',
		                                            itemId: 'purchaseCancel',
		                                            text: 'Cancel',
		                                            iconCls: 'cancel'
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
							        	  xtype:'purchases.purchaseparticulars'
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