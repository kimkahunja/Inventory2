Ext.define('InventoryApp.view.invoice.Cash', {
    extend: 'Ext.window.Window',
    alias: 'widget.invoice.cash',

    height: 200,
    width: 600,
    modal: true,
    requires: ['InventoryApp.util.Util'
               ],
    layout:'fit',    
    title: 'Payment Particulars',
    initComponent: function() {
    	var me = this;    	
    	Ext.applyIf(me,{
    		
    		items: [
    		        {
    		            xtype: 'form',
    		            bodyPadding: 5,
    		            fieldDefaults: {
    		                allowBlank: false,
    		                //labelAlign: 'right',
    		                //labelWidth: 90,
    		                flex: 1,
    		                margins: 5
    		            },
	                    items:[
	                           	{
	                           		xtype:'fieldcontainer',
	                           		layout: 'hbox',
	                           		//margins: 5,
	                           		items: [
												{
												    xtype: 'hiddenfield',
												    fieldLabel: 'Label',
												    name: 'spymtId'
												},
												{
												    xtype: 'hiddenfield',
												    fieldLabel: 'Label',
												    name: 'spymtInvId'
												},
												{
													xtype:'displayfield',																									
												    fieldLabel: 'Sales Total',
												    name: 'spymtTotal'    		                           
												},
												{
												    xtype: 'combobox',
												    name: 'spymtPaymode',
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
												}
	                           		        ]
	                           	},
	                           	{
	                           		xtype:'fieldcontainer',
	                           		layout: 'hbox',	                           		
	                           		items: [
												
												{
												    xtype: 'combobox',
												    name: 'spymtPaymethod',
												    fieldLabel: 'Payment Method',
												    displayField: 'description',
												    valueField: 'id',
												    queryMode: 'local',
												    value:'CASH',
												    store: Ext.create('Ext.data.Store', {
						                            	   fields : ['id','description'],
						                                   data: [ {id:'CASH',description:'CASH'},
						                                           {id:'CHEQUE',description:'CHEQUE'},
						                                           {id:'MPESA',description:'MPESA'}
						                                   		]
						                               }), 
												    editable: false,
												    forceSelection: false,
												    emptyText:'select Payment Method',
												    minWidth:100,
												},
												{
													xtype:'textfield',																									
												    fieldLabel: 'Reference',
												    name: 'spymtReference',
												    value:'CASH',
												    disabled:true
												},
	                           		        ]
	                           	},
	                           	{
	                           		xtype:'fieldcontainer',
	                           		layout: 'hbox',	                           		
	                           		items: [
												
												{
													xtype:'numberfield',																									
												    fieldLabel: 'Cash Given',
												    name: 'spymtAmountGiven'    		                           
												},
												{
													xtype:'displayfield',																									
												    fieldLabel: 'Change',
												    name: 'spymtChange'    		                           
												},
	                           		        ]
	                           	}
	                           ]
    		        }
    		    ],
    		    dockedItems: [
    		        {
    		            xtype: 'toolbar',
    		           // flex: 1,
    		            dock: 'bottom',
    		            ui: 'footer',
    		            layout: {
    		                pack: 'end',
    		                type: 'hbox'
    		            },
    		            items: [
    						{
    						    xtype: 'button',
    						    text: 'Process',
    						    itemId: 'saveCash',
    						    iconCls: 'save'
    						},
    		                {
    		                    xtype: 'button',
    		                    text: 'Cancel',
    		                    itemId: 'cancelCash',
    		                    iconCls: 'cancel'
    		                }
    		                
    		            ]
    		        }
    		    ]
    	});
    	 me.callParent( arguments );
    }
    
});