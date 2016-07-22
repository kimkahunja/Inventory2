Ext.define('InventoryApp.view.reports.comprehensive.Parameters',{
	extend:'Ext.form.Panel',
	alias:'widget.reports.comprehensive.parameters',
	requires: [
	           
	       ],	
	bodyPadding: 5,	
    initComponent: function() {
    	
       var me = this;
       Ext.apply(Ext.form.field.VTypes, {
    	   daterange: function(val, field) {
               var date = field.parseDate(val);

               if (!date) {
                   return false;
               }
              // console.log('my date=== '+date);
               if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                   var start = field.up('form').down('#' + field.startDateField);
                   start.setMaxValue(date);
                   start.validate();
                   this.dateRangeMax = date;
               }
               else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                   var end = field.up('form').down('#' + field.endDateField);
                   end.setMinValue(date);
                   end.validate();
                   this.dateRangeMin = date;
               }
               /*
                * Always return true since we're only using this vtype to set the
                * min/max allowed values (these are tested for after the vtype test)
                */
               return true;
           },
       }),
       Ext.applyIf(me,{ 	   
    	   
    	   fieldDefaults: {
    		   allowBlank: true,
    		  // margins: 5,
    		   labelAlign: 'right',
               labelWidth: 90,
               margin: '0 0 10 0 '
    	   },
    	   //margin: '5 5 5 5 ',
    	  items:[
					{
					    xtype: 'container',
					    layout: 'hbox',                        
					    items: [
								{
								    xtype: 'datefield',
								    name: 'compParamFrom',
								    fieldLabel: 'Date From',
								    itemId: 'compDateFrom',
								    format: 'd/m/Y', 
								    minWidth:150,
								    vtype: 'daterange',
						            endDateField: 'compDateTo',
						            hidden:InventoryApp.Utilities.hideDateRange
								},
								{
								    xtype: 'datefield',
								    name: 'compParamTo',
								    fieldLabel: 'Date To',
								    itemId: 'compDateTo',
								    format: 'd/m/Y',
								    minWidth:150,
								    vtype: 'daterange',
								    startDateField: 'compDateFrom',
								    hidden:InventoryApp.Utilities.hideDateRange
								},
								{
				                     xtype: 'combobox',
				                     name: 'compParamStatus',
				                     fieldLabel: 'Status',
				                     displayField: 'description',
				                     valueField: 'id',
				                     queryMode: 'local',
				                     //value:null,
				                     store:{
				                         type: 'standard.status',
				                         autoLoad: true, 	
				                     },
				                     editable: false,
				                     forceSelection: false,
				                     emptyText:'select a Status',
				                     minWidth:100,
				                     hidden:InventoryApp.Utilities.hideStatus
				                 }
					    ]
					},
   	          {
                     xtype: 'ux.form.field.remotecombobox',
                     name: 'compAccCodeRpt',
                     fieldLabel: 'Supplier',
                     displayField: 'accName',
                     valueField: 'accCode',                                
                     store: {
                         type: 'account.accountssupplier'
                     },
                     editable: false,
                     forceSelection: false,
                     emptyText:'select a supplier',
                     //hidden:true,
                     minWidth:250,
                     hidden:InventoryApp.Utilities.hideSupplier
                 },
                 {
               	     xtype: 'ux.form.field.remotecombobox',
                      name: 'compPdtCodeRpt',
                       fieldLabel: 'Product',
                       displayField: 'pdtDescription',
                       valueField: 'pdtCode',
                       store: {
                           type: 'product.products'
                       },
                       editable: true,
                       forceSelection: false,   
                       emptyText:'select product',
                       minChars: 0, 
                      // hidden:true,
                       minWidth:350, 
                       hidden:InventoryApp.Utilities.hideProduct
                   }
                 				          
		          
			       
				
                ] ,  
    	   dockedItems: [
                         {
                             xtype: 'toolbar',
                             dock: 'bottom',
                             defaultAlign:'right',
                             ui: 'footer',
                             items: [
                                     {
										    xtype:'tbspacer',
										    flex:2
										},
                                     
	               						 {
	          					            xtype: 'button',
	          					           itemId: 'printComprehensiveReport',
	          					            text:'Print Report',
	          					            iconCls: 'icon_report',
	          					          
	          					        },
	                                   ]
                         },
                        
                     ]         
    	                  
       });
       me.callParent( arguments );
   }        
});