/**
 * Model representing a TransferDtl object
 */

Ext.define('InventoryApp.model.transfer.TransferDtl',{
	extend:'InventoryApp.model.Base',
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