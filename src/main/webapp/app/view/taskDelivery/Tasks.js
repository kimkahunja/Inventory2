Ext.define('InventoryApp.view.taskDelivery.Tasks', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.taskDelivery.tasks',

    requires: [
        'InventoryApp.view.taskDelivery.TaskList'
    ],

    layout: {
        type: 'fit'
    },
    initComponent: function() {
    	var me = this;
    	Ext.applyIf(me,{ 
    		items: [
    		        {
    		            xtype: 'taskDelivery.tasklist'
    		        }
    		    ],
    		    dockedItems: [
    		        {
    		            xtype: 'toolbar',
    		            flex: 1,
    		            dock: 'top',
    		            items: [
    		                {
    		                    xtype: 'button',
    		                    text: 'Add',
    		                    itemId: 'addTask',
    		                    iconCls: 'add'
    		                },
    		                {
    		                    xtype: 'button',
    		                    text: 'Edit',
    		                    itemId: 'editTask',
    		                    iconCls: 'edit'
    		                },
    		                {
    		                    xtype: 'button',
    		                    text: 'Delete',
    		                    itemId: 'deleteTask',
    		                    iconCls: 'delete'
    		                },
    		                {
    		                    xtype: 'button',
    		                    text: 'Issue Out',
    		                    itemId: 'issueTask',
    		                    iconCls: 'accept'
    		                }
    		            ]
    		        }
    		    ]
    	});
    	  me.callParent( arguments );
    }
    
});