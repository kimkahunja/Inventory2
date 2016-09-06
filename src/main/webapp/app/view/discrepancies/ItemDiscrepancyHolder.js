Ext.define('InventoryApp.view.discrepancies.ItemDiscrepancyHolder',{
	extend:'Ext.form.Panel',
	alias:'widget.discrepancies.itemdiscrepancyholder',
	requires: [	 
	           'InventoryApp.view.discrepancies.ItemDiscrepancyList'
	       ],
   initComponent: function() {
	   var me = this;  
		
	   Ext.applyIf(me,{
    	   fieldDefaults: {    		   
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
											    name: 'dscDate',
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
					           }				           
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
								                 name: 'discrepancySearch',
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
													xtype:'discrepancies.itemdiscrepancylist', 
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
	                                            itemId: 'discrepancyRemove',
	                                            text: 'Remove',
	                                            iconCls: 'delete'
	                                        },
	                 						{
	                                            xtype: 'button',
	                                            itemId: 'discrepancySave',
	                                            text: 'Save',
	                                            iconCls: 'save'
	                                        },
	                                        {
	                                            xtype: 'button',
	                                            itemId: 'discrepancyPost',
	                                            text: 'Post',
	                                            iconCls: 'accept'
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