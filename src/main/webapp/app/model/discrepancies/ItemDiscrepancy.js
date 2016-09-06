/**
 * Model representing a Discrepancy object
 */

Ext.define('InventoryApp.model.discrepancies.ItemDiscrepancy',{
	extend:'InventoryApp.model.Base',
	idProperty: 'dscId',
	fields:[
	        {
	        	//Id field
	        	 name: 'dscId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'dscDate',
	        	 type: 'date',
		         dateFormat:'d/m/Y'
	        }
	        ],
});