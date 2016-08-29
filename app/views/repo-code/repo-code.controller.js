export default function repoViewController($scope, $log, $user, $github, $location, $file, $state, $breadcrumb, user, config, file) {
    'ngInject';

    const vm = this;
    vm.file = file[1];

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
        const newFile = preparePath();

        gh.writeFile(config.data.branch, newFile, vm.file.data.contents, '', { encode: true });
    }

    function preparePath() {
        const existingPath = file[1].data.path.split('/');
        if (existingPath[existingPath.length - 1] === vm.file.data.name) return file[1].data.path;

        return `${file[1].data.path}/${vm.file.data.name}`;
    }
}
