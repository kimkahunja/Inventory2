Ext.define('InventoryApp.view.reports.purchases.Purchase_GPur',{
	extend: 'Ext.form.Panel',
    alias: 'widget.reports.purchases.purchasegpur',
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
           								     title:'Purchases',
           								    layout:'fit',
           								    items:[
           								          {
           								        	  xtype:'reports.purchases.purchaselist',
           								        	  	  
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
           							        	  title:'Purchase Details',
           							        	  items:[
           													{
           														xtype:'reports.purchases.purchasedtlslist' , 
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