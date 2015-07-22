/**
 * Form used for creating and editing Products
 */
Ext.define('InventoryApp.view.product.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.product.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'InventoryApp.ux.form.field.RemoteComboBox',
        'InventoryApp.store.units.Units',
        'InventoryApp.store.location.Bins',
        'InventoryApp.store.categories.Categories',
        'InventoryApp.store.vat.Vat',
        'Ext.ux.Rixo.form.field.GridPicker'
    ],
    bodyPadding: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {        	
            fieldDefaults: {
                allowBlank: false,
                labelAlign: 'right',
                labelWidth: 90,
                flex: 1,
                margins: 5
            },
            /*defaults: {
                layout: 'hbox',
                margins: '0 10 0 10'                
            },*/
            items: [
                {
                    xtype: 'fieldset',
                    title: '<span style="font-size:13px;font-weight: bold;font-style: italic;">Basic Properties</span>',                    
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [{
                    	xtype:'fieldcontainer',
                    	fieldLabel: 'Name',
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items:[{                           
                            name: 'pdtShtDesc',
                            fieldLabel: 'Bar Code/Prod Code',
                            emptyText: 'Product Code',
                            flex:2
                        },
                        {                           
                            name: 'pdtDescription',
                            fieldLabel: 'Description',
                            emptyText: 'Product Description',
                            flex:4
                        }
                        ],
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        combineErrors: true,
                        //defaultType: 'gridpicker',                        
                        items: [						
                           
                           /*{
                                xtype: 'gridpicker',
                                 name: 'pdtCatCode',
                                fieldLabel: 'Category',
                                displayField: 'catDescription',
                                valueField: 'catCode',
                                store: {
                                    type: 'categories.categories'
                                },
                                editable: false,
                                forceSelection: true,   
                                emptyText:'select product category',
                                minChars: 0,                           
                                gridConfig: {
                                	columns: [
                                	          {
                                	        	  xtype: 'rownumberer'
                                	          },
                                	          {
                                					dataIndex: 'catDescription'
                                					,flex: 1
                                				}
                                	          ],
                        	      	// Filtering logic
                        			listeners: {
                        					single: true
                        					,afterrender: function() {
                        						var grid = this,
                        							store = this.getStore(),
                        							filters = {};
                        						grid.query('button').forEach(function(button) {
                        							button.on('toggle', function(button, pressed) {
                        								filters[button.text] = pressed;
                        								store.filter(function(record) {
                        									return filters[record.get('catDescription').substr(0, 3)] !== false;
                        								});
                        								grid.doLayout(); // update grid height
                        							});
                        						});
                        					}
                        				}     	          
                                	        
                                }
                            },*/
                           {
                        	   xtype: 'ux.form.field.remotecombobox',
                               name: 'pdtCatCode',
                                fieldLabel: 'Category',
                                displayField: 'catDescription',
                                valueField: 'catCode',
                                store: {
                                    type: 'categories.categories'
                                },
                                editable: false,
                                forceSelection: true,   
                                emptyText:'select product category',
                                minChars: 0, 
                            },
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'pdtUntCode',
                                fieldLabel: 'Unit Measure',
                                displayField: 'untDescription',
                                valueField: 'untCode',
                                store: {
                                    type: 'units.units'
                                },
                                editable: false,
                                forceSelection: true,
                                emptyText:'select unit of measure'
                            }
                        ]
                    } ,

                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        combineErrors: true,
                        items: [                        
                            {
                                xtype: 'textfield',
                                name: 'pdtStrength',
                                allowBlank: true,
                                fieldLabel: 'Strength',
                                emptyText:'select product strength' 	
                            },
                            {
                                xtype: 'displayfield',
                                name: 'pdtCurrentQty',
                                fieldLabel: 'Current Qty',
                                value:'0',
                                fieldStyle: 'background-color: #ddd; background-image: none;'
                            }
                        ]
                    }
                       
                    ]
                },
                {
                	xtype: 'fieldset',
                    title: '<span style="font-size:13px;font-weight: bold;font-style: italic;">Price Details</span>',                  
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },	
                    items:[
							{
							    xtype: 'fieldcontainer',
							    layout: 'hbox',
		                        combineErrors: true,
							    items: [
							        {
							            xtype: 'numberfield',
							            name: 'pdtBp',
							            fieldLabel: 'Buying Price',
							            minValue: 0
							        },
							        {
							            xtype: 'numberfield',
							            name: 'pdtSp',
							            allowBlank: true,
							            fieldLabel: 'Selling Price',
							            minValue: 0
							        },
							        {
							            xtype: 'numberfield',
							            name: 'pdtProfitPct',
							            allowBlank: true,
							            fieldLabel: 'Profit %',
							            minValue: 0
							        }
							    ]
							}, 
                           ]
                },
                {
                	xtype: 'fieldset',
                    title: '<span style="font-size:13px;font-weight: bold;font-style: italic;">Additional Details</span>',
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },	
                    items:[
							{
							    xtype: 'fieldcontainer',
							    layout: 'hbox',
							    combineErrors: true,
							    //defaultType: 'gridpicker',                        
							    items: [
							        {
							            xtype: 'ux.form.field.remotecombobox',
							            name: 'pdtLocCode',
							            fieldLabel: 'Main Location',
							            displayField: 'locShtDesc',
							            valueField: 'locCode',
							            store: {
							                type: 'location.locations'
							            },
							            editable: false,
							            emptyText: 'Select Product Main Location...',
							           // forceSelection: true
							        },
							        {
							            xtype: 'ux.form.field.remotecombobox',
							            name: 'pdtSlocCode',
							            itemId:'pdtSlocCode',
							            fieldLabel: 'Secondary Location',
							            displayField: 'slocShtDesc',
							            valueField: 'slocCode',
							            //queryMode:'remote',
							            store: {
							                type: 'location.bins'
							            },
							            editable: false,
							            emptyText: 'Select Product Secondary Location...',
							            disabled: true,
							            //forceSelection: true
							        },
							        {
							            xtype: 'hiddenfield',
							            name: 'pdtStatus',
							            value: 'ACTIVE'
							        },
							        {
							            xtype: 'hiddenfield',
							            name: 'pdtCurrentQty',
							            value: 0
							        },
							        {
							            xtype: 'hiddenfield',
							            name: 'pdtAmount',
							            value: 0
							        },
							        {
							            xtype: 'hiddenfield',
							            name: 'pdtCode'							            
							        }
							    ]
							}, 
                           {
                               xtype: 'fieldcontainer',
                               layout: 'hbox',
		                       combineErrors: true,
                               items: [
                                   
                                   {
                                       xtype: 'ux.form.field.remotecombobox',
                                       name: 'pdtVatId',
                                       fieldLabel: 'Tax Category',
                                       displayField: 'vatDescription',
                                       valueField: 'vatId',
                                       store: {
                                           type: 'vat.vat'
                                       },
                                       editable: false,
                                       forceSelection: true
                                   },
                                   {
                                       xtype: 'numberfield',
                                       name: 'pdtMinLevel',
                                       allowBlank: true,
                                       fieldLabel: 'Minimum Level',
                                       minValue: 0
                                   },
                                   {
                                       xtype: 'numberfield',
                                       name: 'pdtMaxLevel',
                                       allowBlank: true,
                                       fieldLabel: 'Maximum Level',
                                       minValue: 0
                                   }
                               ]
                           },
                           ]
                }             
               
            ]
        });
        me.callParent( arguments );
    }
});
