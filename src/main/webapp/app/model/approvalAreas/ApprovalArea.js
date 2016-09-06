/**
 * Model representing a ApprovalArea object
 */

Ext.define('InventoryApp.model.approvalAreas.ApprovalArea',{
	extend:'InventoryApp.model.Base',
	idProperty: 'appvCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'appvCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'appvShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'appvDescription',
	             type: 'string'
	        }
	        ],
});