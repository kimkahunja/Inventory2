Ext.define('InventoryApp.view.security.PasswordManagement',{
	extend: 'Ext.form.Panel',
	alias:'widget.security.passwordmanagement',
	requires: [	           
	       ], 
  bodyPadding: 5,       
   initComponent: function(){
	   var me = this;  
	   Ext.applyIf(me,{
  		 fieldDefaults: {
               labelAlign: 'right',
               labelWidth: 100,
               flex: 1,
               margins: 5,
               //defaultType: 'textfield',
           },
	   items: [
	          
	           {
	        	   xtype: 'panel',
	        	   width: 450,
	        	   bodyPadding: 10, 
	        	   items:[
							{
								xtype:'textfield',
								inputType: 'password',
							    name: 'oldPassword',
							    fieldLabel: 'Old Password',
							    enableKeyEvents: true,
							    id: 'oldPassword',
							    maxLength: 15,
							    //value: '123456',
							    //vtype: 'customPass',
							    msgTarget: 'side'
							},
							{
								xtype:'textfield',
							    inputType: 'password',
							    name: 'newPassword',
							    fieldLabel: 'New Password',
							    enableKeyEvents: true,
							    id: 'newPassword',
							    maxLength: 15,
							    //value: '123456',
							    //vtype: 'customPass',
							    msgTarget: 'side'
							},
							{
								xtype:'textfield',
							    inputType: 'password',
							    name: 'confirmPassword',
							    fieldLabel: 'Confirm Password',
							    enableKeyEvents: true,
							    id: 'confirmPassword',
							    maxLength: 15,
							    validationEvent:"blur",
							    msgTarget: 'side',
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
							},
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
       me.callParent( arguments );
   }     
});