export default ngModule => {
    ngModule.directive('siteFooter', () => {
        require('./site-footer.style.scss');

        return {
            scope: {},
            template: require('./site-footer.template.html'),
            // controllerAs: 'vm',
            // bindToController: true,
            // link: (scope, element, attrs, vm) => {
                // console.log(scope, element, attrs, vm);
            // },
        };
    });
};

