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
            	 		xtype: 'panel',
            	 		//layout: 'vbox',
            	 		items:[	
							{
								xtype: 'panel',
								layout:'fit',  
							   // frame:true,
							  //  border:1,
							    height:320,
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
                    
                    dockedItems: [
                                  {
                                      xtype: 'toolbar',
                                      dock: 'top',
                                      ui: 'footer',
                                      items: [
                                          {
                                              xtype: 'button',
                                              itemId: 'printProduct',
                                              iconCls: 'icon_report',
                                              text: 'Print Report'
                                          }
                                      ]
                                  },
                                  
                              ]
    		                   
    	 });
         me.callParent( arguments );
    }
});