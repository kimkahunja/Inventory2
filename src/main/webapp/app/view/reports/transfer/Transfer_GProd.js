Ext.define('InventoryApp.view.reports.transfer.Transfer_GProd',{
	extend:'Ext.grid.Panel',
	alias:'widget.reports.transfer.transfergprod',		
	//store: 'purchases.PurchaseRPTs',
    initComponent: function() {
       var me = this,
       store = Ext.create('InventoryApp.store.transfer.TransferDtlRpt');
       Ext.applyIf(me,{  
    	   store:store,
           columns: {
               defaults: {            	 
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
                       text: 'Type',
                       dataIndex: 'tnsfType',		                      
	               },
                   {
                       text: 'Date',
                       dataIndex: 'tnsfDate',
                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
                   },
                   {
                       text: 'Quantity',
                       dataIndex: 'tnsfdQty'              
                       
                   }, 
                   {
                       text: 'Source',
                       dataIndex: '_tnsfFromLocCode'              
                       
                   },
                   {
                       text: 'Destination',
                       dataIndex: '_tnsfToLocCode'              
                       
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