Ext.define('InventoryApp.view.purchases.PurchaseParticulars',{
	extend:'Ext.form.Panel',
	alias:'widget.purchases.purchaseparticulars',
	requires: [	           
	       ],	
	//bodyPadding: 5,
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: false,
    	   },
    	   items:[					
					{
						xtype: 'container',
					    layout: 'vbox',			    
					   
					    items:[
					          {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'purAccCode',
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
					        	xtype:'textfield',
					        	name:'purInvono',					        	
					        	fieldLabel: 'Invoice No.'
					          },
					          {
					        	xtype:'textfield',
					        	name:'purRefNo',					        	
					        	fieldLabel: 'Ref No.',
					        	allowBlank: true,
						       },
						       {
		                            xtype: 'datefield',
		                            name: 'purDate',
		                            fieldLabel: 'Purchase Date',
		                            format: 'd/m/Y', 
		                            renderer: function(value){ 
		                            	console.log('value=== '+value);
		                            	if(value==null){
		                            		var dt = new Date(value);
		                            		return dt;
		                            	}else{
		                            		return value;
		                            	}
		                            	
		                            	
		                            }
		                            
		                        }
					          ],
					},
					
                 ], 
       });
       me.callParent( arguments );
   }        
});