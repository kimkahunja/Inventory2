Ext.define('InventoryApp.view.reports.products.ProductParameters',{
	extend: 'Ext.form.Panel',
    alias: 'widget.reports.products.productparameters',
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
							        	  xtype:'reports.products.list'
							    	  }
							
							          ],
								
							},
           					
           					
                              ], 
             		}
                    ],
    		                   
    	 });
         me.callParent( arguments );
    }
});