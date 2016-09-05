export default function loginViewController($scope, $log, userService, githubService, $location, $state) {
    'ngInject';

    const vm = this;

    vm.authorized = false;

    vm.login = login;
    vm.logout = logout;

    function login(username, password) {
        $log.info('logging in');

        return githubService(username, password)
            .then(github => github.getUser())
            .then(user => user.getProfile())
            .then(loginSuccess, loginFailure)
            .then(() => $scope.$apply())
            .then(() => $log.info('navigating to repo'))
            .then(() => $state.go('root.repo.list'));
    }

    function logout() {
        $log.info('logging out');
        githubService('logout');
        vm.authorized = false;
    }

    function loginSuccess(userProfile) {
        $log.info('Log in success!');
        return userService.set(userProfile.data)
            .then(() => {
                vm.authorized = true;
                return true;
            });
    }

    function loginFailure(err) {
        $log.error('log in unsuccessful', err);
        githubService('logout');
        throw new Error(err);
    }
}
