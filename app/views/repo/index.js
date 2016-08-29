export default ($stateProvider) => {
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
