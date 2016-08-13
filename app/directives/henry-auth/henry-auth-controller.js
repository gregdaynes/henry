import Github from 'github-api';

export default function henryAuthController($scope, $log, henryAuthService) {
    const vm = this;

    vm.authorized = false;
    vm.loading = false;

    vm.login = login;
    vm.logout = logout;

    init();

    henryAuthService.onUpdate($scope, data => {
        vm.loading = false;
        if (!data) {
            vm.authorized = false;
        } else {
            vm.authorized = data;
            $scope.$apply();
        }
    });

    // -------------------------

    function init() {
        vm.loading = true;
        return henryAuthService.get()
            .then(response => {
                if (!response) vm.authorized = false;
                else vm.authorized = response;
                vm.loading = false;
            });
    }

    function login() {
        vm.loading = true;

        return new Github({
            username: vm.username,
            password: vm.password,
        })
        .getUser()
        .getProfile()
            .then(user => henryAuthService.set(user))
            .catch(() => {
                vm.loading = false;
                $log.error('Error logging in');
            });
    }


    function logout() {
        vm.loading = true;
        return henryAuthService.unset();
    }
}
