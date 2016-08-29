export default function repoViewController($scope, $log, $user, $github, $location, $file, $state, $breadcrumb, user, config, file) {
    const vm = this;
    vm.details = {
        name: file[1].data.name,
        type: file[0],
    };

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
        gh.getBlob(file[1].data.sha)
            .then(blob => {
                console.log(blob);
                vm.file = blob.data;
                $scope.$apply();
            });
    }

    function save() {
        console.log(config.data.branch, file[1].data.path, vm.file, 'testing');
        gh.writeFile(config.data.branch, file[1].data.path, vm.file, 'testing', { encode: true })
            .then(response => {
                console.log(response);
            });
    }
}
