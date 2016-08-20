export default function loginViewController($scope, $log, $user, $github, $location) {
    const vm = this;

    vm.authorized = false;

    vm.login = login;
    vm.logout = logout;

    function login(username, password) {
        $log.info('logging in');

        const github = $github(username, password);
        const user = github.getUser();

        user.getProfile()
            .then(loginSuccess, loginFailure)
            .then(() => $scope.$apply())
            .then(() => $location.path('/list-repo'));
    }

    function logout() {
        $log.info('logging out');
        $github('logout');
        vm.authorized = false;
    }

    function loginSuccess(userProfile) {
        return $user.set(userProfile.data)
            .then(response => { 
                vm.authorized = true;
                return true;
            });
    }

    function loginFailure(err) {
        $log.error(err);
        $github('logout');
        throw new Error(err);
    }

}
