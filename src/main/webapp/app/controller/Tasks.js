Ext.define('InventoryApp.controller.Tasks', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
    stores: [
        	
        ],
    views: [
    	'taskDelivery.TaskForm',
    	'taskDelivery.TaskAssignee'
    ],
    refs: [
           {
               ref: 'TaskList',
               selector: '[xtype=taskDelivery.tasklist]'
           }
       ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=taskDelivery.tasklist]': {                	
                    afterrender: this.loadRecords,
                    itemdblclick: this.edit,                   
                   // itemcontextmenu: this.showContextMenu,
                  //  selectionchange: this.gridSelectionChange,
                },
                'panel[xtype=taskDelivery.tasks] button#addTask': {
                    click: this.onButtonClickAdd
                },
                'panel[xtype=taskDelivery.tasks] button#editTask': {
                    click: this.edit
                },
                'window[xtype=taskDelivery.taskform] button#saveTaskForm': {
                    click: this.save
                },
                'window[xtype=taskDelivery.taskform] button#cancelTaskForm': {
                    click: this.onButtonClickCancel
                },
                'window[xtype=taskDelivery.taskform] button#addAssignee': {
                    click: this.addAssignee
                },
                'window[xtype=taskDelivery.taskassignee] button#saveTaskAssignee': {
                    click: this.saveAssignee
                },
                'window[xtype=taskDelivery.taskassignee] button#cancelTaskAssignee': {
                    click: this.cancelAssignee
                }
            },
            global: {},
            store: {},
           // proxy: {} 
        });
    }, 
    loadRecords: function( grid, eOpts ) {
    	
    	var me = this,
    		store = grid.getStore();    	
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },
    onButtonClickAdd: function (button, e, options) {

        var win = Ext.create('InventoryApp.view.taskDelivery.TaskForm');
        win.setTitle('Add New Task');
        win.show();
    }, 
    save: function(button, e, options) {
        
        var win = button.up('window'),
        formPanel = win.down('form'),
        store = this.getTaskList().getStore();

        if (formPanel.getForm().isValid()) {
        		
        	 Ext.Ajax.request({
                url: 'task/saveTask.action',
                params:{                		 
                		 data:Ext.encode(formPanel.getForm().getValues()),
                		 date:formPanel.getForm().findField("tskDate").getValue(),
                		 collectionDate:formPanel.getForm().findField("tskCollectionDate").getValue()
                		},
                success: function(conn, response, options, eOpts){

                	var result = Ext.JSON.decode(conn.responseText, true);   

                  //  console.log(result);

                    if (result.success) {

                    	InventoryApp.util.Alert.msg('Success!', result.messages.message);
                        store.load();
                        win.close();
                      
                    } else {
                    	 InventoryApp.util.Util.showErrorMsg(result.messages.message);  
                    }
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                   }
                }
            });
        } 
    },
    edit: function (button, e, options) {

        var grid = this.getTaskList(),
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('InventoryApp.view.taskDelivery.TaskForm');

            editWindow.down('form').loadRecord(record[0]);           

            editWindow.setTitle(record[0].get('tskDescription')+' - '+record[0].get('_tskAccCode'));
            editWindow.show();
        }
    }, 
    onButtonClickCancel: function(button, e, options) {
        button.up('window').close();
    }, 
    addAssignee: function (button, e, options) {

        var win = Ext.create('InventoryApp.view.taskDelivery.TaskAssignee');
        win.setTitle('Add New Assignee');
        win.setPosition(button.getPosition()[0]-380,button.getPosition()[1]+25);
       // console.log('positon===x '+button.getPosition()[0]);
        //console.log('positon===y '+button.getPosition()[1]);
        win.show();
    },
 saveAssignee: function(button, e, options) {
        
        var win = button.up('window'),
        formPanel = win.down('form');

        if (formPanel.getForm().isValid()) {
        		
        	 Ext.Ajax.request({
                url: 'task/saveAssignee.action',
                params:{ 
                		name:formPanel.getForm().findField("tssgName").getValue()
                		},
                success: function(conn, response, options, eOpts){

                	var result = Ext.JSON.decode(conn.responseText, true);   

                  //  console.log(result);

                    if (result.success) {

                    	InventoryApp.util.Alert.msg('Success!', result.messages.message);                       
                        win.close();                      
                    } else {
                    	 InventoryApp.util.Util.showErrorMsg(result.messages.message);  
                    }
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                   }
                }
            });
        } 
    }, 
    cancelAssignee: function(button, e, options) {
        button.up('window').close();
    },  
});           