export default function repoViewController($scope, $log, $user, $github, $location, $file, $state, user, config, file) {
    const vm = this;
    vm.file = file;

    const gh = $github().getRepo(user.login, config.data.repo);

    init()

    function init() {
        gh.getBlob(file[1].data.sha)
            .then(data => {
                console.log(data); 
            })
    }
}
