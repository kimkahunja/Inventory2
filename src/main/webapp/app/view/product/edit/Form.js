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
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            defaults: {
                layout: 'hbox',
                margins: '0 10 0 10'                
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'pdtBarCode',
                            fieldLabel: 'Bar Code/Prod Code'
                        },
                        {
                            xtype: 'textfield',
                            name: 'pdtDescription',
                            fieldLabel: 'Description'
                        }
                       
                    ]
                },
                {
                    xtype: 'fieldcontainer',
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
                {
                    xtype: 'fieldcontainer',
                    items: [
							
                       /* {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'pdtCategory',
                            fieldLabel: 'Category',
                            displayField: 'catDescription',
                            valueField: 'catCode',                           
                            store: {
                                type: 'categories.categories'
                            },
                           // editable: false,
                           // forceSelection: true
                        },*/
                       {
                            xtype: 'gridpicker',
                             name: 'pdtCategory',
                            fieldLabel: 'Category1111',
                            displayField: 'catDescription',
                            valueField: 'catCode',
                            store: {
                                type: 'categories.categories'
                            },
                            editable: false,
                            forceSelection: true,   
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
                            displayField: 'untDesc',
                            valueField: 'untCode',
                            store: {
                                type: 'units.units'
                            },
                            editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'pdtBinLoc',
                            fieldLabel: 'Bin Location',
                            displayField: 'lbnShtDesc',
                            valueField: 'lbnCode',
                            store: {
                                type: 'location.bins'
                            },
                            editable: false,
                            forceSelection: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
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
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'pdtExpireDate',
                            fieldLabel: 'Expiry Date',
                           // format: 'd/m/Y',                         
                            allowBlank: true,
                        },
                        {
                            xtype: 'textfield',
                            name: 'pdtStrength',
                            allowBlank: true,
                            fieldLabel: 'Strength'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});