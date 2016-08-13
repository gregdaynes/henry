import controller from './auth.js';

export default ngModule => {
    ngModule.directive('auth', () => {
        require('./auth.scss');

        return {
            controller,
            restrict: 'E',
            template: require('./auth.html'),
            controllerAs: 'vm',
        };
    });
};
