import controller from './settings.controller';

export default ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('root.settings', {
            url: '/settings',
            current: 'settings',
            pageTitle: 'Setings',
            views: {
                '@': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./settings.template.html'),
                },
            },
            resolve: {
                user: userService => userService.get(),
                config: configService => configService.get(),
            },
        });
};
