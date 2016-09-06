Ext.define('InventoryApp.model.taskDelivery.TaskAssignee',{
	extend:'InventoryApp.model.Base',
	idProperty: 'tssgId',
	fields:[
				{
					//Id field
					 name: 'tssgId',
				     type: 'int',
				     useNull : true
				},
				
		        {
		        	name:'tssgName',
		        	type:'string'
		        }
	        ]
});