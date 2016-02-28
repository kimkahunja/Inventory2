Ext.define('InventoryApp.controller.security.PasswordManagement', {
    extend: 'Ext.app.Controller',

    requires: [
        'InventoryApp.util.Util'
    ],
    views: [
            'security.PasswordManagement'           
        ],
   refs:[
			{
			    ref: 'PassManagementForm',
			    selector: '[xtype=security.passwordmanagement]'
			},
         ],     
        init: function() {
            this.listen({
                controller: {},
                component: {
                	'button#pwdSubmit':{
                		click:this.changePassword
                	},
                	'window[xtype=security.passwordmanagement]':{
                		close:this.close
                	}
                },
                global: {},
                store: {},
               
            });
        }, 
 changePassword:function( button, e, eOpts ){
	 var formPanel = this.getPassManagementForm(),	 
	 userName = InventoryApp.Utilities.userName,
     pass = Ext.ComponentQuery.query("textfield[name='confirmPassword']")[0].getValue(),
     pass1 = Ext.ComponentQuery.query("textfield[name='newPassword']")[0].getValue(),     
     oldPass = Ext.ComponentQuery.query("textfield[name='oldPassword']")[0].getValue();
	 //console.log('userName=='+userName+' pass== '+pass+' oldPass=== '+oldPass);
	 if(oldPass.trim().length==0){
			Ext.Msg.show(
                 {                    
                    title : 'Validation',
                    msg : 'Old Password is required...',
                    icon : Ext.Msg.INFO,
                    buttons : Ext.Msg.OK
                 }
                 );
 		return;
		}else if(pass.trim().length==0||pass1.trim().length==0){
			Ext.Msg.show(
	                 {                    
	                    title : 'Validation',
	                    msg : 'New Password is required...',
	                    icon : Ext.Msg.INFO,
	                    buttons : Ext.Msg.OK
	                 }
	                 );
	 		return;
		}
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
                	 formPanel.getForm().reset();
                	 //window.location.reload();	
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
 },
 close:function close( panel, eOpts ){
	 console.log("Close button clicked.");
	 panel.removeAll();
	 //panel.close();
 }
});