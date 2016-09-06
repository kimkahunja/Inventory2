/**
 * Model representing a Return dtls object
 */

Ext.define('InventoryApp.model.returns.ItemReturnDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'rtndId',
	fields:[
	        {
	        	//Id field
	        	 name: 'rtndId',
	             type: 'int',
	             useNull : true
	        },
	        {
	        	name:'rtndRtnId',
	        	type: 'int'	            
	        },
	        {
	        	name: 'rtndPdtCode',
	            type: 'int'
	        },
	        {
		       	name: 'rtndQty',
	            type: 'float'
	        },
	        {
		       	name: 'rtndPrice',
	            type: 'float'
	        },
	     // decorated properties
	           
            {
                name: '_rtndPdtCode',
                type: 'string',
                useNull : true,
                persist: false
            },
          //calculated properties
            {
                name: 'total',
                type: 'number',
                convert: function(value, record) {
                    if(!value) {
                        value = record.get('rtndPrice') * record.get('rtndQty');
                    }
                    
                    return value;
                }
            }
	        ],
	        set: function (fieldName, value) {
	            this.callParent(arguments);
	            if (fieldName === 'rtndPrice' || fieldName === 'rtndQty') {  
	                var total = this.get('rtndPrice') * this.get('rtndQty');
	                this.set('total');
	            }
	        }
});