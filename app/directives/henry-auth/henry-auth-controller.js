import Github from 'github-api';

export default function henryAuthController($scope, $log, henryAuthUserService, henryAuthGithubService) {
    const vm = this;

    // vm.authorized = false;
    // vm.loading = false;

    vm.login = login;
    vm.logout = logout;

    init();

    henryAuthUserService.onUpdate($scope, data => {
        vm.loading = false;
        if (!data) {
            vm.authorized = false;
        } else {
            vm.authorized = data;
            $scope.$apply();
        }
    });

    henryAuthGithubService.onUpdate($scope, data => {
        data.getUser().listRepos()
            .then(response => { console.log(response); });
    });

    // -------------------------

    function init() {
        vm.loading = true;
        return henryAuthUserService.get()
            .then(response => {
                if (!response) vm.authorized = false;
                else vm.authorized = response;
                vm.loading = false;
            });
    }

    function login() {
        vm.loading = true;

        // creat github auth wrapper
        const gh = new Github({
            username: vm.username,
            password: vm.password,
        });

        // store auth github wrapper
        henryAuthGithubService.set(gh);

        // get logged in user and store
        gh.getUser()
        .getProfile()
            .then(user => henryAuthUserService.set(user))
            .catch(() => {
                // user is not authorized, unset github auth wrapper
                vm.loading = false;
                henryAuthGithubService.unset();
                $log.error('Error logging in');
            });
    }


    function logout() {
        vm.loading = true;

        const promises = [
            henryAuthGithubService.unset(),
            henryAuthUserService.unset(),
        ];

        return Promise.all(promises);
    }
}
