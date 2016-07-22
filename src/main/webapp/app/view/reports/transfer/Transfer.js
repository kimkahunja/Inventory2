Ext.define('InventoryApp.view.reports.transfer.Transfer',{
	extend: 'Ext.form.Panel',
    alias: 'widget.reports.transfer.transfer',
    bodyPadding: 5,
    requires:['InventoryApp.view.reports.transfer.TransferParameters',
              'InventoryApp.view.reports.transfer.TransferMainView',
              'InventoryApp.view.reports.transfer.Transfer_GTNSF'
              ],
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
							        	  xtype:'reports.transfer.transferparameters'
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
										 xtype:'reports.transfer.transfermainview'
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