Ext.define('InventoryApp.view.swap.SwapMainContainer',{
	extend:'Ext.form.Panel',
	alias:'widget.swap.swapmaincontainer',
	requires: [	 
	           'InventoryApp.view.swap.SwapHeader',
	           'InventoryApp.view.swap.ListHolder'
	       ],
   initComponent: function() {
	   var me = this;
	   Ext.applyIf(me,{
    	   
    	   items:[
					{
						   xtype:'container',
						   layout: 'vbox',
						   items:[											
									{
										xtype:'swap.swapheader', 
									},
						          ],
					},
					/*{
		        	   xtype:'swap.listholder'
		            }*/
					{
						xtype: 'panel',					    
					    frame:true,
					    border:1,
					    //width:500,
					    style: {
					        borderColor: '#E6E6E6',
					        borderStyle: 'solid'
					    },
					    items:[
					           {
					        	   xtype:'swap.listholder'
					           }
					           ]
					},
					{
		           		xtype:'container',
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
								           itemId: 'swapPost',
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