export default function repoViewController($scope, $log, userService, githubService, $location, fileService, $state, breadcrumbService, user, config, file) {
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


    let gh = null;

    vm.save = save;

    init();

    breadcrumbService.onUpdate($scope, () => {
        $state.go('root.repo.list');
    });

    function init() {
        if (!file[1].data.sha) return null;

        return githubService()
            .then(github => {
                gh = github.getRepo(user.login, config.data.repo);
                return gh;
            })
            .then(response => response.getBlob(file[1].data.sha))
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
