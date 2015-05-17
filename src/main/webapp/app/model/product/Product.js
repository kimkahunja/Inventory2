/**
 * Model representing a Product object
 */

Ext.define('InventoryApp.model.product.Product',{
	extend:'InventoryApp.model.Base',
	idProperty: 'pdtCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'pdtCode',
	             type: 'int',
	             useNull : true
	        },
	        
	        {
	        	 name: 'pdtBarCode',
	             type: 'string'
	        },
	        {
	        	 name: 'pdtDescription',
	             type: 'string'
	        },
	        {	        	
	        	 name: 'pdtMinLevel',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtMaxLevel',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtBp',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtSp',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtStatus',
	             type: 'string',
	             useNull:true
	        },
	        {	        	
	        	 name: 'pdtCurrentQty',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtDiscount',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtStrength',
	             type: 'string'	            
	        },
	        {	        	
	        	 name: 'pdtExpireDate',
	             type: 'date',	            
	             dateWriteFormat: 'Y-m-d'
	             
	        },
	        {	        	
	        	 name: 'pdtMtradePrice',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtProfitPct',
	             type: 'float'	            
	        },
	        // relational properties
	        {	        	
	        	 name: 'pdtUnit',
	             type: 'auto'	            
	        },
	        {	        	
	        	 name: 'pdtBinLoc',
	             type: 'auto'	            
	        },
	        {	        	
	        	 name: 'pdtVat',
	             type: 'auto'	            
	        },
	        {
	        	name:'pdtCategory',
	        	type: 'auto'
	        },
	     // decorated properties
            {
                  name: '_pdtUnit',
                  type: 'string',
                  persist: false
            },
            {
                name: '_pdtBinLoc',
                type: 'string',
                persist: false
          },
          {
              name: '_pdtVat',
              type: 'string',
              persist: false
          },
          {
        	  name:"_pdtCategory",
        	  type: 'string',
              persist: false
          }
	        ],
});