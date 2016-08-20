import controller from './controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.listRepo', {
            url: '/list-repo',
            current: 'list-repo',
            pageTitle: 'Repository List',
            views: {
                '@': {
                    template: require('./template.html'),
                    controller,
                    controllerAs: 'vm',
                },
            },
            resolve: {
                user: function($user) {
                    return $user.get()
                        .then(response => response);
                },
            }
        });
};
