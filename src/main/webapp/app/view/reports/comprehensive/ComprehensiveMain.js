Ext.define('InventoryApp.view.reports.comprehensive.ComprehensiveMain',{
	extend: 'Ext.container.Container',
	alias:'widget.reports.comprehensive.comprehensivemain',
	requires: [
	           'InventoryApp.view.reports.comprehensive.Reports',
	           	'InventoryApp.view.reports.comprehensive.Parameters'
	       ],	
	//bodyPadding: 5,
	       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: true,
    	   },
    	   layout: {
               type: 'border',
               padding: '0 5 5 5' // pad the layout from the window edges
           },
    	   items:[					
					{
					    xtype: 'reports.comprehensive.reports',
					    width: 300,
					    collapsible: true,					    
					    collapseDirection:'left',
					    title:'Report Names',
					    region: 'west'					    
					},
					{
						
						xtype: 'panel',			        	  
			            region: 'center',
			            title:'Report Parameters',
			            items:[
			                   {
			                	   xtype: 'reports.comprehensive.parameters'
			                   }
			                   /*{
									xtype: 'panel',
									layout:'fit',
						        	//maxHeight:200,							        	  
						        	height:320,
									 flex:1,
						        	//scrollable:true,
									items:[
											{
											 xtype:'reports.comprehensive.reportviewer'
											}
									       ]
								}*/
			                   ]
			        },
					
                 ]                 
       });
       me.callParent( arguments );
   }        
});