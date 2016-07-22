/**
 * Model representing a SystemArea object
 */

Ext.define('InventoryApp.model.systemAreas.SystemArea',{
	extend:'InventoryApp.model.Base',
	idProperty: 'ctadId',
	fields:[
	        {
	        	//Id field
	        	 name: 'ctadId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'ctadCtaCode',
	             type: 'string'
	        },
	        {
	        	 name: 'ctadColumn',
	             type: 'string'
	        },
	        {
	        	 name: 'ctadColumnDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'ctadIsvisible',
	             type: 'string'
	        },
	        {
	        	name:'_ctadIsvisible',
	        	type:'boolean'
	        }
	        ],
});