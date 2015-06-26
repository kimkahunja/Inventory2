/**
 * Model representing a Unit object
 */

Ext.define('InventoryApp.model.units.Unit',{
	extend:'InventoryApp.model.Base',
	idProperty: 'untCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'untCode',
	             type: 'int',
	             useNull : true
	        },
	        
	        {
	        	 name: 'untShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'untDescription',
	             type: 'string'
	        },
	        {	        	
	        	 name: 'untPrecision',
	             type: 'float'	            
	        }
	        ],
});