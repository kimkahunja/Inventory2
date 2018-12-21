Ext.define('InventoryApp.view.swap.ListHolder',{
	extend:'Ext.form.Panel',
	alias:'widget.swap.listholder',
	requires: [	 
	           'InventoryApp.view.swap.OriginList',
	           'InventoryApp.view.swap.SwapList'
	       ],
 bodyPadding: 5,	       
   initComponent: function() {
	   var me = this;
	   Ext.applyIf(me,{ 
		   
    	   items:[
    	      	{
	           		xtype: 'panel',
	           	    layout: 'hbox',
	           	   
					 items:[
					        {
					        	//holds the original items(prod lov and grid)
					        	xtype:'panel',
					        	flex:1,
					        	title:'Original Item(s)',
					        	items:[
					        	       {
					        	    	   xtype: 'container',
					        	    	   layout:'fit',
										   items:[
										          {
										        	  //original product lov
										        	  xtype: 'ux.form.field.remotecombobox',
										        	  margin:'10',
										        	  maxWidth:500,
										              name: 'originProdSearch',
										              fieldLabel: 'Product',
										              displayField: 'pdtDescription',
										              valueField: 'pdtCode',
										              store: {
										                   type: 'product.products'
										                 },				                  
										               editable: true,
										               forceSelection: true,   
										               emptyText:'select product',
										               minChars: 0,
										               allowBlank:true
										          },
										          {
										        	  //original grid lov
										        	  xtype:'swap.originlist', 
										          }
										          
										          ]
					        	       }
					        	       ]
					        },
					        {
					        	//holds the swap items(prod lov and grid)
					        	xtype:'panel',
					        	flex:1,
					        	title:'Swap Item(s)',
					        	items:[
					        	       {
					        	    	   xtype: 'container',
					        	    	   layout:'fit',
										   items:[
										          {
										        	  //original product lov
										        	  xtype: 'ux.form.field.remotecombobox',
										        	  margin:'10',
										        	  maxWidth:500,
										              name: 'swapProdSearch',
										              fieldLabel: 'Product',
										              displayField: 'pdtDescription',
										              valueField: 'pdtCode',
										              store: {
										                   type: 'product.products'
										                 },				                  
										               editable: true,
										               forceSelection: true,   
										               emptyText:'select product',
										               minChars: 0,
										               allowBlank:true
										          },
										          {
										        	  //original grid lov
										        	  xtype:'swap.swaplist', 
										          }
										          ]
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