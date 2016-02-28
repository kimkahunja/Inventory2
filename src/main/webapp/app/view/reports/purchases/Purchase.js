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
            	 		xtype: 'panel',
            	 		//layout: 'vbox',
            	 		items:[	
							{
								xtype: 'panel',
							    //layout: 'vbox',  
							    frame:true,
							    border:1,							   
							    minWidth:500,
							    minHeight:100,
							    items:[
							          {
							        	  xtype:'reports.purchases.purchaseparameters'
							    	  }
							
							          ],
								
							},
							{
								xtype: 'panel',
								layout:'fit',
					        	//maxHeight:200,							        	  
					        	height:320,
								 flex:1,
					        	//scrollable:true,
								items:[
										{
										 xtype:'reports.purchases.purchasemainview'
										}
								       ]
							}
							
           					
           					
                              ], 
             		}
                    ],
    		                   
    	 });
         me.callParent( arguments );
    }
});