
export default ($stateProvider) => {
    $stateProvider
        .state('root.repo.breadcrumb', {
            url: '/repo',
            views: {
                'breadcrumb@root.repo': {
                    template: require('./template.html'),
                },
            },
        });
};
