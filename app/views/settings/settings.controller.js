export default function SettingsController(updateService, configService, config, user) {
    'ngInject';

    // const vm = this;
    // vm.update = null;
    // const github = githubService(username, password);
        // const user = github.getUser();

    activate();

    // --------------------------------

    function activate() {
        return updateService.init(config, user)
            .then(updateService.checkUpdate)
            .then(console.log);
    }

    // function handleUpdateStatus(updateStatus) {
    // }
}
