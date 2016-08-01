Ext.define('InventoryApp.model.swap.ItemSwap',{
	extend:'InventoryApp.model.Base',
	idProperty: 'swpId',
	fields:[
				{
					//Id field
					 name: 'swpId',
				     type: 'int',
				     useNull : true
				},
				{
		        	 name: 'swpDate',
		             type: 'date',
		             dateFormat:'d/m/Y'
		             //dateWriteFormat: 'Y-m-d'
		        },
		        {		        	
		        	 name: 'swpAccCode',
		             type: 'int'
		        },
	        ]
});