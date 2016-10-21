Ext.define('InventoryApp.view.reports.returns.ReturnMainContainer',{
	extend: 'Ext.container.Container',
	alias:'widget.reports.returns.returnmaincontainer',
	requires: [
	           'InventoryApp.view.reports.returns.ReturnParameters',
	           'InventoryApp.view.reports.returns.MainView'
	       ],	
	//bodyPadding: 5,
	       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: true,
    	   },    	   
    	   items:[					
					{
						xtype:'reports.returns.returnparameters',
					    flex:1	
					},
					{
						xtype:'reports.returns.mainview',
						flex:2
					}
					
                 ]                 
       });
       me.callParent( arguments );
   }        
});