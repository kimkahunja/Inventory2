Ext.define('InventoryApp.view.purchases.Purchase',{
	extend: 'Ext.form.Panel',
    alias: 'widget.purchases.purchase',
    bodyPadding: 5,
    initComponent: function() {
    	  var me = this;
    	  var states = Ext.create('Ext.data.Store', {
              fields: ['abbr', 'name'],
              data : [
              {"abbr":"AL", "name":"Alabama"},
              {"abbr":"AK", "name":"Alaska"},
              {"abbr":"AZ", "name":"Arizona"}
              ]
              });
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
			                                             forceSelection: false,   
			                                             emptyText:'select product',
			                                             minChars: 0, 
			                                             tpl: Ext.create('Ext.XTemplate', ['<tpl for=".">',
			      							                                             '<div style="margin: 4px;" class="x-boundlist-item">',
			      							                                             '<div><b>{pdtShtDesc} - {pdtDescription}</b></div>',
			      							                                             '<div style="font-size: xx-small; color: grey;">Measure : {_pdtUntCode}</div>',
			      							                                             '<div style="font-size: xx-small; color: grey;">Category : {_pdtCatCode}</div>',
			      							                                             '<div style="font-size: xx-small; color: grey;">Location : {_pdtLocCode}-{_pdtSlocCode}</div>',
			      							                                             //'<div style="color: {[values.SALARY < 5000 ? "red" : "black"]};">Salary : ${SALARY}</div>',
			      							                                             //'<div style="font-size: xx-small; color: grey;">(ID = {_pdtCatCode})</div>',
			      							                                             '</div>',
			      							                                             '</tpl>']),
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