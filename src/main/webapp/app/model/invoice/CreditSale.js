Ext.define('InventoryApp.model.invoice.CreditSale',{
	extend:'InventoryApp.model.Base',
	idProperty: 'crsId',
	fields:[
	        {
	        	//Id field
	        	 name: 'crsId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'crsPaymode',
	             type: 'string'
	        },
	        {
	        	 name: 'crsDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	        },
	        { 
	        	
	        	 name: 'crsAccCode',
	             type: 'int'
	        },
	        {
	        	 name: 'crsAmount',
	             type: 'float'
	        },
	        {
	        	 name: 'crsPaymemo',
	             type: 'string'
	        },
	        {
	        	 name: 'crsRemarks',
	             type: 'string'
	        }
	        
	        ],
});