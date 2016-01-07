/**
 * Model representing a Stock object
 */

Ext.define('InventoryApp.model.product.Stock',{
	extend:'InventoryApp.model.Base',
	//idProperty: 'pdtCode',
	fields:[
	        {
	        	//Id field
	        	 name: 'pdtCode',
	             type: 'int',
	             //useNull : true
	        },
	        
	        {
	        	 name: 'pdtShtDesc',
	             type: 'string'
	        },
	        {
	        	 name: 'pdtDescription',
	             type: 'string'
	        }, 
	        {	        	
	        	 name: 'pdtUntCode',
	             type: 'auto'	            
	        },
	        {	        	
	        	 name: 'pdtLocCode',
	             type: 'auto'	            
	        },
	        {	        	
	        	 name: 'pdtSlocCode',
	             type: 'auto'	            
	        },
	        
	        {
	        	name:'pdtCatCode',
	        	type: 'auto'
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
	        	 name: 'pdtProfitPct',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtVatId',
	             type: 'auto'	            
	        },
	        {	        	
	        	 name: 'pdtStatus',
	             type: 'string',
	             //useNull:true,
	             defaultValue:'ACTIVE'
	        },
	        {	        	
	        	 name: 'pdtStrength',
	             type: 'string'	            
	        },
	        
	        {	        	
	        	 name: 'pdtCurrentQty',
	             type: 'float'	            
	        },
	        {	        	
	        	 name: 'pdtAmount',
	             type: 'float'	            
	        },
	        {
	        	 name: 'purchaseDate',
	             type: 'date',
	             dateFormat:'d/m/Y'
	             //dateWriteFormat: 'Y-m-d'
	        },
	        {
	        	name:'stkId',
	        	type: 'int'
	        },
	        {	        	
	        	 name: 'prodReference',
	             type: 'string'	            
	        },
	        {	        	
	        	 name: 'pdtMergeQty',
	             type: 'string'	            
	        },
	     // decorated properties
            {
                  name: '_pdtUntCode',
                  type: 'string',
                  persist: false
            },
            {
                name: '_pdtLocCode',
                type: 'string',
                persist: false
          },
          {
              name: '_pdtSlocCode',
              type: 'string',
              persist: false
         },
          {
              name: '_pdtVatId',
              type: 'string',
              persist: false
          },
          {
        	  name:"_pdtCatCode",
        	  type: 'string',
              persist: false
          }
	        ],
});