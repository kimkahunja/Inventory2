Ext.define('InventoryApp.view.reports.transfer.TransferParameters',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.transfer.transferparameters',
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
								    fieldLabel: 'Choose the Transfer Report to execute',
								    //arrange Radio Buttons into 2 columns
								    columns: 2,
								    itemId: 'rgTransferReport',
								    items: [
								        {
								            xtype: 'radiofield',
								            boxLabel: 'Grouping per Transfer',
								            name: 'transferRpt',
								            checked: true,
								            inputValue: 'G_TRANS'
								        },
								        {
								            xtype: 'radiofield',
								            boxLabel: 'Grouping per Product',
								            name: 'transferRpt',
								            inputValue: 'G_PROD'
								        }							        
								        
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
                                 name: 'tnsfdPdtCodeRpt',
                                  fieldLabel: 'Product',
                                  displayField: 'pdtDescription',
                                  valueField: 'pdtCode',
                                  store: {
                                      type: 'product.products'
                                  },
                                  editable: true,
                                  forceSelection: false,   
                                  emptyText:'select product',
                                  minChars: 0, 
                                  hidden:true,
                                  minWidth:350,
                                 /* tpl: Ext.create('Ext.XTemplate', ['<tpl for=".">',
						                                             '<div style="margin: 4px;" class="x-boundlist-item">',
						                                             '<div><b>{pdtShtDesc} - {pdtDescription}</b></div>',
						                                             '<div style="font-size: xx-small; color: grey;">Measure : {_pdtUntCode}</div>',
						                                             '<div style="font-size: xx-small; color: grey;">Category : {_pdtCatCode}</div>',
						                                             '<div style="font-size: xx-small; color: grey;">Location : {_pdtLocCode}-{_pdtSlocCode}</div>',
						                                             //'<div style="color: {[values.SALARY < 5000 ? "red" : "black"]};">Salary : ${SALARY}</div>',
						                                             //'<div style="font-size: xx-small; color: grey;">(ID = {_pdtCatCode})</div>',
						                                             '</div>',
						                                             '</tpl>']),*/
                              },
                            {
                                xtype: 'combobox',
                                name: 'tnsfParamStatus',
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
		                            name: 'tnsfParamFrom',
		                            fieldLabel: 'Date From',
		                            format: 'd/m/Y', 
		                            minWidth:150,
		                        },
		                        {
		                            xtype: 'datefield',
		                            name: 'tnsfParamTo',
		                            fieldLabel: 'Date To',
		                            format: 'd/m/Y',
		                            minWidth:150,
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
                                        	   itemId: 'tnsfsearch',
		          					           text:'Search' ,
		          					           iconCls: 'filter',
                                           },
		               						{
		               						    xtype:'tbspacer',
		               						    flex:1
		               						},                 						
		               						
		               						 {
		          					            xtype: 'button',
		          					           itemId: 'printtnsfReport',
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