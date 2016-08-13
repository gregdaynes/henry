export default function appHeader($scope) {
    const vm = this;

    vm.user = {};

    $scope.$on('userUpdateMessage', (event, message) => {
        if (!message.user) vm.user = {};
        else vm.user = message.user;
    });
}
