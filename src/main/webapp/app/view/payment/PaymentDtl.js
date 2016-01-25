Ext.define('InventoryApp.view.payment.PaymentDtl',{
	extend:'Ext.grid.Panel',
	alias:'widget.payment.paymentdtl',
	requires: [
	           'Ext.grid.RowNumberer',
	           'Ext.grid.plugin.CellEditing',
	         //  'payment.PaymentDtls1'
	       ],	
	store: 'payment.PaymentDtls1',
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
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
	                       dataIndex: '_purInvono',
	                       menuDisabled:true,
	                       //sortable:false
		                   }, 
		                   {
		                       text: 'Date',
		                       dataIndex: '_purDate',
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
		                       dataIndex: 'pymtdAmount',
		                       xtype:'numbercolumn',
		                       summaryType: 'sum',
		                       editor: {
		                           xtype: 'numberfield',
		                      },
		                      //allowBlank: false,                      
		                       menuDisabled:true, 
		                      /* validator: function(value) {
		                           return (value >=) || 'Number must be > 5 and < 100';
		                       }*/
		                       
		                   },                   
                  /* {
                       xtype: 'numbercolumn',
                       summaryType: 'sum',
                       dataIndex: 'total',
                       text: 'Total'
                   },*/
                   
               ],
               
               
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
         		                    itemId: 'processPayment',
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