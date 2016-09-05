import controller from './update-notification.controller';

export default ngModule => {
    ngModule.directive('updateNotification', () => {
        require('./update-notification.style.scss');

        return {
            controller,
            scope: {},
            template: require('./update-notification.template.html'),
            controllerAs: 'vm',
            bindToController: true,
            // link: (scope, element, attrs, vm) => {
                // console.log(scope, element, attrs, vm);
            // },
        };
    });
};

