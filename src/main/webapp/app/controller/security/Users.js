Ext.define('InventoryApp.controller.security.Users', {
    extend: 'Ext.app.Controller',

    requires: [
        'InventoryApp.util.Util',
        'InventoryApp.store.security.Users'
    ],

    views: [
        'security.Users',
        'security.Profile'
    ],

    stores: [
        'security.Groups',
        'security.Users'
    ],

    refs: [
        {
            ref: 'usersList',
            selector: 'userslist'
        },
        {
            ref: 'userPicture',
            selector: 'profile image'
        }
    ],

    init: function(application) {

        this.control({
            "userslist": {
                render: this.onRender,
                itemdblclick: this.onButtonClickEdit,
            },
            "users button#add": {
                click: this.onButtonClickAdd
            },
            "users button#edit": {
                click: this.onButtonClickEdit
            },
            "users button#delete": {
                click: this.onButtonClickDelete
            },
            "profile button#save": {
                click: this.onButtonClickSave
            },
            "profile button#cancel": {
                click: this.onButtonClickCancel
            },
            "profile filefield": {
                change: this.onFilefieldChange
            }
        });

        if (!Ext.getStore('groups')) {
            Ext.create('InventoryApp.store.security.Groups');
        }    
    },

    onRender: function(component, options) {

        component.getStore().load();
    },

    onButtonClickAdd: function (button, e, options) {

        var win = Ext.create('InventoryApp.view.security.Profile');
        win.setTitle('Add new User');
        win.show();
    },

    onButtonClickEdit: function (button, e, options) {

        var grid = this.getUsersList(),
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('InventoryApp.view.security.Profile');

            editWindow.down('form').loadRecord(record[0]);

            if (record[0].get('picture')) {

                var img = editWindow.down('image');
                img.setSrc('resources/profileImages/' + record[0].get('picture'));
            }

            editWindow.setTitle(record[0].get('name'));
            editWindow.show();
        }
    },

    onButtonClickDelete: function (button, e, options) {
        var grid = this.getUsersList(),
        record = grid.getSelectionModel().getSelection(), 
        store = grid.getStore();

        if (store.getCount() >= 2 && record[0]){

            Ext.Msg.show({
                 title:'Deactivate?',
                 msg: 'Are you sure you want to deactivate?',
                 buttons: Ext.Msg.YESNO,
                 icon: Ext.Msg.QUESTION,
                 fn: function (buttonId){
                    if (buttonId == 'yes'){
                        Ext.Ajax.request({
                            url: 'user/deactivateUser.action',
                            params: {
                                id: record[0].get('id')
                            },
                            success: function(conn, response, options, eOpts) {

                                var result = InventoryApp.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                	InventoryApp.util.Alert.msg('Success!', 'User deactivated.');
                                    store.load();
                                  
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
                msg: 'You cannot deactivate all the users from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onButtonClickSave: function(button, e, options) {
        
        var win = button.up('window'),
        formPanel = win.down('form'),
        store = this.getUsersList().getStore();

        if (formPanel.getForm().isValid()) {

        	 Ext.Ajax.request({
                url: 'user/saveUser.action',
                params:{
                		 pass:InventoryApp.util.MD5.encode('123456'),
                		 data:Ext.encode(formPanel.getForm().getValues())
                		},
                success: function(conn, response, options, eOpts){

                	var result = Ext.JSON.decode(conn.responseText, true);   

                  //  console.log(result);

                    if (result.success) {

                    	InventoryApp.util.Alert.msg('Success!', 'User saved.');
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

    onButtonClickCancel: function(button, e, options) {
        button.up('window').close();
    },

    onFilefieldChange: function(filefield, value, options) {
        var file = filefield.fileInputEl.dom.files[0];

        var picture = this.getUserPicture();

        /*
            If the file is an image and the web browser supports FileReader, 
            present a preview in the image component 
        */
        if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
            var reader = new FileReader();
            reader.onload = function(e){
                picture.setSrc(e.target.result);
            };
            reader.readAsDataURL(file); 
        } else if (!(/image/i).test(file.type)){
            Ext.Msg.alert('Warning', 'You can only upload image files!');
            filefield.reset();
        }   
    }
});