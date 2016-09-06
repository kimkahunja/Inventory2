/**
 * Model representing a Discrepancy Detail object
 */

Ext.define('InventoryApp.model.discrepancies.ItemDiscrepancyDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'dscdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'dscdId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	 name: 'dscdDscId',
	        	 type: 'int'
	        },
	        {
	        	name:'dscdPdtCode',
	        	type:'int'
	        },
	        {
	        	name:'dscdQty',
	        	type: 'float'
	        },
	        // decorated properties
	           
            {
                name: '_dscdPdtCode',
                type: 'string',
                useNull : true,
                persist: false
            }
	        ]
});