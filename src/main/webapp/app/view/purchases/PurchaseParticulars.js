Ext.define('InventoryApp.view.purchases.PurchaseParticulars',{
	extend:'Ext.form.Panel',
	alias:'widget.purchases.purchaseparticulars',
	requires: [	           
	       ],	
	//bodyPadding: 5,
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   items:[					
					{
						xtype: 'container',
					    layout: 'vbox',			    
					   
					    items:[
					          {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'purAccCode',
                                fieldLabel: 'Unit Measure',
                                displayField: 'accName',
                                valueField: 'accCode',
                                store: {
                                    type: 'account.accounts'
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
					        	fieldLabel: 'Ref No.'
						       },
						       {
		                            xtype: 'datefield',
		                            name: 'purDate',
		                            fieldLabel: 'Purchase Date',
		                           // format: 'd/m/Y',                         
		                            allowBlank: false,
		                        }
					          ],
					},
					
                 ], 
       });
       me.callParent( arguments );
   }        
});