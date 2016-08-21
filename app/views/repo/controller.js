export default function repoController($scope, $log, $user, $github, $location, $file, user, config) {
    const vm = this;

    vm.list = null;
    vm.currentPath = null;


    vm.openItem = openItem;
    vm.getParentContents = getParentContents;

    const gh = $github().getRepo(user.login, config.data.repo);

    init();

    function init() {
        getContents();
    }

    function openItem(item) {
        if (item.type === 'dir') getContents(item.path);
        if (item.type === 'file') getFileContents(item);
    }

    function getFileContents(item) {
        vm.currentPath = item.path;

        return gh.getContents(config.data.branch, item.path)
            .then(response => $file(response))
            .then(response => {
                // vm.list = response.data;
                // $scope.$apply();
            })
            .catch(err => { throw new Error(err); });
    }

    function getContents(path) {
        vm.currentPath = path;

        return gh.getContents(config.data.branch, path)
            .then(response => {
                vm.list = response.data;
                $scope.$apply();
            })
            .catch(err => { throw new Error(err); });
    }

    function getParentContents() {
        const path = vm.currentPath.split('/');
        path.splice(path.length - 1, 1);
        return getContents(path.join('/'));
    }
}
