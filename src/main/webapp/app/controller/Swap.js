Ext.define('InventoryApp.controller.Swap', {
    extend: 'InventoryApp.controller.Base',
    requires: [
               'InventoryApp.util.Util'
           ],
   stores: [    	
            'swap.ItemSwapDtls'
        ],
        views: [
        	 'swap.SwapList',
        	 'swap.OriginList'
        ], 
    refs:[
		
		{
            ref: 'OriginList',
            selector: '[xtype=swap.originlist]'
        },
        {
            ref: 'SwapList',
            selector: '[xtype=swap.swaplist]'
        }
       ],      
    init: function() {    	
    	this.listen({
            controller: {},
            component: {          	  
            	"combobox[name='originProdSearch']":{
            		select:this.onOriginProdSelect
            	},
            	"combobox[name='swapProdSearch']":{
            		select:this.onSwapProdSelect
            	},
            	'button#originRemove':{
            		click:this.removeOrigin
            	},
            	'button#swapRemove':{
            		click:this.removeSwap
            	},
            	'button#originSave':{
            		//click:this.saveOrigin
            	},
            	'button#swapSave':{
            		//click:this.saveSwap
            	},
            },
            global: {},
            store: {},             
        });
    },
    onOriginProdSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getOriginList(),
              store = grid.getStore();
           
              var model = {};              
              model["swpdPdtCode"] = records[0].get('pdtCode');
              model["swpdQty"]=1;           
              model["_swpdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	 // combo.focus(true);
    	  combo.clearValue();
      },
      onSwapProdSelect:function( combo, records, eOpts ){
    	  //console.log('selected....' +records[0].get('pdtShtDesc'));
    	  if (records[0]) {
    		  var me = this,
              grid = me.getSwapList(),
              store = grid.getStore();
           
              var model = {};              
              model["swpdPdtCode"] = records[0].get('pdtCode');
              model["swpdQty"]=1;           
              model["_swpdPdtCode"]=records[0].get('pdtDescription');
            
              store.add(model);
             // store.sync();
             // console.log('ffffffffffkim '+store.getCount());
              grid.getSelectionModel().select(store.data.length-1);  
    	  }
    	 // combo.focus(true);
    	  combo.clearValue();
      },
      removeOrigin: function( button, e, eOpts ){
      	  //console.log("Remove Invoice.....");
      	  var me = this,
          	grid = me.getOriginList(), 
          	record = grid.getSelectionModel().getSelection(),
          	
      		store = grid.getStore();
      	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
      	     if (grid.getSelectionModel().getCount()>0 ){
      	    	 store.remove(record[0]);
      	    	   grid.getView().refresh();
      	     } 
             
        },
        removeSwap: function( button, e, eOpts ){
        	  //console.log("Remove Invoice.....");
        	  var me = this,
            	grid = me.getSwapList(), 
            	record = grid.getSelectionModel().getSelection(),
            	
        		store = grid.getStore();
        	  //console.log("Number of Records selected....."+grid.getSelectionModel().getCount());
        	     if (grid.getSelectionModel().getCount()>0 ){
        	    	 store.remove(record[0]);
        	    	   grid.getView().refresh();
        	     } 
               
          },
});           