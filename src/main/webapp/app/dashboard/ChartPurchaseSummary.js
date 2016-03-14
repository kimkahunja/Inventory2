Ext.define('InventoryApp.dashboard.ChartPurchaseSummary', {
	extend: 'Ext.panel.Panel',
    alias: 'widget.dashboard.chartpurchasesummary',
    requires: [
               'Ext.data.JsonStore',
               'Ext.chart.theme.Base',
               'Ext.chart.series.Series',
               'Ext.chart.series.Line',
               'Ext.chart.axis.Numeric',
               'Ext.chart.series.Bar',
               'InventoryApp.store.reporting.ChartDataPurchases'
           ],
   initComponent: function(){
	   Ext.apply(this, {
		   layout: 'fit',
           height: 300,
           items:[
					{
						 xtype: 'chart',
						 animate: true,
						 store: {
				                type: 'reporting.chartdatapurchases'
				            },
				            axes: [{
				                type: 'Numeric',
				                position: 'bottom',
				                fields: ['value'],
				                label: {
				                    renderer: Ext.util.Format.numberRenderer('0,0')
				                },
				                title: 'Total Purchases',
				                grid: true,
				                minimum: 0
				            }, {
				                type: 'Category',
				                position: 'left',
				                fields: ['label'],
				                title: 'Months',
				                label: {
				                    rotate: {
				                     degrees: -45
				                    },
				                    renderer: function(s) {
				                     return Ext.String.ellipsis(s,10);    
				                    }
				                   }
				            }],
				            series: [{
				                type: 'bar',
				                axis: 'bottom',
				                highlight: true,
				                tips: {
				                  trackMouse: true,
				                  width: 140,
				                  height: 28,
				                  renderer: function(storeItem, item) {
				                    this.setTitle(storeItem.get('label') + ': ' + storeItem.get('value') + ' Kshs.');
				                  }
				                },
				                label: {
				                  display: 'insideEnd',
				                    field: 'value',
				                    //renderer: Ext.util.Format.numberRenderer('0'),
				                    orientation: 'horizontal',
				                    color: '##333',
				                    'text-anchor': 'middle'
				                },
				                xField: 'label',
				                yField: 'value'
				            }]	 
						}
                  ]
	   });
    this.callParent(arguments);   
   }
});