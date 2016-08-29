export default function BreadcrumController($scope, $breadcrumb) {
    'ngInject';

    const vm = this;
    vm.currentPath = [];

    vm.jumpToIndex = jumpToIndex;

    init();

    $breadcrumb.onUpdate($scope, (data) => {
        return prepareBreadcrumbs(data);
    });

    function init() {
        return $breadcrumb.get()
            .then(response => prepareBreadcrumbs(response));
    }

    function prepareBreadcrumbs(path) {
        if (path) vm.currentPath = path.split('/');
    }

    function jumpToIndex(index, root) {
        let newPath = [];

        if (!root) newPath = vm.currentPath.slice(0, index + 1);

        vm.currentPath = newPath;
        $breadcrumb.set(newPath.join('/'));
    }
}
