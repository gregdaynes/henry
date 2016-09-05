export default function repoController($scope, $log, userService, githubService, $location, fileService, $state, breadcrumbService, user, config) {
    'ngInject';

    const vm = this;

    vm.list = null;
    vm.currentPath = '';

    let gh = null;

    vm.openItem = openItem;
    vm.newFile = newFile;

    init();

    breadcrumbService.onUpdate($scope, (data) => {
        getContents(data);
    });

    function init() {
        return Promise.all([
            githubService(),
            breadcrumbService.get(),
        ])
        .then(response => {
            gh = response[0].getRepo(user.login, config.data.repo);
            getContents(response[1]);
        });
    }

    function openItem(item) {
        breadcrumbService.set(item.path);
        // if (item.type === 'dir') getContents(item.path);
        if (item.type === 'file') getFileContents(item);
    }

    function getFileContents(item) {
        return gh.getContents(config.data.branch, item.path)
            .then(response => fileService(response))
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
        breadcrumbService.get()
            .then(response => {
                file[1].data.path = response;
                return breadcrumbService.set(`${response}/new file.txt`, false);
            })
            .then(() => {
                $state.go('root.repo.code', { file });
            });
    }
}
