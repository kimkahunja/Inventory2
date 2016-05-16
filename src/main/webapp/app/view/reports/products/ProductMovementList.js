Ext.define('InventoryApp.view.reports.products.ProductMovementList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.products.productmovementlist',
	requires: [
	           'Ext.grid.column.Date',
	           'Ext.toolbar.Paging'          
	       ],
	store: 'product.productMovements',	
   // width:'80%',	       
	autoWidth:true,       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{    	  
           columns: {
               defaults: {},
               items: [
                    {
                        text: 'Trans Type',
                        dataIndex: 'type'
                    },                   
                    {
                        text: 'Trans Date',
                        dataIndex: 'transDate'                       
                    },
                    {
                        text: 'Reference',
                        dataIndex: 'transRef'
                    },
                    
                    {
                        text: 'Price',
                        dataIndex: 'price'
                    },                    
                    
                    {
                        text: 'Qty',
                        dataIndex: 'signedQty'
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
                   store: me.getStore()
               }
           ]
       });
       me.callParent( arguments );
   }        
});