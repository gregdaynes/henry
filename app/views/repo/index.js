import controller from './controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.repo', {
            url: '/repo',
            current: 'repo',
            pageTitle: 'Repository',
            views: {
                '@': {
                    template: require('./template.html'),
                    controller,
                    controllerAs: 'vm',
                },
            },
            resolve: {
                user: $user => $user.get(),
                config: $config => $config.get(),
            },
        });
};
