Ext.define('InventoryApp.Utilities', { 
    statics: {
    	onSaveFailure: function(err){
            //Alert the user about communication error
            Ext.MessageBox.alert('Status', 'Error occured during update');
        },
        onSaveSuccess: function(conn, response, options, eOpts){
        	var result = Ext.JSON.decode(conn.responseText, true);              
            if ( ! result)
            {
               
               result =
               {
               }
               ;
               result.success = false;
               result.messages.message = conn.responseText;
            }
            if (result.success)
            {
            	Ext.Msg.show(
                        {                    
                           title : 'Success!',
                           msg : result.messages.message,
                           icon : Ext.Msg.INFO,
                           buttons : Ext.Msg.OK
                        }
                        );                  
                                
            }
            else
            {
               Ext.Msg.show(
               {                    
                  title : 'Fail!',
                  msg : result.messages.message,
                  icon : Ext.Msg.ERROR,
                  buttons : Ext.Msg.OK
               }
               );
            }
        },
    }
});