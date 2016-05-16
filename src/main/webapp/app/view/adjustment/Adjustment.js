Ext.define('InventoryApp.view.adjustment.Adjustment',{
	extend:'Ext.form.Panel',
	alias:'widget.adjustment.adjustment',
	requires: [	           
	       ],
   initComponent: function() {
	   var me = this;  
		
	   Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: false,
    		   margins: 5,
    		   flex: 1,
    	   },
    	   items:[					
					{
						xtype: 'container',
					    layout: 'vbox',
					    items:[
					           {
					        	   xtype:'fieldcontainer',
					        	   layout: 'hbox',
					        	   items:[											
											{
											    xtype: 'datefield',
											    name: 'madjDate',
											    fieldLabel: 'Date',
											    format: 'd/m/Y', 
											    allowBlank:false,
											    renderer: function(value){
											    	if(value==null){
											    		var dt = new Date(value);
											    		return dt;
											    	}else{
											    		return value;
											    	}
											    	
											    	
											    }},
					        	          ],
					           },
					           {
						        	xtype:'textareafield',
						        	name:'madjRemarks',					        	
						        	fieldLabel: 'Remarks',
						        	allowBlank: false,
						          },
		                        
					          ],
					},
					{
						xtype: 'panel',					    
					    frame:true,
					    border:1,
					    width:500,
					    style: {
					        borderColor: '#E6E6E6',
					        borderStyle: 'solid'
					    },
					    items:[
								{
									   xtype: 'container',
									   layout: 'hbox',
									   width:'400',
									   items:[
																	          
											{
								          	   xtype: 'ux.form.field.remotecombobox',
								                 name: 'adjustmentSearch',
								                  fieldLabel: 'Product',
								                  displayField: 'pdtDescription',
								                  valueField: 'pdtCode',
								                  store: {
								                      type: 'product.products'
								                  },				                  
								                  editable: true,
								                  forceSelection: true,   
								                  emptyText:'select product',
								                  minChars: 0								                 
								              },
									         ],
								},
								{
						        	  xtype: 'panel',
						        	 // autoScroll:true,
						        	  layout:'fit',
						        	  maxHeight:200,							        	  
						        	  height:200,
						        	  items:[
												{
													xtype:'adjustment.adjustmentdtls', 
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
	                                            itemId: 'adjustmentRemove',
	                                            text: 'Remove',
	                                            iconCls: 'delete'
	                                        },
	                 						{
	                                            xtype: 'button',
	                                            itemId: 'adjustmentSave',
	                                            text: 'Post',
	                                            iconCls: 'save'
	                                        },
	                                        {
	                                            xtype: 'button',
	                                            itemId: 'adjustmentCancel',
	                                            text: 'Cancel',
	                                            iconCls: 'cancel'
	                                        },
	                                     ]
	                                 }
					          ]
					},
					{
					 	
					}
					
                 ], 
       });
	   me.callParent( arguments );
   }
});	       