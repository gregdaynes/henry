export default function repoViewController($scope, $log, $user, $github, $location, $file, $state, user, config, file) {
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

    init();

    function init() {
        gh.getBlob(file[1].data.sha)
            .then(blob => {
                vm.file = blob.data;
                $scope.$apply();
            });
    }
}
