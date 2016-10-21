/**
 * Model representing a Return object
 */

Ext.define('InventoryApp.model.returns.ItemReturn',{
	extend:'InventoryApp.model.Base',
	idProperty: 'rtnId',
	fields:[
	        {
	        	//Id field
	        	 name: 'rtnId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'rtnDate',
	        	type: 'date',
	            dateFormat:'d/m/Y'
	        },
	        {
	        	name:'rtnAccCode',
	        	type: 'int'
	        },
	        {
                name: 'rtnStatus',
                type: 'string'
            },
	     // decorated properties
            {
                  name: '_rtnAccCode',
                  type: 'string',
                  persist: false
            }
	        ],
});