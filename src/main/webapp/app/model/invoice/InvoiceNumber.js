/**
 * Model representing a InvoiceNumber object
 */

Ext.define('InventoryApp.model.invoice.InvoiceNumber',{
	extend:'InventoryApp.model.Base',
	idProperty: 'invoiceNumber',
	fields:[
	        {
	        	//Id field
	        	 name: 'invoiceNumber',
	             type: 'string',
	             useNull : false
	        },	        
	        
	        ],
});