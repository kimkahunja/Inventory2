Ext.define('InventoryApp.view.security.PasswordManagement',{
	extend: 'Ext.window.Window',
	alias:'widget.security.passwordmanagement',
	requires: [	           
	       ],
   autoShow: true,
   //height: 300,
   width: 360,
   layout: {
       type: 'fit'
   },
   iconCls: 'key',
   title: 'Password Management',
   closeAction: 'hide',
   closable: false,        
   items: [
           {
               xtype: 'form',
               id:"passwordManagerForm",
               frame: false,
               bodyPadding: 15,
               defaults: {
                   xtype: 'textfield',
                   anchor: '100%',
                   labelWidth: 100,
                   allowBlank: false,
                   vtype: 'alphanum',
                   minLength: 3,
                   msgTarget: 'under'
               },
               items: [
                   
                   {
	                    inputType: 'password',
	                    name: 'oldPassword',
	                    fieldLabel: 'Old Password',
	                    enableKeyEvents: true,
	                    id: 'oldPassword',
	                    maxLength: 15,
	                    //value: '123456',
	                    //vtype: 'customPass',
	                   // msgTarget: 'side'
	                },
	                {
	                    inputType: 'password',
	                    name: 'newPassword',
	                    fieldLabel: 'New Password',
	                    enableKeyEvents: true,
	                    id: 'newPassword',
	                    maxLength: 15,
	                    //value: '123456',
	                    //vtype: 'customPass',
	                   // msgTarget: 'side'
	                },
	                {
	                    inputType: 'password',
	                    name: 'confirmPassword',
	                    fieldLabel: 'Confirm Password',
	                    enableKeyEvents: true,
	                    id: 'confirmPassword',
	                    maxLength: 15,
	                    validationEvent:"blur",
	                    //msgTarget: 'side',
	                    validator: function() {	                        
	                        // Save the fields we are going to insert values into
	                        var pass1 =Ext.ComponentQuery.query("textfield[name='newPassword']")[0].getValue();
	                        var pass2  =Ext.ComponentQuery.query("textfield[name='confirmPassword']")[0].getValue();
	                        //console.log("pass 1 = " + pass1 + "--pass 2 = " + pass2);

	                         if (pass1 == pass2)
	                             return true;

	                         else 
	                             return "Passwords do not match!";
	                    	}
	                }
               ],
               dockedItems: [
                   {
                       xtype: 'toolbar',
                       dock: 'bottom',
                       items: [                        
                           {
                               xtype: 'tbfill'
                           },
                           {
                               xtype: 'button',
                               itemId: 'pwdCancel',
                               iconCls: 'cancel',
                               text: 'Cancel'
                           },
                           {
                               xtype: 'button',
                               itemId: 'pwdSubmit',
                               formBind: true,
                               iconCls: 'key-go',
                               text: 'Submit'
                           }
                       ]
                   }
               ]
           }
       ]     
});