Ext.define('InventoryApp.controller.GridToGrid', {
	extend: 'Ext.app.Controller',
	 views: [
	     	'dragNdrop.GridToGrid'
	     ],
	 refs: [
	    	{
	            ref: 'Grid2List',
	            selector: '[xtype=grid2]'
	        }
	    ],
	 init: function () {
	        this.control({
	            'grid#grid2 dataview': {
	               // itemdblclick: this.editUser,
	                drop: this.dropit
	             
	            },
	            'grid#grid2': {
	                //edit: this.inlineUpdateUser,
	                drop: this.dropit
	            }
	        });
	    },

	    dropit:  function(node, data, dropRec, dropPosition) { 
	    	var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
	       // alert("in");
	    	 console.log('dropRec== '+dropRec+' dropPosition == '+data.records[0].get('name')+'col1=='+data.records[0].get('column1'));	
	    },
});