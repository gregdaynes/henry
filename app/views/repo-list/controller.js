export default function repoController($scope, $log, $user, $github, $location, $file, $state, $breadcrumb, user, config) {
    'ngInject';

    const vm = this;

    vm.list = null;
    vm.currentPath = '';

    const gh = $github().getRepo(user.login, config.data.repo);

    vm.openItem = openItem;
    vm.newFile = newFile;

    init();

    $breadcrumb.onUpdate($scope, (data) => {
        getContents(data);
    });

    function init() {
        $breadcrumb.get()
            .then(response => getContents(response));
    }

    function openItem(item) {
        $breadcrumb.set(item.path);
        // if (item.type === 'dir') getContents(item.path);
        if (item.type === 'file') getFileContents(item);
    }

    function getFileContents(item) {
        return gh.getContents(config.data.branch, item.path)
            .then(response => $file(response))
            .then(response => {
                $state.go('root.repo.code', { file: response });
                // vm.list = response.data;
                // $scope.$apply();
            })
            .catch(err => { throw new Error(err); });
    }

    function getContents(path) {
        return gh.getContents(config.data.branch, path)
            .then(response => {
                vm.list = response.data;
                $scope.$apply();
            })
            .catch(err => { throw new Error(err); });
    }

    function newFile() {
        const file = ['text', { data: { name: 'new file.txt' } }];
        $breadcrumb.get()
            .then(response => {
                file[1].data.path = response;
                return $breadcrumb.set(`${response}/new file.txt`, false);
            })
            .then(() => {
                $state.go('root.repo.code', { file });
            });
    }
}
