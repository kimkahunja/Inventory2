/**
 * Model representing a Payment object
 */

Ext.define('InventoryApp.model.payment.Payment',{
	extend:'InventoryApp.model.Base',
	idProperty: 'pymtId',
	fields:[
	        {
	        	//Id field
	        	 name: 'pymtId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'pymtPaymode',
	             type: 'string'
	        },
	        {
	        	 name: 'pymtDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        { 
	        	
	        	 name: 'pymtAccCode',
	             type: 'int'
	        },
	        {
	        	 name: 'pymtRemarks',
	             type: 'string'
	        },
	        {
	        	 name: 'pymtAmount',
	             type: 'float'
	        },
	        {
	        	 name: 'pymtPaymemo',
	             type: 'string'
	        },
	        {
	        	 name: 'pymtRemarks',
	             type: 'string'
	        },
	        // decorated properties
            {
                  name: '_pymtAccCode',
                  type: 'string',
                  persist: false
            },
	        ],
});