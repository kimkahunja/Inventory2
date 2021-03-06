/**
 * Model representing a PaymentDtl object
 */

Ext.define('InventoryApp.model.payment.PaymentDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'pymtdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'pymtdId',
	             type: 'int',
	             useNull : true
	        },	        
	        {
	        	 name: 'pymtdPymtId',
	             type: 'int'
	        },
	        
	        { 
	        	
	        	 name: 'pymtdPurId',
	             type: 'int'
	        },
	        {
	        	 name: 'pymtdAmount',
	             type: 'float'
	        },	       
	        // decorated properties
            {
                  name: '_purInvono',
                  type: 'string',
                  persist: false
            },
           {
            name: '_purDate',
            type: 'date',
            dateFormat:'d/m/Y',
            persist: false
          },
          {
              name: '_amount',
              type: 'float',
              persist: false
          },
          {
            name: '_balance',
            type: 'float',
            persist: false
         },         
        /*//calculated properties
          {
              name: 'total',
              type: 'number',
              convert: function(value, record) {
                  if(!value) {
                      value = record.get('pymtdAmount');
                  }
                  
                  return value;
              }
          },*/
	        ],
	      /* set: function (fieldName, value) {
	            this.callParent(arguments);
	            if (fieldName === 'pymtdAmount') {  
	                var total = this.get('pymtdAmount');
	                this.set('total');
	            }
	        } */     
});