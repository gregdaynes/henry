import appFooterController from './app-footer';

export default ngModule => {
    ngModule.directive('appFooter', () => {
        require('./app-footer.scss');

        return {
            restrict: 'AE',
            template: require('./app-footer.html'),
            controllerAs: 'vm',
            controller: appFooterController,
        };
    });
};
