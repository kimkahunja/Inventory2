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
       var me = this,
       code=false,
       name=false,
       bp=false,
       sp=false,
       qty=false,
       unit=false,
       cat=false,
       mainLoc=false,
       secLoc=false,
       tax=false,
       status=false;
       var storeA = Ext.create('InventoryApp.store.systemAreas.SystemAreas', {
		    storeId: 'SystemAreas1'
		});
       storeA.load(function() {
    	    storeA.each(function(record){
    	    	//console.log('column== '+record.get('ctadColumn'));
    	        switch(record.get('ctadColumn')){
    	        	case 'CODE':
    	        		code=record.get('_ctadIsvisible');
    	        		break;
    	        	case 'NAME':
    	        		name=record.get('_ctadIsvisible');
    	        		 //console.log('name==in '+name);
    	        		break;
    	        	case 'BP':
    	        		bp=record.get('_ctadIsvisible');
    	        		 me.columns[2].setVisible(bp);
    	        		// console.log('bp==in '+bp );
    	        		break;
    	        	case 'SP':
    	        		sp=record.get('_ctadIsvisible');
    	        		me.columns[3].setVisible(sp);
    	        		break;	
    	        	case 'QTY':
    	        		qty=record.get('_ctadIsvisible');
    	        		me.columns[4].setVisible(qty);
    	        		break;
    	        	case 'UNIT':
    	        		unit=record.get('_ctadIsvisible');
    	        		me.columns[5].setVisible(unit);
    	        		break;
    	        	case 'CAT':
    	        		cat=record.get('_ctadIsvisible');
    	        		me.columns[6].setVisible(cat);
    	        		break;
    	        	case 'MAINLOC':
    	        		mainLoc=record.get('_ctadIsvisible');
    	        		me.columns[7].setVisible(mainLoc);
    	        		break;
    	        	case 'SECLOC':
    	        		secLoc=record.get('_ctadIsvisible');
    	        		me.columns[8].setVisible(secLoc);
    	        		break;
    	        	case 'TAX':
    	        		tax=record.get('_ctadIsvisible');
    	        		me.columns[9].setVisible(tax);
    	        		break;
    	        	case 'STATUS':
    	        		status=record.get('_ctadIsvisible');
    	        		me.columns[12].setVisible(status);
    	        		break;
    	        }
    	    });
    	    

    	   
    	   
    	});
      // console.log('name== '+name+' bp== '+bp);
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
					    text: 'Code',
					    dataIndex: 'pdtShtDesc',
					    filter: true,
					    hidden:code
					}, 
                    {
                        text: 'Name',
                        dataIndex: 'pdtDescription',
                        /*renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return value + '- ' + record.get( 'pdtShtDesc' );
                        },*/
                        width: 200,
                        filter: true,
                        hidden:name
                    },                   
                    {
                        text: 'BP',
                        dataIndex: 'pdtBp',
                        filter: true,
                        hidden:bp
                    },
                    {
                        text: 'SP',
                        dataIndex: 'pdtSp',                       
                        filter: true,
                        hidden:sp
                    },
                    
                    {
                        text: 'Current Quantity',
                        dataIndex: 'pdtCurrentQty',
                        filter: true,
                        hidden:qty
                    },                    
                    
                    {
                        text: 'Unit Measure',
                        dataIndex: '_pdtUntCode',                        
                        filter: 'combo',
                        hidden:unit
                    },
                    {
                    	text:'Category',
                    	dataIndex:'_pdtCatCode',
                    	hidden:cat
                    	//filter: 'combo'
                    },
                    {
                        text: 'Main Location',
                        dataIndex: '_pdtLocCode',
                        hidden:mainLoc
                       // filter: 'combo'
                    },
                    {
                        text: 'Secondary Location',
                        dataIndex: '_pdtSlocCode',
                        hidden:secLoc
                        //filter: 'combo'
                    },
                    {
                        text: 'TAX',
                        dataIndex: '_pdtVatId',
                        hidden:tax
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
                        dataIndex: 'pdtStatus',
                        hidden:status	
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
                       },
                       {
                           xtype: 'button',
                           itemId: 'deleteProduct',
                           iconCls: 'delete',
                           text: 'Delete'
                       },
                       {
                           xtype: 'button',
                           itemId: 'customize',
                           iconCls: 'icon_feature',
                           text: 'Customize Columns'
                       },
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