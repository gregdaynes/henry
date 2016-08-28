export default function BreadcrumController($scope, $breadcrumb) {
    const vm = this;
    vm.currentPath = ['/'];

    vm.jumpToIndex = jumpToIndex;

    init();

    $breadcrumb.onUpdate($scope, (data) => prepareBreadcrumbs(data));

    function init() {
        return $breadcrumb.get()
            .then(response => prepareBreadcrumbs(response));
    }

    function prepareBreadcrumbs(path) {
        if (!path) {
            vm.currentPath = ['/'];
            return;
        }

        vm.currentPath = path.split('/');

        if (vm.currentPath[0] !== '/') vm.currentPath.unshift('/');
    }

    function jumpToIndex(index) {
        vm.currentPath = vm.currentPath.slice(0, index);
    }
}
