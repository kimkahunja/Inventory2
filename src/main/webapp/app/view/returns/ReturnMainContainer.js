Ext.define('InventoryApp.view.returns.ReturnMainContainer',{
	extend:'Ext.form.Panel',
	alias:'widget.returns.returnmaincontainer',
	requires: [	 
	         'InventoryApp.view.returns.ReturnList'  
	       ],
   	       
   initComponent: function() {
	   var me = this;
	   Ext.applyIf(me,{
    	   
    	   items:[
					{
						  //return product lov
						  xtype: 'ux.form.field.remotecombobox',
						  margin:'10',
					    name: 'returnProdSearch',
					    fieldLabel: 'Product',
					    displayField: 'pdtDescription',
					    valueField: 'pdtCode',
					    store: {
					         type: 'product.products'
					       },				                  
					     editable: true,
					     forceSelection: true,   
					     emptyText:'select product',
					     minChars: 0 ,
					     allowBlank:true
					},
					{
						xtype: 'panel',					    
					    frame:true,
					    border:1,
					    width:600,
					    style: {
					        borderColor: '#E6E6E6',
					        borderStyle: 'solid'
					    },
					    items:[
					           {
					        	   xtype:'returns.returnlist'
					           }
					           ]
					},
					{
		           		xtype:'container',
		           		width:700,
		           		items:[
								{
								    xtype: 'toolbar',		                                   
								    items: [
										{
										    xtype:'tbspacer',
										    flex:2
										},
										
										{
								           xtype: 'button',
								           itemId: 'returnPost',
								           text: 'Post   ',
								           iconCls: 'accept'
								       }
								       
								    ]
								}
		           		       ]
		           	}
    	         ]
	   });
	   me.callParent( arguments );
   }
});	       