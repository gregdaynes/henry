export default function loginViewController($scope, $log, $user, $github, $location, $state) {
    'ngInject';

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
            .then(() => $log.info('navigating to repo'))
            .then(() => $state.go('root.repo.list'));
    }

    function logout() {
        $log.info('logging out');
        $github('logout');
        vm.authorized = false;
    }

    function loginSuccess(userProfile) {
        $log.info('Log in success!');
        return $user.set(userProfile.data)
            .then(() => {
                vm.authorized = true;
                return true;
            });
    }

    function loginFailure(err) {
        $log.error('log in unsuccessful', err);
        $github('logout');
        throw new Error(err);
    }
}
