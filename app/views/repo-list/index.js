import controller from './controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.repo.list', {
            url: '/list',
            current: 'list',
            pageTitle: 'Repository List',
            views: {
                '@': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./template.html'),
                },
            },
            resolve: {
                user: $user => $user.get(),
                config: $config => $config.get(),
            },
        });
};
