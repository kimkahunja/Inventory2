Ext.define('InventoryApp.controller.SystemAreas', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
    stores: [    	
    	'systemAreas.SystemAreas'    	
    ],
    views: [
    	
    ],
    refs:[
			
         ],
    init: function() {    	
    	this.listen({
            controller: {},
            component: {
            	'button#adjustmentRemove':{
            		click:this.removeAdjustment
            	},
            	'button#adjustmentSave':{
            		click:this.processAdjustment
            	},
            	
            },
            global: {},
            store: {},             
        });
    },   
    
});