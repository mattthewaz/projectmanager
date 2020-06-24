Ext.define('ProjectManager.viewmodel.projects.Projects', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.projects',

    requires: ['ProjectManager.model.Task'],

    stores: {
        projectsStore: {
            type: 'tree',
            model: 'ProjectManager.model.Task'
        }
    }
});