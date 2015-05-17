/**
 * Model representing Account object
 */

Ext.define('InventoryApp.model.account.Account',{
	extend:'InventoryApp.model.Base',
	idProperty: 'accCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'accCode',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'accName',
	             type: 'string'
	        },
	        {
	        	 name: 'accType',
	             type: 'string'
	        },
	        {
	        	 name: 'accAddress',
	             type: 'string'
	        },
	        {
	        	 name: 'accLocation',
	             type: 'string'
	        },
	        {
	        	 name: 'accEmail',
	             type: 'string'
	        },
	        {
	        	 name: 'accFax',
	             type: 'string'
	        },
	        {
	        	 name: 'accTelNo',
	             type: 'string'
	        },
	        {
	        	 name: 'accMobileNo',
	             type: 'string'
	        } 
	        ],
});