Ext.define('InventoryApp.model.invoice.SalePayment',{
	extend:'InventoryApp.model.Base',
	idProperty: 'spymtId',
	fields:[
	        {
	        	//Id field
	        	 name: 'spymtId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'spymtInvId',
	             type: 'int'
	        },
	        {
	        	name:'spymtTotal',
	        	type:'float'
	        },
	        {
	        	name:'spymtPaymode',
	        	type: 'string'
	        },	        
	        {
	        	 name: 'spymtPaymethod',
	             type: 'string'
	        },
	        {
	        	 name: 'spymtReference',
	             type: 'string'
	        },
	        {
	        	 name: 'spymtAmountGiven',
	             type: 'float'
	        },
	        {
	        	 name: 'spymtChange',
	             type: 'float'
	        }	       
	        ],
});