export default ($stateProvider) => {
    $stateProvider
        .state('root.repo', {
            url: '/repo',
            abstract: true,
            template: require('./repo.template.html'),
        });
};
