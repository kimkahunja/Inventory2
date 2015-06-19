/**
 * Model representing a LocationBin object
 */

Ext.define('InventoryApp.model.location.Bin',{
	extend:'InventoryApp.model.Base',
	idProperty: 'lbnCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'slocCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	//Fk field
	        	 name: 'slocLocCode',
	             type: 'int',
	        },
	        {
	        	 name: 'slocShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'slocDescription',
	             type: 'string'
	        }
	        ],
});