import Github from 'github-api';

export default function henryAuthController($scope, $log, henryAuthUserService, henryAuthGithubService) {
    const vm = this;

    vm.authorized = false;
    vm.loading = false;

    vm.login = login;
    vm.logout = logout;

    init();

    henryAuthGithubService.onUpdate($scope, data => {
        if (!data) vm.authorized = false;
        else {
            vm.authorized = true;
            vm.loading = false;
        }
    });

    // -------------------------

    function _authorized() {
        vm.authorized = true;
        vm.loading = false;
    }

    function _unauthorized() {
        vm.authorized = false;
        vm.loading = false;
        henryAuthGithubService.unset();
        henryAuthUserService.unset();
    }

    // -------------------------

    function init() {
        vm.loading = true;
        const promises = [
            henryAuthUserService.get(),
            henryAuthGithubService.get(),
        ];

        return Promise.all(promises)
            .then(response => {
                if (!response[1]) _unauthorized();
                else _authorized();
            })
            .catch(() => {
                _unauthorized();
            });
    }

    function login() {
        vm.loading = true;

        // creat github auth wrapper
        const github = new Github({
            username: vm.username,
            password: vm.password,
        });

        // store auth github wrapper
        henryAuthGithubService.set(github);

        // get logged in user and store
        github
            .getUser()
            .getProfile()
                .then(user => henryAuthUserService.set(user))
                .catch(() => _unauthorized());
    }


    function logout() {
        vm.loading = true;

        const promises = [
            henryAuthGithubService.unset(),
            henryAuthUserService.unset(),
        ];

        return Promise.all(promises)
            .then(() => _unauthorized());
    }
}
