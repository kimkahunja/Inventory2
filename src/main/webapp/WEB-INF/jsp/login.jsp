<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>   
    <title>InventoryApp</title> 
    <link rel="stylesheet" href="bootstrap.css">
            <link rel="stylesheet" href="resources/css/app.css">
            <link rel="stylesheet" href="resources/css/style.css"> 
            <link rel="stylesheet" type="text/css" href="resources/css/uxs.css" />
		   <link rel="stylesheet" type="text/css" href="resources/css/overrides.css" /> 
<style>
 .left{
 height:50px;
 margin-left:500px;
 margin-top:50px;
 color:blue;
 width:250px;
 border:solid  3px;
 border-color:red; 
 }
 .login_logo{
 height:70px;
 margin-left:500px;
 margin-top:5px;
 
 width:200px;
 background: #036C7C url('./views/WEB-INF/images/logo.png');
 border:solid  3px;
 border-color:red;
 }
 #logo_cmp {
    margin-left:10px;
	margin-top:5px;
    height: 50px;
    width: 100%;
	position:absolute;
    background:#23B8F0;
     
          }
.company{
    padding-top:10px;
    font-family: "Lucida Bright", Georgia, serif;
	font-size:25px;
	font-weight:bold;
    color:#fff;
    text-align:center;
          }
#system_info {
    margin-left:450px;
	margin-top:60px;
    position:absolute;
	padding:10px 10px 10px 10px;
    height: 250px;
    width: 500px;
    background: #F0F2F5;
     
        }   
#login_info {
    margin-left:450px;
	margin-top:310px;
	padding:10px 10px 10px 10px;
    position:absolute;
    height: 250px;
    width: 500px;
    background: #F0F2F5;
     
        }
 
 </style>		   
    <script src="ext/ext-all-debug.js"></script>
  <script type='text/javascript'>

Ext.onReady(function()
		{
			Ext.QuickTips.init();
			var login = new Ext.FormPanel({

				 xtype: 'form',
				 url:'j_spring_security_check',
				 labelWidth: 80,
				 //bodyStyle: "background-image:url(./ext/back.png)",	   	  
				  layout: 'absolute',
				  id: 'loginForm',
				  width:500,
				  height:190,
				  keys: [{ 
				      key: [Ext.EventObject.ENTER], handler: function(keyCode, event) {
				        var button = Ext.getCmp('btnlogin');
				        if (!login.getForm().isValid() || button.disabled) {
				          return;
				        }
				        button.handler.call( button, button.scope, Ext.EventObject);
				      }
				    },{
				      // ESC key cancels the edit.
				      key: [Ext.EventObject.ESC], handler: function(keyCode, event) {
				    	  login.getForm().reset();	      }
				    }],
				  items: [{
					  hidden: true,
					  contentEl: "hidden-csrf"
					  },
				          {
			            xtype:'label',
			            text: "Username:",                   
			            style: 'font-weight:bold;',                    
			            	x: 200,
			            	y: 20,
			            },{                	 
			        	 xtype:'textfield',  
			        	   allowBlank: false,
			        	   x: 200,
			        	   y: 40,
			        	   style: 'font-size: 20px',
			        	   autoHeight: true ,
						   id: 'j_username',
						   value:'kimkahunja'
			        	},
			        	{
			                xtype:'label',
			                text: "Password:",                   
			               style: 'font-weight:bold;',                    
			                	x: 200,
			                	y: 70,
			             },{                	 
			            	 xtype:'textfield',  
			            	
							  inputType: 'password',
			            	   allowBlank: false,
			            	   x: 200,
			            	   y: 100,
			            	   style: 'font-size: 20px',
			            	   autoHeight: true ,
								id: 'j_password',
								value:'1234567'
			            	},{
			            xtype: 'checkbox',
			            fieldLabel: '',
			            boxLabel: 'Keep me signed in on this computer. <b>Don\'t check this if you\'re on a public or shared computer.</b>',
			            hidden: true,
			            height: 60,
			            inputValue: 1,
			            id: '_spring_security_remember_me'
			        },
			        {
			            xtype: 'textfield',
			            fieldLabel: 'Label',
			            inputType: 'hidden',
			            value: 'json',
			            id: 'requestTransportType'
			        },
			       
			       /* {
						xtype : 'combo',
						id: 'companyId',
						width : 200,
						mode : 'local',
						valueField:'ID',
						displayField : 'DESC',
						store : 'dsCompany',
						triggerAction : 'all',
						hiddenName : 'companyId',			
					    allowBlank: true,
					    value:1,
					    hidden:true
					    
					},*/
			        {
			            xtype: 'label',
			            hidden: true,
			            anchor: '-5 -5',
			            html: '<a href=\'/account/reset_request\'>Click here</a> if you have forgotten your password.',
			            id: 'forgotPasswordLabel'
			        },{
						xtype: 'button',
			            id: 'btnlogin',
						text: 'Log In',
						width: 80,
						x: 320,
						y: 150,
			            formBind: true,
			            handler:
			            	
			            	function(){
			            login.getForm().submit({

			                method:'POST',
			                success:function(){
			              
			                        window.location = 'index.action';
			                                   
			            },

			            failure:function(form, action){
			            	 {
			            		 switch (action.failureType) {
			            		 case Ext.form.Action.CLIENT_INVALID: Ext.Msg.alert('Failure','Form fields may not be submitted with invalid         values');break;
			            		case Ext.form.Action.CONNECT_FAILURE:
			            		Ext.Msg.alert('Failure1','Please check the connections');
			            		break;
			            		case Ext.form.Action.SERVER_INVALID:
			            		Ext.Msg.alert('Failure2',action.result.errors.mainError);}
			            		 }
			               
			                login.getForm().reset();
			            }

			            });
			        }
			        }]           	

			          });

				  var picLogin = new Ext.FormPanel({
				   bodyStyle: 'padding:0px',
				    url:'j_spring_security_check',
				 labelWidth: 80,
				  //bodyStyle: "background-image:url(./ext/login/images/clogo.png)",	   	  
				  layout: 'absolute',
				  id: 'loginForm',
				  width:500, 
				  height:190,
				  keys: [{ 
				      key: [Ext.EventObject.ENTER], handler: function(keyCode, event) {
				        var button = Ext.getCmp('btnlogin');
				        if (!login.getForm().isValid() || button.disabled) {
				          return;
				        }
				        button.handler.call( button, button.scope, Ext.EventObject);
				      }
				    },{
				      // ESC key cancels the edit.
				      key: [Ext.EventObject.ESC], handler: function(keyCode, event) {
				    	  login.getForm().reset();	      }
				    }],
				  items: [{
					  hidden: true,
					  contentEl: "hidden-csrf"
					  },{
			            xtype:'label',
			            text: "Username:",                   
			            style: 'font-weight:bold;',                    
			            	x: 200,
			            	y: 20,
			            },{                	 
			        	 xtype:'textfield',  
			        	   allowBlank: false,
			        	   x: 200,
			        	   y: 40,
			        	   style: 'font-size: 20px',
			        	   autoHeight: true ,
						   id: 'j_username',
						   value:'GATHERU1'
			        	},
			        	{
			                xtype:'label',
			                text: "Password:",                   
			               style: 'font-weight:bold;',                    
			                	x: 200,
			                	y: 70,
			             },{                	 
			            	 xtype:'textfield',  
			            	
							  inputType: 'password',
			            	   allowBlank: false,
			            	   x: 200,
			            	   y: 100,
			            	   style: 'font-size: 20px',
			            	   autoHeight: true ,
								id: 'j_password',
								value:'1234567'
			            	},{
			            xtype: 'checkbox',
			            fieldLabel: '',
			            boxLabel: 'Keep me signed in on this computer. <b>Don\'t check this if you\'re on a public or shared computer.</b>',
			            hidden: true,
			            height: 60,
			            inputValue: 1,
			            id: '_spring_security_remember_me'
			        },
			        {
			            xtype: 'textfield',
			            fieldLabel: 'Label',
			            inputType: 'hidden',
			            value: 'json',
			            id: 'requestTransportType'
			        },
			       
			       /* {
						xtype : 'combo',
						id: 'companyId',
						width : 200,
						mode : 'local',
						valueField:'ID',
						displayField : 'DESC',
						store : 'dsCompany',
						triggerAction : 'all',
						hiddenName : 'companyId',			
					    allowBlank: true,
					    value:1,
					    hidden:true
					    
					},*/
			        {
			            xtype: 'label',
			            hidden: true,
			            anchor: '-5 -5',
			            html: '<a href=\'/account/reset_request\'>Click here</a> if you have forgotten your password.',
			            id: 'forgotPasswordLabel'
			        },{
						xtype: 'button',
			            id: 'btnlogin',
						text: 'Log In',
						width: 80,
						x: 320,
						y: 150,
			            formBind: true,
			            handler:
			            	
			            	function(){
			            picLogin.getForm().submit({

			                method:'POST',
			                success:function(){
			              
			                        window.location = 'index.action';
			                                   
			            },

			            failure:function(form, action){
			            	 {
			            		 switch (action.failureType) {
			            		 case Ext.form.Action.CLIENT_INVALID: Ext.Msg.alert('Failure','Form fields may not be submitted with invalid         values');break;
			            		case Ext.form.Action.CONNECT_FAILURE:
			            		Ext.Msg.alert('Failure','Please check the connections');
			            		break;
			            		case Ext.form.Action.SERVER_INVALID:
			            		Ext.Msg.alert('Failure',action.result.errors.mainError);}
			            		 }
			               
			                picLogin.getForm().reset();
			            }

			            });
			        }
			        }]  
			    });			
			    var win = new Ext.Window({
						  layout:'auto',
						  closable: false,
						  draggable: false,
						  resizable: false,
						  width: 500,
						  autoHeight:true,
						  plain: true,
						  border: false,
						  items: [picLogin],
						  bbar: [{
						    xtype: 'tbtext',
						    text: ' ©Nairobi Javasoft'
						  }]
						  
						});

				 var winLogin =new Ext.FormPanel({
						layout:'fit',
						id:'winLogin',
						closable: false,
						  draggable: false,
						  resizable: false,
						width:500,
						height:250,
						border:false,
						title:'Please Login Here',
						//plain:true,
						bbar: [{
						    xtype: 'tbtext',
						    text: ' ©Nairobi Javasoft'
						  }],
						frame:true,
						items:[login]
						
						});		
						
				 //winLogin.render(document.body);			
				//win.show();
			 winLogin.render('login_info');
			   

			});
</script>        
</head>
<body>

	<div id="login_info"></div>
	<div id="hidden-csrf" class="x-hidden">
	{% csrf_token %}
	</div>
</body>
   

</html>
