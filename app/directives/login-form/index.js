import controller from './login-form.controller';

export default ngModule => {
    ngModule.directive('loginForm', () => {
        require('./login-form.style.scss');

        return {
            controller,
            scope: {
                state: '=state',
                login: '=login',
                logout: '=logout',
            },
            template: require('./login-form.template.html'),
            controllerAs: 'vm',
            bindToController: true,
            // link: (scope, element, attrs, vm) => {
                // console.log(scope, element, attrs, vm);
            // },
        };
    });
};

