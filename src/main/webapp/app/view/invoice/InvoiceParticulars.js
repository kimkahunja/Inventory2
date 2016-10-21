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
									xtype:'fieldcontainer',
						        	layout: 'hbox',
						        	items:[
												{
												    xtype: 'ux.form.field.remotecombobox',
												    name: 'invAccCode',
												    itemId:'invAccCode',
												    fieldLabel: 'Customer',
												    displayField: 'accName',
												    valueField: 'accCode',
												    store: {
												        type: 'account.accounts'
												    },
												   // store:Ext.create('InventoryApp.store.account.Accounts'),
												  //  value: Ext.getStore( 'account.accounts' ).getAt(0).get('accCode'),
												    editable: false,
												    forceSelection: false,
												    emptyText:'select a customer',
												    
												
												},
												{
						                            xtype: 'datefield',
						                            name: 'invDate',
						                            fieldLabel: 'Transaction Date',
						                            format: 'd/m/Y', 
						                            renderer: function(value){ 
						                            	//console.log('value=== '+value);
						                            	if(value==null){
						                            		var dt = new Date(value);
						                            		return dt;
						                            	}else{
						                            		return value;
						                            	}
						                            	
						                            	
						                            }
						                            
						                        }
						        	      ]
								},
								{
									xtype:'fieldcontainer',
						        	layout: 'hbox',
						        	items:[
												{
												    xtype: 'combobox',
												    name: 'invPayMode',
												    fieldLabel: 'Payment Mode',
												    displayField: 'description',
												    valueField: 'id',
												    queryMode: 'local',
												    value:'CASH',
												    store: Ext.create('Ext.data.Store', {
												    	   fields : ['id','description'],
												           data: [ {id:'CASH',description:'CASH'},
												                   {id:'CREDIT',description:'CREDIT'} 
												           		]
												       }), 
												    editable: false,
												    forceSelection: false,
												    emptyText:'select Payment Mode',
												    minWidth:100,
												},
												{
										        	xtype:'textfield',
										        	name:'invRefno',					        	
										        	fieldLabel: 'Ref No.',
										        	allowBlank: true
										       },
						        	      ]
								}
					          
					        /*  {
					        	xtype:'displayfield',
					        	name:'invInvono',					        	
					        	fieldLabel: 'Sales No.',					        	
					        	renderer: function(value){
					        		//console.log('value11=== '+value);
					        		if(value.trim().length==0){
					        			//console.log('value22=== '+value);
					        			return value;
					        		}else{
					        			//console.log('value33=== '+value);
					        			return value;
					        		}
					        	 }
					          },*/
					          
						       
		                        
					          ]
					}
					
                 ]
       });
       me.callParent( arguments );
   }        
});