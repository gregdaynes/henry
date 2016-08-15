import Github from 'github-api';

export default function loginViewController($scope, $log, $user, $github) {
    const vm = this;

    vm.authorized = false;

    vm.login = login;
    vm.logout = logout;

    function login(username, password) {
        $log.info('logging in');

        const github = new Github({
            username,
            password,
        });

        const promises = [
            $github.set(github),
            getUser(github),
        ];

        return Promise.all(promises)
            .then(() => {
                vm.authorized = true;
                $scope.$apply();
            });
    }

    function logout() {
        $log.info('logging out');

        const promises = [
            $github.unset(),
            $user.unset(),
        ];

        return Promise.all(promises)
            .then(() => {
                vm.authorized = false;
                $scope.$apply();
            });
    }

    // Internal functions
    // -------------------------
    function getUser(github) {
        return github.getUser()
            .getProfile()
            .then(user => $user.set(user))
            .catch(() => {
                $github.unset();
                $log.error('Error logging in');
            });
    }
}
