Ext.define('InventoryApp.model.location.UserLocation',{
	extend:'InventoryApp.model.Base',
	idProperty: 'uslocCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'uslocCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'uslocLocCode',
	        	type: 'int'
	        },
	        {
	        	 name: 'uslocUsrCode',
	             type: 'int'
	        },
	        {
	        	name:'locShtDesc',
	        	type:'string'
	        },
	        {
	        	name:'locDescription',
	        	type:'string'
	        },
	        {
	        	name:'_eligible',
	        	type:'boolean'
	        }
	        ],
});