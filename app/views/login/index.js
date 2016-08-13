import controller from './login';

export default ($stateProvider) => {
    $stateProvider
        .state('root.login', {
            url: '/login',
            current: 'login',
            pageTitle: 'Login',
            views: {
                '@': {
                    template: require('./login.html'),
                    controller,
                    controllerAs: 'vm',
                },
            },
        });
};
