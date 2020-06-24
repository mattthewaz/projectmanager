Ext.define('ProjectManager.model.Task', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        url: '/task'
    }
});