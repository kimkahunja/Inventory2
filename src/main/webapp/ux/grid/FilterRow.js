Ext.define('Ext.ux.grid.FilterRow', {
	extend:'Ext.util.Observable',
	
	init: function(grid) {
		this.grid = grid;
		this.applyTemplate();
		
		// when Ext grid state restored (untested)
		grid.on("staterestore", this.resetFilterRow, this);
		
		// when column width programmatically changed
		grid.headerCt.on("columnresize", this.resizeFilterField, this);
		
		grid.headerCt.on("columnmove", this.resetFilterRow, this);
		grid.headerCt.on("columnshow", this.resetFilterRow, this);
		grid.headerCt.on("columnhide", this.resetFilterRow, this);	
		
		grid.horizontalScroller.on('bodyscroll', this.scrollFilterField, this);
	},
	
	
	applyTemplate: function() {
		
		var searchItems = [];
		this.eachColumn( function(col) {
			var filterDivId = this.getFilterDivId(col.id);
			
			if (!col.filterField) {
				if(col.nofilter) {
					col.filter = { };
				} else if(!col.filter){
					col.filter = { };
					col.filter.xtype = 'textfield';
				}
				//console.log(col);
				col.filter = Ext.apply({								
					id:filterDivId,
					hidden:col.hidden,
					xtype:'component',
					cls: "small-editor filter-row-icon",
					width:col.width-2,
					enableKeyEvents:true,
					style:{
						margin:'1px 1px 1px 1px'
					}
				}, col.filter);
				
				col.filterField = Ext.ComponentManager.create(col.filter);
				
			} else {
				if(col.hidden != col.filterField.hidden) {
					col.filterField.setVisible(!col.hidden);
				}
			}
			
			if(col.filterField.xtype == 'combo' || col.filterField.xtype == 'datefield') {
				col.filterField.on("change", this.onChange, this);
			} else {
				col.filterField.on("keypress", this.onKeyPress, this);
			}
			
			
			searchItems.push(col.filterField);
		});
		
		if(searchItems.length > 0) {
			this.grid.addDocked(this.dockedFilter = Ext.create('Ext.container.Container', {
				id:this.grid.id+'docked-filter',
				weight: 100,
				dock: 'top',
				border: false,
				baseCls: Ext.baseCSSPrefix + 'grid-header-ct',
				items:searchItems,
				layout:{
	                type: 'hbox'
	            }
			}));
		}
	},
	
	// Removes filter fields from grid header and recreates
	// template. The latter is needed in case columns have been
	// reordered.
	resetFilterRow: function() {
		this.grid.removeDocked(this.grid.id+'docked-filter', true);
		delete this.dockedFilter;
		this.applyTemplate();
	},
	
	onChange: function() {
		var values = {};
		this.eachColumn( function(col) {
			if(col.filterField.xtype != 'component') {
				values[col.dataIndex] = col.filterField.getValue();
			}
		});
		
		this.grid.store.load({
			params:{
				search:values
			}
		});
	},
	
	onKeyPress: function(field, e) {
		if(e.getKey() == e.ENTER) {
			
			var values = {};
			this.eachColumn( function(col) {
				if(col.filterField.xtype != 'component') {
					values[col.dataIndex] = col.filterField.getValue();
				}
			});
			
			this.grid.store.load({
				params:{
					search:values
				}
			});
		}
	},

	
	// When grid has forceFit: true, then all columns will be resized
	// when grid resized or column added/removed.
	resizeAllFilterFields: function() {
		//var cm = this.grid.getColumnModel();
		this.eachFilterColumn( function(col, i) {
			if(col.el) { var width = col.getWidth(); }
			else { var width = col.width; }
			this.resizeFilterField(this.grid.headerCt, col, width);
		});
	},
	
	// Resizes filter field according to the width of column
	resizeFilterField: function(headerCt, column, newColumnWidth) {
		var editor = column.filterField;
		editor.setWidth(newColumnWidth - 2);
	},
	
	scrollFilterField:function(e, target) {
		var width = this.grid.headerCt.el.dom.firstChild.style.width;
		this.dockedFilter.el.dom.firstChild.style.width = width;
		this.dockedFilter.el.dom.scrollLeft = target.scrollLeft;
	},
	
	// Returns HTML ID of element containing filter div
	getFilterDivId: function(columnId) {
		return this.grid.id + '-filter-' + columnId;
	},
	
	// Iterates over each column that has filter
	eachFilterColumn: function(func) {
		this.eachColumn( function(col, i) {
			if (col.filterField) {
				func.call(this, col, i);
			}
		});
	},
	
	// Iterates over each column in column config array
	eachColumn: function(func) {
		Ext.each(this.grid.columns, func, this);
	}
});