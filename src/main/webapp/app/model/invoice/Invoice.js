/**
 * Model representing a Invoice object
 */

Ext.define('InventoryApp.model.invoice.Invoice',{
	extend:'InventoryApp.model.Base',
	idProperty: 'invId',
	fields:[
	        {
	        	//Id field
	        	 name: 'invId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'invInvono',
	             type: 'string'
	        },
	        {
	        	 name: 'invDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        { 
	        	
	        	 name: 'invAccCode',
	             type: 'int'
	        },
	        {
	        	 name: 'invUser',
	             type: 'string'
	        },
	        {
	        	 name: 'invStatus',
	             type: 'string'
	        },
	        {
	        	 name: 'invPostedBy',
	             type: 'string'
	        },
	        {
	        	 name: 'invRefno',
	             type: 'string'
	        },
	        {
	        	 name: 'invPayMode',
	             type: 'string'
	        },
	        // decorated properties
            {
                  name: '_purAccCode',
                  type: 'string',
                  persist: false
            },
	        ],
});