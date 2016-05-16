/**
 * Model representing a Adjustment object
 */

Ext.define('InventoryApp.model.adjustment.AdjustmentDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'madjdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'madjdId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'madjdMadjId',
	        	type: 'int'
	        },
	        {
	        	name:'madjdPdtCode',
	        	type: 'int'
	        },
	        {
	        	name:'madjdQty',
	        	type: 'float'
	        },
	     // decorated properties
            {
                  name: '_madjdPdtCode',
                  type: 'string',
                  persist: false
            }, 
	        
	        ],
});