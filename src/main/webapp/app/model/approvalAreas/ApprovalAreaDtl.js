/**
 * Model representing a ApprovalAreaDtl object
 */

Ext.define('InventoryApp.model.approvalAreas.ApprovalAreaDtl',{
	extend:'InventoryApp.model.approvalAreas.ApprovalArea',
	idProperty: 'appvdCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'appvdCode',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'appvdAppvCode',
	        	type: 'int'
	        },
	        {
	        	 name: 'appvdUsrCode',
	             type: 'int'
	        },
	        {
	        	 name: 'appvdWef',
	             type: 'date',
	             dateFormat:'d/m/Y'
	        },
	        {
	        	 name: 'appvdWet',
	             type: 'date',
	             dateFormat:'d/m/Y'
	        },
	        {
	        	name:'_eligible',
	        	type:'boolean'
	        }
	        ],
});