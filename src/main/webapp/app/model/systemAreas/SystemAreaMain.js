/**
 * Model representing a SystemArea Main object
 */

Ext.define('InventoryApp.model.systemAreas.SystemAreaMain',{
	extend:'InventoryApp.model.Base',
	idProperty: 'ctaCode',
	fields:[
	        
	        {
	        	 name: 'ctaCode',
	             type: 'string'
	        },
	        {
	        	 name: 'ctaName',
	             type: 'string'
	        }
	        ],
});