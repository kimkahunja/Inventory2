Ext.define('InventoryApp.view.reports.returns.ReturnParameters',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.returns.returnparameters',
	requires: [
	           'InventoryApp.store.standard.Status',
	       ],
	    
	//bodyPadding: 5,
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: true,
    		   margins: 5,
    	   },
    	   defaults: { 
               labelWidth: 150,
               margin: '5 5 5 5 '
            }, 
    	   items:[					
					{
						xtype: 'container',
					    layout: 'hbox',			    
					   
					    items:[
                            {
                                xtype: 'combobox',
                                name: 'rtnParamStatus',
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
                                emptyText:'select a Status',
                                minWidth:100,
                            },					          
					          
						       {
		                            xtype: 'datefield',
		                            name: 'rtnParamFrom',
		                            fieldLabel: 'Date From',
		                            format: 'd/m/Y', 
		                            minWidth:150,
		                        },
		                        {
		                            xtype: 'datefield',
		                            name: 'rtnParamTo',
		                            fieldLabel: 'Date To',
		                            format: 'd/m/Y',
		                            minWidth:150,
		                        }
		                        
					          ],
					},
					{
						xtype: 'radiogroup',
					   //labelAlign:'top',
						// width:200, 
					    fieldLabel: 'Type of transaction',
					    //arrange Radio Buttons into 2 columns
					    columns: 1,
					    itemId: 'rgReturn',
					    items: [
						        {
						            xtype: 'radiofield',
						            boxLabel: 'Swap',
						            name: 'swapReturn',
						            checked: true,
						            inputValue: 'SWAP'
						        },
						        {
						            xtype: 'radiofield',
						            boxLabel: 'Returns',
						            name: 'swapReturn',
						            inputValue: 'RETURN'
						        }					       
						        
						    ]
					}
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
                                        	   itemId: 'searchReturns',
		          					           text:'Search' ,
		          					           iconCls: 'filter',
                                           },
		               						{
		               						    xtype:'tbspacer',
		               						    flex:1
		               						},                 						
		               						
		               						 {
		          					            xtype: 'button',
		          					           itemId: 'printRtnReport',
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