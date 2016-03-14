Ext.define('InventoryApp.store.reporting.ChartDataPurchases', {
 extend: 'Ext.data.Store',
 alias: 'store.reporting.chartdatapurchases',
 fields: [
  { name: 'label'},
  { name: 'value', type: 'float'}
 ],
 remoteFilter: true,
 autoLoad: true,
 proxy: {
   type: 'ajax',
   url: 'purchase/fetchPurchaseSummary.action',
   reader: {
       type: 'json',
       totalProperty: 'data.count',
       root: 'data.data',
       successProperty: 'success'
   }
 }
});