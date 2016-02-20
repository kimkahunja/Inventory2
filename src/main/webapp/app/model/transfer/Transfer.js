/**
 * Model representing a Transfer object
 */

Ext.define('InventoryApp.model.transfer.Transfer',{
	extend:'InventoryApp.model.Base',
	idProperty: 'tnsfId',
	fields:[
	        {
	        	//Id field
	        	 name: 'tnsfId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'tnsfType',
	        	type: 'string',
	        },
	        {
	        	name:'tnsfFromLocCode',
	        	type: 'int',
	        },
	        {
	        	name:'tnsfToLocCode',
	        	type: 'int',
	        },
	        {
	        	 name: 'tnsfDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        
	        // decorated properties
            {
                  name: '_tnsfFromLocCode',
                  type: 'string',
                  persist: false
            },
            {
                name: '_tnsfToLocCode',
                type: 'string',
                persist: false
          },
	        ],
});