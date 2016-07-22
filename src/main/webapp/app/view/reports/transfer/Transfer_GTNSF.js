Ext.define('InventoryApp.view.reports.transfer.Transfer_GTNSF',{
	extend: 'Ext.form.Panel',
    alias: 'widget.reports.transfer.transfergtnsf',
    bodyPadding: 5,
    requires:['InventoryApp.view.reports.transfer.TransferList',
              'InventoryApp.view.reports.transfer.TransferDList'
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
            	 		xtype: 'container',
            	 		//layout: 'vbox',
            	 		items:[						
           					{
           						
           					    xtype: 'container',
           					    layout: 'hbox',					    
           					    items: [			          
           								{
           									xtype: 'panel',								   
           								    flex:1,
           								    collapsible: true,
           								    collapseDirection:'left',
           								    //collapsed:true,
           								     height:300,
     								         maxHeight:300,
           								     title:'Transfers',
           								    layout:'fit',
           								    items:[
           								          {
           								        	  xtype:'reports.transfer.transferlist',
           								        	  	  
           								    	  }
           								
           								          ],
           									
           								},	  
           					         
           					        {
           					        	xtype: 'container',
           							    //layout: 'vbox',  
           							    frame:true,
           							    border:1,
           							    flex:2, 
           							    //collapsible: true,
           							    
           							    style: {
           							        borderColor: '#E6E6E6',
           							        borderStyle: 'solid'
           							    },
           							    items:[							           
           							          {
           							        	  xtype: 'container',
           							        	  layout:'fit',
           							        	  maxHeight:300,
           							        	  title:'Transfer Details',
           							        	  items:[
           													{
           														xtype:'reports.transfer.transferdlist' , 
           													  },
           							        	         ],
           							          },
           							          ],
           					        },					      
           					    ]
           					},
           					
                              ], 
             		}
                    ],
    		                   
    	 });
         me.callParent( arguments );
    }
});