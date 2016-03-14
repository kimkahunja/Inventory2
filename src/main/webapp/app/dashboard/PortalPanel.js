/**
 * @class Ext.app.PortalPanel
 * @extends Ext.panel.Panel
 * A {@link Ext.panel.Panel Panel} class used for providing drag-drop-enabled portal layouts.
 */
Ext.define('InventoryApp.dashboard.PortalPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboard.portalpanel',

    requires: [
        'Ext.layout.container.Column',
        'InventoryApp.dashboard.PortalDropZone',
        'InventoryApp.dashboard.PortalColumn'
    ],
   
    cls: 'x-portal',
    bodyCls: 'x-portal-body',
    defaultType: 'dashboard.portalcolumn',
    autoScroll: true,

    manageHeight: false,

    initComponent : function() {
        var me = this;
        //console.log('ggggggggggggggggggggggggggggggggggggg..... ');
        // Implement a Container beforeLayout call from the layout to this Container
        this.layout = {
            type : 'column'
        };
        this.callParent();

        this.addEvents({
            validatedrop: true,
            beforedragover: true,
            dragover: true,
            beforedrop: true,
            drop: true
        });
    },

    // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
    beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length,
            firstAndLast = ['x-portal-column-first', 'x-portal-column-last'],
            i, item, last;

        for (i = 0; i < len; i++) {
            item = items[i];
            item.columnWidth = 1 / len;
            last = (i == len-1);

            if (!i) { // if (first)
                if (last) {
                    item.addCls(firstAndLast);
                } else {
                    item.addCls('x-portal-column-first');
                    item.removeCls('x-portal-column-last');
                }
            } else if (last) {
                item.addCls('x-portal-column-last');
                item.removeCls('x-portal-column-first');
            } else {
                item.removeCls(firstAndLast);
            }
        }

        return this.callParent(arguments);
    },
 // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
  /*  beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length, //len is the number of columns specified
            i = 0,
            item,
            mainColIndex = 0, //the index of the main column that we want to take up the most space
            mainColWidth = .55; //the % of space we want our main column to take up
        console.log('lenght==== '+len);
        for (; i < len; i++) {
            item = items[i];

            if(i===mainColIndex)
            {
                item.columnWidth = mainColWidth;
            }else{
                item.columnWidth = (1-mainColWidth) / (len -1);
            }

            item.removeCls(['x-portal-column-first', 'x-portal-column-last']);
        }
        items[0].addCls('x-portal-column-first');
        items[len - 1].addCls('x-portal-column-last');
        return this.callParent(arguments);
    },*/
    // private
    initEvents : function(){
    	console.log('initEvents..... ');
        this.callParent();
        this.dd = Ext.create('InventoryApp.dashboard.PortalDropZone', this, this.dropConfig);
    },

    // private
    beforeDestroy : function() {
        if (this.dd) {
            this.dd.unreg();
        }
        this.callParent();
    }
});
