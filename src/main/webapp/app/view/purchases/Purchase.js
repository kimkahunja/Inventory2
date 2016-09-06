Ext.define('InventoryApp.view.purchases.Purchase',{
	extend: 'Ext.form.Panel',
    alias: 'widget.purchases.purchase',
    bodyPadding: 5,
   // layout:'fit',
   autoScroll:true,
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
						
					    xtype: 'panel',
					    layout: 'hbox',
					    items: [			          
								{
									xtype: 'panel',								   
								    flex:1,
								    collapsible: true,
								    collapseDirection:'left',
								    //collapsed:true,
								    height:300,
								    maxHeight:300,
								    title:'Unauthorized Purchases',
								    layout:'fit',
								    items:[
								          {
								        	  xtype:'purchases.purchaselist',
								        	  	  
								    	  }
								
								          ],
									
								},	  
					         
					        {
					        	xtype: 'panel',
							    //layout: 'vbox',  
							    frame:true,
							    border:1,
							    flex:2, 
							    //collapsible: true,
							    ///layout:'fit',
							    //height:300,
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
													xtype: 'textfield',
												    name: 'search',							            
												    fieldLabel: 'Product'
												},*/							          
												{
			                                     	   xtype: 'ux.form.field.remotecombobox',
			                                            name: 'search',
			                                             fieldLabel: 'Product',
			                                             displayField: 'pdtDescription',
			                                             valueField: 'pdtCode',
			                                             store: {
			                                                 type: 'product.products'
			                                             },
			                                             editable: true,
			                                             forceSelection: true,   
			                                             emptyText:'select product',
			                                             minChars: 0, 
			                                             tpl: Ext.create('Ext.XTemplate', ['<tpl for=".">',
			      							                                             '<div style="margin: 4px;" class="x-boundlist-item">{pdtShtDesc} - {pdtDescription}</div>',
			      							                                             '</tpl>'])
			                                         },
										         ],
							           },
							          
							           
							          {
							        	  xtype: 'panel',
							        	 // autoScroll:true,
							        	  layout:'fit',
							        	  maxHeight:300,							        	  
							        	  height:300,
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
		                                            itemId: 'purchaseRemove',
		                                            text: 'Remove',
		                                            iconCls: 'delete'
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
					        	xtype: 'panel',
							    layout: 'fit',  
							    frame:true,
							    border:1,
							    flex:1,							   
							    height:300,
							    minWidth:270,
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