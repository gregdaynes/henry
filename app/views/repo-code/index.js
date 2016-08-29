import controller from './repo-code.controller';

export default ($stateProvider) => {
    require('codemirror/lib/codemirror.css');
    require('codemirror/theme/neo.css');

    $stateProvider
        .state('root.repo.code', {
            url: '/code',
            current: 'code',
            pageTitle: 'View Code',
            views: {
                breadcrumb: {
                    template: '<div breadcrumb></div>',
                },
                '': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./repo-code.template.html'),
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