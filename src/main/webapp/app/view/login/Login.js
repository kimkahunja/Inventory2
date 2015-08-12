Ext.define('InventoryApp.view.login.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login.login',
    bodyPadding: 5,
    initComponent: function() {
    	  var me = this;
    	  Ext.applyIf(me,{
    		  items: [{
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
    	       
    	        {
    	            xtype: 'label',
    	            hidden: true,
    	            anchor: '-5 -5',
    	            html: '<a href=\'/account/reset_request\'>Click here</a> if you have forgotten your password.',
    	            id: 'forgotPasswordLabel'
    	        },], 
    	  });
    	  me.callParent( arguments );
    }
    });