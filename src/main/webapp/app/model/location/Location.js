/**
 * Model representing a Location object
 */

Ext.define('InventoryApp.model.location.Location',{
	extend:'InventoryApp.model.Base',
	idProperty: 'locCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'locCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'locShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'locDescription',
	             type: 'string'
	        }
	        ],
});