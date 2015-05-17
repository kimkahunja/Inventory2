/*
 * Purchases container
 */
Ext.define('InventoryApp.view.purchases.PurchaseLanding',{
	extend:'Ext.container.Container',
	alias:'widget.purchases.purchaselanding',	
	requires: [
	           	'InventoryApp.view.purchases.PurchaseList',
	           	'InventoryApp.view.purchases.PurchaseDtlsList'
	          // 	'kahunja.view.purchases.ProductSearchList'
	           ],
  /* layout: {
       type: 'vbox',
       align: 'stretch',
      // pack:'start'
   },*/
	layout:'anchor',       
   
	initComponent:function(){
		var me=this;
		Ext.applyIf(me,{
			items:[
			       {			    	  
			    	   xtype: 'purchases.purchaselist',	
			    	   //flex: .1
			    	   anchor: '60%, -320'
			       },
			       {			    	  
			    	   xtype: 'purchases.purchasedtlslist',	
			    	   //flex: .2
			    	   anchor: '60%, -262'
			       }
			       ],
		});
	 me.callParent( arguments );
	}
});
