/**
 * Model representing a TransferRPT object
 */

Ext.define('InventoryApp.model.transfer.TransferRPT',{
	extend:'InventoryApp.model.transfer.Transfer',
	idProperty: 'tnsfdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'tnsfdId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	name:'tnsfdTnsfId',
	        	type: 'int',
	        },
	        {
	        	name:'tnsfdPdtCode',
	        	type: 'int',
	        },
	        {
	        	 name: 'tnsfdQty',
	             type: 'float'	             
	        },
	        {
	        	name:'tnsfdStkId',
	        	type: 'int',
	        },
	        // decorated properties
            {
                  name: '_tnsfdPdtCode',
                  type: 'string',
                  persist: false
            },            
	        ],
});