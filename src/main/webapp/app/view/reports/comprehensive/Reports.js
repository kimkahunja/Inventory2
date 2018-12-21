Ext.define('InventoryApp.view.reports.comprehensive.Reports',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.comprehensive.reports',
	requires: [
	           
	       ],	
	//bodyPadding: 5,
	       
    initComponent: function() {
       var me = this;
       Ext.applyIf(me,{
    	   fieldDefaults: {
    		   allowBlank: true,
    	   },
    	   width:200,   
    	   margin: '5 5 5 5 ',
  		    layout: {
               align: 'stretch',
               type: 'vbox'
           },
    	   items:[					
					{
					    xtype: 'radiogroup',
					    labelAlign:'top',
					    fieldLabel: 'Choose the Report to execute',
					    //arrange Radio Buttons into 1 columns
					    columns: 1,
					    itemId: 'rgReport',
					    items: [
					        {
					            xtype: 'radiofield',
					            boxLabel: 'Summary sales report',
					            name: 'report',
					            checked: true,
					            inputValue: 'R_S_sales'
					        },
					        {
					        	xtype: 'radiofield',
					            boxLabel: 'Sales by items report',
					            name: 'report',
					            inputValue: 'R_S_items'
					        },
					        {
					        	xtype: 'radiofield',
					            boxLabel: 'Product Profits',
					            name: 'report',
					            itemId:'productProfits',
					            inputValue: 'R_Product_profits'
					        },
					        {
					        	xtype: 'radiofield',
					            boxLabel: 'Customer Balances report',
					            name: 'report',
					            inputValue: 'R_Customer_balances'
					        },
					        {
					            xtype: 'radiofield',
					            boxLabel: 'Product cost report',
					            name: 'report',
					            inputValue: 'R_P_cost'
					        },
					        {
					            xtype: 'radiofield',
					            boxLabel: 'Product activity report',
					            name: 'report',
					            inputValue: 'R_P_activity'
					        },
					        
					    ]
					},
					
                 ]                 
       });
       me.callParent( arguments );
   }        
});