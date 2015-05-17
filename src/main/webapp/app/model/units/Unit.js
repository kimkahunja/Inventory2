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
	        	 name: 'untDesc',
	             type: 'string'
	        },
	        {	        	
	        	 name: 'untStdPrecision',
	             type: 'int'	            
	        }
	        ],
});