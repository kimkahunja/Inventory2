Ext.define('InventoryApp.view.swap.SwapHeader',{
	extend:'Ext.form.Panel',
	alias:'widget.swap.swapheader',
	requires: [	           
	       ],
bodyPadding: 5,	       
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
						   xtype:'fieldcontainer',
						   layout: 'hbox',
						   items:[											
									{
									    xtype: 'datefield',
									    name: 'swpDate',
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
									    	
									    	
									    }
									},
									{
		                                xtype: 'ux.form.field.remotecombobox',
		                                name: 'swpAccCode',
		                                itemId:'swpAccCode',
		                                fieldLabel: 'Customer',
		                                displayField: 'accName',
		                                valueField: 'accCode',
		                                /*store: {
		                                    type: 'account.accounts'
		                                },*/
		                                store:Ext.create('InventoryApp.store.account.Accounts'),
		                              //  value: Ext.getStore( 'account.accounts' ).getAt(0).get('accCode'),
		                                editable: false,
		                                forceSelection: false,
		                                emptyText:'select a customer',
		                                

		                            }
						          ],
					},
    	         ]
	   });
	   me.callParent( arguments );
   }
});	       