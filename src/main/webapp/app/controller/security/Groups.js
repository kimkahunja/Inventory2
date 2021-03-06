Ext.define('InventoryApp.controller.security.Groups', {
    extend: 'Ext.app.Controller',

    requires: [
        'InventoryApp.util.Util'
    ],
    stores: [
             'security.Groups',            
             'security.Permissions'
         ],
    views: [
        'security.Groups',
        'security.GroupsList',
        'security.GroupsEdit',
        'security.GroupPermissions'
    ],

   

    refs: [
        {
            ref: 'groupsEdit',
            selector: 'groupsedit'
        },
        {
            ref: 'groupPermissions',
            selector: 'grouppermissions'
        },
        {
            ref: 'groupsList',
            selector: 'groupslist'
        },
        {
            ref: 'UserList',
            selector: '[xtype=userslist]'
        },
    ],

    init: function(application) {

        this.control({
            "groupslist": {
                viewready: this.onViewReady,
                selectionchange: this.onSelectionChange,               
        		canceledit: this.cancel,
            },
            "groupslist button#add": {
                click: this.onButtonClickAdd
            },
            "groupslist button#delete": {
                click: this.onButtonClickDelete
            },
            "grouppermissions": {
                checkchange: this.onCheckChange,
                load: this.onTreeLoad
            },
            "groupsedit button#save": {
                click: this.onButtonClickSave
            },
            "groupsedit button#cancel": {
                click: this.onButtonClickCancel
            },
            "groupslist gridview":{
            	itemadd: this.edit
            }
        });
    },

    onViewReady: function(component, options) {

    	component.getStore().load(function(records, operation, success) {
    		
    		if (records.length > 0){
    			component.getSelectionModel().select(0);
    		}
    	});
    },

    onSelectionChange: function (sm, records, options) {

    	if (records[0]) {
            //this.getGroupsEdit().getForm().loadRecord(records[0]);

            this.getGroupPermissions().getStore().load({
            	params: {
            		group: records[0].get('id')
            	}
            });

            this.getGroupsEdit().down('userslist').getStore().load({
                params: {
                    group: records[0].get('id')
                }
            });

            this.getGroupsEdit().setDisabled(false);
        }
    },

    onCheckChange: function (node, checked, options) {

        if (node.isLeaf() && checked) {
            node.parentNode.set('checked', checked);
        } else if (!node.isLeaf()) {
            node.cascadeBy(function(n){
                n.set('checked', checked);
            });
        }
    },

    onTreeLoad: function (component, node, records, successful, options) {

        node.cascadeBy(function(n){
            n.set('text', [n.get('text')]);
        });
    },

    onButtonClickAdd: function (button, e, options) {

    	/*var model = Ext.create('InventoryApp.model.security.Group', {
    		id: 0,
    		name: null
    	});

    	this.getGroupsEdit().getForm().loadRecord(model);*/
    	var me = this,
		grid = me.getGroupsList(),
		plugin = grid.editingPlugin,
		store = grid.getStore();
		// if we're already editing, don't allow new record insert
		if( plugin.editing ) {
			// show error message
			Ext.Msg.alert( 'Attention', 'Please finish editing before inserting a new record' );
			return false;
		}
		//console.log('add functionality is here...');
		store.insert( 0, {} );

    	//me.getGroupPermissions().getStore().load();

        //me.getGroupsEdit().down('userslist').getStore().removeAll();
          me.getUserList().getStore().removeAll();
        me.getGroupsEdit().setDisabled(false);
    },

    onButtonClickDelete: function (button, e, options) {

    	var grid = button.up('groupslist'),
        tree = this.getGroupPermissions(),
        formPanel = this.getGroupsEdit(),
        form = this.getGroupsEdit().getForm(),
        usersGrid = formPanel.down('userslist'),
    	record = grid.getSelectionModel().getSelection(), 
        store = grid.getStore();

        if (store.getCount() >= 2 && record[0] && usersGrid.getStore().getCount() == 0){

        	Ext.Msg.show({
			     title:'Delete?',
			     msg: 'Are you sure you want to delete?',
			     buttons: Ext.Msg.YESNO,
			     icon: Ext.Msg.QUESTION,
			     fn: function (buttonId){
			     	if (buttonId == 'yes'){
			     		Ext.Ajax.request({
                            url: 'php/security/deleteGroup.php',
                            params: {
                                id: record[0].get('id')
                            },
                            success: function(conn, response, options, eOpts) {

                                var result = InventoryApp.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                    Packt.util.Alert.msg('Success!', 'Group deleted.');
                                    store.load();
                                    form.reset();
                                    formPanel.setDisabled(true);
                                    usersGrid.getStore().removeAll();
                                    tree.getStore().load();
                                  
                                } else {
                                	InventoryApp.util.Util.showErrorMsg(conn.responseText);
                                }
                            },
                            failure: function(conn, response, options, eOpts) {

                            	InventoryApp.util.Util.showErrorMsg(conn.responseText);
                            }
                        });
			     	}
			     }
			});
        } else if (store.getCount() == 1) {
        	Ext.Msg.show({
                title:'Warning',
                msg: 'You cannot delete all the groups from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        } else if (usersGrid.getStore().getCount() > 0){
            Ext.Msg.show({
                title:'Warning',
                msg: 'You cannot delete groups that have users in it.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    resetForm: function(){

        var form = this.getGroupsEdit();

        this.getGroupPermissions().getStore().load();

       // form.down('userslist').getStore().removeAll();

        //form.disable();

       // form.getForm().reset();
    },

    onButtonClickCancel: function(button, e, options) {
        this.resetForm();
    },

    onButtonClickSave: function (button, e, options) {

        var store = this.getGroupsList().getStore(),
        grid=  this.getGroupsList(),
        recordG = grid.getSelectionModel().getSelection(),
        id=recordG[0].get('id'),
        name=recordG[0].get('name'),
        formPanel = button.up('form'),
        records = formPanel.down('treepanel').getView().getChecked(),
        names = [];
        
        Ext.Array.each(records, function(rec){
            names.push(rec.get('id'));
        });
       console.log('names.length=== '+names.length);
        if (formPanel.getForm().isValid()){
        	if (names.length == 0){
	        	Ext.Msg.show({
				    title:'Warning',
				    msg: 'You need to select a least one permission for this group.',
				    buttons: Ext.Msg.OK,
				    icon: Ext.Msg.WARNING
				});
	        } else {

	        	var values = formPanel.getValues();

                Ext.get(formPanel.getEl()).mask("Saving... Please wait...", 'loading');

	        	Ext.Ajax.request({
	                url: 'user/saveGroup.action',
	                params: {
	                    id:id, //values.id,
	                    name: name,//values.name,
	                    permissions:names.toString()
	                },
	                success: function(conn, response, options, eOpts) {
	                    
	                    Ext.get(formPanel.getEl()).unmask();

	                    var result = InventoryApp.util.Util.decodeJSON(conn.responseText);

	                    if (result.success) {

	                    	InventoryApp.util.Alert.msg('Success!', 'Group saved.');
                            store.load();
                            formPanel.setDisabled(true);
	                      
	                    } else {
	                    	InventoryApp.util.Util.showErrorMsg(conn.responseText);
	                    }
	                },
	                failure: function(conn, response, options, eOpts) {

	                    Ext.get(formPanel.getEl()).unmask();
	                
	                    InventoryApp.util.Util.showErrorMsg(conn.responseText);
	                }
	            });
	        }
        }
    },
    /**
     * Cancels the edit of a record
     * @param {Ext.grid.plugin.Editing} editor
     * @param {Object} context
     * @param {Object} eOpts
     * @param {}
     * @param {}
     * @param {}
     */
    cancel: function( editor, context, eOpts ) {
    	// if the record is a phantom, remove from store and grid
    	if( context.record.phantom ) {
    		context.store.remove( context.record );
    	}
    },
    /**
     * Begins edit of selected record
     * @param {Ext.data.Model[]} records
     * @param {Number} index
     * @param {Object} node
     * @param {Object} eOpts
     */
    edit: function( records, index, node, eOpts ) {
    	var me = this,
    		grid = me.getGroupsList(),
    		plugin = grid.editingPlugin;
    	// start edit of row
    	plugin.startEdit( records[ 0 ], 0 );
    },
});