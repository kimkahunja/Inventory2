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
    		   allowBlank: false,
    	   },
    	   items:[					
					{
						xtype: 'container',
					    layout: 'hbox',			    
					   
					    items:[
					          {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'purAccCode',
                                fieldLabel: 'Supplier',
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
          					            name: 'topSearch',
          					            text:'Print Report'
          					        },
                                   ]
                               },
                              
                           ]     
       });
       me.callParent( arguments );
   }        
});