/**
 * Model representing a ProductMovement object
 */

Ext.define('InventoryApp.model.product.ProductMovement',{
	extend:'InventoryApp.model.Base',
	//idProperty: 'pdtCode',
	fields:[
	        {
	        	
	        	 name: 'pdtCode',
	             type: 'int'	            
	        },	        
	        {
	        	 name: 'pdtDescription',
	             type: 'string'
	        }, 
	        {
	        	
	        	 name: 'level',
	             type: 'int'	            
	        },
	        {
	        	 name: 'type',
	             type: 'string'
	        },
	        {
	        	 name: 'transDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        {
	        	name:'transRef',
	        	type: 'string'
	        },
	        {
		       	name: 'qty',
	            type: 'float'
	       },
	       {
	       	    name: 'price',
	            type: 'float'
	       },
	       {
		       	name: 'signedQty',
	            type: 'float'
	       },
	       {
	        	
	        	 name: 'acctCode',
	             type: 'int'	            
	        },
	        {
	        	name:'acctName',
	        	type: 'string'
	        }
	        ]
});