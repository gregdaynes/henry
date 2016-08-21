export default function repoController($scope, $log, $user, $github, $location, user, config) {
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
        getContents(item.path);
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
