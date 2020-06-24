Ext.define('ProjectManager.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'projectmanagementviewport',

    requires: ['ProjectManager.view.projects.Projects'],

    items: [{
        xtype: 'projects'
    }]
});