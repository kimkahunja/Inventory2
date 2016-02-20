Ext.define('InventoryApp.controller.security.PasswordManagement', {
    extend: 'Ext.app.Controller',

    requires: [
        'InventoryApp.util.Util'
    ],
    views: [
            'security.PasswordManagement'           
        ],
        init: function() {
            this.listen({
                controller: {},
                component: {
                	'button#pwdSubmit':{
                		click:this.changePassword
                	}
                },
                global: {},
                store: {},
               
            });
        }, 
 changePassword:function( button, e, eOpts ){
	 var formPanel = button.up('form'),
	 passwordManagement = button.up('security.passwordmanagement'),
	 userName = InventoryApp.Utilities.userName,
     pass = formPanel.down('textfield[name=confirmPassword]').getValue(),
     oldPass = formPanel.down('textfield[name=oldPassword]').getValue();;
	 if (formPanel.getForm().isValid()) {
		 pass = InventoryApp.util.MD5.encode(pass);
		 oldPass=InventoryApp.util.MD5.encode(oldPass);
         Ext.Ajax.request({
             url: 'user/updatePassword.action',
             params: {
                 userName: userName,
                 password: pass,
                 oldPassword:oldPass
             },
             success: function(conn, response, options, eOpts) {
                 var result = Ext.JSON.decode(conn.responseText, true);              

                 if (result.success) {
                	 InventoryApp.util.Alert.msg('Success!', 'Password updated successfully.');
                	 passwordManagement.close();                     
                     	
                 } else {
                 	InventoryApp.util.Util.showErrorMsg(result.messages.message);
                 }
             },
             failure: function(conn, response, options, eOpts) {

                 //Ext.get(login.getEl()).unmask();
             
                 InventoryApp.util.Util.showErrorMsg(conn.responseText);
             }
         });
	 }
 }
});