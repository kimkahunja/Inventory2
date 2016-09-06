Ext.define('InventoryApp.model.taskDelivery.TaskDelivery',{
	extend:'InventoryApp.model.Base',
	idProperty: 'tskId',
	fields:[
				{
					//Id field
					 name: 'tskId',
				     type: 'int',
				     useNull : true
				},
				{
		        	 name: 'tskDate',
		             type: 'date',
		             dateFormat:'d/m/Y'
		             //dateWriteFormat: 'Y-m-d'
		        },
		        {		        	
		        	 name: 'tskAccCode',
		             type: 'int'
		        },
		        {
		        	name:'tskTssgId',
		        	type: 'int'
		        },
		        {
		        	name:'tskCost',
		        	type:'float'
		        },
		        {
		        	 name: 'tskCollectionDate',
		             type: 'date',
		             dateFormat:'d/m/Y'
		             //dateWriteFormat: 'Y-m-d'
		        },
		        {
		        	name:'tskDescription',
		        	type:'string'
		        },
		        {
		        	name:'tskStatus',
		        	type:'string'
		        },
		        {
		        	name:'tskRemarks',
		        	type:'string'
		        },
		        {
		        	name:'_tskAccCode',
		        	type:'string',
		        	persist: false
		        },
		        {
		        	name:'_tskTssgId',
		        	type:'string',
		        	persist: false
		        }
	        ]
});