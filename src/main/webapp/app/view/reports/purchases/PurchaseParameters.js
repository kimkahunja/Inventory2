Ext.define('InventoryApp.view.reports.purchases.PurchaseParameters',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.purchases.purchaseparameters',
	requires: [
	           'InventoryApp.store.standard.Status',
	       ],	
	//bodyPadding: 5,
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: true,
    	   },
    	   items:[	{
    		   		 	xtype:'container',
    		   		 	width:600,    		   		 	
    		   		    layout: {
    		                align: 'stretch',
    		                type: 'vbox'
    		            },
    		            defaults: { 
    		                labelWidth: 200,
    		                margin: '5 5 5 5 '
    		             },    		            
    		   		 	items:[
								{
								    xtype: 'radiogroup',
								    fieldLabel: 'Choose the Purchase Report to execute',
								    //arrange Radio Buttons into 2 columns
								    columns: 2,
								    itemId: 'rgPurchaseReport',
								    items: [
								        {
								            xtype: 'radiofield',
								            boxLabel: 'Grouping per Invoice',
								            name: 'purchaseRpt',
								            checked: true,
								            inputValue: 'G_PUR'
								        },
								        {
								            xtype: 'radiofield',
								            boxLabel: 'Grouping per Product',
								            name: 'purchaseRpt',
								            inputValue: 'G_PROD'
								        },
								        {
								            xtype: 'radiofield',
								            boxLabel: 'Grouping per Supplier',
								            name: 'purchaseRpt',
								            inputValue: 'G_SUP'
								        },
								        
								    ]
								},
    		   		 	       ]
    	   			},				
					{
						xtype: 'container',
					    layout: 'hbox',			    
					   
					    items:[					           
					          {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'purAccCodeRpt',
                                fieldLabel: 'Supplier',
                                displayField: 'accName',
                                valueField: 'accCode',                                
                                store: {
                                    type: 'account.accountsrpt'
                                },
                                editable: false,
                                forceSelection: false,
                                emptyText:'select a supplier'
                            },
                            {
                                xtype: 'combobox',
                                name: 'purParamStatus',
                                fieldLabel: 'Status',
                                displayField: 'description',
                                valueField: 'id',
                                queryMode: 'local',
                                //value:null,
                                store:{
                                    type: 'standard.status',
                                    autoLoad: true, 	
                                },
                                editable: false,
                                forceSelection: false,
                                emptyText:'select a Status'
                            },					          
					          
						       {
		                            xtype: 'datefield',
		                            name: 'purParamFrom',
		                            fieldLabel: 'Date From',
		                            format: 'd/m/Y', 
		                        },
		                        {
		                            xtype: 'datefield',
		                            name: 'purParamTo',
		                            fieldLabel: 'Date To',
		                            format: 'd/m/Y', 
		                        },
		                        
					          ],
					},
					
                 ], 
                 dockedItems: [
                               {
                                   xtype: 'toolbar',
                                   dock: 'bottom',
                                   defaultAlign:'right',
                                   ui: 'footer',
                                   items: [
                                           {
											    xtype:'tbspacer',
											    flex:2
											},
                                           {
                                        	   xtype: 'button',
                                        	   itemId: 'searchPurchases',
		          					           text:'Search' ,
		          					           iconCls: 'filter',
                                           },
		               						{
		               						    xtype:'tbspacer',
		               						    flex:1
		               						},                 						
		               						
		               						 {
		          					            xtype: 'button',
		          					           itemId: 'printPurchaseReport',
		          					            text:'Print Report',
		          					            iconCls: 'icon_report',
		          					          
		          					        },
		                                   ]
                               },
                              
                           ]     
       });
       me.callParent( arguments );
   }        
});