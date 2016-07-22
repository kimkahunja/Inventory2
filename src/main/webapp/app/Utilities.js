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
        onLoadResponse: function(records, operation, success){          
            if(success == true){
                if(records.length == 0){
                // Ext.Msg.alert('Records', 'No Records Fetched...');
                }
            }
            if(success == false){
                try{
                     //Ext.Msg.alert('Error', operation.getError()); // way more elegant than ussing rawData etc ...
                	Ext.Msg.alert('Error', 'Communication Error Has occurred...');
                }catch(e){
                        Ext.Msg.alert('Error', 'Error  in Loading Data...');
                }
            }
        },
        convertDate: function(date){
            return Ext.Date.format(date, 'd/m/Y');
        },
        isEligible:function(userName,area){
        	 var rtnVal = 'N';
     	   Ext.Ajax.request({
                url: 'user/isEligible.action',
             params: {                   
            	 userName:userName,
            	 area:area
             },  
             async: false,
             scope:this,
             //method to call when the request is successful
             success:function(conn, response, options, eOpts){
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
                  	if(result.data.count==0){
                  		Ext.Msg.show(
                                  {                    
                                     title : 'No Record!',
                                     msg : 'User Eligibility cannot be determined...',
                                     icon : Ext.Msg.INFO,
                                     buttons : Ext.Msg.OK
                                  }
                                  );
                  		return;
                  	}else
                  		{
                  		 var me = this,                  		  
                  		  mydata=result.data.data;
                  		 
                  		  rtnVal=mydata;           		
                  		 
                  		}
                  	                
                                      
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
                     return;
                  }
             },
             //method to call when the request is a failure
             failure: InventoryApp.Utilities.onSaveFailure
         });
     	  return rtnVal;	 
        },
        accountType:'C',
        inv_id:null,
        locationId:null,
        locationDescription:null,
        userName:null,
        lastLogin:null,
        pur_id:null,
        pdtCode:null,
        //determine whether to show date range(reporting)
        hideDateRange:false,
      //determine whether to show Status attribut(reporting)
        hideStatus:true,
      //determine whether to show Supplier attribute(reporting)
        hideSupplier:true,
      //determine whether to show Product attribute(reporting)
        hideProduct:true
        
    }
});