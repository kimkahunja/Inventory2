Ext.define('InventoryApp.view.location.AlterLocation', {
    extend: 'Ext.window.Window',
    alias: 'widget.location.alterlocation',
    requires:['InventoryApp.view.location.SwitchLocationList'
              ],
    height: 100,
    width: 400,
    modal: true,
    requires: ['InventoryApp.util.Util'
               ],
    layout:'fit',    
    title: 'Switch Locations',
    initComponent: function() {
    	var me = this;    	
    	Ext.applyIf(me,{
    		
    		items: [
    		        {
    		         xtype:'location.switchlocationlist'  
    		        }
    		    ]
    	});
    	 me.callParent( arguments );
    }
    
});