/*
 * Store for managing VAT
 */
Ext.define('InventoryApp.store.vat.Vat',{
	extend:'Ext.data.Store',
	alias: 'store.vat.vat',
	requires:[
	          'InventoryApp.model.vat.Vat'
	          ],
	model:'InventoryApp.model.vat.Vat',  
	//restPath: 'resources/categories',
	storeId: 'Vat',
	//autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'vat/fetchVat.action',//'VatServlet',
        extraParams: {
            store_id: 4
        },
        reader: {
        	 type: 'json',           
             totalProperty: 'data.count',
             root: 'data.data',
             successProperty: 'success'
        },
     }
});
