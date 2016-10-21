Ext.define('InventoryApp.view.transfer.Transfer',{
	extend:'Ext.form.Panel',
	alias:'widget.transfer.transfer',
	requires: [	           
	       ],
   initComponent: function() {
	   var me = this;
	   var store = Ext.create('InventoryApp.store.location.TransferLocations', {
		    storeId: 'TransferLocations1'
		});
		store.proxy.extraParams = { location: InventoryApp.Utilities.locationId };
		
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
											    xtype: 'combobox',
											    name: 'tnsfType',
											    fieldLabel: 'Transfer Type',
											    displayField: 'description',
											    valueField: 'id',
											    queryMode: 'local',											    
											    store: {
													fields: ['id', 'description'],
													data: [
														{ 'id': 'IN',   'description':'Inward' },
														{ 'id': 'OUT',   'description': 'Outward'}
													]
												},
											    editable: false,
											    forceSelection: false,
											    emptyText:'select Transfer Type>>Inward/Outward',
											    minWidth:100,
											},
											{
											    xtype: 'datefield',
											    name: 'tnsfDate',
											    fieldLabel: 'Transfer Date',
											    format: 'd/m/Y', 
											    renderer: function(value){
											    	if(value==null){
											    		var dt = new Date(value);
											    		return dt;
											    	}else{
											    		return value;
											    	}
											    	
											    	
											    }},
					        	          ],
					           },{
					        	   xtype:'fieldcontainer',
					        	   layout: 'hbox',
					        	   items:[
											{
											    xtype: 'ux.form.field.remotecombobox',
											    name: 'tnsfFromLocCode',
											    fieldLabel: 'Source Location',
											    displayField: 'locShtDesc',
											    valueField: 'locCode',
											    /*store: {
											        type: 'location.transferlocations'
											    },*/
											    store:Ext.data.StoreManager.lookup('TransferLocations1'),
											    editable: false,
											    emptyText: 'Select Source Location...',
											   // forceSelection: true
											},
											{
											    xtype: 'ux.form.field.remotecombobox',
											    name: 'tnsfToLocCode',
											    fieldLabel: 'Destination Location',
											    displayField: 'locShtDesc',
											    valueField: 'locCode',
											    /*store: {
											        type: 'location.transferlocations'
											    },*/
											    store:Ext.data.StoreManager.lookup('TransferLocations1'),
											    editable: false,
											    emptyText: 'Select destination Location...',
											   // forceSelection: true
											}
					        	          ]
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
					    margin:'20',
					    items:[
								{
									   xtype: 'container',
									   layout: 'hbox',
									   width:'400',
									   items:[
																	          
											{
								          	   xtype: 'ux.form.field.remotecombobox',
								                 name: 'transferSearch',
								                  fieldLabel: 'Product',
								                  displayField: 'pdtDescription',
								                  valueField: 'pdtCode',
								                  store: {
								                      type: 'product.transferproducts'
								                  },				                  
								                  editable: true,
								                  forceSelection: true,   
								                  emptyText:'select product',
								                  minChars: 0,
								                  allowBlank: true
								                 // disabled:true,
								                  //queryMode:'local'
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
													xtype:'transfer.transferdtls', 
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
	                                            itemId: 'transferRemove',
	                                            text: 'Remove',
	                                            iconCls: 'delete'
	                                        },
	                 						{
	                                            xtype: 'button',
	                                            itemId: 'transferSave',
	                                            text: 'Post',
	                                            iconCls: 'save'
	                                        },
	                                        {
	                                            xtype: 'button',
	                                            itemId: 'transferCancel',
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