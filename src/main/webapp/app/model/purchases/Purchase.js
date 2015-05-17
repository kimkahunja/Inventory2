/**
 * Model representing a Purchases object
 */

Ext.define('InventoryApp.model.purchases.Purchase',{
	extend:'InventoryApp.model.Base',
	idProperty: 'purId',
	fields:[
	        {
	        	//Id field
	        	 name: 'purId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'purInvono',
	             type: 'string'
	        },
	        {
	        	 name: 'purDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        { 
	        	
	        	 name: 'purAccCode',
	             type: 'int'
	        },
	        {
	        	 name: 'purUser',
	             type: 'string'
	        },
	        {
	        	 name: 'purStatus',
	             type: 'string'
	        },
	        {
	        	 name: 'purPostedBy',
	             type: 'string'
	        },
	        {
	        	 name: 'purRefNo',
	             type: 'string'
	        },
	        // decorated properties
            {
                  name: '_purAcc',
                  type: 'string',
                  persist: false
            },
	        ],
});