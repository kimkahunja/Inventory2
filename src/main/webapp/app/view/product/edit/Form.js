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
        	//width:600,
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
                    title: 'Basic Properties',
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
                            name: 'pdtBarCode',
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
                           
                           {
                                xtype: 'gridpicker',
                                 name: 'pdtCategory',
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
                            },
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'pdtUnit',
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
                                fieldLabel: 'Strength'
                            }
                        ]
                    }
                       
                    ]
                },
                {
                	xtype: 'fieldset',
                    title: 'Price Details',
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
							    items: [
							        {
							            xtype: 'textfield',
							            name: 'pdtBp',
							            fieldLabel: 'Buying Price'
							        },
							        {
							            xtype: 'textfield',
							            name: 'pdtSp',
							            allowBlank: true,
							            fieldLabel: 'Selling Price'
							        }
							    ]
							}, 
                           ]
                },
                {
                	xtype: 'fieldset',
                    title: 'Additional Details',
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
                                       name: 'pdtVat',
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
                                       xtype: 'textfield',
                                       name: 'pdtMinLevel',
                                       allowBlank: true,
                                       fieldLabel: 'Minimum Level'
                                   },
                                   {
                                       xtype: 'textfield',
                                       name: 'pdtMaxLevel',
                                       allowBlank: true,
                                       fieldLabel: 'Maximum Level'
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
