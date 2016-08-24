import controller from './login.controller';

export default ($stateProvider) => {
    $stateProvider
        .state('root.login', {
            url: '/login',
            current: 'login',
            pageTitle: 'Login',
            views: {
                '@': {
                    controller,
                    controllerAs: 'vm',
                    template: require('./login.template.html'),
                },
            },
        });
};
