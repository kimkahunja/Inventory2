/**
 * Model representing a Categories object
 */

Ext.define('InventoryApp.model.categories.Category',{
	extend:'InventoryApp.model.Base',
	idProperty: 'catCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'catCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'catShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'catDescription',
	             type: 'string'
	        }
	        ],
});