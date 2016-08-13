export default function appHeader($scope, USER_UPDATE_MESSAGE, GITHUB_UPDATE_MESSAGE) {
    const vm = this;

    vm.user = {};

    $scope.$on(USER_UPDATE_MESSAGE, (event, message) => {
        if (!message.user) vm.user = {};
        else vm.user = message.user;
    });

    $scope.$on(GITHUB_UPDATE_MESSAGE, (event, message) => {
        if (!message.github) vm.github = {};
        else vm.github = message.user;
    });
}
