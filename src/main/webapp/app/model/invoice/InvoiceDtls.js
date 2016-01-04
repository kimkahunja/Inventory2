/**
 * Model representing a InvoiceDtls  object
 */

Ext.define('InventoryApp.model.invoice.InvoiceDtls',{
	extend:'InventoryApp.model.Base',
	idProperty: 'invdId',
	fields:[
	       {
	       	//Id field
	       	name: 'invdId',
	            type: 'int',
	            useNull : true
	       },	       
	       {
	       	//fk field
	       	name: 'invdInvId',
	            type: 'int'
	       },
	       
	       { 
	       	//fk field
	       	name: 'invdPdtCode',
	            type: 'int'
	       },
	       {
	       	name: 'invdQty',
	            type: 'float'
	       },
	       {
	       	name: 'invdPrice',
	            type: 'float'
	       },
	       {
	       	name: 'invdTamount',
	            type: 'float'
	       },
	       {
	       	name: 'invdDiscount',
	            type: 'float'
	       },
	       {
	       	name: 'invdBonus',
	            type: 'float'
	       },
	       {
	       	name: 'invdStatus',
	            type: 'string'
	       },
	       {
	       	name: 'invdBp',
	            type: 'float'
	       },
	       {
	       	//fk field
	       	name: 'invdStkId',
	            type: 'int'
	       },
	       	      
	       // decorated properties
           
            {
                name: '_purdPdtCode',
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
                      value = record.get('invdPrice') * record.get('invdQty');
                  }
                  
                  return value;
              }
          },
	       ],
        set: function (fieldName, value) {
            this.callParent(arguments);
            if (fieldName === 'invdPrice' || fieldName === 'invdQty') {  
                var total = this.get('invdPrice') * this.get('invdQty');
                this.set('total');
            }
        }
});