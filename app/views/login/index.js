import controller from './login.controller';

export default ($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('root.login', {
            url: '/login',
            current: 'login',
            pageTitle: 'Login',
            views: {
                '@': {
                    controller,
                    controllerAs: 'vm',
                    template: '<login-form state="vm.authorized" login="vm.login" logout="vm.logout"></login-form>',
                },
            },
        });
};
