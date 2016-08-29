export default function repoViewController($scope, $log, $user, $github, $location, $file, $state, $breadcrumb, user, config, file) {
    const vm = this;
    vm.file = file[1];
    const originalFilename = angular.copy(file[1].data.name); /* global angular */
    const originalPath = angular.copy(file[1].data.path);

    vm.codemirrorConfig = {
        lineNumbers: true,
        theme: 'neo',
        lineWrapping: true,
        indentWithTabs: false,
        onLoad: (_cm) => {
            _cm.setOption('mode', file[0]);
        },
    };

    const gh = $github().getRepo(user.login, config.data.repo);

    vm.save = save;

    init();

    $breadcrumb.onUpdate($scope, () => {
        $state.go('root.repo.list');
    });

    function init() {
        if (!file[1].data.sha) return;
        gh.getBlob(file[1].data.sha)
            .then(blob => {
                vm.file.data.contents = blob.data;
                $scope.$apply();
            });
    }

    function save() {
        let path;

        if (originalFilename === vm.file.data.name) {
            path = Promise.resolve().then(() => originalPath);
        } else {
            path = moveFile();
        }

        return path
            .then(response => gh.writeFile(config.data.branch, response, vm.file.data.contents, 'testing', { encode: true }))
            .then(response => {
                console.log(response);
            });
    }

    function updatePath() {
        const path = file[1].data.path.split('/');
        path[path.length - 1] = vm.file.data.name;

        return path.join('/');
    }

    function moveFile() {
        const updatedPath = updatePath();

        return gh.move(config.data.branch, originalPath, updatedPath);
    }
}
