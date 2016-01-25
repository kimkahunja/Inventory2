Ext.define('InventoryApp.view.payment.PaymentLanding', {
	extend: 'Ext.form.Panel',
	alias: 'widget.payment.paymentlanding',
	//bodyPadding: 5,
	layout: 'hbox',
	 initComponent: function() {
   	  var me = this;    	  
   	 Ext.applyIf(me,{  
   		
            items:[{
           	 		xtype: 'container',          	 		
           	 	
           	 		items:[	
							/*{
								xtype: 'container',
							    layout: 'hbox',  
							    frame:true,
							    border:1,
							    flex:.2,
							    items:[
							          {
							        	  xtype:'payment.payment',
							          }
							
							          ],
								
							},*/
							
				            {
					        	  xtype:'payment.payment',
					          }
          					
                             ], 
            		}
                   ],
   		                   
   	 });
        me.callParent( arguments );
   }
   	           
});