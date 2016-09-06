Ext.define('InventoryApp.view.taskDelivery.TaskAssignee', {
    extend: 'Ext.window.Window',
    alias: 'widget.taskDelivery.taskassignee',

    height: 100,
    width: 400,
    modal: true,
    requires: ['InventoryApp.util.Util'
               ],
    layout:'fit',    
    title: 'Assignees',
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
												    name: 'tssgId'
												},
												
												{
													xtype:'textfield',																									
												    fieldLabel: 'Name',
												    name: 'tssgName'    		                           
												}
	                           		        ]
	                           	},
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
    						    text: 'Save',
    						    itemId: 'saveTaskAssignee',
    						    iconCls: 'save'
    						},
    		                {
    		                    xtype: 'button',
    		                    text: 'Cancel',
    		                    itemId: 'cancelTaskAssignee',
    		                    iconCls: 'cancel'
    		                }
    		                
    		            ]
    		        }
    		    ]
    	});
    	 me.callParent( arguments );
    }
    
});