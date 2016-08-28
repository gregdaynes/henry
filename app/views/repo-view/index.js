import controller from './repo-view.controller';

export default ($stateProvider) => {
    require('codemirror/lib/codemirror.css');
    require('codemirror/theme/neo.css');

    $stateProvider
        .state('root.repo.view', {
            url: '/view',
            current: 'view',
            pageTitle: 'View File',
            views: {
                breadcrumb: {
                    template: '<div breadcrumb></div>',
                },
                '': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./repo-view.template.html'),
                },
            },
            params: {
                file: null,
            },
            resolve: {
                user: $user => $user.get(),
                config: $config => $config.get(),
                file: ($stateParams) => $stateParams.file,
            },
        });
};
