import controller from './controller';

export default ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('root.repo.list', {
            url: '/list',
            current: 'list',
            pageTitle: 'Repository List',
            views: {
                breadcrumb: {
                    template: '<div breadcrumb></div>',
                },
                '': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./template.html'),
                },
            },
            resolve: {
                user: userService => userService.get(),
                config: configService => configService.get(),
            },
        });
};
