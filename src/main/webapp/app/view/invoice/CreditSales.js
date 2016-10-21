Ext.define('InventoryApp.view.invoice.CreditSales',{
	extend:'Ext.form.Panel',
	alias:'widget.invoice.creditsales',
	requires: [	
	           	'InventoryApp.view.invoice.CreditSaleDtls'           
	       ],	
	//bodyPadding: 5,
	//autoScroll:'auto',        
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
											    xtype: 'ux.form.field.remotecombobox',
											    name: 'crsAccCode',
											    fieldLabel: 'Customer',
											    displayField: 'accName',
											    valueField: 'accCode',
											    store: {
											        type: 'account.accounts'
											    },
											    editable: false,
											    forceSelection: false,
											    emptyText:'select a customer'
											},
											{
											    xtype: 'datefield',
											    name: 'crsDate',
											    fieldLabel: 'Date',
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
				                                xtype: 'combobox',
				                                name: 'crsPaymode',
				                                fieldLabel: 'Payment Mode',
				                                displayField: 'description',
				                                valueField: 'id',
				                                queryMode: 'local',
				                                value:'CASH',
				                                store:{
				                                    type: 'standard.paymentmode',
				                                    autoLoad: true, 	
				                                },
				                                editable: false,
				                                forceSelection: false,
				                                emptyText:'select Payment Mode',
				                                minWidth:100,
				                            },
								          {
								        	xtype:'textfield',
								        	name:'crsPaymemo',					        	
								        	fieldLabel: 'Payment Memo',
								        	allowBlank: true,
								          },
					        	          ]
					           },
					          {
					        	   xtype:'fieldcontainer',
					        	   layout: 'hbox',
					        	   items:[
											{
												xtype:'textfield',
												name:'crsRemarks',					        	
												fieldLabel: 'Remarks',
												allowBlank: true,
											   },
											   {
												xtype:'numberfield',
												name:'crsAmount',					        	
												fieldLabel: 'Amount',					        	
											   },
											   {
					    		                    xtype: 'button',
					    		                    text: 'Auto Allocate',
					    		                    itemId: 'crsAuto',
					    		                    iconCls: 'accept',
					    		                    margins: 5
					    		                }
					        	          ]
					          },
		                        
					          ],
					},
					{
						xtype:'invoice.creditsaledtls'
					}
					
                 ], 
       });
       me.callParent( arguments );
   }        
});