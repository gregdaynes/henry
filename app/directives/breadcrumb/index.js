import controller from './breadcrumb.controller.js';

export default ngModule => {
    ngModule.directive('breadcrumb', () => {
        require('./breadcrumb.style.scss');

        return {
            controller,
            scope: {
            },
            template: require('./breadcrumb.template.html'),
            controllerAs: 'vm',
            bindToController: true,
            // link: (scope, element, attrs, vm) => {
                // console.log(scope, element, attrs, vm);
            // },
        };
    });
};

