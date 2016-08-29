export default ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('root.repo', {
            url: '/repo',
            views: {
                '@': {
                    template: require('./repo.template.html'),
                },
            },
        });
};
