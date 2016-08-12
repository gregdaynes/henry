import controllerHelloWorld from './hello-world.js';

export default ngModule => {
    ngModule.directive('helloWorld', () => {
        require('./hello-world.scss');

        return {
            restrict: 'AE',
            template: require('./hello-world.html'),
            controllerAs: 'vm',
            controller: controllerHelloWorld,
        };
    });
};
