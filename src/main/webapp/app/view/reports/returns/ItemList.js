Ext.define('InventoryApp.view.reports.returns.ItemList',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.returns.itemlist',
	requires:[
	          'InventoryApp.store.returns.ItemReturnDtls'
	          ],
    initComponent: function() {
       var me = this; 
       var store = Ext.create('InventoryApp.store.returns.ItemReturnDtls');
       Ext.applyIf(me,{ 
    	   store: store,
           columns: {
               defaults: {
            	   menuDisabled:true,
            	   sortable:false
               },
                  
               items: [
						Ext.create('Ext.grid.RowNumberer',
						        {
						        resizable: true,
						        resizeHandles:'all',
						        align: 'center',
						        minWidth: 35,
						        maxWidth:50
						        }),							        
                   
						{
	                       text: 'Description',
	                       dataIndex: '_rtndPdtCode',
	                      // autoSizeColumn : true,
	                       flex:1
	                       //menuDisabled:true,
	                       //sortable:false
		                   }, 	
                   
                   {
                       text: 'Unit Price',
                       dataIndex: 'rtndPrice',
                       xtype:'numbercolumn',                                          
                       
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'rtndQty',                    
                       field: {
                           xtype: 'numberfield',
                      },
                       xtype:'numbercolumn',
                       summaryType: 'sum'
                   }, 
                   {
                       xtype: 'numbercolumn',
                       summaryType: 'sum',
                       dataIndex: 'total',
                       text: 'Total'
                   },
                   
               ]
               
           },           
           features: [{
               ftype: 'summary',
              // remoteRoot: 'data.summary', // summary key in the server response
           }], 
          /* viewConfig : {
       	    listeners : {
       	     refresh : function (dataview) {
       	      Ext.each(dataview.panel.columns, function (column) {
       	       if (column.autoSizeColumn === true)
       	        column.autoSize();
       	      })
       	     }
       	    }
       	   },*/
           /*dockedItems: [                         
                         {
                             xtype: 'pagingtoolbar',
                             ui: 'footer',
                             defaultButtonUI: 'default',
                             dock: 'bottom',
                             displayInfo: true,
                             store: me.getStore()
                            //store:this.store
                         }
                     ]*/
       });
       me.callParent( arguments );
   }        
});