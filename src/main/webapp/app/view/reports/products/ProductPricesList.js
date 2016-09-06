Ext.define('InventoryApp.view.reports.products.ProductPricesList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.products.productpriceslist',
	requires: [
	           'Ext.grid.column.Date',
	           'Ext.toolbar.Paging',
	           'InventoryApp.store.product.ProductPrices'
	       ],	       
	//height:300,      
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.product.ProductPrices');
       Ext.applyIf(me,{ 
    	   store:store,
           columns: {
               defaults: {},
               items: [                                       
                    {
                        text: 'Trans Date',
                        dataIndex: 'transDate',
                        renderer: Ext.util.Format.dateRenderer('d/m/Y')
                    },
                    {
                        text: 'Reference',
                        dataIndex: 'transRef'
                    },
                    {
                        text: 'Qty',
                        dataIndex: 'signedQty'
                    },
                    {
                        text: 'Price',
                        dataIndex: 'price',
                        xtype:'numbercolumn'
                    },
                    {
                    	text:'Account',
                    	dataIndex:'acctName'
                    }
                    
               ]
           },          
           dockedItems: [

               {
                   xtype: 'pagingtoolbar',
                   ui: 'footer',
                   defaultButtonUI: 'default',
                   dock: 'bottom',
                   displayInfo: true,
                   store:store
               }
           ]
       });
       me.callParent( arguments );
   }        
});