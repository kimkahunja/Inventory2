Ext.define('InventoryApp.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [
        'InventoryApp.util.MD5',
        'InventoryApp.util.Alert',
        'InventoryApp.view.MyViewport',
        'InventoryApp.util.Util',
        'InventoryApp.util.SessionMonitor',
        'InventoryApp.model.menu.Root',
        'InventoryApp.model.menu.Item'
    ],

    views: [
        'Login',
        'Header',
        'authentication.CapsLockTooltip'
    ],

    refs: [
        {
            ref: 'capslockTooltip',
            selector: 'capslocktooltip'
        }
    ],

    init: function(application) {
        this.control({
            "login form button#submit": {
                click: this.onButtonClickSubmit
            },
            "login form button#cancel": {
                click: this.onButtonClickCancel
            },
            "login form textfield": {
                specialkey: this.onTextfielSpecialKey
            },
            "login form textfield[name=password]": {
                keypress: this.onTextfielKeyPress
            },
            "appheader button#logout": {
                click: this.onButtonClickLogout
            },
            'toolbar[xtype=appheader]': {
            	 boxready:this.boxReady
            },
        });

        Ext.apply(Ext.form.field.VTypes, {
    //  vtype validation function
    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    customPassText: 'Not a valid password.  Length must be at least 6 characters and maximum of 20Password must contain one digit, one letter lowercase, one letter uppercase, onse special symbol @#$% and between 6 and 20 characters.',
});

    },

    onButtonClickSubmit: function(button, e, options) {
        var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();   

        if (formPanel.getForm().isValid()) {

            pass = InventoryApp.util.MD5.encode(pass); 
            
            Ext.get(login.getEl()).mask("Authenticating... Please wait...", 'loading');

            Ext.Ajax.request({
                url: 'login.action',
                params: {
                    user: user,
                    password: pass
                },
                success: function(conn, response, options, eOpts) {
                	
                    Ext.get(login.getEl()).unmask();
                    var result = Ext.JSON.decode(conn.responseText, true);
                   // var result = InventoryApp.util.Util.decodeJSON(conn.responseText);

                    if (result.success) {
                    	var mydata=result.data.data[0];	
                        //InventoryApp.util.Alert.msg('Success!', 'User Authenticated.');
                    	//InventoryApp.util.SessionMonitor.start();
                        InventoryApp.Utilities.locationId=mydata.location;
                        InventoryApp.Utilities.locationDescription=mydata._location;
                        InventoryApp.Utilities.userName=mydata.username;
                        InventoryApp.Utilities.userId=mydata.id;
                        InventoryApp.Utilities.lastLogin=new Date();
                       // console.log('mydata.username===== '+mydata.username);
                        //console.log('InventoryApp.Utilities.userName===== '+InventoryApp.Utilities.userName);
                        login.close();
                        Ext.create('InventoryApp.view.MyViewport');
                        	
                    } else {
                    	InventoryApp.util.Util.showErrorMsg(result.messages.message);
                    }
                },
                failure: function(conn, response, options, eOpts) {

                    Ext.get(login.getEl()).unmask();
                
                    InventoryApp.util.Util.showErrorMsg(conn.responseText);
                }
            });
        }    
    },    

    onButtonClickCancel: function(button, e, options) {
        button.up('form').getForm().reset();
    },

    onTextfielSpecialKey: function(field, e, options) {
        if (e.getKey() == e.ENTER){
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },

    onTextfielKeyPress: function(field, e, options) {
        var charCode = e.getCharCode(); 
        
        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(this.getCapslockTooltip() === undefined){
                Ext.widget('capslocktooltip');
            }

            this.getCapslockTooltip().show();

        } else {

            if(this.getCapslockTooltip() !== undefined){
                this.getCapslockTooltip().hide();
            }
        }
    },
    
    onButtonClickLogout: function(button, e, options) {

        Ext.Ajax.request({
            url: 'http://localhost/masteringextjs/php/logout.php',
            success: function(conn, response, options, eOpts){

                var result = InventoryApp.util.Util.decodeJSON(conn.responseText);

                if (result.success) {
                    
                    button.up('mainviewport').destroy();
                    window.location.reload();
                } else {

                	InventoryApp.util.Util.showErrorMsg(result.msg); 
                }
            },
            failure: function(conn, response, options, eOpts) {
                
            	InventoryApp.util.Util.showErrorMsg(conn.responseText);
            }
        });
    },
    boxReady:function( form, width, height, eOpts ){ 
		//console.log('boxReady === '+InventoryApp.Utilities.userName);
		Ext.ComponentQuery.query("displayfield[name='userName']")[0].setValue(InventoryApp.Utilities.userName);
		Ext.ComponentQuery.query("displayfield[name='locationDescription']")[0].setValue(InventoryApp.Utilities.locationDescription);
		Ext.ComponentQuery.query("displayfield[name='lastLogin']")[0].setValue(InventoryApp.Utilities.lastLogin);
	}
});
