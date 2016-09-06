Ext.define('InventoryApp.view.taskDelivery.TaskForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.taskDelivery.taskform',

    height: 300,
    width: 550,
    modal: true,
    requires: ['InventoryApp.util.Util',
               'InventoryApp.store.taskDelivery.TaskAssignees'
               ],
    layout:'fit',
    /*layout: {
        align: 'stretch',
        type: 'vbox'
    },*/
    title: 'Tasks',
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
    		
    		items: [
    		        {
    		            xtype: 'form',
    		            bodyPadding: 5,
    		            fieldDefaults: {
    		                allowBlank: false,
    		                labelAlign: 'right',
    		                labelWidth: 90,
    		                flex: 1,
    		                margins: 5
    		            },
	                    items:[
	                           	{
	                           		xtype:'fieldcontainer',
	                           		layout: 'hbox',
	                           		//margins: 5,
	                           		items: [
												{
												    xtype: 'hiddenfield',
												    fieldLabel: 'Label',
												    name: 'tskId'
												},
												{
												    xtype: 'hiddenfield',
												    fieldLabel: 'Label',
												    name: 'tskStatus'
												},
												{
					                                xtype: 'ux.form.field.remotecombobox',
					                                name: 'tskAccCode',
					                                itemId:'tskAccCode',
					                                fieldLabel: 'Customer',
					                                displayField: 'accName',
					                                valueField: 'accCode',
					                                store: {
					                                    type: 'account.accounts'
					                                },							                               
					                                editable: true,
					                                forceSelection: false,
					                                emptyText:'select a customer'					                                

					                            },
					                            {
												    xtype: 'datefield',
												    name: 'tskDate',
												    fieldLabel: 'Date',
												    format: 'd/m/Y',
												    vtype: 'daterange',
										            endDateField: 'tskCollectionDate',
										            itemId: 'tskDate'
												   },
	                           		        ]
	                           	},
	                           	{
	                           		xtype:'fieldcontainer',
	                           		layout: 'hbox',
	                           		//flex:2,
	                           		items:[ 
												{
													xtype:'textareafield',
													width:500,													
												    fieldLabel: 'Description',
												    name: 'tskDescription'    		                           
												}
	                           		       ]
	                           	},
		                        {
						        	   xtype:'fieldcontainer',
						        	   layout: 'hbox',
						        	   items:[      												
											   {
												xtype:'numberfield',
												name:'tskCost',					        	
												fieldLabel: 'Cost'	
												
											   }, 
											   {
											    xtype: 'datefield',
											    name: 'tskCollectionDate',
											    fieldLabel: 'Collection Date',
											    format: 'd/m/Y',
											   // vtype: 'daterange',
											    //startDateField: 'tskDate',
											    itemId: 'tskCollectionDate'
											   }
						        	          ]
						          },
						          {
		                           		xtype:'fieldcontainer',
		                           		layout: 'hbox',		                           		
		                           		items:[ 
													{
					                                xtype: 'ux.form.field.remotecombobox',
					                                name: 'tskTssgId',
					                                itemId:'tskTssgId',
					                                fieldLabel: 'Assignee',
					                                displayField: 'tssgName',
					                                valueField: 'tssgId',
					                                store: {
					                                    type: 'taskDelivery.taskassignees'
					                                },							                               
					                                editable: true,
					                                forceSelection: false,
					                                emptyText:'select assignee',
					                                

													},
													{
						    		                    xtype: 'button',
						    		                    text: 'Add',
						    		                    itemId: 'addAssignee',
						    		                    iconCls: 'add',
						    		                    margins: 5
						    		                }
		                           		       ]
		                           	},
	                           ]
    		        }
    		    ],
    		    dockedItems: [
    		        {
    		            xtype: 'toolbar',
    		           // flex: 1,
    		            dock: 'bottom',
    		            ui: 'footer',
    		            layout: {
    		                pack: 'end',
    		                type: 'hbox'
    		            },
    		            items: [
    						{
    						    xtype: 'button',
    						    text: 'Save',
    						    itemId: 'saveTaskForm',
    						    iconCls: 'save'
    						},
    		                {
    		                    xtype: 'button',
    		                    text: 'Cancel',
    		                    itemId: 'cancelTaskForm',
    		                    iconCls: 'cancel'
    		                }
    		                
    		            ]
    		        }
    		    ]
    	});
    	 me.callParent( arguments );
    }
    
});