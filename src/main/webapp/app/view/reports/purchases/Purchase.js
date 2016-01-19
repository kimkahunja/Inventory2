Ext.define('InventoryApp.view.reports.purchases.Purchase',{
	extend: 'Ext.form.Panel',
    alias: 'widget.reports.purchases.purchase',
    bodyPadding: 5,
    initComponent: function() {
    	  var me = this;    	  
    	 Ext.applyIf(me,{
    		 fieldDefaults: {
                 labelAlign: 'right',
                 labelWidth: 90,
                 flex: 1,
                 margins: 5
             },
             items:[{
            	 		xtype: 'container',
            	 		//layout: 'vbox',
            	 		items:[	
							{
								xtype: 'container',
							    //layout: 'vbox',  
							    frame:true,
							    border:1,
							    flex:1,
							    items:[
							          {
							        	  xtype:'reports.purchases.purchaseparameters'
							    	  }
							
							          ],
								
							},
           					{
								 xtype:'reports.purchases.purchasemainview'
           					}
           					
                              ], 
             		}
                    ],
    		                   
    	 });
         me.callParent( arguments );
    }
});