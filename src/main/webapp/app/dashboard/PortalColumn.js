/**
 * @class Ext.app.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Ext.app.PortalPanel}.
 */
Ext.define('InventoryApp.dashboard.PortalColumn', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard.portalcolumn',

    requires: [
        'Ext.layout.container.Anchor',
        'InventoryApp.dashboard.Portlet'
    ],

    layout: 'anchor',
    defaultType: 'dashboard.portlet',
    cls: 'x-portal-column'

    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
});