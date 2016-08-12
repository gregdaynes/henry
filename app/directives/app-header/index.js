import controller from './app-header.js';

export default ngModule => {
    ngModule.directive('appHeader', () => {
        require('./app-header.scss');

        return {
            restrict: 'E',
            template: require('./app-header.html'),
            controllerAs: 'vm',
            controller,
        };
    });
};
