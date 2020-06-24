Ext.define('ProjectManager.view.projects.Projects', {
    extend: 'Ext.Container',
    xtype: 'projects',

    viewModel: 'projects',

    requires: ['ProjectManager.viewmodel.projects.Projects'],
    
    items: [{
        xtype: 'treepanel',
        bind: {
            store: '{projectsStore}'
        }
    }]
});