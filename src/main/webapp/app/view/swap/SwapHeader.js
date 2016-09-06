Ext.define('InventoryApp.view.swap.SwapHeader',{
	extend:'Ext.form.Panel',
	alias:'widget.swap.swapheader',
	requires: [	  
	           'InventoryApp.view.returns.SwapReturnView',
	           'InventoryApp.view.returns.ReturnMainContainer'
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
    	   defaults: { 
               labelWidth: 200,
               margin: '5 5 5 5 '
            },
    	   items:[
    	          
					{
						   xtype:'fieldcontainer',
						   layout: 'hbox',
						   width:800,
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
					{
						xtype: 'radiogroup',
					   //labelAlign:'top',
						// width:200, 
					    fieldLabel: 'Choose the Type of transaction',
					    //arrange Radio Buttons into 2 columns
					    columns: 1,
					    itemId: 'rgReturnSwap',
					    items: [
						        {
						            xtype: 'radiofield',
						            boxLabel: 'Swapping Items',
						            name: 'swapReturn',
						            checked: true,
						            inputValue: 'SWAP'
						        },
						        {
						            xtype: 'radiofield',
						            boxLabel: 'Returned Items',
						            name: 'swapReturn',
						            inputValue: 'RETURN'
						        }					       
						        
						    ]
					},
					{
						xtype:'returns.swapreturnview'
					}
    	         ]
	   });
	   me.callParent( arguments );
   }
});	       