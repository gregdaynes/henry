import appHeaderController from './app-header';

export default function (ngModule) {
    ngModule.directive('appHeader', () => {
        require('./app-header.scss');

        return {
            restrict: 'AE',
            template: require('./app-header.html'),
            controllerAs: 'vm',
            controller: appHeaderController,
        };
    });
}
