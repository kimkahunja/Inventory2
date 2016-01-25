Ext.define('InventoryApp.view.payment.Payment',{
	extend:'Ext.form.Panel',
	alias:'widget.payment.payment',
	requires: [	           
	       ],	
	//bodyPadding: 5,
	autoScroll:'auto',        
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
											    name: 'pymtAccCode',
											    fieldLabel: 'Supplier',
											    displayField: 'accName',
											    valueField: 'accCode',
											    store: {
											        type: 'account.accountssupplier'
											    },
											    editable: false,
											    forceSelection: false,
											    emptyText:'select a supplier'
											},
											{
											    xtype: 'datefield',
											    name: 'pymtDate',
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
				                                name: 'pymtPaymode',
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
								        	name:'pymtPaymemo',					        	
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
												name:'pymtRemarks',					        	
												fieldLabel: 'Remarks',
												allowBlank: true,
											   },
											   {
												xtype:'numberfield',
												name:'pymtAmount',					        	
												fieldLabel: 'Amount',					        	
											   }, 
					        	          ]
					          },
		                        
					          ],
					},
					{
						xtype:'payment.paymentdtl'
					}
					
                 ], 
       });
       me.callParent( arguments );
   }        
});