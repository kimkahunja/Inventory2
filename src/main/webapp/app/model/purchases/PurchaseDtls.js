/**
 * Model representing a Purchases Dtl object
 */

Ext.define('InventoryApp.model.purchases.PurchaseDtls',{
	extend:'InventoryApp.model.Base',
	idProperty: 'purdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'purdId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	//fk field
	        	 name: 'purdPurchase',
	             type: 'int'
	        },
	        
	        { 
	        	//fk field
	        	 name: 'purdProduct',
	             type: 'int'
	        },
	        {
	        	 name: 'purdQty',
	             type: 'float'
	        },
	        {
	        	 name: 'purdPrice',
	             type: 'float'
	        },
	        {
	        	 name: 'purdTamount',
	             type: 'float'
	        },
	        {
	        	 name: 'purdDiscount',
	             type: 'float'
	        },
	        {
	        	 name: 'purdBonus',
	             type: 'float'
	        },
	        {
	        	 name: 'purdStatus',
	             type: 'string'
	        },
	        {
	        	 name: 'purdMtradePrice',
	             type: 'float'
	        },
	        {
	        	 name: 'purdExpiryDt',
	             type: 'date',
	             dateFormat:'d/m/Y'
	        },	       
	        // decorated properties
            {
                  name: '_purdPurchase',
                  type: 'string',
                  persist: false
            },
            {
                name: '_purdProduct',
                type: 'string',
                persist: false
          },
          //calculated properties
          {
              name: 'total',
              type: 'number',
              convert: function(value, record) {
                  if(!value) {
                      value = record.get('purdPrice') * record.get('purdQty');
                  }
                  
                  return value;
              }
          },
	        ],
        set: function (fieldName, value) {
            this.callParent(arguments);
            if (fieldName === 'purdPrice' || fieldName === 'purdQty') {  
                var total = this.get('purdPrice') * this.get('purdQty');
                this.set('total');
            }
        }
});