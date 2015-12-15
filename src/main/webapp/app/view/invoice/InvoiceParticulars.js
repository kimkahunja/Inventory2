Ext.define('InventoryApp.view.invoice.InvoiceParticulars',{
	extend:'Ext.form.Panel',
	alias:'widget.invoice.invoiceparticulars',
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
                                name: 'invAccCode',
                                fieldLabel: 'Customer',
                                displayField: 'accName',
                                valueField: 'accCode',
                                store: {
                                    type: 'account.accounts'
                                },
                                value: Ext.getStore( 'account.accounts' ).getAt(0).get('accCode'),
                                editable: false,
                                forceSelection: false,
                                emptyText:'select a customer'
                            },
					         /* {
					        	xtype:'textfield',
					        	name:'purInvono',					        	
					        	fieldLabel: 'Invoice No.'
					          },*/
					          {
					        	xtype:'textfield',
					        	name:'invRefno',					        	
					        	fieldLabel: 'Ref No.',
					        	allowBlank: true,
						       },
						       {
		                            xtype: 'datefield',
		                            name: 'invDate',
		                            fieldLabel: 'Transaction Date',
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