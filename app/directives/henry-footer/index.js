// import controller from './controller';

export default ngModule => {
    ngModule.directive('henryFooter', () => {
        require('./style.scss');

        return {
            // controller,
            scope: {
                // state: '=state',
                // login: '=login',
                // logout: '=logout',
            },
            template: require('./template.html'),
            // controllerAs: 'vm',
            // bindToController: true,
            // link: (scope, element, attrs, vm) => {
            // },
        };
    });
};

