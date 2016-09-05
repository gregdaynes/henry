export default function UpdateNotificationController($scope, updateService, configService, userService) {
    'ngInject';

    const vm = this;

    vm.updateAvailable = false;

    vm.update = update;

    activate();

    // --------------------------------

    function activate() {
        return Promise.all([
            configService.get(),
            userService.get(),
        ])
        .then(response => updateService.init(response[0], response[1]))
        .then(updateService.checkUpdate)
        .then(response => {
            vm.updateAvailable = response;
            $scope.$apply();
        });
    }

    function update() {
        return updateService.update()
            .then(console.log);
    }
}
