Ext.define('InventoryApp.model.invoice.CreditSaleDtl',{
	extend:'InventoryApp.model.Base',
	idProperty: 'crsdId',
	fields:[
	        {
	        	//Id field
	        	 name: 'crsdId',
	             type: 'int',
	             useNull : true
	        },
	        { 
	        	
	        	 name: 'crsdCrsId',
	             type: 'int'
	        },
	        {
	        	 name: 'crsdInvId',
	             type: 'int'
	        },
	        
	        {
	        	 name: 'crsdAmount',
	             type: 'float'
	        },
	     // decorated properties
            {
                  name: '_invInvono',
                  type: 'string',
                  persist: false
            },
            {
                name: '_invRefno',
                type: 'string',
                persist: false
           },
           {
            name: '_invDate',
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
         }
	        
	        ],
});