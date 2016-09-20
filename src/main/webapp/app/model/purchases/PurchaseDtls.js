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
	       	name: 'purdPurId',
	            type: 'int'
	       },
	       
	       { 
	       	//fk field
	       	name: 'purdPdtCode',
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
	       	name: 'purdPreviousQty',
	            type: 'float'
	       },
	       {
	       	name: 'purdRemarks',
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
	       {
	    	  name:'purdSerialNo',
	    	  type: 'string'
	       },
	       
	       {
	    	   name: 'purdVatInclusive', 
	    	   type: 'bool',
               convert: function(v){
            	   //console.log('my value=== '+v);
                   return (v === "Y" || v === true) ? true : false;
               }
           },
	       
	       {
	       		name: 'purdVatRate',
	            type: 'float'
	       },
	       // decorated properties
           /* {
                  name: '_purdPurId',
                  type: 'string',
                  useNull : true,
                  persist: false
            },*/
            {
                name: '_purdPdtCode',
                type: 'string',
                useNull : true,
                persist: false
          },
          //calculated properties
          {
              name: 'purdVatAmt',
              type: 'float',
              convert: function(value, record) {
                  if(!value) {
                      value = record.get('purdPrice') * record.get('purdQty')*( record.get('purdVatRate')/100);
                  }
                  
                  return value;
              }
          },
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
            
            if (fieldName === 'purdPrice' || fieldName === 'purdQty'||fieldName === 'purdVatRate') {  
                var total = this.get('purdPrice') * this.get('purdQty');                
                this.set('total');
                this.set('purdVatAmt');
            }
        }
});