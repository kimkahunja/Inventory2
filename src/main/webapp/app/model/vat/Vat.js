/**
 * Model representing a Vat object
 */

Ext.define('InventoryApp.model.vat.Vat',{
	extend:'InventoryApp.model.Base',
	idProperty: 'vatId',
	fields:[
	        {
	        	//Id field
	        	 name: 'vatId',
	             type: 'string'
	        },
	        
	        {
	        	 name: 'vatRate',
	             type: 'float'
	        },
	        {
	        	 name: 'vatDescription',
	             type: 'string'
	        },
	        ],
});