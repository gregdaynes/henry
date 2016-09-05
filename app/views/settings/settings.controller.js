export default function SettingsController($scope, updateService, configService, config, user) {
    'ngInject';

    const vm = this;
    vm.updateAvailable = false;

    vm.update = update;

    activate();

    // --------------------------------

    function activate() {
        return updateService.init(config, user)
            .then(updateService.checkUpdate)
            .then(response => {
                console.log(response);
                vm.updateAvailable = response;
                $scope.$apply();
            });
    }

    function update() {
        return updateService.update()
            .then(console.log);
    }
}
