export default function BreadcrumController($scope, breadcrumbService) {
    'ngInject';

    const vm = this;
    vm.currentPath = [];

    vm.jumpToIndex = jumpToIndex;

    init();

    breadcrumbService.onUpdate($scope, (data) => prepareBreadcrumbs(data));

    function init() {
        return breadcrumbService.get()
            .then(response => prepareBreadcrumbs(response));
    }

    function prepareBreadcrumbs(path) {
        if (path) vm.currentPath = path.split('/');
    }

    function jumpToIndex(index, root) {
        let newPath = [];

        if (!root) newPath = vm.currentPath.slice(0, index + 1);

        vm.currentPath = newPath;
        breadcrumbService.set(newPath.join('/'));
    }
}
