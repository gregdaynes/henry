import 'angular-ui-router';

export default ngModule => {
    ngModule.config(($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) => {
        $urlRouterProvider.otherwise('/welcome');
        
        // $comileProvider.aHrefSanitizationWhitelist(/^\s*(data|https?|http):/);
        
        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                pageTitle: 'Meet Henry',
            });
    });
};
