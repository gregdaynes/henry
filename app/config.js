import 'angular-ui-router';

export default ngModule => {
    ngModule.config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/login');

        // $comileProvider.aHrefSanitizationWhitelist(/^\s*(data|https?|http):/);

        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                pageTitle: 'Meet Henry',
                views: {
                    header: { template: require('./views/header/template.html') },
                    // footer: { template: require('./views/footer/template.html') },
                },
            });
    });
};
