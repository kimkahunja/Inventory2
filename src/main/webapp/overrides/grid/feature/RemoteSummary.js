Ext.define('overrides.grid.feature.RemoteSummary', {
	override: 'Ext.grid.feature.Summary',
	// adds 'remote' summary type
    getSummary: function (store, type, field, group) {
        if (type === 'remote') {
            return this.getRemoteSummaryRecord(store).get(field);
        } else {
            return this.callParent(arguments);
        }
    },

    // helper for our custom summary type, mainly copied from:
    // http://docs.sencha.com/extjs/4.2.3/source/AbstractSummary.html#Ext-grid-feature-AbstractSummary-method-generateSummaryData
    getRemoteSummaryRecord: function(store) {
        if (!this.remoteSummaryRecord) {
            var reader = store.proxy.reader,
                remoteRoot = this.remoteRoot,
                root;

            if (remoteRoot && reader.rawData) {
                root = reader.root;
                reader.root = remoteRoot;
                reader.buildExtractors(true);

                this.remoteSummaryRecord = reader.read(reader.rawData).records[0];

                if (!reader.convertRecordData) {
                    reader.buildExtractors();
                }

                reader.root = root;
                reader.buildExtractors(true);
            }
        }
        if (!this.remoteSummaryRecord) {
            this.remoteSummaryRecord = store.model.create({});
        }
        return this.remoteSummaryRecord;
    },

    // ensure our remoteSummaryRecord stays fresh
    onStoreUpdate: function() {
        delete this.remoteSummaryRecord;
        return this.callParent(arguments);
    }
});