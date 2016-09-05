export default ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('root.repo', {
            url: '/repo',
            views: {
                'header@': {
                    template: require('../header/header.template.html'),
                },
                '@': {
                    template: require('./repo.template.html'),
                },
            },
        });
};
