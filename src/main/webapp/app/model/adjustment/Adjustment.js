/**
 * Model representing a Adjustment object
 */

Ext.define('InventoryApp.model.adjustment.Adjustment',{
	extend:'InventoryApp.model.Base',
	idProperty: 'madjId',
	fields:[
	        {
	        	//Id field
	        	 name: 'madjId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'madjRemarks',
	        	type: 'string',
	        },
	        
	        {
	        	 name: 'madjDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        }
	        ],
});