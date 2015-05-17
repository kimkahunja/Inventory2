/**
 * Abstract REST proxy 
 */
Ext.define('InventoryApp.proxy.Rest', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.baserest',
   // format: 'json',
    limitParam: 'limit',
    startParam: 'start',
    sortParam: 'sortorder',
    writer: {
        type: 'json',
        writeAllFields: true
    },
    reader: {
        type: 'json',
        root: 'data',
        totalProperty: 'count',
        successProperty: 'success'
    },
    afterRequest: function( request, success ) {
        var me = this;
        // fire requestcomplete event
        me.fireEvent( 'requestcomplete', request, success );
    }
});