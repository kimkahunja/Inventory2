Ext.define('InventoryApp.model.swap.ItemSwapDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'swpdId',
	fields:[
				{
					//Id field
					 name: 'swpdId',
				     type: 'int',
				     useNull : true
				},
				
		        {		        	
		        	 name: 'swpdSwpId',
		             type: 'int'
		        },
		        {		        	
		        	 name: 'swpdPdtCode',
		             type: 'int'
		        },
		        {
		        	name: 'swpdQty',
		            type: 'float'
		        },
		     // decorated properties
		           
	            {
	                name: '_swpdPdtCode',
	                type: 'string',
	                useNull : true,
	                persist: false
	          },
	        ]
});