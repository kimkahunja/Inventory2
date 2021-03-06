Ext.define('InventoryApp.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    requires: [       
    ],

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: 'Login',
    closeAction: 'hide',
    closable: false,

    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60,
                allowBlank: false,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'under'
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    maxLength: 25,
                    listeners:{
                    	change:function(field,newValue,oldValue,eOpts ){
                    		field.setValue(newValue.toUpperCase());
                    	}
                    }
                    //value: 'kimkahunja'
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'Password',
                    enableKeyEvents: true,
                    id: 'password',
                    maxLength: 15,
                    //value: '123456',
                    //vtype: 'customPass',
                    msgTarget: 'side'
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
                            itemId: 'cancel',
                            iconCls: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
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