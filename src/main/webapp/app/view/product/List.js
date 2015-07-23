Ext.define('InventoryApp.view.product.List',{
	extend:'Ext.grid.Panel',
	alias:'widget.product.list',
	requires: [
	           'Ext.grid.column.Date',
	           'Ext.toolbar.Paging'          
	       ],
	store:'product.Products',	
   // width:'80%',	       
	autoWidth:true,       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   plugins: [{
	        	ptype: 'filterbar',
	        	renderHidden: false,
	        	showShowHideButton: true,
	        	showClearAllButton: true
			}],
           columns: {
               defaults: {},
               items: [
                    {
                        text: 'Name',
                        dataIndex: 'pdtDescription',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return value + '- ' + record.get( 'pdtShtDesc' );
                        },
                        width: 200,
                        filter: true
                    },                   
                    {
                        text: 'BP',
                        dataIndex: 'pdtBp',
                        filter: true
                    },
                    {
                        text: 'SP',
                        dataIndex: 'pdtSp',
                        filter: true
                    },
                    
                    {
                        text: 'Current Quantity',
                        dataIndex: 'pdtCurrentQty',
                        filter: true
                    },                    
                    
                    {
                        text: 'Unit Measure',
                        dataIndex: '_pdtUntCode',
                        filter: 'combo'
                    },
                    {
                    	text:'Category',
                    	dataIndex:'_pdtCatCode',
                    	//filter: 'combo'
                    },
                    {
                        text: 'Main Location',
                        dataIndex: '_pdtLocCode',
                       // filter: 'combo'
                    },
                    {
                        text: 'Secondary Location',
                        dataIndex: '_pdtSlocCode',
                        //filter: 'combo'
                    },
                    {
                        text: 'TAX',
                        dataIndex: '_pdtVatId',
                        //filter: 'combo'
                    },
                    {
                        text: 'Min Level',
                        dataIndex: 'pdtMinLevel',
                        hidden: true,
                        filter: true
                    },
                    {
                        text: 'Max Level',
                        dataIndex: 'pdtMaxLevel',
                        hidden: true,
                        filter: true
                    },
                    {
                        text: 'Status',
                        dataIndex: 'pdtStatus'
                    },
                    {
                        text: 'Strength',
                        dataIndex: 'pdtStrength',
                        hidden: true,
                        filter: true
                    },
                    
               ]
           },
           dockedItems: [
               {
                   xtype: 'toolbar',
                   dock: 'top',
                   ui: 'footer',
                   items: [
                       {
                           xtype: 'button',
                           itemId: 'add',
                           iconCls: 'add',
                           text: 'Add Product'
                       }
                   ]
               },
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