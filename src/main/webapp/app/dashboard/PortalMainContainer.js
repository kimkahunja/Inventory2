Ext.define('InventoryApp.dashboard.PortalMainContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard.portalmaincontainer',
    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, header, tool){
                var portlet = header.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    },
    initComponent: function(){
    	 //var content = '<div class="portlet-content">'+Ext.example.shortBogusMarkup+'</div>';
    	 Ext.apply(this, {
    		 items:[
    		        {
    		        	id: 'app-portal',
                        xtype: 'dashboard.portalpanel',
    		        	//xtype:'panel',
                        items:[{
		                            id: 'portlet-1',
		                            title: 'Grid Portlet',
		                            tools: this.getTools(),
		                            items: Ext.create('InventoryApp.dashboard.GridPortlet'),
		                            listeners: {
		                                'close': Ext.bind(this.onPortletClose, this)
		                            }
		                        },
									{
									    id: 'portlet-2',
									    title: 'Portlet 2',
									    tools: this.getTools(),
									    html: '<div id="titleHeader">Store Premier</div>',
									    listeners: {
									        'close': Ext.bind(this.onPortletClose, this)
									    }
									}
                               ],
                        
    		        }
    		        ],
    		 
    	 });
    	 this.callParent(arguments);
    },
    onPortletClose: function(portlet) {
        this.showMsg('"' + portlet.title + '" was removed');
    },

    showMsg: function(msg) {
        var el = Ext.get('app-msg'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg').hide();
        }
    }
});