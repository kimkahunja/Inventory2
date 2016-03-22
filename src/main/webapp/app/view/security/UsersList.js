Ext.define('InventoryApp.view.security.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',

    frame: true,
    store: Ext.create('InventoryApp.store.security.Users'),

    columns: [
        {
            width: 150,
            dataIndex: 'username',
            text: 'Username'
        },
        {
            width: 300,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
         dataIndex:'status'	,
         text:'Status'
        },
        {
            width: 150,
            dataIndex: 'groupId',
            text: 'Group',
            renderer: function(value, metaData, record ){
                var groupsStore = Ext.getStore('groups');
                var group = groupsStore.findRecord('id', value);
                return group != null ? group.get('name') : value;
            }
        },
        {
            width: 150,
            dataIndex: '_location',
            text: 'Location',
           /* renderer: function(value, metaData, record ){
                //var locationsStore = Ext.getStore('Locations');
            	var locationsStore=Ext.StoreMgr.lookup('location.Locations');
                var loc = locationsStore.findRecord('locCode', value);
               // console.log('location=== '+value);
                return loc != null ? loc.get('locShtDesc') : value;
            }*/
        }
    ]
});