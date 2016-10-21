Ext.define('InventoryApp.view.invoice.CreditSaleDtls',{
	extend:'Ext.grid.Panel',
	alias:'widget.invoice.creditsaledtls',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	           'InventoryApp.store.invoice.CreditSaleDtls'
	       ],
	width:650 ,      
    initComponent: function() {
       var me = this;
       var store = Ext.create('InventoryApp.store.invoice.CreditSaleDtls');
       Ext.applyIf(me,{
    	   store: store,
           selType: 'cellmodel',
           plugins: [
                     {
                         ptype: 'cellediting',
                         clicksToEdit: 1
                     }
                 ],
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
	                       text: 'Invoice No',
	                       dataIndex: '_invInvono',
	                       menuDisabled:true,
	                       //sortable:false
		                   }, 
		                   {
		                       text: 'Ref No',
		                       dataIndex: '_invRefno',
		                       menuDisabled:true,
		                       //sortable:false
			                   },
		                   {
		                       text: 'Date',
		                       dataIndex: '_invDate',
		                       renderer: Ext.util.Format.dateRenderer('d/m/Y')
		                   },    
		                   {
		                       text: 'Amount',
		                       dataIndex: '_amount'                                           
		                       
		                   },
		                   {
		                       text: 'Balance',
		                       dataIndex: '_balance'                                           
		                       
		                   },
		                   {
		                       text: 'Allocate',
		                       dataIndex: 'crsdAmount',
		                       xtype:'numbercolumn',
		                       summaryType: 'sum',
		                       editor: {
		                           xtype: 'numberfield',
		                      },		                                           
		                       menuDisabled:true
		                   },                   
                 
               ]
               
               
           },
           features: [{
               ftype: 'summary'
           }], 
           dockedItems: [
                         {
                             xtype: 'toolbar',
                             dock: 'bottom',
                             defaultAlign:'left',
                             ui: 'footer',
                             items: [
         						{
         						    xtype:'tbspacer',
         						    flex:1
         						},                						
         						
         						 {
         							xtype: 'button',
         		                    text: 'Process',
         		                    itemId: 'processCreditSale',
         		                    iconCls: 'add'					            
    					        },
    					        {
         						    xtype:'tbspacer',
         						    flex:1
         						},
                             ]
                         },
                        
                     ]
       });
       me.callParent( arguments );
   }        
});